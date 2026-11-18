import { useEffect, useState } from 'react';
import { TextArea } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';
import { ModalActions } from '../../shared/components/ModalActions';

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
        <ModalActions onCancel={onClose} onSave={() => onSave(comment)} isSaveDisabled={!comment.trim()} onDelete={initialComment ? onDelete : undefined} />
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
