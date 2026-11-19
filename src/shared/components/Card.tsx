import type { ReactNode } from 'react';
import { TONE_BORDER, TONE_TILE, TONE_WASH, type Tone } from '../tones';

interface CardProps {
  title?: ReactNode;
  /** Small icon shown before the title, inside a tinted tile. */
  icon?: ReactNode;
  /** Color of the icon tile; defaults to the module accent. */
  tone?: Tone;
  subtitle?: ReactNode;
  action?: ReactNode;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}

export const Card = ({ title, icon, tone = 'brand', subtitle, action, className = '', bodyClassName = 'p-4 sm:p-5', children }: CardProps) => (
  <section className={`rounded-2xl border bg-surface shadow-sm shadow-slate-900/5 dark:border-slate-200/80 ${TONE_BORDER[tone]} ${className}`}>
    {(title || action) && (
      <header
        className={`flex items-center justify-between gap-3 rounded-t-2xl border-b border-slate-100 bg-gradient-to-r to-transparent to-70% px-4 py-3 sm:px-5 ${TONE_WASH[tone]}`}
      >
        <div className="flex min-w-0 items-center gap-3">
          {icon && (
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg [&>svg]:h-4 [&>svg]:w-4 ${TONE_TILE[tone]}`} aria-hidden="true">
              {icon}
            </span>
          )}
          <div className="min-w-0">
            {title && <h2 className="font-display text-[15px] font-bold text-slate-900">{title}</h2>}
            {subtitle && <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>}
          </div>
        </div>
        {action && <div className="flex shrink-0 items-center gap-2">{action}</div>}
      </header>
    )}
    <div className={bodyClassName}>{children}</div>
  </section>
);
