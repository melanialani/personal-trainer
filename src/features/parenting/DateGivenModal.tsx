import { useEffect, useState, type ReactNode } from 'react';
import { todayKey } from '../../lib/date';
import { Button } from '../../shared/components/Button';
import { Field, TextInput } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';

interface DateGivenModalProps {
  isOpen: boolean;
  title: string;
  description?: ReactNode;
  /** Pre-filled date; '' = today. */
  initialDate: string;
  minDate: string;
  onSave: (date: string) => void;
  /** Shown when the item is already recorded. */
  onRemove?: () => void;
  onClose: () => void;
}

/** Asks when a vaccine / supplement was given. */
export const DateGivenModal = ({ isOpen, title, description, initialDate, minDate, onSave, onRemove, onClose }: DateGivenModalProps) => {
  const [date, setDate] = useState(todayKey());

  useEffect(() => {
    if (isOpen) setDate(initialDate || todayKey());
    // Only reset when the modal opens.
  }, [isOpen]);

  const isValid = Boolean(date) && date >= minDate && date <= todayKey();

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      description={description}
      size="sm"
      onClose={onClose}
      footer={
        <>
          {onRemove && (
            <Button variant="ghost" className="mr-auto text-rose-600 dark:text-rose-400" onClick={onRemove}>
              Mark as not given
            </Button>
          )}
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => isValid && onSave(date)} disabled={!isValid}>
            Save
          </Button>
        </>
      }
    >
      <Field label="Date given" error={date && !isValid ? 'Pick a date between the birth date and today.' : undefined}>
        <TextInput type="date" value={date} min={minDate} max={todayKey()} onChange={(e) => setDate(e.target.value)} autoFocus />
      </Field>
    </Modal>
  );
};
