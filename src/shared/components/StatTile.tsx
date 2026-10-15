import type { ReactNode } from 'react';

interface StatTileProps {
  label: string;
  value: ReactNode;
  hint?: ReactNode;
  icon?: ReactNode;
}

export const StatTile = ({ label, value, hint, icon }: StatTileProps) => (
  <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
    <div className="flex items-center justify-between gap-2">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      {icon && <span className="text-slate-400">{icon}</span>}
    </div>
    <p className="mt-2 text-xl font-bold sm:text-2xl tabular-nums text-slate-900">{value}</p>
    {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
  </div>
);
