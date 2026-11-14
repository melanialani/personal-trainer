import { useEffect, useState } from 'react';
import { CYCLE_RULES } from '../../data/cycle';
import { diffDays, todayKey } from '../../lib/date';
import { createId } from '../../lib/id';
import { Button } from '../../shared/components/Button';
import { Field, TextInput } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';
import { useToast } from '../../shared/components/ToastProvider';
import { useAppData } from '../../store/AppDataContext';
import type { PeriodEntry } from '../../types';

interface PeriodEntryModalProps {
  isOpen: boolean;
  entry?: PeriodEntry | null;
  /** Start date to prefill for a new entry (e.g. the tapped calendar day). */
  defaultDate?: string;
  onClose: () => void;
}

export const PeriodEntryModal = ({ isOpen, entry, defaultDate, onClose }: PeriodEntryModalProps) => {
  const { data, upsert, remove } = useAppData();
  const showToast = useToast();
  const [date, setDate] = useState(todayKey());
  const [endDate, setEndDate] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setDate(entry?.date ?? defaultDate ?? todayKey());
    setEndDate(entry?.endDate ?? '');
    setNote(entry?.note ?? '');
    // Only reset when the modal opens.
  }, [isOpen]);

  const today = todayKey();
  const existingForDate = data.periods.find((p) => p.date === date && p.id !== entry?.id);
  const length = endDate ? diffDays(date, endDate) + 1 : 0;
  let error: string | undefined;
  if (date > today) error = 'The first day cannot be in the future.';
  else if (endDate && endDate < date) error = 'The last day must be on or after the first day.';
  else if (endDate && endDate > today) error = 'The last day cannot be in the future.';
  const isValid = Boolean(date) && !error;

  const handleSave = () => {
    if (!isValid) return;
    upsert('periods', {
      // One period per start date: logging the same date again replaces it.
      id: entry?.id ?? existingForDate?.id ?? createId(),
      date,
      endDate: endDate || undefined,
      note: note.trim() || undefined,
    });
    if (entry && existingForDate) remove('periods', existingForDate.id);
    showToast('Period saved');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title={entry ? 'Edit period' : 'Log period'}
      description="Day 1 is the first day of real bleeding (not spotting)."
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
        <Field label="First day" hint={existingForDate ? 'A period already starts on this date and will be replaced.' : undefined}>
          <TextInput type="date" value={date} max={today} onChange={(e) => setDate(e.target.value)} />
        </Field>
        <Field
          label="Last day (optional)"
          error={error}
          hint={
            length > CYCLE_RULES.maxPeriodDays
              ? `${length} days — periods longer than ${CYCLE_RULES.maxPeriodDays} days are worth checking with a doctor.`
              : length
                ? `${length} days`
                : 'Leave empty while it is still going.'
          }
        >
          <TextInput type="date" value={endDate} min={date} max={today} onChange={(e) => setEndDate(e.target.value)} />
        </Field>
        <Field label="Note (optional)">
          <TextInput value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. heavy flow, cramps, started a diet" />
        </Field>
      </div>
    </Modal>
  );
};
