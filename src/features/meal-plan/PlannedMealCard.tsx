import { NotebookPen, RefreshCw } from 'lucide-react';
import { findFood, scaleNutrition } from '../../lib/foods';
import { formatNumber, formatServings } from '../../lib/format';
import { MEAL_LABELS } from '../../lib/meals';
import { plannedItemsNutrition } from '../../lib/mealPlanGenerator';
import { IconButton } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { MacroInline } from '../../shared/components/Nutrition';
import type { FoodItem, PlannedMeal } from '../../types';

interface PlannedMealCardProps {
  meal: PlannedMeal;
  customFoods: FoodItem[];
  isLogged: boolean;
  onSwap: () => void;
  onLog: () => void;
}

export const PlannedMealCard = ({ meal, customFoods, isLogged, onSwap, onLog }: PlannedMealCardProps) => {
  const totals = plannedItemsNutrition(meal.items, customFoods);
  return (
    <Card
      title={
        <span className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-wide text-brand-700 dark:text-brand-400">{MEAL_LABELS[meal.meal]}</span>
          <span>{meal.title}</span>
        </span>
      }
      subtitle={
        <span className="inline-flex flex-wrap items-center gap-x-2">
          <span className="font-semibold text-slate-700">{formatNumber(totals.kcal)} kcal</span>
          <MacroInline values={totals} />
        </span>
      }
      action={
        <>
          <IconButton label="Swap for another meal" onClick={onSwap}>
            <RefreshCw size={15} />
          </IconButton>
          <IconButton label={isLogged ? 'Already in diary — log again' : 'Log to diary'} onClick={onLog} className={isLogged ? 'text-brand-700 dark:text-brand-400' : ''}>
            <NotebookPen size={15} />
          </IconButton>
        </>
      }
    >
      <ul className="space-y-1.5 text-sm">
        {meal.items.map((item) => {
          const food = findFood(item.foodId, customFoods);
          if (!food) return null;
          const nutrition = scaleNutrition(food, item.servings);
          return (
            <li key={item.foodId} className="flex justify-between gap-3">
              <span className="min-w-0 text-slate-700">
                {food.name}
                <span className="block text-xs text-slate-400">
                  {formatServings(item.servings, food.servingLabel)} · {formatNumber(food.servingGrams * item.servings)} g
                </span>
              </span>
              <span className="shrink-0 tabular-nums text-slate-500">{formatNumber(nutrition.kcal)}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
