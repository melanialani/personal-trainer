import { Copy, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { addDays, todayKey } from '../../lib/date';
import { sumNutrition } from '../../lib/foods';
import { formatNumber, formatServings, pluralize } from '../../lib/format';
import { createId } from '../../lib/id';
import { MEAL_LABELS, MEAL_ORDER } from '../../lib/meals';
import { Button, IconButton } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { DateNav } from '../../shared/components/DateNav';
import { MacroInline } from '../../shared/components/Nutrition';
import { PageHeader } from '../../shared/components/PageHeader';
import { RequireProfile } from '../../shared/components/RequireProfile';
import { TextLink } from '../../shared/components/TextLink';
import { useToast } from '../../shared/components/ToastProvider';
import { useAppData } from '../../store/AppDataContext';
import type { FoodLogEntry, MealType } from '../../types';
import { AddFoodModal } from '../foods/AddFoodModal';
import { WaterTracker } from '../water/WaterTracker';
import { DaySummaryCard } from './DaySummaryCard';
import { useDaySummary } from './useDaySummary';

export const DiaryPage = () => (
  <RequireProfile>
    <DiaryContent />
  </RequireProfile>
);

const DiaryContent = () => {
  const { data, targets, upsert, remove } = useAppData();
  const confirmDelete = useConfirmDelete();
  const showToast = useToast();
  const [date, setDate] = useState(todayKey());
  const [addMeal, setAddMeal] = useState<MealType | null>(null);
  const [editingEntry, setEditingEntry] = useState<FoodLogEntry | null>(null);
  const { entries, workouts, totals, burned } = useDaySummary(date);

  if (!targets) return null;

  const handleDelete = async (entry: FoodLogEntry) => {
    if (await confirmDelete(entry.name)) remove('foodLog', entry.id);
  };

  const handleCopyPreviousDay = (meal: MealType) => {
    const previous = data.foodLog.filter((entry) => entry.date === addDays(date, -1) && entry.meal === meal);
    if (previous.length === 0) {
      showToast(`No ${MEAL_LABELS[meal].toLowerCase()} logged the day before`, 'error');
      return;
    }
    upsert('foodLog', previous.map((entry) => ({ ...entry, id: createId(), date })));
    showToast(`Copied ${pluralize(previous.length, 'item')} from the previous day`);
  };

  return (
    <>
      <PageHeader
        title="Food Diary"
        description="Log what you eat to stay on target."
        actions={<DateNav date={date} onChange={setDate} />}
      />
      {/* On phones the summary comes first; on desktop it sits in the sidebar. */}
      <div className="mb-5 lg:hidden">
        <DaySummaryCard title="Daily summary" totals={totals} burned={burned} targets={targets} />
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-5">
          {MEAL_ORDER.map((meal) => {
            const mealEntries = entries.filter((entry) => entry.meal === meal);
            const mealTotals = sumNutrition(mealEntries);
            return (
              <Card
                key={meal}
                title={MEAL_LABELS[meal]}
                subtitle={mealEntries.length ? `${formatNumber(mealTotals.kcal)} kcal` : 'Nothing logged yet'}
                bodyClassName=""
                action={
                  <>
                    {mealEntries.length === 0 && (
                      <IconButton label="Copy from previous day" onClick={() => handleCopyPreviousDay(meal)}>
                        <Copy size={16} />
                      </IconButton>
                    )}
                    <Button size="sm" variant="secondary" icon={<Plus size={14} />} onClick={() => setAddMeal(meal)}>
                      Add
                    </Button>
                  </>
                }
              >
                {mealEntries.length > 0 && (
                  <ul className="divide-y divide-slate-100">
                    {mealEntries.map((entry) => (
                      <li key={entry.id} className="flex items-center gap-2 py-2.5 pl-4 pr-2 sm:gap-3 sm:px-5">
                        <div className="min-w-0 flex-1">
                          <p className="line-clamp-2 text-sm font-medium text-slate-800">{entry.name}</p>
                          <p className="text-xs text-slate-500">{formatServings(entry.servings, entry.servingLabel)}</p>
                          <MacroInline values={entry} />
                        </div>
                        <span className="text-sm font-semibold tabular-nums text-slate-900">{formatNumber(entry.kcal)}</span>
                        <div className="flex">
                          <IconButton label="Edit entry" onClick={() => setEditingEntry(entry)}>
                            <Pencil size={15} />
                          </IconButton>
                          <IconButton label="Delete entry" tone="danger" onClick={() => handleDelete(entry)}>
                            <Trash2 size={15} />
                          </IconButton>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            );
          })}
        </div>

        <div className="space-y-5">
          <div className="hidden lg:block">
            <DaySummaryCard title="Daily summary" totals={totals} burned={burned} targets={targets} />
          </div>
          <WaterTracker date={date} />
          <Card title="Exercise" subtitle={workouts.length ? `${formatNumber(burned)} kcal burned` : 'No exercise logged'}>
            {workouts.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {workouts.map((workout) => (
                  <li key={workout.id} className="flex justify-between gap-2">
                    <span className="truncate text-slate-700">{workout.name}</span>
                    <span className="shrink-0 tabular-nums text-slate-500">
                      {workout.durationMin} min · {workout.kcalBurned} kcal
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <TextLink to="/workouts" className="text-sm">
                Log a workout →
              </TextLink>
            )}
          </Card>
        </div>
      </div>

      <AddFoodModal isOpen={addMeal !== null} date={date} meal={addMeal ?? undefined} onClose={() => setAddMeal(null)} />
      <AddFoodModal isOpen={editingEntry !== null} entry={editingEntry} onClose={() => setEditingEntry(null)} />
    </>
  );
};
