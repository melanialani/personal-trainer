import { Sparkles } from 'lucide-react';
import { ALL_EQUIPMENT, EQUIPMENT_LABELS } from '../../data/exercises';
import { todayKey } from '../../lib/date';
import { pluralize } from '../../lib/format';
import { FITNESS_LEVEL_OPTIONS, type ScheduleRecommendation } from '../../lib/workoutGenerator';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';
import { Checkbox, Field, Segmented, Select } from '../../shared/components/FormFields';
import type { Equipment, WorkoutPreferences } from '../../types';

type SetupPreset = Pick<WorkoutPreferences, 'equipment' | 'hasMat' | 'hasFurniture'> & { label: string };

const SETUP_PRESETS: SetupPreset[] = [
  { label: 'Nothing at all (no mat)', equipment: [], hasMat: false, hasFurniture: false },
  { label: 'Bodyweight (mat & chair)', equipment: [], hasMat: true, hasFurniture: true },
  { label: 'Home basics', equipment: ['dumbbell', 'resistance_band', 'jump_rope'], hasMat: true, hasFurniture: true },
  { label: 'Full gym', equipment: ALL_EQUIPMENT, hasMat: true, hasFurniture: true },
];

const DAYS_OPTIONS = [1, 2, 3, 4, 5, 6].map((n) => ({ value: String(n), label: `${pluralize(n, 'day')} / week` }));
const MINUTES_OPTIONS = [20, 30, 45, 60, 75].map((n) => ({ value: String(n), label: `${n} minutes` }));

interface TrainingPreferencesCardProps {
  workout: WorkoutPreferences;
  recommendation: ScheduleRecommendation;
  onChange: (workout: WorkoutPreferences) => void;
}

const isSameSet = (a: Equipment[], b: Equipment[]) => a.length === b.length && a.every((item) => b.includes(item));

const isPresetActive = (workout: WorkoutPreferences, preset: SetupPreset) =>
  isSameSet(workout.equipment, preset.equipment) && workout.hasMat === preset.hasMat && workout.hasFurniture === preset.hasFurniture;

export const TrainingPreferencesCard = ({ workout, recommendation, onChange }: TrainingPreferencesCardProps) => {
  const set = <K extends keyof WorkoutPreferences>(key: K, value: WorkoutPreferences[K]) => onChange({ ...workout, [key]: value });

  const toggleEquipment = (item: Equipment, isChecked: boolean) =>
    set('equipment', isChecked ? [...workout.equipment, item] : workout.equipment.filter((e) => e !== item));

  const applyPreset = ({ equipment, hasMat, hasFurniture }: SetupPreset) =>
    onChange({ ...workout, equipment: [...equipment], hasMat, hasFurniture });

  const handleCustomize = () =>
    onChange({
      ...workout,
      isCustomSchedule: true,
      daysPerWeek: recommendation.daysPerWeek,
      minutesPerSession: recommendation.minutesPerSession,
    });

  return (
    <Card title="Training preferences" subtitle="Used by the workout planner">
      <div className="space-y-5">
        <Field label="Fitness level">
          {/* Progression restarts from the new level, so only workouts from today count toward it. */}
          <Segmented value={workout.level} options={FITNESS_LEVEL_OPTIONS} onChange={(level) => onChange({ ...workout, level, levelSince: todayKey() })} />
        </Field>

        <div>
          <p className="mb-1 text-xs font-medium text-slate-600">Equipment you have</p>
          <p className="mb-2 text-xs text-slate-400">Workouts only use exercises you can do with what is checked here.</p>
          <div className="mb-3 flex flex-wrap gap-2">
            {SETUP_PRESETS.map((preset) => (
              <Chip key={preset.label} isActive={isPresetActive(workout, preset)} onClick={() => applyPreset(preset)}>
                {preset.label}
              </Chip>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Checkbox label="Exercise mat or carpet (lying / kneeling moves)" checked={workout.hasMat} onChange={(isChecked) => set('hasMat', isChecked)} />
            <Checkbox label="Sturdy chair, table or stairs" checked={workout.hasFurniture} onChange={(isChecked) => set('hasFurniture', isChecked)} />
            {ALL_EQUIPMENT.map((item) => (
              <Checkbox
                key={item}
                label={EQUIPMENT_LABELS[item]}
                checked={workout.equipment.includes(item)}
                onChange={(isChecked) => toggleEquipment(item, isChecked)}
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300">
                <Sparkles size={14} /> Recommended for you
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900">
                {recommendation.daysPerWeek} days/week · {recommendation.minutesPerSession} min
              </p>
              <p className="text-xs text-slate-500">
                ≈ {recommendation.weeklyMinutes} active minutes per week (WHO advises 150–300)
              </p>
            </div>
            {!workout.isCustomSchedule && (
              <Button size="sm" variant="secondary" onClick={handleCustomize}>
                Customize
              </Button>
            )}
          </div>
          <ul className="mt-3 list-disc space-y-0.5 pl-5 text-xs text-slate-600">
            {recommendation.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>

        {workout.isCustomSchedule && (
          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Training days">
                <Select value={String(workout.daysPerWeek)} options={DAYS_OPTIONS} onValueChange={(value) => set('daysPerWeek', Number(value))} />
              </Field>
              <Field label="Time per session">
                <Select value={String(workout.minutesPerSession)} options={MINUTES_OPTIONS} onValueChange={(value) => set('minutesPerSession', Number(value))} />
              </Field>
            </div>
            <button type="button" onClick={() => set('isCustomSchedule', false)} className="mt-2 text-xs font-medium text-brand-700 dark:text-brand-400 hover:underline">
              Use the recommendation instead
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};
