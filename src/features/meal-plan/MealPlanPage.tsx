import { NotebookPen, RefreshCw, UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';
import { formatDate, parseDateKey, toDateKey, todayKey, WEEKDAY_SHORT, weekdayIndex } from '../../lib/date';
import { DIET_OPTIONS, sumNutrition } from '../../lib/foods';
import { formatNumber } from '../../lib/format';
import { generateMealPlan, plannedItemsNutrition, swapMeal } from '../../lib/mealPlanGenerator';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useConfirm } from '../../shared/components/ConfirmProvider';
import { EmptyState } from '../../shared/components/EmptyState';
import { MacroBars } from '../../shared/components/Nutrition';
import { Notice } from '../../shared/components/Notice';
import { PageHeader } from '../../shared/components/PageHeader';
import { RequireProfile } from '../../shared/components/RequireProfile';
import { Tabs } from '../../shared/components/Tabs';
import { TextLink } from '../../shared/components/TextLink';
import { useToast } from '../../shared/components/ToastProvider';
import { useProfile } from '../../shared/hooks/useProfile';
import { useAppData } from '../../store/AppDataContext';
import { PlannedMealCard } from './PlannedMealCard';
import { ShoppingList } from './ShoppingList';
import { useLogPlannedMeals } from './useLogPlannedMeals';

type PlanTab = 'plan' | 'shopping';

export const MealPlanPage = () => (
  <RequireProfile>
    <MealPlanContent />
  </RequireProfile>
);

const MealPlanContent = () => {
  const { data, targets, update } = useAppData();
  const confirm = useConfirm();
  const showToast = useToast();
  const logPlannedMeals = useLogPlannedMeals();
  const [tab, setTab] = useState<PlanTab>('plan');
  const plan = data.mealPlan;
  const profile = useProfile();
  const today = todayKey();
  const [selectedIndex, setSelectedIndex] = useState(() => Math.max(0, plan?.days.findIndex((d) => d.date === today) ?? 0));

  if (!targets) return null;

  const handleGenerate = async () => {
    if (plan) {
      const isConfirmed = await confirm({
        title: 'Generate a new meal plan?',
        message: 'Your current 7-day plan will be replaced with a new one starting today.',
        confirmLabel: 'Generate',
      });
      if (!isConfirmed) return;
    }
    update((current) => ({ ...current, mealPlan: generateMealPlan(profile, targets.kcal, today, current.customFoods) }));
    setSelectedIndex(0);
    showToast('New 7-day meal plan ready');
  };

  const preferences = (
    <div className="flex flex-wrap gap-1.5">
      <Badge tone="brand">{formatNumber(targets.kcal)} kcal/day</Badge>
      <Badge>{DIET_OPTIONS.find((option) => option.value === profile.dietPreference)?.label}</Badge>
      {profile.isHalal && <Badge>Halal</Badge>}
      {profile.excludedKeywords.length > 0 && <Badge tone="warning">Avoid: {profile.excludedKeywords.join(', ')}</Badge>}
    </div>
  );

  if (!plan) {
    return (
      <>
        <PageHeader title="Meal Planner" description="A 7-day menu that fits your calorie target and food preferences." />
        <Card>
          <EmptyState
            icon={<UtensilsCrossed size={22} />}
            title="No meal plan yet"
            description={
              <>
                Meals are built from everyday Indonesian and international dishes and scaled to your target.{' '}
                <TextLink to="/profile">Edit food preferences</TextLink>
              </>
            }
            action={
              <div className="flex flex-col items-center gap-3">
                {preferences}
                <Button onClick={handleGenerate}>Generate 7-day plan</Button>
              </div>
            }
          />
        </Card>
      </>
    );
  }

  const day = plan.days[Math.min(selectedIndex, plan.days.length - 1)];
  const dayTotals = sumNutrition(day.meals.map((meal) => plannedItemsNutrition(meal.items, data.customFoods)));
  const isOutdated = Math.abs(plan.targetKcal - targets.kcal) >= 50;
  const isMealLogged = (meal: string) => data.foodLog.some((entry) => entry.date === day.date && entry.meal === meal);

  const handleSwap = (mealIndex: number) =>
    update((current) => (current.mealPlan ? { ...current, mealPlan: swapMeal(current.mealPlan, selectedIndex, mealIndex, profile, current.customFoods) } : current));

  return (
    <>
      <PageHeader
        title="Meal Planner"
        description={`Plan created ${formatDate(toDateKey(new Date(plan.createdAt)))} · ${formatDate(plan.days[0].date)} – ${formatDate(plan.days[plan.days.length - 1].date)}`}
        actions={
          <>
            <Tabs
              tabs={[
                { value: 'plan', label: 'Daily menu' },
                { value: 'shopping', label: 'Shopping list' },
              ]}
              value={tab}
              onChange={setTab}
            />
            <Button variant="secondary" icon={<RefreshCw size={16} />} onClick={handleGenerate} className="no-print">
              New plan
            </Button>
          </>
        }
      />
      {isOutdated && (
        <Notice className="no-print mb-4">
          This plan was made for {formatNumber(plan.targetKcal)} kcal but your target is now {formatNumber(targets.kcal)} kcal. Generate a new plan to match.
        </Notice>
      )}

      {tab === 'shopping' ? (
        <ShoppingList plan={plan} customFoods={data.customFoods} />
      ) : (
        <>
          <div className="scrollbar-none -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
            {plan.days.map((planDay, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={planDay.date}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`flex min-w-16 shrink-0 flex-col items-center rounded-xl border px-3 py-2 transition-colors ${
                    isSelected ? 'border-brand-600 bg-brand-700 text-white' : 'border-slate-200 bg-surface text-slate-600 hover:border-brand-300'
                  }`}
                >
                  <span className="text-[11px] font-medium uppercase">{planDay.date === today ? 'Today' : WEEKDAY_SHORT[weekdayIndex(planDay.date)]}</span>
                  <span className="text-lg font-bold">{parseDateKey(planDay.date).getDate()}</span>
                </button>
              );
            })}
          </div>

          {/* Phones: compact day total above the meals (the full card sits in the desktop sidebar). */}
          <div className="mb-4 flex items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-surface px-4 py-3 shadow-sm lg:hidden">
            <p className="text-sm text-slate-500">
              <span className="text-lg font-bold tabular-nums text-slate-900">{formatNumber(dayTotals.kcal)}</span> / {formatNumber(targets.kcal)} kcal
            </p>
            <Button size="sm" icon={<NotebookPen size={14} />} onClick={() => logPlannedMeals(day.date, day.meals)}>
              Log day
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {day.meals.map((meal, mealIndex) => (
                <PlannedMealCard
                  key={`${day.date}-${meal.meal}`}
                  meal={meal}
                  customFoods={data.customFoods}
                  isLogged={isMealLogged(meal.meal)}
                  onSwap={() => handleSwap(mealIndex)}
                  onLog={() => logPlannedMeals(day.date, [meal])}
                />
              ))}
            </div>
            <div className="space-y-5 lg:sticky lg:top-8 lg:self-start">
              <Card title={`Day total · ${formatDate(day.date, { weekday: 'long', day: 'numeric', month: 'short' })}`}>
                <p className="text-3xl font-bold tabular-nums text-slate-900">
                  {formatNumber(dayTotals.kcal)} <span className="text-sm font-medium text-slate-500">/ {formatNumber(targets.kcal)} kcal</span>
                </p>
                <div className="mt-4">
                  <MacroBars consumed={dayTotals} target={targets} />
                </div>
                <Button className="mt-5 w-full" icon={<NotebookPen size={16} />} onClick={() => logPlannedMeals(day.date, day.meals)}>
                  Log whole day to diary
                </Button>
              </Card>
              <Card title="Preferences">
                {preferences}
                <p className="mt-3 text-xs text-slate-500">
                  Tap <RefreshCw size={11} className="inline" /> on a meal to swap it. Portions are rounded to ¼ serving.
                </p>
              </Card>
            </div>
          </div>
        </>
      )}
    </>
  );
};
