import type { ReactNode } from 'react';

interface ChipProps {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

/** Pill-shaped quick-pick button, e.g. preset servings or equipment presets. */
export const Chip = ({ isActive, onClick, children }: ChipProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
      isActive ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm dark:text-brand-300' : 'border-slate-200 bg-surface text-slate-600 hover:border-brand-300 hover:text-brand-700 dark:hover:text-brand-300'
    }`}
  >
    {children}
  </button>
);
