import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from './Button';

interface ResultSummaryProps {
  /** Result count text, e.g. "12 guides". */
  count: ReactNode;
  /** Shows the clear button when a search or filter is active. */
  canClear: boolean;
  clearLabel: string;
  onClear: () => void;
}

/** Result count above a filtered list, with a button to reset the search and filters. */
export const ResultSummary = ({ count, canClear, clearLabel, onClear }: ResultSummaryProps) => (
  <div className="mb-3 flex items-center justify-between gap-2 text-sm text-slate-500">
    <span>{count}</span>
    {canClear && (
      <Button variant="ghost" size="sm" icon={<X size={14} />} onClick={onClear}>
        {clearLabel}
      </Button>
    )}
  </div>
);
