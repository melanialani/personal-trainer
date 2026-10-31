import { ChevronDown, ExternalLink, Syringe } from 'lucide-react';
import { useState } from 'react';
import { VACCINE_SCHEDULE_SOURCE, VACCINES, type Vaccine, type VaccineDose } from '../../data/vaccines';
import { childAgeMonths, formatAgeShort, formatAgeWindow, listDoseStates, listRepeatStates, repeatDoseKey, type DoseState } from '../../lib/child';
import { formatDate } from '../../lib/date';
import { pluralize } from '../../lib/format';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { Checkbox } from '../../shared/components/FormFields';
import { Notice } from '../../shared/components/Notice';
import { useToast } from '../../shared/components/ToastProvider';
import type { Child } from '../../types';
import { DateGivenModal } from './DateGivenModal';
import { DoseStatusBadge, ProgramBadge } from './statusBadges';
import { useChildren } from './useChildren';

interface Editing {
  /** Dose id, or the vaccine id for a repeat dose (saved under `repeatDoseKey`). */
  key: string;
  isRepeat: boolean;
  title: string;
  initialDate: string;
  canRemove: boolean;
}

/** Schedule grouped by recommended age; with a child, each dose shows its status and can be ticked off. */
export const VaccinesTab = ({ child }: { child: Child | null }) => {
  const { updateChild } = useChildren();
  const showToast = useToast();
  const confirmDelete = useConfirmDelete();
  const [editing, setEditing] = useState<Editing | null>(null);
  const [showDone, setShowDone] = useState(true);

  const states = child ? listDoseStates(child) : [];
  const stateOf = (doseId: string) => states.find((s) => s.dose.id === doseId);
  const pendingAll = states.filter((s) => s.status === 'due' || s.status === 'late');
  // Program doses (free, part of "imunisasi lengkap") come first; optional IDAI doses are listed separately.
  const pending = pendingAll.filter((s) => s.dose.isProgram);
  const pendingOptional = pendingAll.filter((s) => !s.dose.isProgram);
  const repeats = child ? listRepeatStates(child) : [];

  const groups = new Map<number, { vaccine: Vaccine; dose: VaccineDose }[]>();
  VACCINES.forEach((vaccine) =>
    vaccine.doses.forEach((dose) => groups.set(dose.fromMonths, [...(groups.get(dose.fromMonths) ?? []), { vaccine, dose }])),
  );
  const ages = [...groups.keys()].sort((a, b) => a - b);

  const openDose = (vaccine: Vaccine, dose: VaccineDose) => {
    const given = child?.vaccines[dose.id];
    setEditing({ key: dose.id, isRepeat: false, title: `${dose.label} — ${vaccine.name}`, initialDate: given ?? '', canRemove: Boolean(given) });
  };

  const saveDate = (date: string) => {
    if (!child || !editing) return;
    const key = editing.isRepeat ? repeatDoseKey(editing.key, date) : editing.key;
    updateChild(child.id, (c) => ({ ...c, vaccines: { ...c.vaccines, [key]: date } }));
    showToast('Vaccine recorded');
    setEditing(null);
  };

  const undoRepeat = async (key: string, label: string) => {
    if (!child || !(await confirmDelete(`${label} on ${formatDate(child.vaccines[key])}`))) return;
    updateChild(child.id, (c) => {
      const vaccines = { ...c.vaccines };
      delete vaccines[key];
      return { ...c, vaccines };
    });
  };

  const removeDate = () => {
    if (!child || !editing) return;
    updateChild(child.id, (c) => {
      const vaccines = { ...c.vaccines };
      delete vaccines[editing.key];
      return { ...c, vaccines };
    });
    setEditing(null);
  };

  return (
    <div className="space-y-5">
      {child && (
        <Card>
          {pendingAll.length ? (
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {pending.length
                  ? `${pluralize(pending.length, 'program dose')} to get now for ${child.name}`
                  : `All program doses are up to date for ${child.name}`}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {pending.map((s) => (
                  <li key={s.dose.id}>
                    <Badge tone={s.status === 'late' ? 'danger' : 'warning'}>{s.dose.label}</Badge>
                  </li>
                ))}
              </ul>
              {pendingOptional.length > 0 && (
                <p className="mt-2 text-xs text-slate-600">
                  Optional (IDAI, paid) not given yet: {pendingOptional.map((s) => s.dose.label).join(', ')}.
                </p>
              )}
              <p className="mt-2 text-xs text-slate-500">
                Already vaccinated? Tap each dose below and copy the date from the Buku KIA. Late doses can usually still be given ("imunisasi kejar"). Ask the doctor or Puskesmas — you don't need to start over.
              </p>
            </div>
          ) : (
            <p className="text-sm text-slate-700">Nothing due right now for {child.name}. Tick doses as they are given to keep this up to date.</p>
          )}
          <div className="mt-3">
            <Checkbox label="Show doses already given" checked={showDone} onChange={setShowDone} />
          </div>
        </Card>
      )}

      {repeats.some((r) => r.isDue) && (
        <Notice>
          {repeats
            .filter((r) => r.isDue)
            .map((r) => `${r.label} due (last given ${formatDate(r.lastGiven!)})`)
            .join(' · ')}
        </Notice>
      )}

      <Card title="Schedule by age" subtitle="IDAI 2024 recommendation; doses marked Free are in the government program." bodyClassName="divide-y divide-slate-100">
        {ages.map((age) => {
          const items = groups.get(age)!.filter(({ dose }) => showDone || stateOf(dose.id)?.status !== 'done');
          if (!items.length) return null;
          const isCurrent = child ? childAgeMonths(child) >= age && (ages.find((a) => a > age) ?? Infinity) > childAgeMonths(child) : false;
          return (
            <div key={age} className="px-4 py-3 sm:px-5">
              <p className={`mb-2 text-xs font-semibold uppercase tracking-wide ${isCurrent ? 'text-brand-700 dark:text-brand-400' : 'text-slate-500'}`}>
                {age === 0 ? 'At birth' : `Age ${formatAgeShort(age)}`}
                {isCurrent && ' · now'}
              </p>
              <ul className="space-y-2">
                {items.map(({ vaccine, dose }) => (
                  <DoseRow key={dose.id} vaccine={vaccine} dose={dose} state={stateOf(dose.id)} onClick={child ? () => openDose(vaccine, dose) : undefined} />
                ))}
              </ul>
            </div>
          );
        })}
      </Card>

      {child && repeats.length > 0 && (
        <Card title="Repeat doses" subtitle="Given again after the first doses.">
          <ul className="space-y-3">
            {repeats.map((r) => (
              <li key={r.vaccine.id} className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-medium text-slate-800">{r.label}</p>
                  <p className="text-xs text-slate-500">
                    {r.lastGiven ? `Last: ${formatDate(r.lastGiven)} · next: ${formatDate(r.nextDue!)}` : 'Record the first doses in the schedule above first.'}
                  </p>
                </div>
                {r.lastGiven && (
                  <div className="flex gap-2">
                    {r.lastRepeatKey && (
                      <Button size="sm" variant="ghost" onClick={() => undoRepeat(r.lastRepeatKey!, r.label)}>
                        Undo last
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setEditing({ key: r.vaccine.id, isRepeat: true, title: r.label, initialDate: '', canRemove: false })}
                    >
                      Log dose
                    </Button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Card>
      )}

      <Card title="About each vaccine" icon={<Syringe size={16} />} bodyClassName="divide-y divide-slate-100">
        {VACCINES.map((vaccine) => (
          <VaccineInfo key={vaccine.id} vaccine={vaccine} />
        ))}
      </Card>

      <a
        href={VACCINE_SCHEDULE_SOURCE.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-xs text-slate-500 underline-offset-2 hover:underline"
      >
        Source: {VACCINE_SCHEDULE_SOURCE.name} <ExternalLink size={12} />
      </a>

      {child && editing && (
        <DateGivenModal
          isOpen
          title={editing.title}
          initialDate={editing.initialDate}
          minDate={child.birthDate}
          onSave={saveDate}
          onRemove={editing.canRemove ? removeDate : undefined}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  );
};

interface DoseRowProps {
  vaccine: Vaccine;
  dose: VaccineDose;
  state?: DoseState;
  onClick?: () => void;
}

const DoseRow = ({ vaccine, dose, state, onClick }: DoseRowProps) => {
  const content = (
    <>
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-800">
          {dose.label} <span className="font-normal text-slate-500">· {vaccine.name}</span>
        </p>
        <p className="text-xs text-slate-500">
          {formatAgeWindow(dose.fromMonths, dose.untilMonths)}
          {dose.note ? ` · ${dose.note}` : ''}
          {vaccine.condition ? ` · ${vaccine.condition}` : ''}
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap justify-end gap-1">
        {state ? <DoseStatusBadge status={state.status} givenOn={state.givenOn} dueFrom={state.dueFrom} isProgram={dose.isProgram} /> : <ProgramBadge isProgram={dose.isProgram} />}
        {state && dose.isProgram && state.status !== 'done' && <Badge tone="brand">Free</Badge>}
      </div>
    </>
  );
  if (!onClick) return <li className="flex items-start justify-between gap-3">{content}</li>;
  return (
    <li>
      <button type="button" onClick={onClick} className="-mx-2 flex w-[calc(100%+1rem)] items-start justify-between gap-3 rounded-lg px-2 py-1 text-left hover:bg-slate-50">
        {content}
      </button>
    </li>
  );
};

const VaccineInfo = ({ vaccine }: { vaccine: Vaccine }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isProgram = vaccine.doses.some((d) => d.isProgram);
  return (
    <div>
      <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50 sm:px-5">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-800">{vaccine.name}</p>
          <p className="text-xs text-slate-500">{vaccine.protectsAgainst}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <ProgramBadge isProgram={isProgram} />
          <ChevronDown size={16} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      {isOpen && (
        <div className="space-y-2 px-4 pb-4 text-sm text-slate-600 sm:px-5">
          {vaccine.condition && <p className="font-medium text-slate-700">{vaccine.condition}</p>}
          <ul className="space-y-1">
            {vaccine.doses.map((dose) => (
              <li key={dose.id}>
                <span className="font-medium text-slate-700">{dose.label}</span>: {formatAgeWindow(dose.fromMonths, dose.untilMonths)}
                {dose.note ? ` — ${dose.note}` : ''}
              </li>
            ))}
          </ul>
          {vaccine.notes.length > 0 && (
            <ul className="list-disc space-y-1 pl-4">
              {vaccine.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
