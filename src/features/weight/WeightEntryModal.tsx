import { useEffect, useState } from 'react';
import { latestWeight } from '../../lib/calc';
import { todayKey } from '../../lib/date';
import { createId } from '../../lib/id';
import { Button } from '../../shared/components/Button';
import { Field, NumberInput, TextInput } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';
import { useToast } from '../../shared/components/ToastProvider';
import { useAppData } from '../../store/AppDataContext';
import type { WeightEntry } from '../../types';

interface WeightEntryModalProps {
  isOpen: boolean;
  entry?: WeightEntry | null;
  onClose: () => void;
}

export const WeightEntryModal = ({ isOpen, entry, onClose }: WeightEntryModalProps) => {
  const { data, upsert, remove } = useAppData();
  const showToast = useToast();
  const [date, setDate] = useState(todayKey());
  const [weightKg, setWeightKg] = useState<number | ''>('');
  const [waistCm, setWaistCm] = useState<number | ''>('');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setDate(entry?.date ?? todayKey());
    setWeightKg(entry?.weightKg ?? latestWeight(data.weights)?.weightKg ?? '');
    setWaistCm(entry?.waistCm ?? '');
    setNote(entry?.note ?? '');
    // Only reset when the modal opens.
  }, [isOpen]);

  const isValid = weightKg !== '' && weightKg >= 30 && weightKg <= 300 && Boolean(date);
  const existingForDate = data.weights.find((w) => w.date === date && w.id !== entry?.id);

  const handleSave = () => {
    if (!isValid) return;
    upsert('weights', {
      // One entry per day: logging again on the same date overwrites it.
      id: entry?.id ?? existingForDate?.id ?? createId(),
      date,
      weightKg: Number(weightKg),
      waistCm: waistCm === '' ? undefined : waistCm,
      note: note.trim() || undefined,
    });
    if (entry && existingForDate) remove('weights', existingForDate.id);
    showToast('Weight saved');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title={entry ? 'Edit weigh-in' : 'Log weight'}
      description="Weigh yourself in the morning, after the bathroom and before eating, for consistent results."
      size="sm"
      onClose={onClose}
      footer={
        <>
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
        <Field label="Date" hint={existingForDate ? 'An entry already exists for this date and will be replaced.' : undefined}>
          <TextInput type="date" value={date} max={todayKey()} onChange={(e) => setDate(e.target.value)} />
        </Field>
        <Field label="Weight">
          <NumberInput value={weightKg} step={0.1} onValueChange={setWeightKg} suffix="kg" autoFocus />
        </Field>
        <Field label="Waist (optional)">
          <NumberInput value={waistCm} step={0.5} onValueChange={setWaistCm} suffix="cm" />
        </Field>
        <Field label="Note (optional)">
          <TextInput value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. after a salty dinner" />
        </Field>
      </div>
    </Modal>
  );
};
