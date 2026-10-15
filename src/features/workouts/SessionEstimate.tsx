import { Clock, Flame } from 'lucide-react';

interface SessionEstimateProps {
  minutes: number;
  kcal: number;
  className?: string;
}

/** "~45 min · ~250 kcal" line for a planned workout session. */
export const SessionEstimate = ({ minutes, kcal, className = '' }: SessionEstimateProps) => (
  <div className={`flex gap-3 text-xs text-slate-500 ${className}`}>
    <span className="inline-flex items-center gap-1">
      <Clock size={13} /> ~{minutes} min
    </span>
    <span className="inline-flex items-center gap-1">
      <Flame size={13} /> ~{kcal} kcal
    </span>
  </div>
);
