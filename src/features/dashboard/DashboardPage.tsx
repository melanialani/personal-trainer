import { CheckCircle2, Dumbbell, Flame, NotebookPen, Plus, Scale, UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Exercise } from '../../data/exercises';
import { effectiveWeeklyRateKg, goalProgress, projectedGoalDate } from '../../lib/calc';
import { addDays, formatDate, formatLongDate, todayKey, weekdayIndex } from '../../lib/date';
import { formatKg, formatNumber } from '../../lib/format';
import { MEAL_LABELS } from '../../lib/meals';
import { plannedItemsNutrition } from '../../lib/mealPlanGenerator';
import { estimateSession } from '../../lib/workoutGenerator';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { EmptyState } from '../../shared/components/EmptyState';
import { PageHeader } from '../../shared/components/PageHeader';
import { ProgressBar } from '../../shared/components/ProgressBar';
import { TextLink } from '../../shared/components/TextLink';
import { useProfile } from '../../shared/hooks/useProfile';
import { useAppData } from '../../store/AppDataContext';
import { DaySummaryCard } from '../diary/DaySummaryCard';
import { useDaySummary } from '../diary/useDaySummary';
import { AddFoodModal } from '../foods/AddFoodModal';
import { useLogPlannedMeals } from '../meal-plan/useLogPlannedMeals';
import { WaterTracker } from '../water/WaterTracker';
import { WeightChart } from '../weight/WeightChart';
import { WeightEntryModal } from '../weight/WeightEntryModal';
import { ExerciseInfoModal } from '../workouts/ExerciseInfoModal';
import { PlanDayExercises } from '../workouts/PlanDayExercises';
import { SessionEstimate } from '../workouts/SessionEstimate';
import { WorkoutLogModal } from '../workouts/WorkoutLogModal';
import { WeeklyCaloriesChart } from './WeeklyCaloriesChart';
import { WelcomeScreen } from './WelcomeScreen';

const greeting = () => {
  const hour = new Date().getHours();
  if (hour < 11) return 'Good morning';
  if (hour < 15) return 'Good afternoon';
  if (hour < 19) return 'Good evening';
  return 'Good night';
};

/** Consecutive days (ending today or yesterday) with at least one food entry. */
const loggingStreak = (dates: Set<string>): number => {
  let day = dates.has(todayKey()) ? todayKey() : addDays(todayKey(), -1);
  let streak = 0;
  while (dates.has(day)) {
    streak += 1;
    day = addDays(day, -1);
  }
  return streak;
};

export const DashboardPage = () => {
  const { data } = useAppData();
  return data.profile ? <Dashboard /> : <WelcomeScreen />;
};

const Dashboard = () => {
  const { data, targets } = useAppData();
  const today = todayKey();
  const { totals, burned, workouts } = useDaySummary(today);
  const logPlannedMeals = useLogPlannedMeals();
  const navigate = useNavigate();
  const [isAddFoodOpen, setIsAddFoodOpen] = useState(false);
  const [isWeightOpen, setIsWeightOpen] = useState(false);
  const [isWorkoutLogOpen, setIsWorkoutLogOpen] = useState(false);
  const [shownExercise, setShownExercise] = useState<Exercise | null>(null);
  const profile = useProfile();

  if (!targets) return null;

  const streak = loggingStreak(new Set(data.foodLog.map((entry) => entry.date)));
  const todayPlan = data.workoutPlan?.days[weekdayIndex(today)];
  const todayMenu = data.mealPlan?.days.find((day) => day.date === today);
  const loggedMeals = new Set(data.foodLog.filter((e) => e.date === today).map((e) => e.meal));
  const progress = goalProgress(profile, targets.weightKg);
  const goalDate = projectedGoalDate(profile, targets.weightKg, effectiveWeeklyRateKg(targets));
  const todayEstimate = todayPlan ? estimateSession(todayPlan.exercises, targets.weightKg) : null;
  const hasWeighedToday = data.weights.some((w) => w.date === today);

  return (
    <>
      <PageHeader
        eyebrow={formatLongDate(today)}
        title={`${greeting()}, ${profile.name}`}
        actions={
          <>
            {streak > 1 && (
              <Badge tone="warning">
                <Flame size={12} /> {streak}-day logging streak
              </Badge>
            )}
            {!hasWeighedToday && (
              <Button size="sm" variant="secondary" icon={<Scale size={14} />} onClick={() => setIsWeightOpen(true)}>
                Log weight
              </Button>
            )}
            <Button size="sm" icon={<Plus size={14} />} onClick={() => setIsAddFoodOpen(true)}>
              Add food
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DaySummaryCard
            title="Today"
            totals={totals}
            burned={burned}
            targets={targets}
            action={
              <TextLink to="/diary" className="text-xs">
                Open diary →
              </TextLink>
            }
          />
        </div>

        <Card
          icon={<Dumbbell size={16} className="text-brand-700 dark:text-brand-400" />}
          title="Today’s workout"
          subtitle={todayPlan?.title}
          action={
            workouts.length > 0 ? (
              <Badge tone="success">
                <CheckCircle2 size={12} /> Done
              </Badge>
            ) : undefined
          }
        >
          {!todayPlan ? (
            <EmptyState
              title="No workout plan yet"
              action={
                <Button size="sm" onClick={() => navigate('/workouts')}>
                  Create a plan
                </Button>
              }
            />
          ) : todayPlan.isRest ? (
            <div className="text-sm text-slate-500">
              <p>Rest day — recovery is when muscles grow. A light walk is a great idea.</p>
              <Button size="sm" variant="secondary" className="mt-3" onClick={() => setIsWorkoutLogOpen(true)}>
                Log an activity
              </Button>
            </div>
          ) : (
            <>
              {todayEstimate && <SessionEstimate minutes={todayEstimate.minutes} kcal={todayEstimate.kcal} className="mb-1" />}
              <PlanDayExercises exercises={todayPlan.exercises.slice(0, 5)} onShowExercise={setShownExercise} />
              {todayPlan.exercises.length > 5 && (
                <TextLink to="/workouts" className="mt-1 block text-xs">
                  +{todayPlan.exercises.length - 5} more exercises
                </TextLink>
              )}
              <Button size="sm" className="mt-3 w-full" onClick={() => setIsWorkoutLogOpen(true)}>
                Log this workout
              </Button>
            </>
          )}
        </Card>

        <Card
          title="Weight"
          action={
            <TextLink to="/weight" className="text-xs">
              Details →
            </TextLink>
          }
        >
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold tabular-nums text-slate-900">{formatKg(targets.weightKg)}</p>
              <p className="text-xs text-slate-500">Target {formatKg(profile.targetWeightKg)}</p>
            </div>
            {goalDate && (
              <div className="text-right text-xs text-slate-500">
                Est. goal date
                <p className="text-sm font-semibold text-slate-800">{formatDate(goalDate)}</p>
              </div>
            )}
          </div>
          <div className="mt-3">
            <ProgressBar value={progress} />
            <p className="mt-1 text-xs text-slate-500">{formatNumber(progress * 100)}% of the way to your goal</p>
          </div>
          <div className="mt-3">
            <WeightChart weights={data.weights} targetKg={profile.targetWeightKg} rangeDays={30} height={140} />
          </div>
        </Card>

        <Card title="Last 7 days" subtitle={`Calories eaten vs. target (${formatNumber(targets.kcal)} kcal)`}>
          <WeeklyCaloriesChart foodLog={data.foodLog} targetKcal={targets.kcal} />
        </Card>

        <div className="space-y-5">
          <WaterTracker date={today} />
          <Card
            icon={<UtensilsCrossed size={16} className="text-brand-700 dark:text-brand-400" />}
            title="Today’s menu"
            action={
              <TextLink to="/meal-plan" className="text-xs">
                Planner →
              </TextLink>
            }
          >
            {!todayMenu ? (
              <p className="text-sm text-slate-500">
                No menu for today. <TextLink to="/meal-plan">Generate a meal plan</TextLink>
              </p>
            ) : (
              <ul className="space-y-2">
                {todayMenu.meals.map((meal) => (
                  <li key={meal.meal} className="flex items-center gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">{MEAL_LABELS[meal.meal]}</p>
                      <p className="truncate text-sm text-slate-800">{meal.title}</p>
                    </div>
                    <span className="text-xs tabular-nums text-slate-500">{formatNumber(plannedItemsNutrition(meal.items, data.customFoods).kcal)} kcal</span>
                    {loggedMeals.has(meal.meal) ? (
                      <CheckCircle2 size={18} className="text-brand-500" aria-label="Logged" />
                    ) : (
                      <button
                        type="button"
                        onClick={() => logPlannedMeals(today, [meal])}
                        className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-brand-700 dark:hover:text-brand-400"
                        aria-label={`Log ${MEAL_LABELS[meal.meal]} to diary`}
                        title="Log to diary"
                      >
                        <NotebookPen size={16} />
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      </div>

      <AddFoodModal isOpen={isAddFoodOpen} onClose={() => setIsAddFoodOpen(false)} />
      <WeightEntryModal isOpen={isWeightOpen} onClose={() => setIsWeightOpen(false)} />
      <WorkoutLogModal isOpen={isWorkoutLogOpen} planDay={todayPlan && !todayPlan.isRest ? todayPlan : null} onClose={() => setIsWorkoutLogOpen(false)} />
      <ExerciseInfoModal exercise={shownExercise} onClose={() => setShownExercise(null)} />
    </>
  );
};
