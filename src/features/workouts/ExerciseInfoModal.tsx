import { EQUIPMENT_LABELS, MUSCLE_LABELS, type Exercise } from '../../data/exercises';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { Modal } from '../../shared/components/Modal';
import { ExerciseDemo } from './ExerciseDemo';

interface ExerciseInfoModalProps {
  exercise: Exercise | null;
  onClose: () => void;
}

export const ExerciseInfoModal = ({ exercise, onClose }: ExerciseInfoModalProps) => (
  <Modal
    isOpen={exercise !== null}
    title={exercise?.name ?? ''}
    size="md"
    onClose={onClose}
    footer={
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
    }
  >
    {exercise && <ExerciseDetails exercise={exercise} isAnimated />}
  </Modal>
);

export const ExerciseDetails = ({ exercise, isAnimated = false }: { exercise: Exercise; isAnimated?: boolean }) => (
  <div className="space-y-3">
    <ExerciseDemo exercise={exercise} isAnimated={isAnimated} />
    <div className="flex flex-wrap gap-1.5">
      <Badge tone="brand">{MUSCLE_LABELS[exercise.muscle]}</Badge>
      {exercise.equipment.length === 0 ? (
        <Badge>Bodyweight</Badge>
      ) : (
        exercise.equipment.map((item) => <Badge key={item}>{EQUIPMENT_LABELS[item]}</Badge>)
      )}
      <Badge tone="info">{exercise.type}</Badge>
      {exercise.isFloorWork && <Badge>Needs mat</Badge>}
      {exercise.usesFurniture && <Badge>Chair / table / stairs</Badge>}
      {exercise.isHighImpact ? <Badge tone="warning">Jumping</Badge> : exercise.type === 'cardio' && <Badge tone="success">Low impact</Badge>}
      {exercise.minLevel && <Badge tone="warning">{exercise.minLevel === 'advanced' ? 'Advanced' : 'Intermediate+'}</Badge>}
    </div>
    <ol className="list-decimal space-y-1.5 pl-5 text-sm text-slate-600">
      {exercise.steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  </div>
);
