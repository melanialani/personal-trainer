import { useCallback } from 'react';
import { createFoodLogEntry, findFood } from '../../lib/foods';
import { pluralize } from '../../lib/format';
import { useToast } from '../../shared/components/ToastProvider';
import { useAppData } from '../../store/AppDataContext';
import type { FoodLogEntry, PlannedMeal } from '../../types';

/** Copies planned meals into the food diary for the given date. */
export const useLogPlannedMeals = () => {
  const { data, upsert } = useAppData();
  const showToast = useToast();

  return useCallback(
    (date: string, meals: PlannedMeal[]) => {
      const entries: FoodLogEntry[] = meals.flatMap((meal) =>
        meal.items.flatMap((item) => {
          const food = findFood(item.foodId, data.customFoods);
          return food ? [createFoodLogEntry({ food, servings: item.servings, date, meal: meal.meal })] : [];
        }),
      );
      upsert('foodLog', entries);
      showToast(`Logged ${pluralize(entries.length, 'item')} to your diary`);
    },
    [data.customFoods, upsert, showToast],
  );
};
