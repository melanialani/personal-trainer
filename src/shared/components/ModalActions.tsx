import { ArrowLeft, Trash2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from './Button';

interface ModalActionsProps {
  onCancel: () => void;
  onSave: () => void;
  /** Main button text; keep it short ("Save", "Add to Lunch"). */
  saveLabel?: ReactNode;
  isSaveDisabled?: boolean;
  /** Shown on the left in red, only when editing something that exists. */
  onDelete?: () => void;
  deleteLabel?: string;
  /** Shown on the left, for multi-step modals. */
  onBack?: () => void;
}

/**
 * The one footer layout for every form modal: [Back | Delete] on the left, Cancel + Save on the right.
 * Use it as the Modal `footer` so Save always sits in the same place with the same look.
 */
export const ModalActions = ({ onCancel, onSave, saveLabel = 'Save', isSaveDisabled = false, onDelete, deleteLabel = 'Delete', onBack }: ModalActionsProps) => (
  <>
    {onBack && (
      <Button variant="ghost" icon={<ArrowLeft size={16} />} onClick={onBack} className="mr-auto">
        Back
      </Button>
    )}
    {onDelete && (
      <Button variant="dangerGhost" icon={<Trash2 size={16} />} onClick={onDelete} className={onBack ? '' : 'mr-auto'}>
        {deleteLabel}
      </Button>
    )}
    <Button variant="secondary" onClick={onCancel}>
      Cancel
    </Button>
    <Button onClick={onSave} disabled={isSaveDisabled}>
      {saveLabel}
    </Button>
  </>
);
