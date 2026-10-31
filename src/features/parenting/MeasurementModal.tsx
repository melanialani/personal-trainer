import { useEffect, useState } from 'react';
import { todayKey } from '../../lib/date';
import { createId } from '../../lib/id';
import { Button } from '../../shared/components/Button';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { Field, NumberInput, TextInput } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';
import { useToast } from '../../shared/components/ToastProvider';
import type { Child, ChildMeasurement } from '../../types';
import { useChildren } from './useChildren';

interface MeasurementModalProps {
  isOpen: boolean;
  child: Child;
  entry?: ChildMeasurement | null;
  onClose: () => void;
}

const LIMITS = { weightKg: [0.4, 200], heightCm: [25, 230], headCm: [20, 70] } as const;

const inRange = (value: number | '', [min, max]: readonly [number, number]) => value === '' || (value >= min && value <= max);

export const MeasurementModal = ({ isOpen, child, entry, onClose }: MeasurementModalProps) => {
  const { updateChild } = useChildren();
  const showToast = useToast();
  const confirmDelete = useConfirmDelete();
  const [date, setDate] = useState(todayKey());
  const [weightKg, setWeightKg] = useState<number | ''>('');
  const [heightCm, setHeightCm] = useState<number | ''>('');
  const [headCm, setHeadCm] = useState<number | ''>('');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setDate(entry?.date ?? todayKey());
    setWeightKg(entry?.weightKg ?? '');
    setHeightCm(entry?.heightCm ?? '');
    setHeadCm(entry?.headCm ?? '');
    setNote(entry?.note ?? '');
    // Only reset when the modal opens.
  }, [isOpen]);

  const hasValue = weightKg !== '' || heightCm !== '' || headCm !== '';
  const isDateValid = Boolean(date) && date >= child.birthDate && date <= todayKey();
  const isValid =
    hasValue && isDateValid && inRange(weightKg, LIMITS.weightKg) && inRange(heightCm, LIMITS.heightCm) && inRange(headCm, LIMITS.headCm);

  const handleSave = () => {
    if (!isValid) return;
    const saved: ChildMeasurement = {
      id: entry?.id ?? createId(),
      date,
      weightKg: weightKg === '' ? undefined : weightKg,
      heightCm: heightCm === '' ? undefined : heightCm,
      headCm: headCm === '' ? undefined : headCm,
      note: note.trim() || undefined,
    };
    updateChild(child.id, (current) => {
      // One measurement per date: saving on a date that already has one replaces it.
      const others = current.measurements.filter((m) => m.id !== saved.id && m.date !== saved.date);
      return { ...current, measurements: [...others, saved] };
    });
    showToast('Measurement saved');
    onClose();
  };

  const handleDelete = async () => {
    if (!entry || !(await confirmDelete('This measurement'))) return;
    updateChild(child.id, (current) => ({ ...current, measurements: current.measurements.filter((m) => m.id !== entry.id) }));
    showToast('Measurement deleted');
    onClose();
  };

  const existingForDate = child.measurements.find((m) => m.date === date && m.id !== entry?.id);

  return (
    <Modal
      isOpen={isOpen}
      title={entry ? 'Edit measurement' : `Measure ${child.name}`}
      description="Fill in what you measured; every field is optional, but at least one is needed."
      size="sm"
      onClose={onClose}
      footer={
        <>
          {entry && (
            <Button variant="ghost" className="mr-auto text-rose-600 dark:text-rose-400" onClick={handleDelete}>
              Delete
            </Button>
          )}
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!isValid}>
            Save
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        <Field
          label="Date"
          error={date && !isDateValid ? 'Pick a date between the birth date and today.' : undefined}
          hint={existingForDate ? 'A measurement already exists for this date and will be replaced.' : undefined}
        >
          <TextInput type="date" value={date} min={child.birthDate} max={todayKey()} onChange={(e) => setDate(e.target.value)} />
        </Field>
        <Field label="Weight" error={inRange(weightKg, LIMITS.weightKg) ? undefined : 'Check the weight.'}>
          <NumberInput value={weightKg} step={0.01} onValueChange={setWeightKg} suffix="kg" autoFocus />
        </Field>
        <Field
          label="Length / height"
          hint="Under 2 years: measure lying down (length). From 2 years: standing (height)."
          error={inRange(heightCm, LIMITS.heightCm) ? undefined : 'Check the height.'}
        >
          <NumberInput value={heightCm} step={0.1} onValueChange={setHeightCm} suffix="cm" />
        </Field>
        <Field label="Head circumference (optional, under 5 years)" error={inRange(headCm, LIMITS.headCm) ? undefined : 'Check the value.'}>
          <NumberInput value={headCm} step={0.1} onValueChange={setHeadCm} suffix="cm" />
        </Field>
        <Field label="Note (optional)">
          <TextInput value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. Posyandu, after illness" />
        </Field>
      </div>
    </Modal>
  );
};
