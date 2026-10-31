import { useEffect, useState } from 'react';
import { addMonths, todayKey } from '../../lib/date';
import { createId } from '../../lib/id';
import { MAX_CHILD_MONTHS } from '../../lib/child';
import { Button } from '../../shared/components/Button';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { Field, Segmented, TextInput } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';
import { useToast } from '../../shared/components/ToastProvider';
import type { Child, Sex } from '../../types';
import { useChildren } from './useChildren';

interface ChildFormModalProps {
  isOpen: boolean;
  child?: Child | null;
  onClose: () => void;
}

const SEX_OPTIONS: { value: Sex; label: string }[] = [
  { value: 'female', label: 'Girl' },
  { value: 'male', label: 'Boy' },
];

export const ChildFormModal = ({ isOpen, child, onClose }: ChildFormModalProps) => {
  const { saveChild, removeChild } = useChildren();
  const confirmDelete = useConfirmDelete();
  const showToast = useToast();
  const [name, setName] = useState('');
  const [sex, setSex] = useState<Sex>('female');
  const [birthDate, setBirthDate] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setName(child?.name ?? '');
    setSex(child?.sex ?? 'female');
    setBirthDate(child?.birthDate ?? '');
    // Only reset when the modal opens.
  }, [isOpen]);

  const today = todayKey();
  const minBirthDate = addMonths(today, -MAX_CHILD_MONTHS - 12);
  const isValid = name.trim().length > 0 && Boolean(birthDate) && birthDate <= today && birthDate >= minBirthDate;

  const handleSave = () => {
    if (!isValid) return;
    saveChild({
      id: child?.id ?? createId(),
      name: name.trim(),
      sex,
      birthDate,
      measurements: child?.measurements ?? [],
      vaccines: child?.vaccines ?? {},
      supplements: child?.supplements ?? [],
      milestones: child?.milestones ?? {},
    });
    showToast(child ? 'Child updated' : 'Child added');
    onClose();
  };

  const handleDelete = async () => {
    if (!child) return;
    if (!(await confirmDelete(`${child.name} and all of their records`))) return;
    removeChild(child.id);
    showToast('Child removed');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title={child ? 'Edit child' : 'Add child'}
      description="Age is calculated from the birth date, so every schedule follows your child automatically."
      size="sm"
      onClose={onClose}
      footer={
        <>
          {child && (
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
        <Field label="Name or nickname">
          <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Kenzo" autoFocus maxLength={40} />
        </Field>
        <Field label="Sex" hint="Growth standards differ for boys and girls.">
          <Segmented value={sex} options={SEX_OPTIONS} onChange={setSex} />
        </Field>
        <Field label="Birth date" error={birthDate && birthDate > today ? 'Birth date cannot be in the future.' : undefined}>
          <TextInput type="date" value={birthDate} min={minBirthDate} max={today} onChange={(e) => setBirthDate(e.target.value)} />
        </Field>
      </div>
    </Modal>
  );
};
