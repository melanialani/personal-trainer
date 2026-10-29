import { Search } from 'lucide-react';
import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

export const inputClass =
  'block w-full rounded-lg border border-slate-200 bg-surface px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:bg-slate-50';

interface FieldProps {
  label: string;
  hint?: ReactNode;
  error?: string;
  className?: string;
  children: ReactNode;
}

export const Field = ({ label, hint, error, className = '', children }: FieldProps) => (
  <label className={`block ${className}`}>
    <span className="mb-1 block text-xs font-medium text-slate-600">{label}</span>
    {children}
    {error ? <span className="mt-1 block text-xs text-rose-600 dark:text-rose-400">{error}</span> : hint && <span className="mt-1 block text-xs text-slate-400">{hint}</span>}
  </label>
);

export const TextInput = ({ className = '', ...rest }: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={`${inputClass} ${className}`} {...rest} />
);

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  /** Applied to the wrapper, e.g. `flex-1`. */
  className?: string;
}

/** Text input with a leading search icon. */
export const SearchInput = ({ className = '', ...rest }: SearchInputProps) => (
  <div className={`relative ${className}`}>
    <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
    <input className={`${inputClass} pl-9`} {...rest} />
  </div>
);

interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type'> {
  value: number | '';
  onValueChange: (value: number | '') => void;
  suffix?: string;
}

export const NumberInput = ({ value, onValueChange, suffix, className = '', ...rest }: NumberInputProps) => (
  <div className="relative">
    <input
      type="number"
      inputMode="decimal"
      value={value}
      onChange={(e) => onValueChange(e.target.value === '' ? '' : Number(e.target.value))}
      className={`${inputClass} ${suffix ? 'pr-12' : ''} ${className}`}
      {...rest}
    />
    {suffix && <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-slate-400">{suffix}</span>}
  </div>
);

interface SelectProps<T extends string> extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
  value: T;
  options: { value: T; label: string }[];
  onValueChange: (value: T) => void;
}

export const Select = <T extends string>({ value, options, onValueChange, className = '', ...rest }: SelectProps<T>) => (
  <select value={value} onChange={(e) => onValueChange(e.target.value as T)} className={`${inputClass} ${className}`} {...rest}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export const TextArea = ({ className = '', ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea className={`${inputClass} ${className}`} rows={3} {...rest} />
);

interface CheckboxProps {
  label: ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => (
  <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-700">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="h-4 w-4 rounded border-slate-300 accent-brand-600"
    />
    {label}
  </label>
);

interface SegmentedProps<T extends string> {
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}

/** Compact single-choice control for small option sets. */
export const Segmented = <T extends string>({ value, options, onChange }: SegmentedProps<T>) => (
  <div className="grid gap-1 rounded-lg bg-slate-100 p-1" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
    {options.map((option) => (
      <button
        key={option.value}
        type="button"
        onClick={() => onChange(option.value)}
        className={`rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
          option.value === value ? 'bg-raised text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        {option.label}
      </button>
    ))}
  </div>
);
