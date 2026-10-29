import type { ReactNode } from 'react';

type NoticeTone = 'warning' | 'danger';
type NoticeSize = 'sm' | 'md';

interface NoticeProps {
  tone?: NoticeTone;
  size?: NoticeSize;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

const TONE_CLASSES: Record<NoticeTone, string> = {
  warning: 'bg-amber-50 text-amber-800 dark:text-amber-200',
  danger: 'border border-rose-200 bg-rose-50 text-rose-700 dark:text-rose-300',
};

const SIZE_CLASSES: Record<NoticeSize, string> = {
  sm: 'rounded-lg p-3 text-xs',
  md: 'rounded-xl px-4 py-3 text-sm',
};

/** Inline warning / error message box. */
export const Notice = ({ tone = 'warning', size = 'md', icon, className = '', children }: NoticeProps) => (
  <div role={tone === 'danger' ? 'alert' : undefined} className={`flex gap-2 ${TONE_CLASSES[tone]} ${SIZE_CLASSES[size]} ${className}`}>
    {icon && <span className="mt-0.5 shrink-0">{icon}</span>}
    <div className="min-w-0">{children}</div>
  </div>
);
