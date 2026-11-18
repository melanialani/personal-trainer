import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'dangerGhost';
type ButtonSize = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-brand-700 text-white hover:bg-brand-800 shadow-md shadow-brand-700/25 active:scale-[0.98]',
  secondary: 'bg-surface text-slate-700 border border-slate-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 dark:hover:text-brand-300 shadow-sm active:scale-[0.98]',
  ghost: 'text-slate-600 hover:bg-slate-100',
  dangerGhost: 'text-rose-600 hover:bg-rose-50 dark:text-rose-400',
  danger: 'bg-rose-600 text-white hover:bg-rose-700 shadow-md shadow-rose-600/25 active:scale-[0.98]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
};

export const Button = ({ variant = 'primary', size = 'md', icon, className = '', children, type = 'button', ...rest }: ButtonProps) => (
  <button
    type={type}
    className={`inline-flex items-center justify-center rounded-xl font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
    {...rest}
  >
    {icon}
    {children}
  </button>
);

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  tone?: 'default' | 'danger';
}

export const IconButton = ({ label, tone = 'default', className = '', children, type = 'button', ...rest }: IconButtonProps) => (
  <button
    type={type}
    aria-label={label}
    title={label}
    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors disabled:opacity-40 ${
      tone === 'danger' ? 'text-slate-400 hover:bg-rose-50 hover:text-rose-600 dark:hover:text-rose-400' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
    } ${className}`}
    {...rest}
  >
    {children}
  </button>
);
