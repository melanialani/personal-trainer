import { useMemo } from 'react';
import { sumNutrition } from '../../lib/foods';
import { sumBy } from '../../lib/math';
import { useAppData } from '../../store/AppDataContext';

/** Food entries, nutrition totals and exercise calories for one day. */
export const useDaySummary = (date: string) => {
  const { data } = useAppData();
  return useMemo(() => {
    const entries = data.foodLog.filter((entry) => entry.date === date);
    const workouts = data.workoutLog.filter((workout) => workout.date === date);
    return {
      entries,
      workouts,
      totals: sumNutrition(entries),
      burned: sumBy(workouts, (workout) => workout.kcalBurned),
      waterMl: data.water[date] ?? 0,
    };
  }, [data.foodLog, data.workoutLog, data.water, date]);
};
