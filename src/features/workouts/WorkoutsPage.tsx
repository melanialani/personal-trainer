import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../../shared/components/PageHeader';
import { RequireProfile } from '../../shared/components/RequireProfile';
import { Tabs } from '../../shared/components/Tabs';
import { ExerciseLibraryTab } from './ExerciseLibraryTab';
import { WorkoutHistoryTab } from './WorkoutHistoryTab';
import { WorkoutPlanTab } from './WorkoutPlanTab';

type WorkoutTab = 'plan' | 'log' | 'library';

const TABS: { value: WorkoutTab; label: string }[] = [
  { value: 'plan', label: 'Weekly plan' },
  { value: 'log', label: 'Activity' },
  { value: 'library', label: 'Exercises' },
];

export const WorkoutsPage = () => {
  const [params, setParams] = useSearchParams();
  const tab = (TABS.find((t) => t.value === params.get('tab'))?.value ?? 'plan') as WorkoutTab;

  return (
    <RequireProfile>
      <PageHeader
        title="Workouts"
        description="Your weekly training program, activity log and how-to guides."
        actions={<Tabs tabs={TABS} value={tab} onChange={(value) => setParams({ tab: value }, { replace: true })} />}
      />
      {tab === 'plan' && <WorkoutPlanTab />}
      {tab === 'log' && <WorkoutHistoryTab />}
      {tab === 'library' && <ExerciseLibraryTab />}
    </RequireProfile>
  );
};
