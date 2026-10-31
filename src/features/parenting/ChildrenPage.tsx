import { Baby, Pill, Ruler, Sparkles, Syringe } from 'lucide-react';
import type { ReactNode } from 'react';
import { CHILD_SUPPLEMENTS } from '../../data/childSupplements';
import { MILESTONE_CHECKPOINTS } from '../../data/milestones';
import { PARENTING_STAGES } from '../../data/parentingStages';
import {
  childAgeMonths,
  formatChildAge,
  intervalState,
  isSupplementForAge,
  listDoseStates,
  listSupplementRounds,
  milestoneProgress,
  pickForAge,
} from '../../lib/child';
import { formatDate, sortByDateDesc } from '../../lib/date';
import { assessMeasurement } from '../../lib/growth';
import { Badge } from '../../shared/components/Badge';
import { Card } from '../../shared/components/Card';
import { EmptyState } from '../../shared/components/EmptyState';
import { TextLink } from '../../shared/components/TextLink';
import type { Child } from '../../types';
import { GROWTH_INDICATOR_LABELS } from './growthLabels';
import { MedicalDisclaimer, ParentingHeader } from './ParentingHeader';
import { useChildren } from './useChildren';

export const ChildrenPage = () => {
  const { activeChild } = useChildren();
  return (
    <div>
      <ParentingHeader
        title="My Children"
        description="One place for each child's age stage, vaccines, vitamins and growth. Everything stays in this browser."
      />
      {activeChild ? (
        <ChildOverview child={activeChild} />
      ) : (
        <Card>
          <EmptyState
            icon={<Baby size={22} />}
            title="Add your first child"
            description="With a name, sex and birth date, the schedules below follow your child's age automatically. You can still browse every page without adding a child."
          />
        </Card>
      )}
      <div className="mt-6">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

const ChildOverview = ({ child }: { child: Child }) => {
  const age = childAgeMonths(child);
  const stage = pickForAge(PARENTING_STAGES, age, (s) => s.fromMonths);
  const checkpoint = MILESTONE_CHECKPOINTS.find((c) => c.isChecklist && c.ageMonths === stage.fromMonths);
  const progress = checkpoint ? milestoneProgress(child, checkpoint.items.map((i) => i.id)) : null;

  const doses = listDoseStates(child);
  const pending = doses.filter((d) => d.status === 'due' || d.status === 'late');
  const nextDose = doses.filter((d) => d.status === 'upcoming').sort((a, b) => a.dueFrom.localeCompare(b.dueFrom))[0];

  const supplementLines = CHILD_SUPPLEMENTS.filter((s) => isSupplementForAge(s, age) && s.schedule.kind !== 'ongoing' && s.schedule.kind !== 'once').map(
    (s) => {
      if (s.schedule.kind === 'rounds') {
        const rounds = listSupplementRounds(child, s);
        const current = rounds.find((r) => r.status === 'current');
        const next = rounds.find((r) => r.status === 'upcoming');
        return { name: s.name, text: current ? 'Due this round' : next ? `Next: ${formatDate(next.month, { month: 'long', year: 'numeric' })}` : '—', isDue: Boolean(current) };
      }
      const state = intervalState(child, s);
      return { name: s.name, text: state?.isDue ? 'Due now' : `Next: ${formatDate(state!.nextDue)}`, isDue: Boolean(state?.isDue) };
    },
  );

  const latest = sortByDateDesc(child.measurements)[0];
  const growth = latest
    ? (['weight', 'height'] as const).map((ind) => assessMeasurement(latest, ind, child.sex, child.birthDate)).filter((a) => a !== null)
    : [];

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <SummaryCard icon={<Sparkles size={16} />} title={`${child.name} · ${formatChildAge(age)}`} link="/development" linkLabel="Milestones & guide">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{stage.label}</p>
        <p className="mt-1 text-sm text-slate-700">{stage.focus}</p>
        {progress && (
          <p className="mt-2 text-xs text-slate-500">
            Milestones {checkpoint!.label}: {progress.done}/{progress.total} ticked
          </p>
        )}
      </SummaryCard>

      <SummaryCard icon={<Syringe size={16} />} title="Vaccines" link="/immunization" linkLabel="Full schedule">
        {pending.length ? (
          <div className="flex flex-wrap gap-1.5">
            {pending.map((d) => (
              <Badge key={d.dose.id} tone={d.status === 'late' ? 'danger' : 'warning'}>
                {d.dose.label}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-700">Nothing due right now.</p>
        )}
        {nextDose && (
          <p className="mt-2 text-xs text-slate-500">
            Next: {nextDose.dose.label} from {formatDate(nextDose.dueFrom)}
          </p>
        )}
      </SummaryCard>

      <SummaryCard icon={<Pill size={16} />} title="Vitamin A & deworming" link="/immunization" linkLabel="Vitamins & meds">
        {supplementLines.length ? (
          <ul className="space-y-1.5">
            {supplementLines.map((line) => (
              <li key={line.name} className="flex items-center justify-between gap-2 text-sm text-slate-700">
                {line.name}
                <Badge tone={line.isDue ? 'warning' : 'neutral'}>{line.text}</Badge>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-slate-700">No program doses at this age. See iron and vitamin D guidance.</p>
        )}
      </SummaryCard>

      <SummaryCard icon={<Ruler size={16} />} title="Growth" link="/growth" linkLabel="Growth chart">
        {latest ? (
          <>
            <ul className="space-y-1.5">
              {growth.map((a) => (
                <li key={a.indicator} className="flex items-center justify-between gap-2 text-sm text-slate-700">
                  {GROWTH_INDICATOR_LABELS[a.indicator]}
                  <Badge tone={a.status.tone}>{a.status.label}</Badge>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-slate-500">Last measured {formatDate(latest.date)}</p>
          </>
        ) : (
          <p className="text-sm text-slate-700">No measurements yet.</p>
        )}
      </SummaryCard>
    </div>
  );
};

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  link: string;
  linkLabel: string;
  children: ReactNode;
}

const SummaryCard = ({ icon, title, link, linkLabel, children }: SummaryCardProps) => (
  <Card title={title} icon={icon} action={<TextLink to={link} className="text-xs">{linkLabel} →</TextLink>}>
    {children}
  </Card>
);
