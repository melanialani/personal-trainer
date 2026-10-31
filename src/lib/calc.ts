import type { ActivityLevel, GoalType, MacroPreset, Profile, Sex, WeightEntry } from '../types';
import { addDays, ageFromBirthDate, diffDays, sortByDateDesc, todayKey } from './date';
import { average, clamp, roundTo } from './math';

/** Approximate energy content of 1 kg of body fat. */
export const KCAL_PER_KG = 7700;

/** Energy per gram of each macronutrient. */
export const KCAL_PER_GRAM = { protein: 4, carbs: 4, fat: 9 } as const;

/** Body weight used for burn estimates when no profile exists. */
export const DEFAULT_WEIGHT_KG = 65;

export const ACTIVITY_LEVELS: { value: ActivityLevel; label: string; description: string; factor: number }[] = [
  { value: 'sedentary', label: 'Sedentary', description: 'Desk job, little or no exercise', factor: 1.2 },
  { value: 'light', label: 'Lightly active', description: 'Light exercise 1–3 days/week', factor: 1.375 },
  { value: 'moderate', label: 'Moderately active', description: 'Moderate exercise 3–5 days/week', factor: 1.55 },
  { value: 'active', label: 'Very active', description: 'Hard exercise 6–7 days/week', factor: 1.725 },
  { value: 'very_active', label: 'Extremely active', description: 'Physical job plus hard training', factor: 1.9 },
];

export const GOAL_OPTIONS: { value: GoalType; label: string }[] = [
  { value: 'lose', label: 'Lose weight' },
  { value: 'maintain', label: 'Maintain' },
  { value: 'gain', label: 'Gain / build muscle' },
];

export const MACRO_PRESETS: { value: MacroPreset; label: string; proteinPerKg: number; fatShare: number }[] = [
  { value: 'balanced', label: 'Balanced', proteinPerKg: 1.6, fatShare: 0.3 },
  { value: 'high_protein', label: 'High protein', proteinPerKg: 2.0, fatShare: 0.25 },
  { value: 'low_carb', label: 'Low carb', proteinPerKg: 1.8, fatShare: 0.4 },
];

export const minimumKcal = (sex: Sex): number => (sex === 'male' ? 1500 : 1200);

/** Mifflin-St Jeor equation. */
export const calcBmr = (sex: Sex, weightKg: number, heightCm: number, age: number): number =>
  10 * weightKg + 6.25 * heightCm - 5 * age + (sex === 'male' ? 5 : -161);

export const calcBmi = (weightKg: number, heightCm: number): number => weightKg / (heightCm / 100) ** 2;

export const bmiCategory = (bmi: number): { label: string; tone: 'info' | 'success' | 'warning' | 'danger' } => {
  // Asia-Pacific cut-offs (WHO WPRO) since the app is primarily used in Indonesia.
  if (bmi < 18.5) return { label: 'Underweight', tone: 'info' };
  if (bmi < 23) return { label: 'Normal', tone: 'success' };
  if (bmi < 25) return { label: 'Overweight', tone: 'warning' };
  return { label: 'Obese', tone: 'danger' };
};

/** WHO international adult cut-offs (shown next to the Asia-Pacific ones for comparison). */
export const bmiCategoryWho = (bmi: number): string => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight (pre-obese)';
  if (bmi < 35) return 'Obese class I';
  if (bmi < 40) return 'Obese class II';
  return 'Obese class III';
};

/** Asia-Pacific bands for the BMI scale bar (upper bound exclusive; the last band is open-ended). */
export const BMI_ASIA_BANDS = [
  { label: 'Underweight', from: 0, to: 18.5, tone: 'info' },
  { label: 'Normal', from: 18.5, to: 23, tone: 'success' },
  { label: 'Overweight', from: 23, to: 25, tone: 'warning' },
  { label: 'Obese', from: 25, to: Infinity, tone: 'danger' },
] as const;

/** Weight that gives a BMI at a given height. */
export const weightForBmi = (bmi: number, heightCm: number): number => bmi * (heightCm / 100) ** 2;

export const healthyWeightRange = (heightCm: number): [number, number] => {
  const h2 = (heightCm / 100) ** 2;
  return [18.5 * h2, 22.9 * h2];
};

export const latestWeight = (weights: WeightEntry[]): WeightEntry | undefined =>
  sortByDateDesc(weights)[0];

export const currentWeightKg = (profile: Profile, weights: WeightEntry[]): number =>
  latestWeight(weights)?.weightKg ?? profile.startWeightKg;

export interface DailyTargets {
  age: number;
  weightKg: number;
  bmr: number;
  tdee: number;
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
  dailyAdjustment: number;
  isClampedToMinimum: boolean;
}

export const calcDailyTargets = (profile: Profile, weights: WeightEntry[]): DailyTargets => {
  const age = ageFromBirthDate(profile.birthDate);
  const weightKg = currentWeightKg(profile, weights);
  const bmr = calcBmr(profile.sex, weightKg, profile.heightCm, age);
  const factor = ACTIVITY_LEVELS.find((level) => level.value === profile.activityLevel)?.factor ?? 1.2;
  const tdee = bmr * factor;

  const rawAdjustment = (profile.weeklyRateKg * KCAL_PER_KG) / 7;
  let dailyAdjustment = 0;
  if (profile.goal === 'lose') dailyAdjustment = -Math.min(rawAdjustment, tdee * 0.25);
  if (profile.goal === 'gain') dailyAdjustment = Math.min(rawAdjustment, 500);

  const minKcal = minimumKcal(profile.sex);
  const unclamped = tdee + dailyAdjustment;
  const kcal = roundTo(Math.max(unclamped, minKcal), 10);

  const preset = MACRO_PRESETS.find((p) => p.value === profile.macroPreset) ?? MACRO_PRESETS[0];
  // Use target weight for protein when overweight so the number stays realistic.
  const proteinBaseKg = profile.goal === 'lose' ? Math.min(weightKg, Math.max(profile.targetWeightKg, weightKg * 0.85)) : weightKg;
  const protein = Math.round(proteinBaseKg * preset.proteinPerKg);
  const fat = Math.round((kcal * preset.fatShare) / KCAL_PER_GRAM.fat);
  const carbs = Math.max(0, Math.round((kcal - protein * KCAL_PER_GRAM.protein - fat * KCAL_PER_GRAM.fat) / KCAL_PER_GRAM.carbs));

  return {
    age,
    weightKg,
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    kcal,
    protein,
    carbs,
    fat,
    dailyAdjustment: Math.round(kcal - tdee),
    isClampedToMinimum: unclamped < minKcal,
  };
};

/** Weekly change in kg that the calorie target actually produces (after safety caps). */
export const effectiveWeeklyRateKg = (targets: DailyTargets): number => (Math.abs(targets.dailyAdjustment) * 7) / KCAL_PER_KG;

/** Projected date to reach the target weight at the given weekly rate. */
export const projectedGoalDate = (profile: Profile, currentKg: number, weeklyRateKg: number): string | null => {
  const remaining = Math.abs(currentKg - profile.targetWeightKg);
  if (profile.goal === 'maintain' || remaining < 0.1 || weeklyRateKg <= 0.01) return null;
  return addDays(todayKey(), Math.ceil((remaining / weeklyRateKg) * 7));
};

/** Weekly trend (kg/week) via least-squares regression over the last `days` days. */
export const weeklyTrendKg = (weights: WeightEntry[], days = 28): number | null => {
  const cutoff = addDays(todayKey(), -days);
  const recent = weights.filter((w) => w.date >= cutoff);
  if (recent.length < 3) return null;
  const xs = recent.map((w) => diffDays(cutoff, w.date));
  const ys = recent.map((w) => w.weightKg);
  const n = xs.length;
  const meanX = average(xs);
  const meanY = average(ys);
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i += 1) {
    num += (xs[i] - meanX) * (ys[i] - meanY);
    den += (xs[i] - meanX) ** 2;
  }
  if (den === 0) return null;
  return (num / den) * 7;
};

/** Goal progress between start and target weight as 0–1. */
export const goalProgress = (profile: Profile, currentKg: number): number => {
  const total = profile.startWeightKg - profile.targetWeightKg;
  if (Math.abs(total) < 0.1) return 1;
  return clamp((profile.startWeightKg - currentKg) / total, 0, 1);
};

/** Calories burned for an activity: MET × body weight (kg) × hours. */
export const kcalFromMet = (met: number, weightKg: number, minutes: number): number =>
  Math.round(met * weightKg * (minutes / 60));

/** Minutes of an activity needed to burn the given calories (inverse of `kcalFromMet`). */
export const minutesToBurn = (kcal: number, met: number, weightKg: number): number => kcal / ((met * weightKg) / 60);

/** Calories implied by macros (4 / 4 / 9 kcal per gram). */
export const kcalFromMacros = ({ protein, carbs, fat }: { protein: number; carbs: number; fat: number }): number =>
  Math.round(protein * KCAL_PER_GRAM.protein + carbs * KCAL_PER_GRAM.carbs + fat * KCAL_PER_GRAM.fat);
