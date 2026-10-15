import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  /** Small line above the title, e.g. today's date. */
  eyebrow?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}

export const PageHeader = ({ title, eyebrow, description, actions }: PageHeaderProps) => (
  <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      {eyebrow && <p className="text-sm text-slate-500">{eyebrow}</p>}
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
      {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
    </div>
    {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
  </div>
);
