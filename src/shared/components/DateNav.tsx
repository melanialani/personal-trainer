import { ChevronLeft, ChevronRight } from 'lucide-react';
import { addDays, formatLongDate, todayKey } from '../../lib/date';
import { Button, IconButton } from './Button';

interface DateNavProps {
  date: string;
  onChange: (date: string) => void;
}

export const DateNav = ({ date, onChange }: DateNavProps) => {
  const isToday = date === todayKey();
  return (
    <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
      <IconButton label="Previous day" onClick={() => onChange(addDays(date, -1))}>
        <ChevronLeft size={18} />
      </IconButton>
      <label className="relative cursor-pointer px-2 text-sm font-medium text-slate-800">
        {isToday ? 'Today' : formatLongDate(date)}
        <input
          type="date"
          value={date}
          onChange={(e) => e.target.value && onChange(e.target.value)}
          className="absolute inset-0 cursor-pointer opacity-0"
          aria-label="Pick date"
        />
      </label>
      <IconButton label="Next day" onClick={() => onChange(addDays(date, 1))}>
        <ChevronRight size={18} />
      </IconButton>
      {!isToday && (
        <Button variant="ghost" size="sm" onClick={() => onChange(todayKey())}>
          Today
        </Button>
      )}
    </div>
  );
};
