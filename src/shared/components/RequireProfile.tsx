import { Target } from 'lucide-react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoadSampleData } from '../hooks/useLoadSampleData';
import { useAppData } from '../../store/AppDataContext';
import { Button } from './Button';
import { TextLink } from './TextLink';
import { Card } from './Card';
import { EmptyState } from './EmptyState';

/** Renders children only when a profile exists; otherwise prompts the user to set one up. */
export const RequireProfile = ({ children }: { children: ReactNode }) => {
  const { data } = useAppData();
  const navigate = useNavigate();
  const loadSampleData = useLoadSampleData();
  if (data.profile) return <>{children}</>;
  return (
    <Card>
      <EmptyState
        icon={<Target size={22} />}
        title="Set up your profile first"
        description={
          <>
            Your calorie target, meal plan and workout program are calculated from your body stats and goal. Just want your
            BMI? Use the <TextLink to="/bmi">BMI calculator</TextLink>.
          </>
        }
        action={
          <div className="flex flex-wrap justify-center gap-2">
            <Button onClick={() => navigate('/profile')}>Set up profile</Button>
            <Button variant="secondary" onClick={loadSampleData}>
              Try with sample data
            </Button>
          </div>
        }
      />
    </Card>
  );
};
