import { Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../../shared/components/Button';
import { TextArea } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';

interface CommentModalProps {
  isOpen: boolean;
  /** e.g. "Yoh 9:5–7". */
  refLabel: string;
  initialComment: string;
  onSave: (comment: string) => void;
  onDelete: () => void;
  onClose: () => void;
}

export const CommentModal = ({ isOpen, refLabel, initialComment, onSave, onDelete, onClose }: CommentModalProps) => {
  const [comment, setComment] = useState(initialComment);

  useEffect(() => {
    if (isOpen) setComment(initialComment);
  }, [isOpen, initialComment]);

  return (
    <Modal
      isOpen={isOpen}
      title={initialComment ? 'Edit comment' : 'Add comment'}
      description={refLabel}
      onClose={onClose}
      footer={
        <>
          {initialComment && (
            <Button variant="ghost" icon={<Trash2 size={16} />} onClick={onDelete} className="mr-auto">
              Delete
            </Button>
          )}
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => onSave(comment)} disabled={!comment.trim()}>
            Save
          </Button>
        </>
      }
    >
      <TextArea
        rows={6}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your reflection, a question, a prayer intention…"
        aria-label="Comment"
        autoFocus
      />
    </Modal>
  );
};
