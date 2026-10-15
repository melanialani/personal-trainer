import { MEAL_TEMPLATES, type MealTemplate } from '../data/mealTemplates';
import type { FoodItem, MealPlan, MealType, PlannedItem, PlannedMeal, Profile } from '../types';
import { addDays } from './date';
import { clamp, roundTo } from './math';
import { EMPTY_NUTRITION, findFood, isFoodAllowed, scaleNutrition, sumNutrition } from './foods';
import { MEAL_ORDER } from './meals';

/** Share of the daily calorie target per meal. */
const MEAL_SHARES: Record<MealType, number> = { breakfast: 0.25, lunch: 0.35, dinner: 0.3, snack: 0.1 };

export const plannedItemsNutrition = (items: PlannedItem[], customFoods: FoodItem[]) =>
  sumNutrition(
    items.map((item) => {
      const food = findFood(item.foodId, customFoods);
      return food ? scaleNutrition(food, item.servings) : EMPTY_NUTRITION;
    }),
  );

const isTemplateAllowed = (template: MealTemplate, profile: Profile, customFoods: FoodItem[]): boolean =>
  template.items.every((item) => {
    const food = findFood(item.foodId, customFoods);
    return food ? isFoodAllowed(food, profile) : false;
  });

const scaleTemplate = (template: MealTemplate, budgetKcal: number, customFoods: FoodItem[]): PlannedItem[] => {
  const baseKcal = plannedItemsNutrition(template.items, customFoods).kcal || 1;
  const factor = clamp(budgetKcal / baseKcal, 0.5, 2.5);
  return template.items.map((item) => ({
    foodId: item.foodId,
    servings: Math.max(0.25, roundTo(item.servings * factor, 0.25)),
  }));
};

const shuffle = <T,>(items: T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const allowedTemplatesFor = (meal: MealType, profile: Profile, customFoods: FoodItem[]) =>
  MEAL_TEMPLATES.filter((template) => template.meals.includes(meal) && isTemplateAllowed(template, profile, customFoods));

const toPlannedMeal = (meal: MealType, template: MealTemplate, targetKcal: number, customFoods: FoodItem[]): PlannedMeal => ({
  meal,
  templateId: template.id,
  title: template.title,
  items: scaleTemplate(template, targetKcal * MEAL_SHARES[meal], customFoods),
});

export const generateMealPlan = (
  profile: Profile,
  targetKcal: number,
  startDate: string,
  customFoods: FoodItem[],
  days = 7,
): MealPlan => {
  const pools = Object.fromEntries(
    MEAL_ORDER.map((meal) => [meal, shuffle(allowedTemplatesFor(meal, profile, customFoods))]),
  ) as Record<MealType, MealTemplate[]>;

  // Lunch and dinner share templates, so offset dinner to avoid the same dish twice a day.
  const dinnerOffset = Math.ceil(pools.dinner.length / 2);

  return {
    createdAt: new Date().toISOString(),
    targetKcal,
    days: Array.from({ length: days }, (_, dayIndex) => ({
      date: addDays(startDate, dayIndex),
      meals: MEAL_ORDER.flatMap((meal) => {
        const pool = pools[meal];
        if (pool.length === 0) return [];
        const offset = meal === 'dinner' ? dinnerOffset : 0;
        const template = pool[(dayIndex + offset) % pool.length];
        return [toPlannedMeal(meal, template, targetKcal, customFoods)];
      }),
    })),
  };
};

/** Replaces one meal with a different allowed template for the same meal type. */
export const swapMeal = (plan: MealPlan, dayIndex: number, mealIndex: number, profile: Profile, customFoods: FoodItem[]): MealPlan => {
  const current = plan.days[dayIndex].meals[mealIndex];
  const usedToday = plan.days[dayIndex].meals.map((meal) => meal.templateId);
  const candidates = allowedTemplatesFor(current.meal, profile, customFoods).filter(
    (template) => !usedToday.includes(template.id),
  );
  if (candidates.length === 0) return plan;
  const template = candidates[Math.floor(Math.random() * candidates.length)];
  return {
    ...plan,
    days: plan.days.map((day, i) =>
      i !== dayIndex
        ? day
        : { ...day, meals: day.meals.map((meal, j) => (j === mealIndex ? toPlannedMeal(meal.meal, template, plan.targetKcal, customFoods) : meal)) },
    ),
  };
};

export interface ShoppingListItem {
  food: FoodItem;
  servings: number;
  grams: number;
}

export const buildShoppingList = (plan: MealPlan, customFoods: FoodItem[]): ShoppingListItem[] => {
  const totals = new Map<string, number>();
  plan.days.forEach((day) =>
    day.meals.forEach((meal) =>
      meal.items.forEach((item) => totals.set(item.foodId, (totals.get(item.foodId) ?? 0) + item.servings)),
    ),
  );
  return Array.from(totals.entries())
    .flatMap(([foodId, servings]) => {
      const food = findFood(foodId, customFoods);
      return food ? [{ food, servings, grams: Math.round(food.servingGrams * servings) }] : [];
    })
    .sort((a, b) => a.food.category.localeCompare(b.food.category) || a.food.name.localeCompare(b.food.name));
};
