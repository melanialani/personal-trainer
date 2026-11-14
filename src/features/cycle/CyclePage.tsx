import { CalendarHeart, CheckCircle2, Droplet, Pencil, Plus, Trash2, TriangleAlert } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CYCLE_FLAG_TEXT, CYCLE_TIPS } from '../../data/cycle';
import { calcCycleStats, cycleCalendarDays, periodCovering, periodLength, sortPeriodsAsc } from '../../lib/cycle';
import { diffDays, formatDate, todayKey } from '../../lib/date';
import { pluralize } from '../../lib/format';
import { Button, IconButton } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { EmptyState } from '../../shared/components/EmptyState';
import { Notice } from '../../shared/components/Notice';
import { PageHeader } from '../../shared/components/PageHeader';
import { StatTile } from '../../shared/components/StatTile';
import { TextLink } from '../../shared/components/TextLink';
import { useToast } from '../../shared/components/ToastProvider';
import { useAppData } from '../../store/AppDataContext';
import type { PeriodEntry } from '../../types';
import { CycleCalendar } from './CycleCalendar';
import { PeriodEntryModal } from './PeriodEntryModal';

interface ModalState {
  entry: PeriodEntry | null;
  defaultDate?: string;
}

export const CyclePage = () => {
  const { data, upsert, remove } = useAppData();
  const confirmDelete = useConfirmDelete();
  const showToast = useToast();
  const [modal, setModal] = useState<ModalState | null>(null);
  const today = todayKey();

  const stats = useMemo(() => calcCycleStats(data.periods, today), [data.periods, today]);
  const calendarDays = useMemo(() => cycleCalendarDays(data.periods, stats, today), [data.periods, stats, today]);
  const ascending = useMemo(() => sortPeriodsAsc(data.periods), [data.periods]);
  const history = useMemo(() => [...ascending].reverse(), [ascending]);
  const latest = ascending[ascending.length - 1];

  const handleSelectDay = (day: string) => {
    const covering = periodCovering(data.periods, day, stats.averagePeriod);
    if (covering) setModal({ entry: covering });
    else if (day <= today) setModal({ entry: null, defaultDate: day });
  };

  const handleEndToday = () => {
    if (!latest) return;
    upsert('periods', { ...latest, endDate: today });
    showToast('Period end saved');
  };

  const handleDelete = async (entry: PeriodEntry) => {
    if (await confirmDelete(`Period starting ${formatDate(entry.date)}`)) remove('periods', entry.id);
  };

  const nextHint =
    stats.daysUntilNext === undefined
      ? 'Log a period to see a prediction'
      : stats.daysUntilNext > 0
        ? `In ${pluralize(stats.daysUntilNext, 'day')}`
        : stats.daysUntilNext === 0
          ? 'Expected today'
          : `Late by ${pluralize(-stats.daysUntilNext, 'day')}`;

  return (
    <>
      <PageHeader
        title="Cycle"
        description="Log your periods to see the cycle day, the next predicted period and your own average cycle."
        actions={
          <>
            {stats.isOngoing && (
              <Button variant="secondary" icon={<CheckCircle2 size={16} />} onClick={handleEndToday}>
                Period ended today
              </Button>
            )}
            <Button icon={<Plus size={16} />} onClick={() => setModal({ entry: null })}>
              Log period
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile
          label="Cycle day"
          value={stats.cycleDay ?? '—'}
          hint={stats.lastStart ? `Since ${formatDate(stats.lastStart)}${stats.isOngoing ? ' · period ongoing' : ''}` : 'No period logged yet'}
          icon={<Droplet size={16} />}
        />
        <StatTile
          label="Next period"
          value={stats.nextStart ? formatDate(stats.nextStart, { day: 'numeric', month: 'short' }) : '—'}
          hint={nextHint}
          icon={<CalendarHeart size={16} />}
        />
        <StatTile
          label="Average cycle"
          value={`${stats.averageCycle} d`}
          hint={
            stats.cyclesUsed
              ? `From ${pluralize(stats.cyclesUsed, 'cycle')}${stats.shortestCycle !== stats.longestCycle ? ` (${stats.shortestCycle}–${stats.longestCycle} d)` : ''}`
              : 'Default 28 d until 2 periods are logged'
          }
        />
        <StatTile
          label="Average period"
          value={`${stats.averagePeriod} d`}
          hint={stats.periodsWithEnd ? `From ${pluralize(stats.periodsWithEnd, 'logged end')}` : 'Default 5 d until an end is logged'}
        />
      </div>

      {stats.flags.length > 0 && (
        <div className="mt-4 space-y-3">
          {stats.flags.map((flag) => (
            <Notice key={flag} tone={flag === 'very-late' ? 'danger' : 'warning'} icon={<TriangleAlert size={16} />}>
              {CYCLE_FLAG_TEXT[flag]}
            </Notice>
          ))}
        </div>
      )}

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Card title="Calendar" subtitle="Tap a day to log or edit a period.">
          <CycleCalendar days={calendarDays} onSelectDay={handleSelectDay} />
        </Card>
        <Card title="Good to know">
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
            {CYCLE_TIPS.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
            <li>
              Late while dieting? See the <TextLink to="/diet-guide">Diet guide</TextLink>.
            </li>
          </ul>
        </Card>
      </div>

      <Card title="History" className="mt-5" bodyClassName="">
        {history.length === 0 ? (
          <EmptyState
            icon={<Droplet size={22} />}
            title="No periods logged yet"
            description="Log the first day of your last period; predictions get better with every cycle."
            action={<Button onClick={() => setModal({ entry: null })}>Log period</Button>}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-2.5 font-medium sm:px-5">First day</th>
                  <th className="px-3 py-2.5 font-medium">Last day</th>
                  <th className="px-3 py-2.5 text-right font-medium">Period</th>
                  <th className="px-3 py-2.5 text-right font-medium">Cycle</th>
                  <th className="hidden px-3 py-2.5 font-medium sm:table-cell">Note</th>
                  <th className="px-5 py-2.5" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {history.map((entry) => {
                  const next = ascending[ascending.indexOf(entry) + 1];
                  const length = periodLength(entry);
                  return (
                    <tr key={entry.id} className="hover:bg-slate-50">
                      <td className="whitespace-nowrap px-4 py-2.5 text-slate-700 sm:px-5">{formatDate(entry.date)}</td>
                      <td className="whitespace-nowrap px-3 py-2.5 text-slate-700">{entry.endDate ? formatDate(entry.endDate) : '—'}</td>
                      <td className="px-3 py-2.5 text-right tabular-nums">{length ? `${length} d` : '—'}</td>
                      <td className="px-3 py-2.5 text-right tabular-nums text-slate-600">{next ? `${diffDays(entry.date, next.date)} d` : '—'}</td>
                      <td className="hidden max-w-[16rem] truncate px-3 py-2.5 text-slate-500 sm:table-cell">{entry.note ?? ''}</td>
                      <td className="px-2 py-2.5 sm:px-5">
                        <div className="flex justify-end">
                          <IconButton label="Edit period" onClick={() => setModal({ entry })}>
                            <Pencil size={15} />
                          </IconButton>
                          <IconButton label="Delete period" tone="danger" onClick={() => handleDelete(entry)}>
                            <Trash2 size={15} />
                          </IconButton>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <p className="mt-4 text-xs text-slate-500">
        Predictions are calendar averages (ACOG, FIGO reference ranges). They are not a contraceptive method.
      </p>

      <PeriodEntryModal isOpen={modal !== null} entry={modal?.entry} defaultDate={modal?.defaultDate} onClose={() => setModal(null)} />
    </>
  );
};
