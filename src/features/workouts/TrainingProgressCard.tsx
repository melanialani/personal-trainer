import { TrendingUp } from 'lucide-react';
import { pluralize } from '../../lib/format';
import { NEXT_LEVEL, PREVIOUS_LEVEL, type TrainingProgress } from '../../lib/trainingProgress';
import { FITNESS_LEVEL_OPTIONS } from '../../lib/workoutGenerator';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { Notice } from '../../shared/components/Notice';
import { ProgressBar } from '../../shared/components/ProgressBar';
import type { FitnessLevel } from '../../types';

const levelLabel = (level: FitnessLevel) => FITNESS_LEVEL_OPTIONS.find((option) => option.value === level)?.label ?? level;

interface TrainingProgressCardProps {
  progress: TrainingProgress;
  onChangeLevel: (level: FitnessLevel) => void;
}

/** Current stage within the fitness level, how close the next step is, and level up / back suggestions. */
export const TrainingProgressCard = ({ progress, onChangeLevel }: TrainingProgressCardProps) => {
  const { stage, stageCount, weeksDone, weeksNeeded, minSessionsPerWeek, sessionsThisWeek } = progress;
  const nextLevel = NEXT_LEVEL[stage.level];
  const previousLevel = PREVIOUS_LEVEL[stage.level];
  const isLastStage = stage.index === stageCount - 1;

  return (
    <Card
      className="mb-4"
      title={
        <span className="flex items-center gap-2">
          <TrendingUp size={16} className="text-brand-700 dark:text-brand-400" /> Your progression
        </span>
      }
      subtitle={`${levelLabel(stage.level)} · stage ${stage.index + 1} of ${stageCount}: ${stage.label}`}
    >
      <p className="text-sm text-slate-600">{stage.description}</p>

      {weeksNeeded > 0 && !progress.isReadyForNextLevel && (
        <div className="mt-3">
          <div className="mb-1 flex justify-between text-xs text-slate-500">
            <span>
              {weeksDone} of {pluralize(weeksNeeded, 'consistent week')} {isLastStage ? `until ${levelLabel(nextLevel ?? stage.level)}` : 'to the next stage'}
            </span>
            <span>
              This week: {sessionsThisWeek}/{minSessionsPerWeek}
            </span>
          </div>
          <ProgressBar value={weeksDone / weeksNeeded} />
          <p className="mt-2 text-xs text-slate-400">
            A week counts when you log at least {pluralize(minSessionsPerWeek, 'workout')} and most of them don&apos;t feel too hard. Two weeks
            without training steps the plan back one stage.
          </p>
        </div>
      )}

      {progress.isReadyForNextLevel && nextLevel && (
        <div className="mt-3 flex flex-col gap-3 rounded-xl border border-brand-100 bg-brand-50/60 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-700">
            {pluralize(weeksDone, 'consistent week')} at the last {levelLabel(stage.level).toLowerCase()} stage — you&apos;re ready for{' '}
            {levelLabel(nextLevel).toLowerCase()} workouts.
          </p>
          <Button size="sm" onClick={() => onChangeLevel(nextLevel)}>
            Move up to {levelLabel(nextLevel)}
          </Button>
        </div>
      )}

      {progress.isStruggling && (
        <Notice className="mt-3">
          Your last three sessions felt too hard, so the plan stays at this stage. Rest a little longer between sets or do fewer reps.
          {previousLevel && (
            <button type="button" onClick={() => onChangeLevel(previousLevel)} className="mt-1 block font-medium underline">
              Switch back to {levelLabel(previousLevel)}
            </button>
          )}
        </Notice>
      )}
    </Card>
  );
};
