import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { CycleDayKind } from '../../lib/cycle';
import { WEEKDAY_SHORT, addDays, addMonths, formatDate, parseDateKey, startOfWeek, todayKey } from '../../lib/date';
import { IconButton } from '../../shared/components/Button';

interface CycleCalendarProps {
  days: Map<string, CycleDayKind>;
  onSelectDay: (day: string) => void;
}

const KIND_CLASSES: Record<CycleDayKind, string> = {
  period: 'bg-rose-600 text-white font-semibold',
  'period-estimated': 'bg-rose-50 text-rose-700 dark:text-rose-300 ring-1 ring-inset ring-rose-200',
  predicted: 'border border-dashed border-rose-400 text-rose-700 dark:text-rose-300',
};

const LEGEND: { kind: CycleDayKind; label: string }[] = [
  { kind: 'period', label: 'Period (logged)' },
  { kind: 'period-estimated', label: 'Estimated end' },
  { kind: 'predicted', label: 'Predicted' },
];

const monthStart = (key: string) => `${key.slice(0, 7)}-01`;

/** Month grid (Monday first). Tapping a day opens the period form for it. */
export const CycleCalendar = ({ days, onSelectDay }: CycleCalendarProps) => {
  const today = todayKey();
  const [month, setMonth] = useState(() => monthStart(today));
  const gridStart = startOfWeek(month);
  const nextMonth = addMonths(month, 1);
  const cells: string[] = [];
  for (let day = gridStart; day < nextMonth || cells.length % 7 !== 0; day = addDays(day, 1)) cells.push(day);

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-3 flex items-center justify-between">
        <IconButton label="Previous month" onClick={() => setMonth(addMonths(month, -1))}>
          <ChevronLeft size={18} />
        </IconButton>
        <button type="button" className="text-sm font-semibold text-slate-900" onClick={() => setMonth(monthStart(today))} title="Back to this month">
          {parseDateKey(month).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
        </button>
        <IconButton label="Next month" onClick={() => setMonth(nextMonth)}>
          <ChevronRight size={18} />
        </IconButton>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAY_SHORT.map((name) => (
          <span key={name} className="pb-1 text-[11px] font-medium uppercase text-slate-500">
            {name.slice(0, 2)}
          </span>
        ))}
        {cells.map((day) => {
          const kind = days.get(day);
          const isOtherMonth = day < month || day >= nextMonth;
          const isToday = day === today;
          return (
            <button
              key={day}
              type="button"
              onClick={() => onSelectDay(day)}
              aria-label={`${formatDate(day)}${kind ? ` — ${LEGEND.find((item) => item.kind === kind)?.label}` : ''}`}
              className={`flex aspect-square items-center justify-center rounded-lg text-sm tabular-nums transition-colors ${
                kind ? KIND_CLASSES[kind] : 'text-slate-700 hover:bg-slate-100'
              } ${isOtherMonth ? 'opacity-40' : ''} ${isToday ? 'ring-2 ring-brand-500' : ''}`}
            >
              {parseDateKey(day).getDate()}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-600">
        {LEGEND.map((item) => (
          <span key={item.kind} className="inline-flex items-center gap-1.5">
            <span className={`h-3.5 w-3.5 rounded ${KIND_CLASSES[item.kind]}`} />
            {item.label}
          </span>
        ))}
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3.5 w-3.5 rounded ring-2 ring-brand-500" />
          Today
        </span>
      </div>
    </div>
  );
};
