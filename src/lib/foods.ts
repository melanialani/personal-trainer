import { BUILTIN_FOODS } from '../data/foods';
import type { DietPreference, FoodItem, FoodLogEntry, FoodTag, MealType, NutritionValues, Profile } from '../types';
import { createId } from './id';
import { roundTo1 } from './math';

export const getAllFoods = (customFoods: FoodItem[]): FoodItem[] => [...customFoods, ...BUILTIN_FOODS];

export const findFood = (foodId: string, customFoods: FoodItem[]): FoodItem | undefined =>
  customFoods.find((food) => food.id === foodId) ?? BUILTIN_FOODS.find((food) => food.id === foodId);

export const DIET_OPTIONS: { value: DietPreference; label: string }[] = [
  { value: 'none', label: 'No restriction' },
  { value: 'pescatarian', label: 'Pescatarian' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
];

const DIET_EXCLUDED_TAGS: Record<DietPreference, FoodTag[]> = {
  none: [],
  pescatarian: ['meat', 'pork', 'poultry'],
  vegetarian: ['meat', 'pork', 'poultry', 'seafood'],
  vegan: ['meat', 'pork', 'poultry', 'seafood', 'egg', 'dairy'],
};

export const isFoodAllowed = (
  food: FoodItem,
  profile: Pick<Profile, 'dietPreference' | 'isHalal' | 'excludedKeywords'>,
): boolean => {
  const excludedTags = [...DIET_EXCLUDED_TAGS[profile.dietPreference]];
  if (profile.isHalal) excludedTags.push('pork', 'alcohol');
  if (food.tags.some((tag) => excludedTags.includes(tag))) return false;
  const name = food.name.toLowerCase();
  return !profile.excludedKeywords.some((keyword) => keyword && name.includes(keyword));
};

export const scaleNutrition = (food: NutritionValues, servings: number): NutritionValues => ({
  kcal: Math.round(food.kcal * servings),
  protein: roundTo1(food.protein * servings),
  carbs: roundTo1(food.carbs * servings),
  fat: roundTo1(food.fat * servings),
});

export const EMPTY_NUTRITION: NutritionValues = { kcal: 0, protein: 0, carbs: 0, fat: 0 };

export const sumNutrition = (items: NutritionValues[]): NutritionValues =>
  items.reduce(
    (total, item) => ({
      kcal: total.kcal + item.kcal,
      protein: total.protein + item.protein,
      carbs: total.carbs + item.carbs,
      fat: total.fat + item.fat,
    }),
    EMPTY_NUTRITION,
  );

interface FoodLogEntryInput {
  food: FoodItem;
  servings: number;
  date: string;
  meal: MealType;
  /** Keep an existing id when editing an entry. */
  id?: string;
}

/** Diary entry with nutrition snapshotted from the food at the given servings. */
export const createFoodLogEntry = ({ food, servings, date, meal, id = createId() }: FoodLogEntryInput): FoodLogEntry => ({
  id,
  date,
  meal,
  foodId: food.id,
  name: food.name,
  servings,
  servingLabel: food.servingLabel,
  ...scaleNutrition(food, servings),
});

/** Case-insensitive search where every word of the query must appear in the name or category. */
export const searchFoods = (foods: FoodItem[], query: string): FoodItem[] => {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return foods;
  return foods.filter((food) => {
    const haystack = `${food.name} ${food.id.replace(/-/g, ' ')} ${food.category} ${food.brand ?? ''}`.toLowerCase();
    return words.every((word) => haystack.includes(word));
  });
};
