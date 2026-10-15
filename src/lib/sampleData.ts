import type { AppData, FoodLogEntry, Profile, WeightEntry, WorkoutLogEntry } from '../types';
import { calcDailyTargets, kcalFromMet } from './calc';
import { addDays, todayKey, weekdayIndex } from './date';
import { createFoodLogEntry, findFood } from './foods';
import { createId } from './id';
import { roundTo1 } from './math';
import { generateMealPlan } from './mealPlanGenerator';
import { createEmptyData } from './storage';
import { estimateSession, generateWorkoutPlan, resolveWorkoutPreferences } from './workoutGenerator';

const SAMPLE_PROFILE: Profile = {
  name: 'Rina',
  sex: 'female',
  birthDate: '1994-05-12',
  heightCm: 160,
  activityLevel: 'light',
  goal: 'lose',
  startWeightKg: 68.4,
  targetWeightKg: 58,
  weeklyRateKg: 0.5,
  macroPreset: 'high_protein',
  dietPreference: 'none',
  isHalal: true,
  excludedKeywords: [],
  waterTargetMl: 2000,
  workout: { level: 'beginner', equipment: ['dumbbell', 'resistance_band'], daysPerWeek: 3, minutesPerSession: 45, isCustomSchedule: false },
};

/** Builds six weeks of realistic history so every screen has something to show. */
export const buildSampleData = (): AppData => {
  const today = todayKey();
  const startDate = addDays(today, -42);

  const weights: WeightEntry[] = [];
  for (let day = 0; day <= 42; day += 1) {
    if (day % 7 === 3 || day % 7 === 6) continue; // skipped weigh-ins
    const trend = SAMPLE_PROFILE.startWeightKg - day * 0.075;
    const noise = Math.sin(day * 1.7) * 0.35;
    weights.push({
      id: createId(),
      date: addDays(startDate, day),
      weightKg: roundTo1(trend + noise),
      waistCm: day % 7 === 0 ? roundTo1(84 - day * 0.08) : undefined,
    });
  }

  const targets = calcDailyTargets(SAMPLE_PROFILE, weights);
  const workoutPlan = generateWorkoutPlan(resolveWorkoutPreferences(SAMPLE_PROFILE, weights), SAMPLE_PROFILE.goal);
  const historyPlan = generateMealPlan(SAMPLE_PROFILE, targets.kcal, addDays(today, -6), [], 7);

  const foodLog: FoodLogEntry[] = historyPlan.days.flatMap((day) =>
    day.meals
      // Today only has breakfast and lunch logged so far.
      .filter((meal) => day.date !== today || meal.meal === 'breakfast' || meal.meal === 'lunch')
      .flatMap((meal) =>
        meal.items.flatMap((item) => {
          const food = findFood(item.foodId, []);
          return food ? [createFoodLogEntry({ food, servings: item.servings, date: day.date, meal: meal.meal })] : [];
        }),
      ),
  );

  const workoutLog: WorkoutLogEntry[] = [];
  for (let day = 1; day <= 14; day += 1) {
    const date = addDays(today, -day);
    const planDay = workoutPlan.days[weekdayIndex(date)];
    if (planDay.isRest) {
      if (day % 3 === 0) {
        workoutLog.push({ id: createId(), date, name: 'Walking, brisk (6 km/h)', durationMin: 30, kcalBurned: kcalFromMet(4.3, targets.weightKg, 30), exercises: [], note: 'Evening walk around the complex' });
      }
      continue;
    }
    const estimate = estimateSession(planDay.exercises, targets.weightKg);
    workoutLog.push({
      id: createId(),
      date,
      name: planDay.title,
      durationMin: estimate.minutes,
      kcalBurned: estimate.kcal,
      exercises: planDay.exercises.map(({ exerciseId, sets, reps }) => ({ exerciseId, sets, reps, weightKg: exerciseId.startsWith('db-') || exerciseId === 'goblet-squat' ? 5 : undefined })),
    });
  }

  const water: Record<string, number> = {};
  for (let day = 0; day < 14; day += 1) {
    water[addDays(today, -day)] = day === 0 ? 1000 : 1500 + ((day * 250) % 1000);
  }

  return {
    ...createEmptyData(),
    profile: SAMPLE_PROFILE,
    weights,
    foodLog,
    workoutLog,
    water,
    favoriteFoodIds: ['oatmeal', 'chicken-breast', 'egg-boiled', 'banana', 'tempe-bacem'],
    mealPlan: generateMealPlan(SAMPLE_PROFILE, targets.kcal, today, []),
    workoutPlan,
  };
};
