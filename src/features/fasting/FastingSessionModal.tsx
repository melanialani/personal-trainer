import { useEffect, useState } from 'react';
import { FASTING_PRESETS, activeSession, fastingLabel, formatDuration, hoursBetween, nowDateTimeKey } from '../../lib/fasting';
import { createId } from '../../lib/id';
import { Button } from '../../shared/components/Button';
import { Checkbox, Field, Select, TextInput } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';
import { useToast } from '../../shared/components/ToastProvider';
import type { FastingSession } from '../../types';
import { useFasting } from './useFasting';

/** Longest fast accepted (also the data limit in `normalizeData`). */
const MAX_FAST_HOURS = 72;

interface FastingSessionModalProps {
  isOpen: boolean;
  /** null = log a past fast. */
  session: FastingSession | null;
  onClose: () => void;
}

export const FastingSessionModal = ({ isOpen, session, onClose }: FastingSessionModalProps) => {
  const { fasting, saveSession } = useFasting();
  const showToast = useToast();
  const [startAt, setStartAt] = useState('');
  const [endAt, setEndAt] = useState('');
  const [targetHours, setTargetHours] = useState(String(fasting.targetHours));
  const [isBinge, setIsBinge] = useState(false);
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setStartAt(session?.startAt ?? '');
    setEndAt(session?.endAt ?? (session ? '' : nowDateTimeKey()));
    setTargetHours(String(session?.targetHours ?? fasting.targetHours));
    setIsBinge(session?.isBinge ?? false);
    setNote(session?.note ?? '');
    // Only reset when the modal opens.
  }, [isOpen]);

  const now = nowDateTimeKey();
  const running = activeSession(fasting.sessions);
  const isRunning = !endAt;
  const hours = startAt && endAt ? hoursBetween(startAt, endAt) : 0;

  let error: string | undefined;
  if (startAt && startAt > now) error = 'The start cannot be in the future.';
  else if (endAt && endAt > now) error = 'The end cannot be in the future.';
  else if (startAt && endAt && endAt <= startAt) error = 'The end must be after the start.';
  else if (startAt && hoursBetween(startAt, endAt || new Date()) > MAX_FAST_HOURS) error = `A fast can be at most ${MAX_FAST_HOURS} hours.`;
  else if (isRunning && running && running.id !== session?.id) error = 'Another fast is still running. Add an end time, or end that fast first.';

  const isValid = Boolean(startAt) && !error;

  const handleSave = () => {
    if (!isValid) return;
    saveSession({
      id: session?.id ?? createId(),
      date: startAt.slice(0, 10),
      startAt,
      endAt: endAt || undefined,
      targetHours: Number(targetHours),
      isBinge: isBinge || undefined,
      note: note.trim() || undefined,
    });
    showToast('Fast saved');
    onClose();
  };

  const targetOptions = FASTING_PRESETS.map((preset) => ({ value: String(preset.hours), label: `${preset.label} (${preset.hours} h fast)` }));
  if (!targetOptions.some((option) => option.value === targetHours)) targetOptions.push({ value: targetHours, label: fastingLabel(Number(targetHours)) });

  return (
    <Modal
      isOpen={isOpen}
      title={session ? 'Edit fast' : 'Log a past fast'}
      description="Use this when you forgot to tap start or end. Times are in your local time."
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
        <Field label="Fast started (last bite)">
          <TextInput type="datetime-local" value={startAt} max={now} onChange={(e) => setStartAt(e.target.value)} />
        </Field>
        <Field
          label="Fast ended (first meal)"
          error={error}
          hint={isRunning ? 'Leave empty while the fast is still running.' : hours > 0 ? `Length: ${formatDuration(hours)}` : undefined}
        >
          <TextInput type="datetime-local" value={endAt} min={startAt} max={now} onChange={(e) => setEndAt(e.target.value)} />
        </Field>
        <Field label="Target">
          <Select value={targetHours} options={targetOptions} onValueChange={setTargetHours} />
        </Field>
        <Checkbox label="Very hungry or overate when breaking the fast" checked={isBinge} onChange={setIsBinge} />
        <Field label="Note (optional)">
          <TextInput value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. headache, broke fast early for dinner" />
        </Field>
      </div>
    </Modal>
  );
};
