import type { ReactNode } from 'react';
import { TONE_BAR, TONE_BORDER, TONE_TILE, TONE_WASH, type Tone } from '../tones';

interface StatTileProps {
  label: string;
  value: ReactNode;
  hint?: ReactNode;
  icon?: ReactNode;
  /** Color of the top strip and icon tile; give tiles in one row different tones. */
  tone?: Tone;
}

export const StatTile = ({ label, value, hint, icon, tone = 'brand' }: StatTileProps) => (
  <div
    className={`relative overflow-hidden rounded-2xl border bg-surface dark:border-slate-200/80 ${TONE_BORDER[tone]} bg-gradient-to-br to-transparent to-80% p-4 shadow-sm shadow-slate-900/5 ${TONE_WASH[tone]}`}
  >
    <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${TONE_BAR[tone]}`} aria-hidden="true" />
    <div className="flex items-center justify-between gap-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      {icon && (
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg [&>svg]:h-4 [&>svg]:w-4 ${TONE_TILE[tone]}`} aria-hidden="true">
          {icon}
        </span>
      )}
    </div>
    <p className="mt-2 font-display text-xl font-bold tabular-nums text-slate-900 sm:text-2xl">{value}</p>
    {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
  </div>
);
