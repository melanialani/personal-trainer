import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { findItemByPath } from '../../layout/navItems';

interface PageHeaderProps {
  title: string;
  /** Small line above the title, e.g. today's date. */
  eyebrow?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}

/** Page title with the page's nav icon in an accent-gradient tile (taken from the current route). */
export const PageHeader = ({ title, eyebrow, description, actions }: PageHeaderProps) => {
  const { pathname } = useLocation();
  const Icon = findItemByPath(pathname)?.icon;

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
        {Icon && (
          <span
            className="bg-accent-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg shadow-brand-500/25 sm:h-12 sm:w-12"
            aria-hidden="true"
          >
            <Icon size={22} />
          </span>
        )}
        <div className="min-w-0">
          {eyebrow && <p className="text-sm font-medium text-brand-700 dark:text-brand-400">{eyebrow}</p>}
          <h1 className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-[28px]">{title}</h1>
          {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
        </div>
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
};
