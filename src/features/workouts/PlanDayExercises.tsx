import { Info } from 'lucide-react';
import { exerciseById, type Exercise } from '../../data/exercises';
import type { PlannedExercise } from '../../types';

interface PlanDayExercisesProps {
  exercises: PlannedExercise[];
  onShowExercise: (exercise: Exercise) => void;
}

/** List of planned exercises with sets × reps; tap one to see how to do it. */
export const PlanDayExercises = ({ exercises, onShowExercise }: PlanDayExercisesProps) => (
  <ul className="divide-y divide-slate-100">
    {exercises.map((item, index) => {
      const exercise = exerciseById(item.exerciseId);
      if (!exercise) return null;
      return (
        <li key={`${item.exerciseId}-${index}`}>
          <button type="button" onClick={() => onShowExercise(exercise)} className="flex w-full items-center gap-3 py-2 text-left hover:bg-slate-50">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-500">
              {index + 1}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-slate-800">{exercise.name}</span>
              <span className="block text-xs text-slate-500">
                {item.sets > 1 ? `${item.sets} × ${item.reps}` : item.reps}
                {item.restSec > 0 && ` · rest ${item.restSec}s`}
              </span>
            </span>
            <Info size={14} className="shrink-0 text-slate-300" />
          </button>
        </li>
      );
    })}
  </ul>
);
