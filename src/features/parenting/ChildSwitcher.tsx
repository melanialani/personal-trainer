import { Pencil, Plus } from 'lucide-react';
import { useState } from 'react';
import { childAgeMonths, formatChildAge } from '../../lib/child';
import { Button, IconButton } from '../../shared/components/Button';
import { Chip } from '../../shared/components/Chip';
import type { Child } from '../../types';
import { ChildFormModal } from './ChildFormModal';
import { useChildren } from './useChildren';

/** Picks the child shown on the parenting pages; also opens the add / edit form. */
export const ChildSwitcher = () => {
  const { children, activeChild, setActiveChild } = useChildren();
  const [editing, setEditing] = useState<Child | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = (child: Child | null) => {
    setEditing(child);
    setIsFormOpen(true);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {children.map((child) => (
        <Chip key={child.id} isActive={child.id === activeChild?.id} onClick={() => setActiveChild(child.id)}>
          {child.name} · {formatChildAge(childAgeMonths(child))}
        </Chip>
      ))}
      {activeChild && (
        <IconButton label={`Edit ${activeChild.name}`} onClick={() => openForm(activeChild)}>
          <Pencil size={15} />
        </IconButton>
      )}
      <Button size="sm" variant={children.length ? 'secondary' : 'primary'} icon={<Plus size={14} />} onClick={() => openForm(null)}>
        Add child
      </Button>
      <ChildFormModal isOpen={isFormOpen} child={editing} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};
