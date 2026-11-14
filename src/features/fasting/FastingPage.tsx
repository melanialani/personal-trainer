import { CalendarHeart, Flame, Pencil, Play, Plus, Square, Timer, Trash2, TriangleAlert } from 'lucide-react';
import { useMemo, useState } from 'react';
import { calcCycleStats } from '../../lib/cycle';
import { formatDate } from '../../lib/date';
import {
  FASTING_PRESETS,
  LONG_FAST_HOURS,
  activeSession,
  completedSessions,
  fastingLabel,
  formatDuration,
  hasLongFastPattern,
  isTargetMet,
  parseDateTimeKey,
  sessionHours,
  summarizeFasting,
} from '../../lib/fasting';
import { Badge } from '../../shared/components/Badge';
import { Button, IconButton } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { EmptyState } from '../../shared/components/EmptyState';
import { Notice } from '../../shared/components/Notice';
import { PageHeader } from '../../shared/components/PageHeader';
import { ProgressBar } from '../../shared/components/ProgressBar';
import { StatTile } from '../../shared/components/StatTile';
import { TextLink } from '../../shared/components/TextLink';
import { useNow } from '../../shared/hooks/useNow';
import { COLORS } from '../../shared/theme';
import { useAppData } from '../../store/AppDataContext';
import type { FastingSession } from '../../types';
import { FastingSessionModal } from './FastingSessionModal';
import { useFasting } from './useFasting';

const formatTime = (key: string) => parseDateTimeKey(key).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

const formatDateTime = (key: string) => `${formatDate(key.slice(0, 10), { day: 'numeric', month: 'short' })}, ${formatTime(key)}`;

export const FastingPage = () => {
  const { data } = useAppData();
  const { fasting, setTargetHours, startFast, endFast, deleteSession } = useFasting();
  const confirmDelete = useConfirmDelete();
  const now = useNow();
  const [modalSession, setModalSession] = useState<FastingSession | null | undefined>(undefined);

  const running = activeSession(fasting.sessions);
  const history = useMemo(() => completedSessions(fasting.sessions), [fasting.sessions]);
  const summary = summarizeFasting(fasting.sessions);
  const cycle = useMemo(() => calcCycleStats(data.periods), [data.periods]);
  const isPeriodLate = cycle.flags.includes('late') || cycle.flags.includes('very-late');

  const handleDelete = async (session: FastingSession) => {
    if (await confirmDelete(`Fast on ${formatDateTime(session.startAt)}`)) deleteSession(session.id);
  };

  return (
    <>
      <PageHeader
        title="Fasting"
        description="Intermittent fasting timer and log. Weight loss still comes from the calorie deficit; fasting only sets when you eat."
        actions={
          <Button variant="secondary" icon={<Plus size={16} />} onClick={() => setModalSession(null)}>
            Log a past fast
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Card title={running ? 'Fasting now' : 'Eating window'} icon={<Timer size={16} />}>
          {running ? (
            <RunningFast session={running} now={now} onEnd={() => endFast(running.id)} onEdit={() => setModalSession(running)} />
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                {history[0]
                  ? `Last fast: ${formatDuration(sessionHours(history[0]))}, ended ${formatDateTime(history[0].endAt)}.`
                  : 'No fasts logged yet. Pick a target and tap start after your last meal.'}
              </p>
              <div>
                <p className="mb-1.5 text-xs font-medium text-slate-600">Target</p>
                <div className="flex flex-wrap gap-1.5">
                  {FASTING_PRESETS.map((preset) => (
                    <Chip key={preset.hours} isActive={fasting.targetHours === preset.hours} onClick={() => setTargetHours(preset.hours)}>
                      {preset.label}
                    </Chip>
                  ))}
                </div>
                {fasting.targetHours >= LONG_FAST_HOURS && (
                  <Notice size="sm" className="mt-3">
                    Fasts of {LONG_FAST_HOURS} h or more (OMAD) are not advised long term: harder to get enough protein, more muscle loss, binges
                    and period changes. 16:8 or 14:10 give similar results.
                  </Notice>
                )}
              </div>
              <Button icon={<Play size={16} />} onClick={() => startFast(fasting.targetHours)}>
                Start {fastingLabel(fasting.targetHours)} fast now
              </Button>
            </div>
          )}
        </Card>

        <Card title="Tips">
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
            <li>Water, black coffee and plain tea are fine while fasting.</li>
            <li>Break the fast with protein and vegetables first; eat slowly.</li>
            <li>Long-term: 16:8 or 14:10 with 2–3 meals and enough protein.</li>
            <li>
              More in the <TextLink to="/diet-guide">Diet guide</TextLink>.
            </li>
          </ul>
        </Card>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile label="Fasts (7 days)" value={summary.count} hint={`${summary.targetMetCount} on target`} icon={<Timer size={16} />} />
        <StatTile label="Average fast" value={summary.count ? formatDuration(summary.averageHours) : '—'} hint="Last 7 days" />
        <StatTile label="Streak" value={`${summary.streakDays} d`} hint="Days in a row on target" icon={<Flame size={16} />} />
        <StatTile label="Binge flags" value={summary.bingeCount} hint="Very hungry / overate (7 days)" />
      </div>

      <div className="mt-4 space-y-3">
        {hasLongFastPattern(summary) && (
          <Notice icon={<TriangleAlert size={16} />}>
            {summary.longFastCount} fasts of {LONG_FAST_HOURS} h or more this week (OMAD pattern). Long term this raises the risk of muscle loss,
            binges and period changes — consider 16:8 or 14:10. <TextLink to="/diet-guide">Why?</TextLink>
          </Notice>
        )}
        {summary.bingeCount >= 2 && (
          <Notice icon={<TriangleAlert size={16} />}>
            You overate after {summary.bingeCount} fasts this week. That usually means the fasting window is too long — try a shorter one and drink
            300–500 ml water 10–15 minutes before eating.
          </Notice>
        )}
        {isPeriodLate && (
          <Notice icon={<CalendarHeart size={16} />}>
            Your period is late. A big energy deficit (long fasts, fast weight loss) can delay periods — see the{' '}
            <TextLink to="/cycle">Cycle</TextLink> page.
          </Notice>
        )}
      </div>

      <Card title="History" className="mt-5" bodyClassName="">
        {history.length === 0 ? (
          <EmptyState icon={<Timer size={22} />} title="No finished fasts yet" description="Start a fast above, or log one you did earlier." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-2.5 font-medium sm:px-5">Start</th>
                  <th className="px-3 py-2.5 font-medium">End</th>
                  <th className="px-3 py-2.5 text-right font-medium">Length</th>
                  <th className="hidden px-3 py-2.5 font-medium sm:table-cell">Target</th>
                  <th className="hidden px-3 py-2.5 font-medium md:table-cell">Note</th>
                  <th className="px-5 py-2.5" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {history.map((session) => (
                  <tr key={session.id} className="hover:bg-slate-50">
                    <td className="whitespace-nowrap px-4 py-2.5 text-slate-700 sm:px-5">{formatDateTime(session.startAt)}</td>
                    <td className="whitespace-nowrap px-3 py-2.5 text-slate-700">{formatDateTime(session.endAt)}</td>
                    <td className="whitespace-nowrap px-3 py-2.5 text-right font-semibold tabular-nums">{formatDuration(sessionHours(session))}</td>
                    <td className="hidden whitespace-nowrap px-3 py-2.5 sm:table-cell">
                      <span className="inline-flex flex-wrap gap-1">
                        <Badge tone={isTargetMet(session) ? 'success' : 'neutral'}>{fastingLabel(session.targetHours)}</Badge>
                        {session.isBinge && <Badge tone="warning">Overate</Badge>}
                      </span>
                    </td>
                    <td className="hidden max-w-[14rem] truncate px-3 py-2.5 text-slate-500 md:table-cell">{session.note ?? ''}</td>
                    <td className="px-2 py-2.5 sm:px-5">
                      <div className="flex justify-end">
                        <IconButton label="Edit fast" onClick={() => setModalSession(session)}>
                          <Pencil size={15} />
                        </IconButton>
                        <IconButton label="Delete fast" tone="danger" onClick={() => handleDelete(session)}>
                          <Trash2 size={15} />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <FastingSessionModal isOpen={modalSession !== undefined} session={modalSession ?? null} onClose={() => setModalSession(undefined)} />
    </>
  );
};

interface RunningFastProps {
  session: FastingSession;
  now: Date;
  onEnd: () => void;
  onEdit: () => void;
}

const RunningFast = ({ session, now, onEnd, onEdit }: RunningFastProps) => {
  const hours = sessionHours(session, now);
  const remaining = session.targetHours - hours;
  const targetEnd = new Date(parseDateTimeKey(session.startAt).getTime() + session.targetHours * 3_600_000);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-3xl font-bold tabular-nums text-slate-900">{formatDuration(hours)}</p>
        <p className="mt-1 text-sm text-slate-500">
          Started {formatDateTime(session.startAt)} · target {fastingLabel(session.targetHours)}, until{' '}
          {targetEnd.toLocaleString('en-GB', { weekday: 'short', hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      <ProgressBar value={hours / session.targetHours} overColor={COLORS.brand} height="h-3" />
      <p className={`text-sm font-medium ${remaining <= 0 ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-700'}`}>
        {remaining <= 0 ? `Target reached — ${formatDuration(-remaining)} past it. You can eat.` : `${formatDuration(remaining)} to go`}
      </p>
      <div className="flex flex-wrap gap-2">
        <Button icon={<Square size={14} />} onClick={onEnd}>
          End fast now
        </Button>
        <Button variant="secondary" icon={<Pencil size={14} />} onClick={onEdit}>
          Edit times
        </Button>
      </div>
    </div>
  );
};
