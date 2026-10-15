import { useCallback, useMemo } from 'react';
import { getAllFoods } from '../../lib/foods';
import { useAppData } from '../../store/AppDataContext';
import type { FoodItem } from '../../types';

/** Food database helpers shared by the diary, lookup and meal planner. */
export const useFoods = () => {
  const { data, update, upsert } = useAppData();
  const allFoods = useMemo(() => getAllFoods(data.customFoods), [data.customFoods]);
  const favoriteIds = data.favoriteFoodIds;

  const toggleFavorite = useCallback(
    (foodId: string) =>
      update((current) => ({
        ...current,
        favoriteFoodIds: current.favoriteFoodIds.includes(foodId)
          ? current.favoriteFoodIds.filter((id) => id !== foodId)
          : [...current.favoriteFoodIds, foodId],
      })),
    [update],
  );

  /** Persists an online result so log entries and plans can reference it later. */
  const rememberFood = useCallback(
    (food: FoodItem) => {
      if (food.source !== 'builtin') upsert('customFoods', food);
    },
    [upsert],
  );

  return { allFoods, customFoods: data.customFoods, favoriteIds, toggleFavorite, rememberFood };
};
