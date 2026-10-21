import { CheckCircle2, Dumbbell, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { equipmentSummary, type Exercise } from '../../data/exercises';
import { GOAL_OPTIONS } from '../../lib/calc';
import { addDays, startOfWeek, todayKey, WEEKDAY_NAMES, weekdayIndex } from '../../lib/date';
import { stageIndexFromId } from '../../lib/trainingProgress';
import {
  assessTrainingForProfile,
  estimateSession,
  FITNESS_LEVEL_OPTIONS,
  generateWorkoutPlan,
  planOutdatedReason,
  restDayTip,
} from '../../lib/workoutGenerator';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useConfirm } from '../../shared/components/ConfirmProvider';
import { EmptyState } from '../../shared/components/EmptyState';
import { Notice } from '../../shared/components/Notice';
import { TextLink } from '../../shared/components/TextLink';
import { useToast } from '../../shared/components/ToastProvider';
import { useProfile } from '../../shared/hooks/useProfile';
import { useAppData } from '../../store/AppDataContext';
import type { FitnessLevel, WorkoutPlanDay } from '../../types';
import { ExerciseInfoModal } from './ExerciseInfoModal';
import { PlanDayExercises } from './PlanDayExercises';
import { SessionEstimate } from './SessionEstimate';
import { TrainingProgressCard } from './TrainingProgressCard';
import { WorkoutLogModal } from './WorkoutLogModal';

export const WorkoutPlanTab = () => {
  const { data, targets, update } = useAppData();
  const confirm = useConfirm();
  const showToast = useToast();
  const [shownExercise, setShownExercise] = useState<Exercise | null>(null);
  const [loggingDay, setLoggingDay] = useState<WorkoutPlanDay | null>(null);
  const profile = useProfile();
  const plan = data.workoutPlan;
  const today = todayKey();
  const todayIndex = weekdayIndex(today);
  const weekStart = startOfWeek(today);
  const weightKg = targets?.weightKg ?? profile.startWeightKg;
  const training = assessTrainingForProfile(profile, data.weights, data.workoutLog);
  const { preferences } = training;

  const generatePlan = () => update((current) => ({ ...current, workoutPlan: generateWorkoutPlan(training, profile.goal) }));

  const handleGenerate = async () => {
    if (plan) {
      const isConfirmed = await confirm({
        title: 'Generate a new plan?',
        message: 'Your current weekly plan will be replaced using the training preferences in your profile.',
        confirmLabel: 'Generate',
      });
      if (!isConfirmed) return;
    }
    generatePlan();
    showToast('New workout plan ready');
  };

  const handleUpdatePlan = () => {
    generatePlan();
    showToast('Plan updated');
  };

  const handleChangeLevel = async (level: FitnessLevel) => {
    const label = FITNESS_LEVEL_OPTIONS.find((option) => option.value === level)?.label ?? level;
    const isConfirmed = await confirm({
      title: `Switch to ${label}?`,
      message: 'Your weekly plan will be rebuilt for the new level. Progression toward the next level starts counting from today.',
      confirmLabel: 'Switch',
    });
    if (!isConfirmed) return;
    update((current) => {
      if (!current.profile) return current;
      const nextProfile = { ...current.profile, workout: { ...current.profile.workout, level, levelSince: todayKey() } };
      const nextTraining = assessTrainingForProfile(nextProfile, current.weights, current.workoutLog);
      return { ...current, profile: nextProfile, workoutPlan: generateWorkoutPlan(nextTraining, nextProfile.goal) };
    });
    showToast(`Plan updated for ${label}`);
  };

  const isLoggedOn = (weekday: number) => {
    const date = addDays(weekStart, weekday);
    return data.workoutLog.some((workout) => workout.date === date);
  };

  const preferencesSummary = (
    <div className="flex flex-wrap gap-1.5">
      <Badge tone="brand">{GOAL_OPTIONS.find((g) => g.value === profile.goal)?.label}</Badge>
      <Badge>{FITNESS_LEVEL_OPTIONS.find((option) => option.value === profile.workout.level)?.label}</Badge>
      <Badge>{equipmentSummary(preferences)}</Badge>
      {training.isLowImpact && <Badge tone="info">Low impact</Badge>}
      <Badge>
        {preferences.daysPerWeek} days/week · {preferences.minutesPerSession} min{preferences.isCustomSchedule ? '' : ' (recommended)'}
      </Badge>
    </div>
  );

  if (!plan) {
    return (
      <Card>
        <EmptyState
          icon={<Dumbbell size={22} />}
          title="No workout plan yet"
          description={
            <>
              We will build a weekly program from your training preferences. <TextLink to="/profile">Edit preferences</TextLink>
            </>
          }
          action={
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs text-slate-500">
                Starting stage: <span className="font-medium text-slate-700">{training.stage.label}</span> — {training.stage.description}
              </p>
              {preferencesSummary}
              <Button onClick={handleGenerate}>Generate my plan</Button>
            </div>
          }
        />
      </Card>
    );
  }

  const outdatedReason = planOutdatedReason(plan, profile.goal, training);

  return (
    <>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {preferencesSummary}
        <Button variant="secondary" size="sm" icon={<RefreshCw size={14} />} onClick={handleGenerate}>
          Regenerate plan
        </Button>
      </div>
      <TrainingProgressCard progress={training.progress} onChangeLevel={handleChangeLevel} />
      {outdatedReason === 'stage' && (
        <Notice className="mb-4">
          {training.progress.stage.index > stageIndexFromId(plan.stageId)
            ? `Nice work — your workout log moved you up to the ${training.stage.label} stage.`
            : `After a break, the plan eases back to the ${training.stage.label} stage.`}{' '}
          <button
            type="button"
            className="font-medium underline"
            onClick={handleUpdatePlan}
          >
            Update my plan
          </button>
        </Notice>
      )}
      {outdatedReason === 'settings' && (
        <Notice className="mb-4">
          Your goal or training preferences changed since this plan was created.{' '}
          <button
            type="button"
            className="font-medium underline"
            onClick={handleUpdatePlan}
          >
            Update my plan
          </button>
        </Notice>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {plan.days.map((day) => {
          const isToday = day.weekday === todayIndex;
          const estimate = estimateSession(day.exercises, weightKg);
          const isDone = isLoggedOn(day.weekday);
          return (
            <Card
              key={day.weekday}
              className={isToday ? 'order-first ring-2 ring-brand-500 md:order-none' : ''}
              title={
                <span className="flex items-center gap-2">
                  {WEEKDAY_NAMES[day.weekday]}
                  {isToday && <Badge tone="brand">Today</Badge>}
                  {isDone && day.weekday <= todayIndex && (
                    <Badge tone="success">
                      <CheckCircle2 size={12} /> Done
                    </Badge>
                  )}
                </span>
              }
              subtitle={day.title}
            >
              {day.isRest ? (
                <p className="text-sm text-slate-500">{restDayTip(profile.workout.level)}</p>
              ) : (
                <>
                  <SessionEstimate minutes={estimate.minutes} kcal={estimate.kcal} className="mb-2" />
                  <PlanDayExercises exercises={day.exercises} onShowExercise={setShownExercise} />
                  <Button size="sm" variant={isToday ? 'primary' : 'secondary'} className="mt-3 w-full" onClick={() => setLoggingDay(day)}>
                    Log this workout
                  </Button>
                </>
              )}
            </Card>
          );
        })}
      </div>
      <ExerciseInfoModal exercise={shownExercise} onClose={() => setShownExercise(null)} />
      <WorkoutLogModal isOpen={loggingDay !== null} planDay={loggingDay} onClose={() => setLoggingDay(null)} />
    </>
  );
};
