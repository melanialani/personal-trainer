import type { ReactNode } from 'react';
import type { DailyTargets } from '../../lib/calc';
import { formatNumber } from '../../lib/format';
import { Card } from '../../shared/components/Card';
import { CalorieRing, MacroBars } from '../../shared/components/Nutrition';
import type { NutritionValues } from '../../types';

interface DaySummaryCardProps {
  title: string;
  totals: NutritionValues;
  burned: number;
  targets: DailyTargets;
  action?: ReactNode;
}

const Figure = ({ label, value, tone = 'text-slate-900' }: { label: string; value: number; tone?: string }) => (
  <div>
    <p className={`text-lg font-bold tabular-nums ${tone}`}>{formatNumber(Math.round(value))}</p>
    <p className="text-xs text-slate-500">{label}</p>
  </div>
);

/** Calories-left ring, budget breakdown and macro progress for a single day. */
export const DaySummaryCard = ({ title, totals, burned, targets, action }: DaySummaryCardProps) => (
  <Card title={title} action={action}>
    <div className="@container">
      <div className="flex flex-col items-center gap-6 @md:flex-row">
        <CalorieRing consumed={totals.kcal} burned={burned} target={targets.kcal} />
        <div className="w-full flex-1 space-y-5">
          <div className="grid grid-cols-3 gap-2 text-center @md:text-left">
            <Figure label="Target" value={targets.kcal} />
            <Figure label="Eaten" value={totals.kcal} tone="text-brand-700 dark:text-brand-300" />
            <Figure label="Exercise" value={burned} tone="text-orange-700 dark:text-orange-400" />
          </div>
          <MacroBars consumed={totals} target={targets} />
        </div>
      </div>
    </div>
  </Card>
);
