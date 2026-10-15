import { Printer } from 'lucide-react';
import { useMemo, useState } from 'react';
import { formatNumber, formatServings } from '../../lib/format';
import { buildShoppingList } from '../../lib/mealPlanGenerator';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import type { FoodItem, MealPlan } from '../../types';

interface ShoppingListProps {
  plan: MealPlan;
  customFoods: FoodItem[];
}

const formatAmount = (grams: number) => (grams >= 1000 ? `${formatNumber(grams / 1000, 2)} kg` : `${formatNumber(grams)} g`);

export const ShoppingList = ({ plan, customFoods }: ShoppingListProps) => {
  const items = useMemo(() => buildShoppingList(plan, customFoods), [plan, customFoods]);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const categories = Array.from(new Set(items.map((item) => item.food.category)));

  const toggle = (foodId: string) =>
    setChecked((current) => {
      const next = new Set(current);
      if (next.has(foodId)) next.delete(foodId);
      else next.add(foodId);
      return next;
    });

  return (
    <Card
      title="Shopping list"
      subtitle={`For ${plan.days.length} days · amounts are cooked/edible weight`}
      action={
        <Button size="sm" variant="secondary" icon={<Printer size={14} />} onClick={() => window.print()} className="no-print">
          Print
        </Button>
      }
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{category}</p>
            <ul className="space-y-1.5">
              {items
                .filter((item) => item.food.category === category)
                .map((item) => (
                  <li key={item.food.id}>
                    <label className="flex cursor-pointer items-start gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={checked.has(item.food.id)}
                        onChange={() => toggle(item.food.id)}
                        className="mt-0.5 h-4 w-4 rounded accent-brand-600"
                      />
                      <span className={checked.has(item.food.id) ? 'text-slate-400 line-through' : 'text-slate-700'}>
                        {item.food.name}
                        <span className="block text-xs text-slate-400">
                          {formatAmount(item.grams)} · {formatServings(item.servings, item.food.servingLabel)}
                        </span>
                      </span>
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
};
