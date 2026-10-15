import { MEAL_LABELS, MEAL_ORDER } from '../../lib/meals';
import { scaleNutrition } from '../../lib/foods';
import { formatNumber } from '../../lib/format';
import { Chip } from '../../shared/components/Chip';
import { Field, NumberInput, Segmented } from '../../shared/components/FormFields';
import { MACROS } from '../../shared/components/Nutrition';
import type { FoodItem, MealType } from '../../types';

const QUICK_SERVINGS = [0.5, 1, 1.5, 2];

interface ServingFormProps {
  food: FoodItem;
  servings: number | '';
  meal?: MealType;
  onServingsChange: (servings: number | '') => void;
  onMealChange?: (meal: MealType) => void;
}

/** Amount + meal selector with a live nutrition preview. */
export const ServingForm = ({ food, servings, meal, onServingsChange, onMealChange }: ServingFormProps) => {
  const amount = servings === '' ? 0 : servings;
  const totals = scaleNutrition(food, amount);
  const grams = Math.round(food.servingGrams * amount);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-base font-semibold text-slate-900">{food.name}</p>
        <p className="text-sm text-slate-500">
          1 serving = {food.servingLabel} ({formatNumber(food.servingGrams)} g) · {formatNumber(food.kcal)} kcal
        </p>
      </div>
      {meal && onMealChange && (
        <Field label="Meal">
          <Segmented value={meal} options={MEAL_ORDER.map((value) => ({ value, label: MEAL_LABELS[value] }))} onChange={onMealChange} />
        </Field>
      )}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Servings">
          <NumberInput value={servings} min={0} step={0.25} onValueChange={onServingsChange} suffix="×" />
        </Field>
        <Field label="Or weight">
          <NumberInput
            value={servings === '' ? '' : grams}
            min={0}
            step={5}
            onValueChange={(value) => onServingsChange(value === '' ? '' : Math.round((value / food.servingGrams) * 100) / 100)}
            suffix="g"
          />
        </Field>
      </div>
      <div className="flex flex-wrap gap-2">
        {QUICK_SERVINGS.map((value) => (
          <Chip key={value} isActive={servings === value} onClick={() => onServingsChange(value)}>
            {value} ×
          </Chip>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 rounded-xl bg-slate-50 p-3 text-center">
        <div>
          <p className="text-lg font-bold tabular-nums text-slate-900">{formatNumber(totals.kcal)}</p>
          <p className="text-xs text-slate-500">kcal</p>
        </div>
        {MACROS.map((macro) => (
          <div key={macro.key}>
            <p className="text-lg font-bold tabular-nums" style={{ color: macro.color }}>
              {formatNumber(totals[macro.key], 1)}g
            </p>
            <p className="text-xs text-slate-500">{macro.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
