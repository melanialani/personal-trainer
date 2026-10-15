import { formatNumber } from '../../lib/format';
import type { NutritionValues } from '../../types';
import { COLORS } from '../theme';
import { ProgressBar } from './ProgressBar';

export const MACROS = [
  { key: 'protein', label: 'Protein', color: 'var(--color-protein)' },
  { key: 'carbs', label: 'Carbs', color: 'var(--color-carbs)' },
  { key: 'fat', label: 'Fat', color: 'var(--color-fat)' },
] as const;

/** Compact "P 20g · C 30g · F 10g" line. */
export const MacroInline = ({ values, className = '' }: { values: NutritionValues; className?: string }) => (
  <span className={`inline-flex flex-wrap gap-x-2 text-xs text-slate-500 ${className}`}>
    {MACROS.map((macro) => (
      <span key={macro.key} className="inline-flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: macro.color }} />
        {macro.label[0]} {formatNumber(values[macro.key], 1)}g
      </span>
    ))}
  </span>
);

interface MacroBarsProps {
  consumed: NutritionValues;
  target: Pick<NutritionValues, 'protein' | 'carbs' | 'fat'>;
}

export const MacroBars = ({ consumed, target }: MacroBarsProps) => (
  <div className="space-y-3">
    {MACROS.map((macro) => (
      <div key={macro.key}>
        <div className="mb-1 flex items-baseline justify-between text-xs">
          <span className="font-medium text-slate-700">{macro.label}</span>
          <span className="tabular-nums text-slate-500">
            {formatNumber(consumed[macro.key])} / {formatNumber(target[macro.key])} g
          </span>
        </div>
        <ProgressBar value={target[macro.key] ? consumed[macro.key] / target[macro.key] : 0} color={macro.color} />
      </div>
    ))}
  </div>
);

interface CalorieRingProps {
  consumed: number;
  burned: number;
  target: number;
  size?: number;
}

/** Ring showing calories eaten vs. target (target + exercise burned). */
export const CalorieRing = ({ consumed, burned, target, size = 168 }: CalorieRingProps) => {
  const budget = target + burned;
  const remaining = budget - consumed;
  const ratio = budget > 0 ? consumed / budget : 0;
  const stroke = 14;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const isOver = remaining < 0;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={COLORS.track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={isOver ? COLORS.over : COLORS.brand}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - Math.min(ratio, 1))}
          className="transition-[stroke-dashoffset] duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className={`text-3xl font-bold tabular-nums ${isOver ? 'text-rose-600' : 'text-slate-900'}`}>
          {formatNumber(Math.abs(Math.round(remaining)))}
        </span>
        <span className="text-xs text-slate-500">{isOver ? 'kcal over' : 'kcal left'}</span>
      </div>
    </div>
  );
};
