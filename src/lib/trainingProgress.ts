import type { FitnessLevel, WorkoutLogEntry } from '../types';
import { addDays, sortByDateDesc, startOfWeek, todayKey } from './date';

interface StageDefinition {
  key: string;
  label: string;
  description: string;
  /** Consistent weeks needed to move on (to the next stage, or to suggest the next level on the last stage). */
  weeksToAdvance: number;
}

/**
 * Stages inside each fitness level. The planner moves people up one stage at a time based on their workout log,
 * so a sedentary beginner starts gently and the plan gets harder only after they keep showing up.
 */
const STAGES: Record<FitnessLevel, StageDefinition[]> = {
  beginner: [
    { key: 'foundation', label: 'Foundation', description: 'Short, low-impact sessions so your joints, muscles and habit can adapt.', weeksToAdvance: 3 },
    { key: 'building', label: 'Building', description: 'Slightly longer sessions with a few more reps per set.', weeksToAdvance: 3 },
    { key: 'consolidating', label: 'Consolidating', description: 'Three sets per exercise — the last step before intermediate.', weeksToAdvance: 4 },
  ],
  intermediate: [
    { key: 'base', label: 'Base', description: 'Split routines with more sets and harder variations.', weeksToAdvance: 6 },
    { key: 'progressing', label: 'Progressing', description: 'Longer holds and more volume per session.', weeksToAdvance: 8 },
  ],
  advanced: [{ key: 'performance', label: 'Performance', description: 'Full training volume. Keep adding weight or reps over time.', weeksToAdvance: 0 }],
};

/** Workouts in a week for it to count as a consistent week. */
const MIN_SESSIONS_PER_WEEK: Record<FitnessLevel, number> = { beginner: 2, intermediate: 3, advanced: 3 };

/** Weeks in a row without any workout that drop the plan back one stage. */
const BREAK_WEEKS = 2;

export const NEXT_LEVEL: Partial<Record<FitnessLevel, FitnessLevel>> = { beginner: 'intermediate', intermediate: 'advanced' };
export const PREVIOUS_LEVEL: Partial<Record<FitnessLevel, FitnessLevel>> = { intermediate: 'beginner', advanced: 'intermediate' };

export interface TrainingStage {
  /** Stable id stored on generated plans, e.g. "beginner-foundation". */
  id: string;
  level: FitnessLevel;
  index: number;
  label: string;
  description: string;
}

export interface TrainingProgress {
  stage: TrainingStage;
  stageCount: number;
  /** Consistent weeks completed in the current stage. */
  weeksDone: number;
  /** Consistent weeks needed to move on; 0 when there is nothing further. */
  weeksNeeded: number;
  minSessionsPerWeek: number;
  sessionsThisWeek: number;
  /** Last stage of the level is done: suggest moving up a level. */
  isReadyForNextLevel: boolean;
  /** The last three sessions were all rated too hard. */
  isStruggling: boolean;
}

const toStage = (level: FitnessLevel, index: number): TrainingStage => {
  const { key, label, description } = STAGES[level][index];
  return { id: `${level}-${key}`, level, index, label, description };
};

/** Beginners who are deconditioned start at Foundation; everyone else at the first stage that fits. */
export const startStageIndex = (level: FitnessLevel, isDeconditioned: boolean): number =>
  level === 'beginner' && !isDeconditioned ? 1 : 0;

interface ProgressInput {
  level: FitnessLevel;
  /** Only workouts on or after this date count ('' = all). */
  levelSince: string;
  startIndex: number;
  workoutLog: WorkoutLogEntry[];
  today?: string;
}

/** Walks through the workout log week by week (Monday start) and works out the current stage. */
export const assessProgress = ({ level, levelSince, startIndex, workoutLog, today = todayKey() }: ProgressInput): TrainingProgress => {
  const stages = STAGES[level];
  const minSessions = MIN_SESSIONS_PER_WEEK[level];
  const logs = workoutLog.filter((workout) => workout.date <= today && (!levelSince || workout.date >= levelSince));
  const byWeek = new Map<string, WorkoutLogEntry[]>();
  logs.forEach((workout) => {
    const week = startOfWeek(workout.date);
    byWeek.set(week, [...(byWeek.get(week) ?? []), workout]);
  });

  const currentWeek = startOfWeek(today);
  const firstWeek = Array.from(byWeek.keys()).sort()[0];
  let index = Math.min(startIndex, stages.length - 1);
  let weeksDone = 0;
  let emptyWeeks = 0;

  for (let week = firstWeek; week && week <= currentWeek; week = addDays(week, 7)) {
    const sessions = byWeek.get(week) ?? [];
    if (sessions.length === 0) {
      // The current week is still open, so it never counts against you.
      if (week === currentWeek) break;
      emptyWeeks += 1;
      if (emptyWeeks === BREAK_WEEKS) {
        index = Math.max(0, index - 1);
        weeksDone = 0;
      }
      continue;
    }
    emptyWeeks = 0;
    const hardCount = sessions.filter((session) => session.effort === 'hard').length;
    // A week where half or more of the sessions felt too hard holds you at the current stage.
    if (sessions.length < minSessions || hardCount * 2 >= sessions.length) continue;
    weeksDone += 1;
    if (index < stages.length - 1 && weeksDone >= stages[index].weeksToAdvance) {
      index += 1;
      weeksDone = 0;
    }
  }

  const isLastStage = index === stages.length - 1;
  const weeksNeeded = isLastStage && !NEXT_LEVEL[level] ? 0 : stages[index].weeksToAdvance;
  const recent = sortByDateDesc(logs).slice(0, 3);
  return {
    stage: toStage(level, index),
    stageCount: stages.length,
    weeksDone: weeksNeeded ? Math.min(weeksDone, weeksNeeded) : weeksDone,
    weeksNeeded,
    minSessionsPerWeek: minSessions,
    sessionsThisWeek: byWeek.get(currentWeek)?.length ?? 0,
    isReadyForNextLevel: isLastStage && weeksNeeded > 0 && weeksDone >= weeksNeeded,
    isStruggling: recent.length === 3 && recent.every((workout) => workout.effort === 'hard'),
  };
};

/** Position of a stored stage id within its level; -1 when unknown. */
export const stageIndexFromId = (id: string): number => {
  const [level, key] = id.split('-');
  return STAGES[level as FitnessLevel]?.findIndex((stage) => stage.key === key) ?? -1;
};
