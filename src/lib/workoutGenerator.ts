import { EXERCISES, exerciseById, isEquipmentAvailable, type Exercise, type MuscleGroup } from '../data/exercises';
import type { ActivityLevel, Equipment, FitnessLevel, GoalType, PlannedExercise, Profile, WeightEntry, WorkoutPlan, WorkoutPlanDay, WorkoutPreferences } from '../types';
import { calcBmi, currentWeightKg, kcalFromMet } from './calc';
import { ageFromBirthDate } from './date';
import { average } from './math';

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

/** Harder bodyweight/barbell moves that beginners skip until they progress. */
const NOT_FOR_BEGINNERS = new Set(['decline-push-up', 'pike-push-up', 'pull-up', 'hanging-leg-raise', 'burpee', 'deadlift', 'back-squat', 'bench-press', 'jump-rope']);

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

const prescription = (goal: GoalType, level: FitnessLevel): Prescription => {
  const timed = level === 'beginner' ? '30s' : level === 'intermediate' ? '45s' : '60s';
  const extraSet = level === 'advanced' ? 1 : 0;
  const baseSets = level === 'beginner' ? 2 : 3;
  if (goal === 'gain') return { sets: baseSets + 1 + extraSet, reps: '8–10', timed, restSec: 90 };
  if (goal === 'lose') return { sets: baseSets + extraSet, reps: '12–15', timed, restSec: 45 };
  return { sets: baseSets + extraSet, reps: '10–12', timed, restSec: 60 };
};

const pickExercise = (muscle: MuscleGroup, preferences: WorkoutPreferences, exclude: Set<string>, variant: number): Exercise | undefined => {
  const isCardioSlot = muscle === 'cardio' || muscle === 'full_body';
  const candidates = EXERCISES.filter(
    (exercise) =>
      exercise.muscle === muscle &&
      exercise.type !== 'mobility' &&
      (isCardioSlot || exercise.type !== 'cardio') &&
      isEquipmentAvailable(exercise.equipment, preferences.equipment) &&
      !(preferences.level === 'beginner' && NOT_FOR_BEGINNERS.has(exercise.id)) &&
      !exclude.has(exercise.id),
  ).sort((a, b) => b.equipment.length - a.equipment.length);
  if (candidates.length === 0) return undefined;
  // Prefer moves that use the user's equipment, but rotate between sessions for variety.
  const topCount = Math.min(candidates.length, 3);
  return candidates[variant % topCount];
};

const buildSession = (kind: SessionKind, preferences: WorkoutPreferences, goal: GoalType, variant: number): PlannedExercise[] => {
  const rx = prescription(goal, preferences.level);
  const count = exerciseCount(preferences.minutesPerSession);
  const used = new Set<string>();
  const exercises: PlannedExercise[] = [
    { exerciseId: 'worlds-greatest', sets: 1, reps: '5 / side', restSec: 0 },
  ];
  for (const muscle of SESSION_SLOTS[kind].slice(0, count)) {
    const exercise = pickExercise(muscle, preferences, used, variant + used.size);
    if (!exercise) continue;
    used.add(exercise.id);
    exercises.push({
      exerciseId: exercise.id,
      sets: exercise.type === 'cardio' && kind === 'cardio_core' ? rx.sets + 1 : rx.sets,
      reps: exercise.isTimed ? rx.timed : rx.reps,
      restSec: exercise.type === 'cardio' ? 30 : rx.restSec,
    });
  }
  if (goal === 'lose' && kind !== 'cardio_core') {
    const has = (item: Equipment) => preferences.equipment.includes(item);
    const finisherId = has('cardio_machine') ? 'treadmill-incline' : has('jump_rope') && preferences.level !== 'beginner' ? 'jump-rope' : 'brisk-walk';
    exercises.push({ exerciseId: finisherId, sets: 1, reps: preferences.minutesPerSession >= 45 ? '15 min' : '10 min', restSec: 0 });
  }
  return exercises;
};

export interface ScheduleRecommendation {
  daysPerWeek: number;
  minutesPerSession: number;
  weeklyMinutes: number;
  reasons: string[];
}

interface RecommendationInput {
  goal: GoalType;
  level: FitnessLevel;
  activityLevel: ActivityLevel;
  age: number;
  bmi: number;
}

/** Training days and session length suggested from the profile (WHO: 150–300 active min/week). */
export const recommendSchedule = ({ goal, level, activityLevel, age, bmi }: RecommendationInput): ScheduleRecommendation => {
  const reasons: string[] = [];
  let days = { beginner: 3, intermediate: 4, advanced: 5 }[level];
  let minutes = { beginner: 30, intermediate: 45, advanced: 60 }[level];
  reasons.push(`${level[0].toUpperCase()}${level.slice(1)}: ${days} days × ${minutes} min is a sustainable starting point.`);

  if (goal === 'lose') {
    if (level !== 'beginner') days += 1;
    minutes += 15;
    reasons.push('Weight loss: extra cardio finisher to burn more calories.');
  }
  if (goal === 'gain' && level === 'advanced') {
    minutes += 15;
    reasons.push('Muscle gain: longer sessions for more sets and rest between heavy sets.');
  }
  if (activityLevel === 'sedentary' && days > 4) {
    days = 4;
    reasons.push('Sedentary day job: max 4 days so your body can adapt.');
  }
  if (age >= 60 || bmi >= 35) {
    days = Math.min(days, 3);
    minutes = Math.min(minutes, level === 'beginner' ? 30 : 45);
    reasons.push(age >= 60 ? 'Age 60+: fewer, shorter sessions to protect joints and allow recovery.' : 'Higher body weight: shorter, joint-friendly sessions first.');
  }

  days = Math.min(5, days);
  minutes = Math.min(75, minutes);
  if (days * minutes < 150) reasons.push('Add 20–30 min brisk walks on rest days to reach 150 active minutes per week.');
  return { daysPerWeek: days, minutesPerSession: minutes, weeklyMinutes: days * minutes, reasons };
};

export const recommendScheduleForProfile = (profile: Profile, weights: WeightEntry[]): ScheduleRecommendation =>
  recommendSchedule({
    goal: profile.goal,
    level: profile.workout.level,
    activityLevel: profile.activityLevel,
    age: ageFromBirthDate(profile.birthDate),
    bmi: calcBmi(currentWeightKg(profile, weights), profile.heightCm),
  });

/** Workout preferences with days/minutes filled from the recommendation unless the user customized them. */
export const resolveWorkoutPreferences = (profile: Profile, weights: WeightEntry[]): WorkoutPreferences => {
  if (profile.workout.isCustomSchedule) return profile.workout;
  const recommendation = recommendScheduleForProfile(profile, weights);
  return { ...profile.workout, daysPerWeek: recommendation.daysPerWeek, minutesPerSession: recommendation.minutesPerSession };
};

export const generateWorkoutPlan = (preferences: WorkoutPreferences, goal: GoalType): WorkoutPlan => {
  const daysPerWeek = Math.min(6, Math.max(1, preferences.daysPerWeek));
  const split = SPLITS[daysPerWeek];
  const trainingDays = TRAINING_DAYS[daysPerWeek];
  const days: WorkoutPlanDay[] = Array.from({ length: 7 }, (_, weekday) => {
    const sessionIndex = trainingDays.indexOf(weekday);
    if (sessionIndex === -1) {
      return { weekday, title: 'Rest / active recovery', isRest: true, exercises: [] };
    }
    const kind = split[sessionIndex];
    return { weekday, title: SESSION_TITLES[kind], isRest: false, exercises: buildSession(kind, preferences, goal, sessionIndex) };
  });
  return { createdAt: new Date().toISOString(), preferences, goal, days };
};

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
