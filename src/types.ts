export type Sex = 'male' | 'female';
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
export type GoalType = 'lose' | 'maintain' | 'gain';
export type MacroPreset = 'balanced' | 'high_protein' | 'low_carb';
export type DietPreference = 'none' | 'vegetarian' | 'vegan' | 'pescatarian';
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';
/** Equipment the user owns or can access. An empty list means bodyweight only. */
export type Equipment =
  | 'dumbbell'
  | 'kettlebell'
  | 'resistance_band'
  | 'pull_up_bar'
  | 'bench'
  | 'jump_rope'
  | 'barbell'
  | 'gym_machines'
  | 'cardio_machine';
export type FitnessLevel = 'beginner' | 'intermediate' | 'advanced';
export type FoodSource = 'builtin' | 'custom' | 'openfoodfacts';

/** Tags used to filter foods by diet preference. */
export type FoodTag = 'meat' | 'pork' | 'poultry' | 'seafood' | 'egg' | 'dairy' | 'alcohol';

export interface WorkoutPreferences {
  level: FitnessLevel;
  equipment: Equipment[];
  daysPerWeek: number;
  minutesPerSession: number;
  /** false = days and minutes follow the recommendation calculated from the profile. */
  isCustomSchedule: boolean;
  /** Has a mat, carpet or soft floor for lying / kneeling moves. */
  hasMat: boolean;
  /** Has a sturdy chair, table or stairs at home (dips, step-ups, incline push-ups). */
  hasFurniture: boolean;
  /** Date (YYYY-MM-DD) the current level was set; progression counts workouts from then. '' = all history. */
  levelSince: string;
}

export interface Profile {
  name: string;
  sex: Sex;
  birthDate: string;
  heightCm: number;
  activityLevel: ActivityLevel;
  goal: GoalType;
  startWeightKg: number;
  targetWeightKg: number;
  /** Planned change per week in kg (always positive). */
  weeklyRateKg: number;
  macroPreset: MacroPreset;
  dietPreference: DietPreference;
  isHalal: boolean;
  /** Lower-case keywords; foods whose name contains one are excluded from meal plans. */
  excludedKeywords: string[];
  waterTargetMl: number;
  workout: WorkoutPreferences;
}

export interface WeightEntry {
  id: string;
  date: string;
  weightKg: number;
  waistCm?: number;
  note?: string;
}

export interface NutritionValues {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface FoodItem extends NutritionValues {
  id: string;
  name: string;
  category: string;
  servingLabel: string;
  servingGrams: number;
  tags: FoodTag[];
  source: FoodSource;
  brand?: string;
}

/** Nutrition values are a snapshot of the total for the logged amount. */
export interface FoodLogEntry extends NutritionValues {
  id: string;
  date: string;
  meal: MealType;
  foodId: string;
  name: string;
  servings: number;
  servingLabel: string;
}

export interface LoggedExercise {
  exerciseId: string;
  sets: number;
  reps: string;
  weightKg?: number;
}

/** How a session felt; drives progression (too hard = hold, not ready to move on). */
export type WorkoutEffort = 'easy' | 'ok' | 'hard';

export interface WorkoutLogEntry {
  id: string;
  date: string;
  name: string;
  durationMin: number;
  kcalBurned: number;
  exercises: LoggedExercise[];
  note?: string;
  effort?: WorkoutEffort;
}

export interface PlannedItem {
  foodId: string;
  servings: number;
}

export interface PlannedMeal {
  meal: MealType;
  templateId: string;
  title: string;
  items: PlannedItem[];
}

export interface MealPlanDay {
  date: string;
  meals: PlannedMeal[];
}

export interface MealPlan {
  createdAt: string;
  targetKcal: number;
  days: MealPlanDay[];
}

export interface PlannedExercise {
  exerciseId: string;
  sets: number;
  reps: string;
  restSec: number;
}

export interface WorkoutPlanDay {
  /** 0 = Monday … 6 = Sunday */
  weekday: number;
  title: string;
  isRest: boolean;
  exercises: PlannedExercise[];
}

export interface WorkoutPlan {
  createdAt: string;
  preferences: WorkoutPreferences;
  goal: GoalType;
  days: WorkoutPlanDay[];
  /** Progression stage the plan was built for (e.g. "beginner-foundation"); '' for plans made before stages existed. */
  stageId: string;
  /** Built without jumping moves (beginners with a sedentary job, higher body weight or age 60+). */
  isLowImpact: boolean;
}

export type HighlightColor = 'yellow' | 'green' | 'blue' | 'pink' | 'purple';

/** A highlight and/or comment on one Bible verse. */
export interface VerseNote {
  color?: HighlightColor;
  comment?: string;
  /** The comment covers verses up to this one (same chapter); unset = only this verse. */
  commentEndVerse?: number;
  updatedAt: string;
}

export interface BibleState {
  versionId: string;
  bookId: string;
  chapter: number;
  /** Verse at the top of the screen when last read, so reading resumes (and switching version keeps) the spot. */
  verse: number;
  /** Keyed by "BOOK.chapter.verse" (e.g. "JOH.9.5"): the same key in every version. */
  notes: Record<string, VerseNote>;
}

export interface ChildMeasurement {
  id: string;
  date: string;
  weightKg?: number;
  heightCm?: number;
  headCm?: number;
  note?: string;
}

/** Routine medicines / supplements given to a child (ids from `data/childSupplements.ts`). */
export interface ChildSupplementEntry {
  id: string;
  supplementId: string;
  date: string;
  note?: string;
}

export interface Child {
  id: string;
  name: string;
  sex: Sex;
  birthDate: string;
  measurements: ChildMeasurement[];
  /** Vaccine dose id (from `data/vaccines.ts`) → date given (YYYY-MM-DD). */
  vaccines: Record<string, string>;
  supplements: ChildSupplementEntry[];
  /** Milestone id (from `data/milestones.ts`) → date it was ticked. */
  milestones: Record<string, string>;
}

export interface ParentingState {
  children: Child[];
  /** Child shown on the parenting pages; '' = first child. */
  activeChildId: string;
}

export interface AppData {
  version: 1;
  profile: Profile | null;
  weights: WeightEntry[];
  foodLog: FoodLogEntry[];
  workoutLog: WorkoutLogEntry[];
  /** Water intake in ml keyed by date (YYYY-MM-DD). */
  water: Record<string, number>;
  customFoods: FoodItem[];
  favoriteFoodIds: string[];
  mealPlan: MealPlan | null;
  workoutPlan: WorkoutPlan | null;
  bible: BibleState;
  parenting: ParentingState;
}
