import { CheckCircle2, Dumbbell, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { equipmentSummary, type Exercise } from '../../data/exercises';
import { GOAL_OPTIONS } from '../../lib/calc';
import { addDays, startOfWeek, todayKey, WEEKDAY_NAMES, weekdayIndex } from '../../lib/date';
import { estimateSession, FITNESS_LEVEL_OPTIONS, generateWorkoutPlan, resolveWorkoutPreferences } from '../../lib/workoutGenerator';
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
import type { WorkoutPlanDay } from '../../types';
import { ExerciseInfoModal } from './ExerciseInfoModal';
import { PlanDayExercises } from './PlanDayExercises';
import { SessionEstimate } from './SessionEstimate';
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
  const preferences = resolveWorkoutPreferences(profile, data.weights);

  const handleGenerate = async () => {
    if (plan) {
      const isConfirmed = await confirm({
        title: 'Generate a new plan?',
        message: 'Your current weekly plan will be replaced using the training preferences in your profile.',
        confirmLabel: 'Generate',
      });
      if (!isConfirmed) return;
    }
    update((current) => ({ ...current, workoutPlan: generateWorkoutPlan(preferences, profile.goal) }));
    showToast('New workout plan ready');
  };

  const isLoggedOn = (weekday: number) => {
    const date = addDays(weekStart, weekday);
    return data.workoutLog.some((workout) => workout.date === date);
  };

  const preferencesSummary = (
    <div className="flex flex-wrap gap-1.5">
      <Badge tone="brand">{GOAL_OPTIONS.find((g) => g.value === profile.goal)?.label}</Badge>
      <Badge>{FITNESS_LEVEL_OPTIONS.find((option) => option.value === profile.workout.level)?.label}</Badge>
      <Badge>{equipmentSummary(preferences.equipment)}</Badge>
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
              {preferencesSummary}
              <Button onClick={handleGenerate}>Generate my plan</Button>
            </div>
          }
        />
      </Card>
    );
  }

  const isOutdated =
    plan.goal !== profile.goal || JSON.stringify(plan.preferences) !== JSON.stringify(preferences);

  return (
    <>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {preferencesSummary}
        <Button variant="secondary" size="sm" icon={<RefreshCw size={14} />} onClick={handleGenerate}>
          Regenerate plan
        </Button>
      </div>
      {isOutdated && (
        <Notice className="mb-4">Your goal or training preferences changed since this plan was created. Regenerate to match them.</Notice>
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
                <p className="text-sm text-slate-500">Rest day. A 20–30 minute walk or light stretching helps recovery.</p>
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
