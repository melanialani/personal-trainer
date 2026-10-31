import { ALL_EQUIPMENT } from '../data/exercises';
import { BIBLE_VERSIONS } from '../data/bibleBooks';
import type { AppData, BibleState, Child, Equipment, ParentingState, Profile, VerseNote, WorkoutPlan } from '../types';

const STORAGE_KEY = 'fitplan:data';
const EXPORT_APP_ID = 'fitplan';

const createDefaultBible = (): BibleState => ({ versionId: BIBLE_VERSIONS[0].id, bookId: 'MAT', chapter: 1, verse: 1, notes: {} });

export const createEmptyData = (): AppData => ({
  version: 1,
  profile: null,
  weights: [],
  foodLog: [],
  workoutLog: [],
  water: {},
  customFoods: [],
  favoriteFoodIds: [],
  mealPlan: null,
  workoutPlan: null,
  bible: createDefaultBible(),
  parenting: { children: [], activeChildId: '' },
});

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

/** Converts the v1 single equipment value ('none' | 'dumbbell' | 'gym') to the equipment list. */
const normalizeEquipment = (value: unknown): Equipment[] => {
  if (Array.isArray(value)) return value.filter((item): item is Equipment => ALL_EQUIPMENT.includes(item));
  if (value === 'dumbbell') return ['dumbbell'];
  if (value === 'gym') return [...ALL_EQUIPMENT];
  return [];
};

const normalizeProfile = (raw: unknown): Profile | null => {
  if (!isRecord(raw)) return null;
  const profile = raw as unknown as Profile;
  const workout = (isRecord(raw.workout) ? raw.workout : {}) as Partial<Profile['workout']>;
  return {
    ...profile,
    workout: {
      level: workout.level ?? 'beginner',
      equipment: normalizeEquipment(workout.equipment),
      daysPerWeek: workout.daysPerWeek ?? 3,
      minutesPerSession: workout.minutesPerSession ?? 45,
      isCustomSchedule: workout.isCustomSchedule ?? false,
      // Older profiles had no such options; keep planning floor and furniture moves for them.
      hasMat: workout.hasMat ?? true,
      hasFurniture: workout.hasFurniture ?? true,
      levelSince: workout.levelSince ?? '',
    },
  };
};

const normalizeWorkoutPlan = (raw: unknown): WorkoutPlan | null => {
  if (!isRecord(raw)) return null;
  const plan = raw as unknown as WorkoutPlan;
  return { ...plan, stageId: plan.stageId ?? '', isLowImpact: plan.isLowImpact ?? false };
};

const isPositiveInt = (value: unknown): value is number => typeof value === 'number' && Number.isInteger(value) && value > 0;

const normalizeBible = (raw: unknown): BibleState => {
  const fallback = createDefaultBible();
  if (!isRecord(raw)) return fallback;
  const notes: Record<string, VerseNote> = {};
  if (isRecord(raw.notes)) {
    Object.entries(raw.notes).forEach(([key, note]) => {
      if (isRecord(note) && (typeof note.color === 'string' || typeof note.comment === 'string')) notes[key] = note as unknown as VerseNote;
    });
  }
  return {
    versionId: BIBLE_VERSIONS.some((version) => version.id === raw.versionId) ? (raw.versionId as string) : fallback.versionId,
    bookId: typeof raw.bookId === 'string' ? raw.bookId : fallback.bookId,
    chapter: isPositiveInt(raw.chapter) ? raw.chapter : fallback.chapter,
    verse: isPositiveInt(raw.verse) ? raw.verse : fallback.verse,
    notes,
  };
};

const isDateKey = (value: unknown): value is string => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);

const pickDateMap = (raw: unknown): Record<string, string> => {
  const map: Record<string, string> = {};
  if (isRecord(raw)) Object.entries(raw).forEach(([key, value]) => isDateKey(value) && (map[key] = value));
  return map;
};

const pickRecordsWithDate = <T extends { id: string; date: string }>(raw: unknown): T[] =>
  Array.isArray(raw)
    ? raw.filter((item): item is T => isRecord(item) && typeof item.id === 'string' && isDateKey(item.date))
    : [];

const normalizeChild = (raw: unknown): Child | null => {
  if (!isRecord(raw) || typeof raw.id !== 'string' || !isDateKey(raw.birthDate)) return null;
  return {
    id: raw.id,
    name: typeof raw.name === 'string' ? raw.name : '',
    sex: raw.sex === 'male' ? 'male' : 'female',
    birthDate: raw.birthDate,
    measurements: pickRecordsWithDate(raw.measurements),
    vaccines: pickDateMap(raw.vaccines),
    supplements: pickRecordsWithDate(raw.supplements),
    milestones: pickDateMap(raw.milestones),
  };
};

const normalizeParenting = (raw: unknown): ParentingState => {
  if (!isRecord(raw)) return { children: [], activeChildId: '' };
  const children = Array.isArray(raw.children)
    ? raw.children.map(normalizeChild).filter((child): child is Child => child !== null)
    : [];
  const activeChildId = typeof raw.activeChildId === 'string' && children.some((c) => c.id === raw.activeChildId) ? raw.activeChildId : '';
  return { children, activeChildId };
};

/** Fills missing fields with defaults so older or partial data keeps working. */
export const normalizeData = (raw: unknown): AppData => {
  const empty = createEmptyData();
  if (!isRecord(raw)) return empty;
  const pickArray = <K extends keyof AppData>(key: K): AppData[K] =>
    (Array.isArray(raw[key]) ? raw[key] : empty[key]) as AppData[K];
  return {
    version: 1,
    profile: normalizeProfile(raw.profile),
    weights: pickArray('weights'),
    foodLog: pickArray('foodLog'),
    workoutLog: pickArray('workoutLog'),
    water: isRecord(raw.water) ? (raw.water as AppData['water']) : {},
    customFoods: pickArray('customFoods'),
    favoriteFoodIds: pickArray('favoriteFoodIds'),
    mealPlan: isRecord(raw.mealPlan) ? (raw.mealPlan as unknown as AppData['mealPlan']) : null,
    workoutPlan: normalizeWorkoutPlan(raw.workoutPlan),
    bible: normalizeBible(raw.bible),
    parenting: normalizeParenting(raw.parenting),
  };
};

export const loadData = (): AppData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? normalizeData(JSON.parse(stored)) : createEmptyData();
  } catch {
    return createEmptyData();
  }
};

export const saveData = (data: AppData): boolean => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
};

export const exportData = (data: AppData): void => {
  const payload = { app: EXPORT_APP_ID, exportedAt: new Date().toISOString(), data };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `fitplan-backup-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
};

/** Parses an exported backup file. Throws with a user-facing message when invalid. */
export const parseImportFile = (text: string): AppData => {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('The file is not valid JSON.');
  }
  if (!isRecord(parsed) || parsed.app !== EXPORT_APP_ID || !isRecord(parsed.data)) {
    throw new Error('This file is not a FitPlan backup.');
  }
  return normalizeData(parsed.data);
};

const mergeById = <T extends { id: string }>(current: T[], incoming: T[]): T[] => {
  const map = new Map(current.map((item) => [item.id, item]));
  incoming.forEach((item) => map.set(item.id, item));
  return Array.from(map.values());
};

/** Merges a backup into current data; imported records win on conflict. */
export const mergeData = (current: AppData, incoming: AppData): AppData => ({
  version: 1,
  profile: incoming.profile ?? current.profile,
  weights: mergeById(current.weights, incoming.weights),
  foodLog: mergeById(current.foodLog, incoming.foodLog),
  workoutLog: mergeById(current.workoutLog, incoming.workoutLog),
  water: { ...current.water, ...incoming.water },
  customFoods: mergeById(current.customFoods, incoming.customFoods),
  favoriteFoodIds: Array.from(new Set([...current.favoriteFoodIds, ...incoming.favoriteFoodIds])),
  mealPlan: incoming.mealPlan ?? current.mealPlan,
  workoutPlan: incoming.workoutPlan ?? current.workoutPlan,
  bible: { ...current.bible, notes: { ...current.bible.notes, ...incoming.bible.notes } },
  parenting: {
    children: mergeById(current.parenting.children, incoming.parenting.children),
    activeChildId: current.parenting.activeChildId || incoming.parenting.activeChildId,
  },
});
