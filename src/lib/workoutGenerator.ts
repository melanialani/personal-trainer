import { EXERCISES, exerciseById, isExerciseAvailable, type Exercise, type MuscleGroup } from '../data/exercises';
import type {
  ActivityLevel,
  Equipment,
  FitnessLevel,
  GoalType,
  PlannedExercise,
  Profile,
  WeightEntry,
  WorkoutLogEntry,
  WorkoutPlan,
  WorkoutPlanDay,
  WorkoutPreferences,
} from '../types';
import { calcBmi, currentWeightKg, kcalFromMet } from './calc';
import { ageFromBirthDate } from './date';
import { average } from './math';
import { assessProgress, startStageIndex, type TrainingProgress, type TrainingStage } from './trainingProgress';

export const FITNESS_LEVEL_OPTIONS: { value: FitnessLevel; label: string }[] = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

type SessionKind = 'full_body' | 'upper' | 'lower' | 'push' | 'pull' | 'legs' | 'cardio_core';

const SESSION_TITLES: Record<SessionKind, string> = {
  full_body: 'Full body',
  upper: 'Upper body',
  lower: 'Lower body',
  push: 'Push (chest, shoulders, triceps)',
  pull: 'Pull (back, biceps)',
  legs: 'Legs & glutes',
  cardio_core: 'Cardio & core',
};

/** Muscle slots in priority order; the session takes as many as time allows. */
const SESSION_SLOTS: Record<SessionKind, MuscleGroup[]> = {
  full_body: ['legs', 'chest', 'back', 'glutes', 'shoulders', 'core', 'arms'],
  upper: ['chest', 'back', 'shoulders', 'back', 'arms', 'chest', 'core'],
  lower: ['legs', 'glutes', 'legs', 'legs', 'core', 'glutes', 'core'],
  push: ['chest', 'shoulders', 'chest', 'arms', 'shoulders', 'core', 'chest'],
  pull: ['back', 'back', 'arms', 'back', 'core', 'shoulders', 'core'],
  legs: ['legs', 'glutes', 'legs', 'legs', 'glutes', 'core', 'core'],
  cardio_core: ['cardio', 'core', 'full_body', 'core', 'cardio', 'core', 'cardio'],
};

const SPLITS: Record<number, SessionKind[]> = {
  1: ['full_body'],
  2: ['full_body', 'full_body'],
  3: ['full_body', 'full_body', 'full_body'],
  4: ['upper', 'lower', 'upper', 'lower'],
  5: ['push', 'pull', 'legs', 'cardio_core', 'full_body'],
  6: ['push', 'pull', 'legs', 'push', 'pull', 'legs'],
};

/** Weekdays (0 = Monday) to train for each frequency, spreading rest days out. */
const TRAINING_DAYS: Record<number, number[]> = {
  1: [2],
  2: [0, 3],
  3: [0, 2, 4],
  4: [0, 1, 3, 4],
  5: [0, 1, 2, 4, 5],
  6: [0, 1, 2, 3, 4, 5],
};

const LEVEL_RANK: Record<FitnessLevel, number> = { beginner: 0, intermediate: 1, advanced: 2 };

const exerciseCount = (minutes: number): number => {
  if (minutes <= 20) return 3;
  if (minutes <= 30) return 4;
  if (minutes <= 45) return 5;
  if (minutes <= 60) return 6;
  return 7;
};

interface Prescription {
  sets: number;
  reps: string;
  timed: string;
  restSec: number;
}

const goalReps = (goal: GoalType): string => (goal === 'gain' ? '8–10' : goal === 'lose' ? '12–15' : '10–12');
const goalRest = (goal: GoalType): number => (goal === 'gain' ? 90 : goal === 'lose' ? 45 : 60);

const prescription = (goal: GoalType, stage: TrainingStage): Prescription => {
  switch (stage.id) {
    // Fewer, easier reps and longer rests while the body adapts.
    case 'beginner-foundation':
      return { sets: 2, reps: '8–10', timed: '20s', restSec: 75 };
    case 'beginner-building':
      return { sets: 2, reps: goal === 'gain' ? '8–10' : '10–12', timed: '30s', restSec: goal === 'lose' ? 45 : 60 };
    case 'beginner-consolidating':
      return { sets: 3, reps: goalReps(goal), timed: '40s', restSec: goalRest(goal) };
    case 'intermediate-base':
      return { sets: goal === 'gain' ? 4 : 3, reps: goalReps(goal), timed: '45s', restSec: goalRest(goal) };
    case 'intermediate-progressing':
      return { sets: goal === 'gain' ? 4 : 3, reps: goalReps(goal), timed: '50s', restSec: goalRest(goal) };
    default:
      return { sets: goal === 'gain' ? 5 : 4, reps: goalReps(goal), timed: '60s', restSec: goalRest(goal) };
  }
};

/** Everything the planner needs besides the goal. */
export interface PlanSettings {
  preferences: WorkoutPreferences;
  stage: TrainingStage;
  /** No jumping moves. */
  isLowImpact: boolean;
}

const pickExercise = (muscle: MuscleGroup, settings: PlanSettings, exclude: Set<string>, variant: number): Exercise | undefined => {
  const { preferences, isLowImpact } = settings;
  const isCardioSlot = muscle === 'cardio' || muscle === 'full_body';
  const levelRank = LEVEL_RANK[preferences.level];
  const isEarlyBeginner = settings.stage.level === 'beginner' && settings.stage.index < 2;
  const candidates = EXERCISES.filter(
    (exercise) =>
      exercise.muscle === muscle &&
      exercise.type !== 'mobility' &&
      (isCardioSlot || exercise.type !== 'cardio') &&
      isExerciseAvailable(exercise, preferences) &&
      LEVEL_RANK[exercise.minLevel ?? 'beginner'] <= levelRank &&
      !(isLowImpact && exercise.isHighImpact) &&
      !(isEarlyBeginner && exercise.needsBaseFitness) &&
      !exclude.has(exercise.id),
  ).sort(
    (a, b) =>
      b.equipment.length - a.equipment.length ||
      // Beginners keep the list order (easier variations first); others get the harder variations first.
      (levelRank > 0 ? LEVEL_RANK[b.minLevel ?? 'beginner'] - LEVEL_RANK[a.minLevel ?? 'beginner'] : 0),
  );
  if (candidates.length === 0) return undefined;
  // Prefer moves that use the user's equipment, but rotate between sessions for variety.
  const topCount = Math.min(candidates.length, 3);
  return candidates[variant % topCount];
};

const finisherFor = (settings: PlanSettings): PlannedExercise => {
  const { preferences, stage } = settings;
  const has = (item: Equipment) => preferences.equipment.includes(item);
  const exerciseId = has('cardio_machine') ? 'treadmill-incline' : has('jump_rope') && preferences.level !== 'beginner' && !settings.isLowImpact ? 'jump-rope' : 'brisk-walk';
  const minutes = stage.id === 'beginner-foundation' ? 5 : preferences.level === 'beginner' || preferences.minutesPerSession < 45 ? 10 : 15;
  return { exerciseId, sets: 1, reps: `${minutes} min`, restSec: 0 };
};

const buildSession = (kind: SessionKind, settings: PlanSettings, goal: GoalType, variant: number): PlannedExercise[] => {
  const { preferences } = settings;
  const isBeginner = preferences.level === 'beginner';
  const rx = prescription(goal, settings.stage);
  // Beginner sets are short, so after Foundation one more exercise fits in the same time.
  const count = exerciseCount(preferences.minutesPerSession) + (isBeginner && settings.stage.index > 0 ? 1 : 0);
  const used = new Set<string>();
  // Beginners warm up and cool down standing (no mat needed, easy on stiff hips).
  const exercises: PlannedExercise[] = [
    isBeginner ? { exerciseId: 'standing-warm-up', sets: 1, reps: '3 min', restSec: 0 } : { exerciseId: 'worlds-greatest', sets: 1, reps: '5 / side', restSec: 0 },
  ];
  for (const muscle of SESSION_SLOTS[kind].slice(0, count)) {
    const exercise = pickExercise(muscle, settings, used, variant + used.size);
    if (!exercise) continue;
    used.add(exercise.id);
    exercises.push({
      exerciseId: exercise.id,
      sets: exercise.type === 'cardio' && kind === 'cardio_core' ? rx.sets + 1 : rx.sets,
      reps: exercise.isTimed ? rx.timed : rx.reps,
      restSec: exercise.type === 'cardio' ? Math.min(rx.restSec, 45) : rx.restSec,
    });
  }
  if (goal === 'lose' && kind !== 'cardio_core') exercises.push(finisherFor(settings));
  if (isBeginner) exercises.push({ exerciseId: 'standing-cool-down', sets: 1, reps: '3 min', restSec: 0 });
  return exercises;
};

export interface ScheduleRecommendation {
  daysPerWeek: number;
  minutesPerSession: number;
  weeklyMinutes: number;
  reasons: string[];
}

const STAGE_SCHEDULE: Record<string, { days: number; minutes: number }> = {
  'beginner-foundation': { days: 3, minutes: 20 },
  'beginner-building': { days: 3, minutes: 30 },
  'beginner-consolidating': { days: 3, minutes: 40 },
  'intermediate-base': { days: 4, minutes: 45 },
  'intermediate-progressing': { days: 4, minutes: 50 },
  'advanced-performance': { days: 5, minutes: 60 },
};

interface ScheduleInput {
  goal: GoalType;
  stage: TrainingStage;
  activityLevel: ActivityLevel;
  age: number;
  bmi: number;
}

/** Training days and session length suggested from the profile and progression stage (WHO: 150–300 active min/week). */
export const recommendSchedule = ({ goal, stage, activityLevel, age, bmi }: ScheduleInput): ScheduleRecommendation => {
  const reasons: string[] = [];
  const level = stage.level;
  let { days, minutes } = STAGE_SCHEDULE[stage.id] ?? STAGE_SCHEDULE['beginner-building'];
  reasons.push(`${FITNESS_LEVEL_OPTIONS[LEVEL_RANK[level]].label} · ${stage.label}: ${stage.description}`);

  if (goal === 'lose') {
    if (stage.id === 'beginner-foundation') {
      reasons.push('Weight loss: daily walking matters more than longer workouts right now — the plan ends with a short walk.');
    } else if (level === 'beginner') {
      minutes += 10;
      reasons.push('Weight loss: a 10-minute walk after each session to burn more calories.');
    } else {
      days += 1;
      minutes += 15;
      reasons.push('Weight loss: an extra day and a cardio finisher to burn more calories.');
    }
  }
  if (goal === 'gain' && level === 'advanced') {
    minutes += 15;
    reasons.push('Muscle gain: longer sessions for more sets and rest between heavy sets.');
  }
  if (activityLevel === 'sedentary') {
    if (level === 'beginner') reasons.push('Sedentary day job: rest days between sessions and no jumping until your joints adapt.');
    if (days > 4) {
      days = 4;
      reasons.push('Sedentary day job: max 4 days so your body can adapt.');
    }
  }
  if (age >= 60 || bmi >= 35) {
    days = Math.min(days, 3);
    minutes = Math.min(minutes, level === 'beginner' ? 30 : 45);
    reasons.push(age >= 60 ? 'Age 60+: fewer, shorter, low-impact sessions to protect joints and allow recovery.' : 'Higher body weight: shorter, low-impact sessions first.');
  }

  days = Math.min(5, days);
  minutes = Math.min(75, minutes);
  if (days * minutes < 150) reasons.push(`Add ${level === 'beginner' ? '10–30' : '20–30'} min easy walks on rest days to reach 150 active minutes per week.`);
  return { daysPerWeek: days, minutesPerSession: minutes, weeklyMinutes: days * minutes, reasons };
};

export interface TrainingInput {
  goal: GoalType;
  level: FitnessLevel;
  levelSince: string;
  activityLevel: ActivityLevel;
  age: number;
  bmi: number;
  workoutLog: WorkoutLogEntry[];
}

export interface TrainingAssessment {
  progress: TrainingProgress;
  isLowImpact: boolean;
  schedule: ScheduleRecommendation;
}

/** Progression stage, impact level and recommended schedule from the profile and workout history. */
export const assessTraining = ({ goal, level, levelSince, activityLevel, age, bmi, workoutLog }: TrainingInput): TrainingAssessment => {
  const isDeconditioned = activityLevel === 'sedentary' || bmi >= 30 || age >= 60;
  const progress = assessProgress({ level, levelSince, startIndex: startStageIndex(level, isDeconditioned), workoutLog });
  // Jumping is hard on joints for heavier, older or brand-new exercisers; it unlocks at the Consolidating stage.
  const isLowImpact = bmi >= 35 || age >= 60 || (level === 'beginner' && isDeconditioned && progress.stage.index < 2);
  const schedule = recommendSchedule({ goal, stage: progress.stage, activityLevel, age, bmi });
  return { progress, isLowImpact, schedule };
};

export interface ProfileTraining extends TrainingAssessment, PlanSettings {}

/** Assessment for a saved profile, with days/minutes filled from the recommendation unless the user customized them. */
export const assessTrainingForProfile = (profile: Profile, weights: WeightEntry[], workoutLog: WorkoutLogEntry[]): ProfileTraining => {
  const assessment = assessTraining({
    goal: profile.goal,
    level: profile.workout.level,
    levelSince: profile.workout.levelSince,
    activityLevel: profile.activityLevel,
    age: ageFromBirthDate(profile.birthDate),
    bmi: calcBmi(currentWeightKg(profile, weights), profile.heightCm),
    workoutLog,
  });
  const { schedule } = assessment;
  const preferences = profile.workout.isCustomSchedule
    ? profile.workout
    : { ...profile.workout, daysPerWeek: schedule.daysPerWeek, minutesPerSession: schedule.minutesPerSession };
  return { ...assessment, preferences, stage: assessment.progress.stage };
};

export const generateWorkoutPlan = (settings: PlanSettings, goal: GoalType): WorkoutPlan => {
  const daysPerWeek = Math.min(6, Math.max(1, settings.preferences.daysPerWeek));
  const split = SPLITS[daysPerWeek];
  const trainingDays = TRAINING_DAYS[daysPerWeek];
  const days: WorkoutPlanDay[] = Array.from({ length: 7 }, (_, weekday) => {
    const sessionIndex = trainingDays.indexOf(weekday);
    if (sessionIndex === -1) {
      return { weekday, title: 'Rest / active recovery', isRest: true, exercises: [] };
    }
    const kind = split[sessionIndex];
    return { weekday, title: SESSION_TITLES[kind], isRest: false, exercises: buildSession(kind, settings, goal, sessionIndex) };
  });
  return {
    createdAt: new Date().toISOString(),
    preferences: settings.preferences,
    goal,
    days,
    stageId: settings.stage.id,
    isLowImpact: settings.isLowImpact,
  };
};

/** Why a saved plan no longer matches the profile: the user moved to a new stage, or settings changed. */
export const planOutdatedReason = (plan: WorkoutPlan, goal: GoalType, settings: PlanSettings): 'stage' | 'settings' | null => {
  if (plan.goal !== goal || JSON.stringify(plan.preferences) !== JSON.stringify(settings.preferences) || plan.isLowImpact !== settings.isLowImpact) {
    return 'settings';
  }
  // Plans made before stages existed have no stage id; don't nag about those.
  if (plan.stageId && plan.stageId !== settings.stage.id) return 'stage';
  return null;
};

/** Tip shown on rest days. */
export const restDayTip = (level: FitnessLevel): string =>
  level === 'beginner'
    ? 'Rest day. A 10–20 minute easy walk (outside or around the house) helps recovery and builds the habit.'
    : 'Rest day. A 20–30 minute walk or light stretching helps recovery.';

/** Parses "12–15", "45s", "10 min" or "5 / side" into an approximate work duration in seconds per set. */
const workSecondsPerSet = (reps: string): number => {
  const minutes = reps.match(/(\d+)\s*min/);
  if (minutes) return Number(minutes[1]) * 60;
  const seconds = reps.match(/(\d+)\s*s\b/);
  if (seconds) return Number(seconds[1]);
  const numbers = reps.match(/\d+/g)?.map(Number) ?? [10];
  return average(numbers) * 3;
};

export const estimateSession = (exercises: PlannedExercise[], weightKg: number): { minutes: number; kcal: number } => {
  let totalSeconds = 0;
  let kcal = 0;
  exercises.forEach((item) => {
    const exercise = exerciseById(item.exerciseId);
    const work = workSecondsPerSet(item.reps) * item.sets;
    const rest = item.restSec * Math.max(0, item.sets - 1);
    totalSeconds += work + rest + 60; // + setup / transition
    // Rest periods burn roughly at 1.5 MET.
    kcal += kcalFromMet(exercise?.met ?? 4, weightKg, work / 60) + kcalFromMet(1.5, weightKg, rest / 60);
  });
  return { minutes: Math.round(totalSeconds / 60), kcal: Math.round(kcal) };
};

/** Scales a planned session's calorie estimate to the minutes actually trained. */
export const scaleSessionKcal = (estimate: { minutes: number; kcal: number }, actualMinutes: number): number =>
  Math.round((estimate.kcal * actualMinutes) / Math.max(1, estimate.minutes));
