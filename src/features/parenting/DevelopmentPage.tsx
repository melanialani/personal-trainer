import { AlertTriangle, Check, ExternalLink, Moon, MonitorSmartphone, Soup, X } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import { GENERAL_RED_FLAGS, MILESTONE_CHECKPOINTS, MILESTONE_DOMAIN_LABELS, type MilestoneCheckpoint, type MilestoneDomain } from '../../data/milestones';
import { PARENTING_STAGES, type ParentingStage } from '../../data/parentingStages';
import { childAgeMonths, milestoneProgress, pickForAge } from '../../lib/child';
import { todayKey } from '../../lib/date';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';
import { Notice } from '../../shared/components/Notice';
import { ProgressBar } from '../../shared/components/ProgressBar';
import { Tabs } from '../../shared/components/Tabs';
import type { Child } from '../../types';
import { MedicalDisclaimer, ParentingHeader } from './ParentingHeader';
import { useChildren } from './useChildren';

type DevelopmentTab = 'milestones' | 'guide';

const DOMAINS: MilestoneDomain[] = ['social', 'language', 'cognitive', 'motor'];

export const DevelopmentPage = () => {
  const { activeChild } = useChildren();
  const age = activeChild ? childAgeMonths(activeChild) : null;
  const currentStage = age === null ? null : pickForAge(PARENTING_STAGES, age, (s) => s.fromMonths);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [tab, setTab] = useState<DevelopmentTab>('milestones');

  // Switching child jumps back to that child's current stage.
  useEffect(() => setSelectedId(null), [activeChild?.id]);
  const stage = PARENTING_STAGES.find((s) => s.id === selectedId) ?? currentStage ?? PARENTING_STAGES[0];
  const checkpoint = MILESTONE_CHECKPOINTS.find((c) => c.ageMonths === stage.fromMonths) ?? null;
  const nextCheckpoint = MILESTONE_CHECKPOINTS.find((c) => c.ageMonths > stage.fromMonths) ?? null;

  return (
    <div>
      <ParentingHeader
        title="Development"
        description="What children usually can do at each age, what they are busy with, and what helps — from birth to 18."
      />

      <div className="scrollbar-none -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {PARENTING_STAGES.map((s) => (
          <div key={s.id} className="shrink-0">
            <Chip isActive={s.id === stage.id} onClick={() => setSelectedId(s.id)}>
              {s.label}
              {s.id === currentStage?.id ? ' ★' : ''}
            </Chip>
          </div>
        ))}
      </div>
      {activeChild && currentStage && stage.id !== currentStage.id && (
        <p className="-mt-2 mb-4 text-xs text-slate-500">★ = {activeChild.name}'s current stage.</p>
      )}

      <div className="mb-4">
        <Tabs
          tabs={[
            { value: 'milestones', label: 'Milestones' },
            { value: 'guide', label: 'Parenting guide' },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>

      {tab === 'milestones' ? (
        <div className="space-y-5">
          {checkpoint ? (
            <MilestoneList checkpoint={checkpoint} child={activeChild} />
          ) : (
            <Card>
              <p className="text-sm text-slate-600">
                The first milestone check is at {nextCheckpoint?.label ?? '2 bulan'}. Until then, see the parenting guide for this stage.
              </p>
            </Card>
          )}
          <RedFlags stage={stage} />
        </div>
      ) : (
        <StageGuide stage={stage} />
      )}

      <div className="mt-6">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

const MilestoneList = ({ checkpoint, child }: { checkpoint: MilestoneCheckpoint; child: Child | null }) => {
  const { updateChild } = useChildren();
  const progress = child ? milestoneProgress(child, checkpoint.items.map((i) => i.id)) : null;
  const canTick = Boolean(child) && checkpoint.isChecklist && childAgeMonths(child!) >= checkpoint.ageMonths - 3;

  const toggle = (id: string) => {
    if (!child) return;
    updateChild(child.id, (c) => {
      const milestones = { ...c.milestones };
      if (milestones[id]) delete milestones[id];
      else milestones[id] = todayKey();
      return { ...c, milestones };
    });
  };

  return (
    <Card
      title={checkpoint.isChecklist ? `By ${checkpoint.label}, most children can…` : `At ${checkpoint.label}, children often…`}
      subtitle={
        checkpoint.isChecklist
          ? 'Things at least 75% of children do by this age. Not a race: some children get there a little later.'
          : 'Typical development, not a checklist.'
      }
      action={progress && canTick ? <span className="text-xs font-medium text-slate-600">{progress.done}/{progress.total}</span> : undefined}
    >
      {progress && canTick && (
        <div className="mb-4">
          <ProgressBar value={progress.total ? progress.done / progress.total : 0} />
        </div>
      )}
      <div className="space-y-5">
        {DOMAINS.map((domain) => {
          const items = checkpoint.items.filter((item) => item.domain === domain);
          if (!items.length) return null;
          return (
            <div key={domain}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{MILESTONE_DOMAIN_LABELS[domain]}</h3>
              <ul className="space-y-1.5">
                {items.map((item) => {
                  const isDone = Boolean(child?.milestones[item.id]);
                  return (
                    <li key={item.id}>
                      {canTick ? (
                        <label className="flex cursor-pointer items-start gap-2.5 text-sm text-slate-700">
                          <input
                            type="checkbox"
                            checked={isDone}
                            onChange={() => toggle(item.id)}
                            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-brand-600"
                          />
                          <span className={isDone ? 'text-slate-500 line-through decoration-slate-300' : ''}>{item.text}</span>
                        </label>
                      ) : (
                        <p className="flex gap-2 text-sm text-slate-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                          {item.text}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {child && checkpoint.isChecklist && !canTick && (
        <p className="mt-4 text-xs text-slate-500">You can tick these from about 3 months before this age.</p>
      )}
      <a href={checkpoint.source.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs text-slate-500 hover:underline">
        {checkpoint.source.name} <ExternalLink size={12} />
      </a>
    </Card>
  );
};

const RedFlags = ({ stage }: { stage: ParentingStage }) => (
  <Card title="When to see a doctor" icon={<AlertTriangle size={16} className="text-rose-600 dark:text-rose-400" />}>
    {stage.redFlags.length > 0 && (
      <Notice tone="danger" size="sm" className="mb-3">
        <ul className="list-disc space-y-1 pl-4">
          {stage.redFlags.map((flag) => (
            <li key={flag}>{flag}</li>
          ))}
        </ul>
      </Notice>
    )}
    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">At any age</p>
    <ul className="list-disc space-y-1 pl-4 text-sm text-slate-600">
      {GENERAL_RED_FLAGS.map((flag) => (
        <li key={flag}>{flag}</li>
      ))}
    </ul>
  </Card>
);

const StageGuide = ({ stage }: { stage: ParentingStage }) => (
  <div className="space-y-5">
    <Card title={`Sedang aktif apa? · ${stage.label}`}>
      <p className="text-sm text-slate-700">{stage.focus}</p>
      <h3 className="mb-1.5 mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Biasanya ngapain</h3>
      <BulletList items={stage.dailyLife} />
    </Card>

    <div className="grid gap-3 sm:grid-cols-3">
      <GuidelineTile icon={<Moon size={16} />} label="Sleep" text={stage.sleep} />
      <GuidelineTile icon={<MonitorSmartphone size={16} />} label="Screens" text={stage.screen} />
      <GuidelineTile icon={<Soup size={16} />} label="Food" text={stage.feeding} />
    </div>

    <Card title="Sebaiknya orang tua…">
      <BulletList items={stage.parentTips} />
    </Card>

    <div className="grid gap-5 lg:grid-cols-2">
      <Card title="Do" icon={<Check size={16} className="text-emerald-600 dark:text-emerald-400" />}>
        <DoDontList items={stage.dos} />
      </Card>
      <Card title="Don't" icon={<X size={16} className="text-rose-600 dark:text-rose-400" />}>
        <DoDontList items={stage.donts} />
      </Card>
    </div>

    <p className="text-xs text-slate-500">Sources: {stage.sources.join(' · ')}</p>
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-1.5 pl-4 text-sm text-slate-700">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const DoDontList = ({ items }: { items: ParentingStage['dos'] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item.text}>
        <p className="text-sm font-medium text-slate-800">{item.text}</p>
        <p className="mt-0.5 text-sm text-slate-600">
          <span className="font-medium text-slate-700">Why: </span>
          {item.why}
        </p>
      </li>
    ))}
  </ul>
);

const GuidelineTile = ({ icon, label, text }: { icon: ReactNode; label: string; text: string }) => (
  <div className="rounded-2xl border border-slate-200/80 bg-surface p-4 shadow-sm">
    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
      {icon}
      {label}
    </p>
    <p className="mt-1.5 text-sm text-slate-700">{text}</p>
  </div>
);
