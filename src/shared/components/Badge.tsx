import type { ReactNode } from 'react';

export type BadgeTone = 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'brand';

const TONE_CLASSES: Record<BadgeTone, string> = {
  neutral: 'bg-slate-100 text-slate-700',
  success: 'bg-emerald-50 text-emerald-700 dark:text-emerald-300 ring-emerald-600/20',
  warning: 'bg-amber-50 text-amber-700 dark:text-amber-300 ring-amber-600/20',
  danger: 'bg-rose-50 text-rose-700 dark:text-rose-300 ring-rose-600/20',
  info: 'bg-sky-50 text-sky-700 dark:text-sky-300 ring-sky-600/20',
  brand: 'bg-brand-50 text-brand-700 dark:text-brand-300 ring-brand-600/20',
};

export const Badge = ({ tone = 'neutral', children }: { tone?: BadgeTone; children: ReactNode }) => (
  <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-transparent ${TONE_CLASSES[tone]}`}>
    {children}
  </span>
);
