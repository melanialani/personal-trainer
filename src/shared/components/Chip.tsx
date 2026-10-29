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
    className={`rounded-full border px-3 py-1 text-xs font-medium ${
      isActive ? 'border-brand-500 bg-brand-50 text-brand-700 dark:text-brand-300' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
    }`}
  >
    {children}
  </button>
);
