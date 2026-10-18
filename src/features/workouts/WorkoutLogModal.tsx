import { useEffect, useState } from 'react';
import { ACTIVITIES } from '../../data/activities';
import { exerciseById } from '../../data/exercises';
import { kcalFromMet } from '../../lib/calc';
import { todayKey } from '../../lib/date';
import { createId } from '../../lib/id';
import { formatNumber } from '../../lib/format';
import { estimateSession, scaleSessionKcal } from '../../lib/workoutGenerator';
import { Button } from '../../shared/components/Button';
import { Field, NumberInput, Segmented, Select, TextInput } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';
import { useToast } from '../../shared/components/ToastProvider';
import { useBodyWeightKg } from '../../shared/hooks/useBodyWeightKg';
import { useAppData } from '../../store/AppDataContext';
import type { LoggedExercise, WorkoutEffort, WorkoutPlanDay } from '../../types';

interface WorkoutLogModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Prefills the log from a planned session. */
  planDay?: WorkoutPlanDay | null;
}

const DEFAULT_ACTIVITY_ID = 'walking-brisk';

export const EFFORT_OPTIONS: { value: WorkoutEffort; label: string }[] = [
  { value: 'easy', label: 'Easy' },
  { value: 'ok', label: 'Just right' },
  { value: 'hard', label: 'Too hard' },
];

export const WorkoutLogModal = ({ isOpen, onClose, planDay }: WorkoutLogModalProps) => {
  const { upsert } = useAppData();
  const showToast = useToast();
  const weightKg = useBodyWeightKg();

  const [date, setDate] = useState(todayKey());
  const [activityId, setActivityId] = useState(DEFAULT_ACTIVITY_ID);
  const [durationMin, setDurationMin] = useState<number | ''>(30);
  const [kcalOverride, setKcalOverride] = useState<number | ''>('');
  const [note, setNote] = useState('');
  const [effort, setEffort] = useState<WorkoutEffort>('ok');
  const [exercises, setExercises] = useState<LoggedExercise[]>([]);

  useEffect(() => {
    if (!isOpen) return;
    setDate(todayKey());
    setNote('');
    setEffort('ok');
    setKcalOverride('');
    if (planDay) {
      const estimate = estimateSession(planDay.exercises, weightKg);
      setDurationMin(estimate.minutes);
      setExercises(planDay.exercises.map(({ exerciseId, sets, reps }) => ({ exerciseId, sets, reps })));
    } else {
      setActivityId(DEFAULT_ACTIVITY_ID);
      setDurationMin(30);
      setExercises([]);
    }
    // Only reset when the modal opens.
  }, [isOpen]);

  const activity = ACTIVITIES.find((a) => a.id === activityId) ?? ACTIVITIES[0];
  const minutes = durationMin === '' ? 0 : durationMin;
  const sessionEstimate = planDay ? estimateSession(planDay.exercises, weightKg) : null;
  const estimatedKcal = sessionEstimate ? scaleSessionKcal(sessionEstimate, minutes) : kcalFromMet(activity.met, weightKg, minutes);
  const kcal = kcalOverride === '' ? estimatedKcal : kcalOverride;
  const isValid = minutes > 0 && Boolean(date);

  const updateExercise = (index: number, patch: Partial<LoggedExercise>) =>
    setExercises((current) => current.map((item, i) => (i === index ? { ...item, ...patch } : item)));

  const handleSave = () => {
    if (!isValid) return;
    upsert('workoutLog', {
      id: createId(),
      date,
      name: planDay ? planDay.title : activity.name,
      durationMin: minutes,
      kcalBurned: kcal,
      exercises,
      note: note.trim() || undefined,
      effort,
    });
    showToast('Workout logged — nice work!');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title={planDay ? `Log: ${planDay.title}` : 'Log activity'}
      size={planDay ? 'lg' : 'md'}
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!isValid}>
            Save workout
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {!planDay && (
            <Field label="Activity" className="sm:col-span-2">
              <Select value={activityId} options={ACTIVITIES.map((a) => ({ value: a.id, label: a.name }))} onValueChange={setActivityId} />
            </Field>
          )}
          <Field label="Date">
            <TextInput type="date" value={date} max={todayKey()} onChange={(e) => setDate(e.target.value)} />
          </Field>
          <Field label="Duration">
            <NumberInput value={durationMin} min={1} onValueChange={setDurationMin} suffix="min" />
          </Field>
          <Field label="Calories burned" hint={`Estimated ${estimatedKcal} kcal for ${formatNumber(weightKg, 1)} kg body weight. Override with your watch if you have one.`}>
            <NumberInput value={kcalOverride} placeholder={String(estimatedKcal)} min={0} onValueChange={setKcalOverride} suffix="kcal" />
          </Field>
          <Field label="How did it feel?" hint="Used to pace your progression: “Too hard” keeps you at the current stage.">
            <Segmented value={effort} options={EFFORT_OPTIONS} onChange={setEffort} />
          </Field>
          <Field label="Note (optional)">
            <TextInput value={note} onChange={(e) => setNote(e.target.value)} placeholder="How did it feel?" />
          </Field>
        </div>

        {exercises.length > 0 && (
          <div>
            <p className="mb-2 text-xs font-medium text-slate-600">Exercises — adjust what you actually did</p>
            <div className="divide-y divide-slate-100 rounded-xl border border-slate-200">
              {exercises.map((item, index) => (
                <div key={`${item.exerciseId}-${index}`} className="grid grid-cols-3 items-center gap-2 px-3 py-2 sm:grid-cols-[minmax(0,1fr)_72px_80px_84px]">
                  <span className="col-span-3 truncate text-sm text-slate-800 sm:col-span-1">{exerciseById(item.exerciseId)?.name ?? item.exerciseId}</span>
                  <NumberInput value={item.sets} min={0} onValueChange={(v) => updateExercise(index, { sets: v === '' ? 0 : v })} suffix="sets" className="px-2 text-xs" />
                  <TextInput value={item.reps} onChange={(e) => updateExercise(index, { reps: e.target.value })} className="px-2 text-xs" aria-label="Reps" />
                  <NumberInput
                    value={item.weightKg ?? ''}
                    min={0}
                    step={0.5}
                    placeholder="—"
                    onValueChange={(v) => updateExercise(index, { weightKg: v === '' ? undefined : v })}
                    suffix="kg"
                    className="px-2 text-xs"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
