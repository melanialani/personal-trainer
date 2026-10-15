import { clamp } from '../../lib/math';
import { COLORS } from '../theme';

interface ProgressBarProps {
  /** 0–1; values above 1 show as full with an "over" color. */
  value: number;
  color?: string;
  overColor?: string;
  height?: string;
}

export const ProgressBar = ({ value, color = COLORS.brand, overColor = COLORS.over, height = 'h-2' }: ProgressBarProps) => (
  <div className={`w-full overflow-hidden rounded-full bg-slate-100 ${height}`}>
    <div
      className="h-full rounded-full transition-[width] duration-500"
      style={{ width: `${clamp(value, 0, 1) * 100}%`, background: value > 1.02 ? overColor : color }}
    />
  </div>
);
