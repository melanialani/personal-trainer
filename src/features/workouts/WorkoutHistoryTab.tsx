import { Activity, Plus, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { exerciseById } from '../../data/exercises';
import { addDays, formatDate, formatShortDate, sortByDateDesc, startOfWeek, todayKey } from '../../lib/date';
import { formatNumber } from '../../lib/format';
import { sumBy } from '../../lib/math';
import { Button, IconButton } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { EmptyState } from '../../shared/components/EmptyState';
import { StatTile } from '../../shared/components/StatTile';
import { CHART_AXIS, CHART_BAR, CHART_GRID, CHART_TOOLTIP, COLORS } from '../../shared/theme';
import { useAppData } from '../../store/AppDataContext';
import type { WorkoutLogEntry } from '../../types';
import { EFFORT_OPTIONS, WorkoutLogModal } from './WorkoutLogModal';

const WEEKS_IN_CHART = 8;

export const WorkoutHistoryTab = () => {
  const { data, remove } = useAppData();
  const confirmDelete = useConfirmDelete();
  const [isLogOpen, setIsLogOpen] = useState(false);

  const sorted = useMemo(() => sortByDateDesc(data.workoutLog), [data.workoutLog]);
  const thisWeekStart = startOfWeek(todayKey());
  const thisWeek = sorted.filter((w) => w.date >= thisWeekStart);

  const weeklyChart = useMemo(
    () =>
      Array.from({ length: WEEKS_IN_CHART }, (_, i) => {
        const start = addDays(thisWeekStart, -7 * (WEEKS_IN_CHART - 1 - i));
        const end = addDays(start, 7);
        const inWeek = data.workoutLog.filter((w) => w.date >= start && w.date < end);
        return { week: start, minutes: sumBy(inWeek, (w) => w.durationMin) };
      }),
    [data.workoutLog, thisWeekStart],
  );

  const handleDelete = async (workout: WorkoutLogEntry) => {
    if (await confirmDelete(`${workout.name} on ${formatDate(workout.date)}`)) remove('workoutLog', workout.id);
  };

  return (
    <>
      <div className="mb-4 flex justify-end">
        <Button icon={<Plus size={16} />} onClick={() => setIsLogOpen(true)}>
          Log activity
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <StatTile label="Sessions this week" value={thisWeek.length} />
        <StatTile label="Active minutes" value={formatNumber(sumBy(thisWeek, (w) => w.durationMin))} hint="WHO: 150+ min/week" />
        <StatTile label="kcal burned" value={formatNumber(sumBy(thisWeek, (w) => w.kcalBurned))} />
      </div>

      <Card title="Active minutes per week" className="mt-5">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={weeklyChart} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
            <CartesianGrid {...CHART_GRID} />
            <XAxis dataKey="week" tickFormatter={formatShortDate} {...CHART_AXIS} />
            <YAxis {...CHART_AXIS} />
            <Tooltip
              labelFormatter={(label) => `Week of ${formatShortDate(String(label))}`}
              formatter={(value) => [`${value} min`, 'Active']}
              {...CHART_TOOLTIP}
            />
            <Bar dataKey="minutes" fill={COLORS.brand} {...CHART_BAR} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card title="History" className="mt-5" bodyClassName="">
        {sorted.length === 0 ? (
          <EmptyState icon={<Activity size={22} />} title="No workouts logged yet" description="Log a planned session or any activity like walking, futsal or badminton." />
        ) : (
          <ul className="divide-y divide-slate-100">
            {sorted.map((workout) => (
              <li key={workout.id} className="flex items-start gap-3 px-4 py-3 sm:px-5">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-800">{workout.name}</p>
                  <p className="text-xs text-slate-500">
                    {formatDate(workout.date)} · {workout.durationMin} min · {workout.kcalBurned} kcal
                    {workout.effort && ` · ${EFFORT_OPTIONS.find((option) => option.value === workout.effort)?.label}`}
                  </p>
                  {workout.exercises.length > 0 && (
                    <p className="mt-1 line-clamp-2 text-xs text-slate-400">
                      {workout.exercises
                        .map((e) => `${exerciseById(e.exerciseId)?.name ?? e.exerciseId} ${e.sets}×${e.reps}${e.weightKg ? ` @${e.weightKg}kg` : ''}`)
                        .join(' · ')}
                    </p>
                  )}
                  {workout.note && <p className="mt-1 text-xs italic text-slate-500">“{workout.note}”</p>}
                </div>
                <IconButton label="Delete workout" tone="danger" onClick={() => handleDelete(workout)}>
                  <Trash2 size={15} />
                </IconButton>
              </li>
            ))}
          </ul>
        )}
      </Card>
      <WorkoutLogModal isOpen={isLogOpen} onClose={() => setIsLogOpen(false)} />
    </>
  );
};
