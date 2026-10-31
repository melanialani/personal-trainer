import { ClipboardCheck, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import { CHILD_SUPPLEMENTS, ROUTINE_CHECKS, type ChildSupplement } from '../../data/childSupplements';
import {
  childAgeMonths,
  dosesForAge,
  formatAgeWindow,
  intervalState,
  isSupplementForAge,
  latestMeasurement,
  listSupplementRounds,
  supplementEntries,
} from '../../lib/child';
import { formatDate } from '../../lib/date';
import { createId } from '../../lib/id';
import { formatNumber } from '../../lib/format';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { useToast } from '../../shared/components/ToastProvider';
import type { Child } from '../../types';
import { DateGivenModal } from './DateGivenModal';
import { ProgramBadge, RoundStatusBadge } from './statusBadges';
import { useChildren } from './useChildren';

export const SupplementsTab = ({ child }: { child: Child | null }) => {
  const age = child ? childAgeMonths(child) : null;
  // With a child: current items first, then upcoming, then finished.
  const order = (s: ChildSupplement) => (age === null ? 0 : isSupplementForAge(s, age) ? 0 : age < s.fromMonths ? 1 : 2);
  const supplements = [...CHILD_SUPPLEMENTS].sort((a, b) => order(a) - order(b));

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600">
        Apart from these, a healthy child has no medicine that must be taken routinely. Anything else (vitamins, syrups,
        "appetite boosters") only on a doctor's advice.
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        {supplements.map((supplement) => (
          <SupplementCard key={supplement.id} supplement={supplement} child={child} />
        ))}
      </div>
      <Card title="Routine checks" icon={<ClipboardCheck size={16} />} subtitle="Not medicines, but every child should get them." bodyClassName="divide-y divide-slate-100">
        {ROUTINE_CHECKS.map((check) => (
          <div key={check.name} className="px-4 py-3 sm:px-5">
            <p className="text-sm font-medium text-slate-800">{check.name}</p>
            <p className="text-xs font-medium text-brand-700 dark:text-brand-400">{check.when}</p>
            <p className="mt-1 text-sm text-slate-600">{check.why}</p>
          </div>
        ))}
      </Card>
    </div>
  );
};

const SupplementCard = ({ supplement, child }: { supplement: ChildSupplement; child: Child | null }) => {
  const { updateChild } = useChildren();
  const showToast = useToast();
  const confirmDelete = useConfirmDelete();
  const [isLogging, setIsLogging] = useState(false);
  const age = child ? childAgeMonths(child) : null;
  const isForAge = age !== null && isSupplementForAge(supplement, age);
  const isPast = age !== null && age > supplement.untilMonths;
  const doses = age === null ? supplement.doses : dosesForAge(supplement, age);
  const weight = child ? latestMeasurement(child, 'weightKg')?.weightKg : undefined;
  const entries = child ? supplementEntries(child, supplement.id) : [];
  const canLog = Boolean(child) && supplement.schedule.kind !== 'ongoing';

  const logDose = (date: string) => {
    if (!child) return;
    const isOnce = supplement.schedule.kind === 'once';
    updateChild(child.id, (c) => ({
      ...c,
      // A one-time item (vitamin K at birth) keeps only its latest date.
      supplements: [...c.supplements.filter((e) => !(isOnce && e.supplementId === supplement.id)), { id: createId(), supplementId: supplement.id, date }],
    }));
    showToast(`${supplement.name} recorded`);
    setIsLogging(false);
  };

  return (
    <Card
      title={supplement.name}
      subtitle={formatAgeWindow(supplement.fromMonths, supplement.untilMonths)}
      action={<ProgramBadge isProgram={supplement.isProgram} />}
      className={isPast && supplement.schedule.kind !== 'once' ? 'opacity-70' : ''}
    >
      <div className="space-y-3 text-sm text-slate-600">
        <p>{supplement.why}</p>
        {doses.length > 0 ? (
          <ul className="space-y-1">
            {doses.map((dose) => (
              <li key={dose.text} className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700">
                {age === null && <span className="font-medium">{formatAgeWindow(dose.fromMonths, dose.untilMonths)}: </span>}
                {dose.text}
                {dose.mgPerKg && weight && isForAge && (
                  <span className="mt-0.5 block text-xs font-medium text-brand-700 dark:text-brand-400">
                    ≈ {formatNumber(Math.min(dose.mgPerKg * weight, dose.maxMg ?? Infinity), 1)} mg for {formatNumber(weight, 1)} kg
                    (last weight)
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          age !== null && <p className="text-slate-500">{isPast ? 'No longer needed at this age.' : 'Not yet — starts later.'}</p>
        )}
        {child && <ScheduleStatus supplement={supplement} child={child} />}
        {entries.length > 0 && supplement.schedule.kind !== 'once' && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
            Logged:
            {entries.slice(0, 4).map((entry) => (
              <span key={entry.id} className="inline-flex items-center gap-0.5 rounded-full bg-slate-100 py-0.5 pl-2 pr-1 text-slate-700">
                {formatDate(entry.date)}
                <button
                  type="button"
                  aria-label={`Remove ${formatDate(entry.date)}`}
                  className="rounded-full p-0.5 hover:bg-slate-200"
                  onClick={async () => {
                    if (!child || !(await confirmDelete(`${supplement.name} on ${formatDate(entry.date)}`))) return;
                    updateChild(child.id, (c) => ({ ...c, supplements: c.supplements.filter((e) => e.id !== entry.id) }));
                  }}
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        )}
        {supplement.notes.length > 0 && (
          <ul className="list-disc space-y-1 pl-4 text-xs text-slate-500">
            {supplement.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <SourceLink source={supplement.source} />
          {canLog && (isForAge || supplement.schedule.kind === 'once') && (
            <Button size="sm" variant="secondary" onClick={() => setIsLogging(true)}>
              {supplement.schedule.kind === 'once' && entries.length ? 'Change date' : 'Log dose'}
            </Button>
          )}
        </div>
      </div>
      {child && (
        <DateGivenModal
          isOpen={isLogging}
          title={supplement.name}
          initialDate=""
          minDate={child.birthDate}
          onSave={logDose}
          onClose={() => setIsLogging(false)}
        />
      )}
    </Card>
  );
};

const ScheduleStatus = ({ supplement, child }: { supplement: ChildSupplement; child: Child }) => {
  const entries = supplementEntries(child, supplement.id);
  if (supplement.schedule.kind === 'once') {
    return entries.length ? (
      <Badge tone="success">Given {formatDate(entries[0].date)}</Badge>
    ) : (
      <p className="text-xs text-slate-500">Not recorded. Check the Buku KIA: it is usually given right after birth.</p>
    );
  }
  if (supplement.schedule.kind === 'rounds') {
    const rounds = listSupplementRounds(child, supplement);
    const visible = rounds.filter((r) => r.status !== 'upcoming').slice(-4).concat(rounds.filter((r) => r.status === 'upcoming').slice(0, 2));
    if (!visible.length) return null;
    return (
      <ul className="flex flex-wrap gap-2">
        {visible.map((round) => (
          <li key={round.month} className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-2 py-1 text-xs text-slate-600">
            {formatDate(round.month, { month: 'short', year: 'numeric' })}
            <RoundStatusBadge status={round.status} givenOn={round.givenOn} />
          </li>
        ))}
      </ul>
    );
  }
  if (supplement.schedule.kind === 'interval') {
    const state = intervalState(child, supplement);
    if (!state || childAgeMonths(child) > supplement.untilMonths) return null;
    return (
      <p className="text-xs text-slate-600">
        {state.lastGiven ? `Last: ${formatDate(state.lastGiven)} · ` : ''}
        Next: <span className="font-medium">{formatDate(state.nextDue)}</span>{' '}
        {state.isDue && <Badge tone="warning">Due now</Badge>}
      </p>
    );
  }
  return null;
};

const SourceLink = ({ source }: { source: ChildSupplement['source'] }) =>
  source.url ? (
    <a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:underline">
      {source.name} <ExternalLink size={12} />
    </a>
  ) : (
    <span className="text-xs text-slate-500">{source.name}</span>
  );
