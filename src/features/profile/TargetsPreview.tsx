import { Info } from 'lucide-react';
import { bmiCategory, calcBmi, calcDailyTargets, effectiveWeeklyRateKg, healthyWeightRange, projectedGoalDate } from '../../lib/calc';
import { formatDate } from '../../lib/date';
import { formatKcal, formatNumber } from '../../lib/format';
import { Badge } from '../../shared/components/Badge';
import { Card } from '../../shared/components/Card';
import { Notice } from '../../shared/components/Notice';
import { MACROS } from '../../shared/components/Nutrition';
import type { Profile, WeightEntry } from '../../types';

interface TargetsPreviewProps {
  profile: Profile | null;
  weights: WeightEntry[];
}

const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex items-center justify-between py-2 text-sm">
    <span className="text-slate-500">{label}</span>
    <span className="font-semibold tabular-nums text-slate-900">{value}</span>
  </div>
);

export const TargetsPreview = ({ profile, weights }: TargetsPreviewProps) => {
  if (!profile) {
    return (
      <Card title="Your daily targets">
        <p className="text-sm text-slate-500">Fill in your height, weight and target to see your calorie and macro targets.</p>
      </Card>
    );
  }

  const targets = calcDailyTargets(profile, weights);
  const bmi = calcBmi(targets.weightKg, profile.heightCm);
  const category = bmiCategory(bmi);
  const [minHealthy, maxHealthy] = healthyWeightRange(profile.heightCm);
  const goalDate = projectedGoalDate(profile, targets.weightKg, effectiveWeeklyRateKg(targets));

  return (
    <Card title="Your daily targets" subtitle="Updates as you edit">
      <div className="rounded-xl bg-brand-50 p-4 text-center">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-700 dark:text-brand-300">Daily calories</p>
        <p className="mt-1 text-4xl font-bold tabular-nums text-brand-700 dark:text-brand-300">{formatNumber(targets.kcal)}</p>
        <p className="text-xs text-brand-700 dark:text-brand-300">kcal / day</p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {MACROS.map((macro) => (
          <div key={macro.key} className="rounded-xl border border-slate-100 py-2">
            <p className="text-lg font-bold tabular-nums" style={{ color: macro.textColor }}>
              {targets[macro.key]}g
            </p>
            <p className="text-xs text-slate-500">{macro.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 divide-y divide-slate-100">
        <Row
          label="BMI"
          value={
            <span className="inline-flex items-center gap-2">
              {formatNumber(bmi, 1)} <Badge tone={category.tone}>{category.label}</Badge>
            </span>
          }
        />
        <Row label="Healthy weight range" value={`${formatNumber(minHealthy, 1)}–${formatNumber(maxHealthy, 1)} kg`} />
        <Row label="BMR (at rest)" value={formatKcal(targets.bmr)} />
        <Row label="Maintenance (TDEE)" value={formatKcal(targets.tdee)} />
        <Row
          label={targets.dailyAdjustment < 0 ? 'Daily deficit' : targets.dailyAdjustment > 0 ? 'Daily surplus' : 'Adjustment'}
          value={formatKcal(Math.abs(targets.dailyAdjustment))}
        />
        {goalDate && <Row label="Estimated goal date" value={formatDate(goalDate)} />}
      </div>
      {targets.isClampedToMinimum && (
        <Notice size="sm" icon={<Info size={14} />} className="mt-3">
          Your target was raised to the safe minimum of {formatKcal(targets.kcal)}. Consider a slower weekly rate or adding more activity.
        </Notice>
      )}
    </Card>
  );
};
