import { Pencil, Trash2 } from 'lucide-react';
import { IconButton } from './Button';

interface RowActionsProps {
  /** Noun used in the button labels, e.g. "weigh-in" → "Edit weigh-in" / "Delete weigh-in". */
  itemLabel: string;
  onEdit: () => void;
  onDelete: () => void;
  className?: string;
}

/** Edit + delete icon buttons at the end of a list or table row. */
export const RowActions = ({ itemLabel, onEdit, onDelete, className = 'flex' }: RowActionsProps) => (
  <div className={className}>
    <IconButton label={`Edit ${itemLabel}`} onClick={onEdit}>
      <Pencil size={15} />
    </IconButton>
    <IconButton label={`Delete ${itemLabel}`} tone="danger" onClick={onDelete}>
      <Trash2 size={15} />
    </IconButton>
  </div>
);
