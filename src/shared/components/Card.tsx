import type { ReactNode } from 'react';

interface CardProps {
  title?: ReactNode;
  /** Small icon shown before the title. */
  icon?: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}

export const Card = ({ title, icon, subtitle, action, className = '', bodyClassName = 'p-4 sm:p-5', children }: CardProps) => (
  <section className={`rounded-2xl border border-slate-200/80 bg-white shadow-sm ${className}`}>
    {(title || action) && (
      <header className="flex items-start justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:px-5">
        <div className="min-w-0">
          {title && (
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              {icon}
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>}
        </div>
        {action && <div className="flex shrink-0 items-center gap-2">{action}</div>}
      </header>
    )}
    <div className={bodyClassName}>{children}</div>
  </section>
);
