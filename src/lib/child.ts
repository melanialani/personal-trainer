import type { ChildSupplement, DoseByAge } from '../data/childSupplements';
import { VACCINES, type Vaccine, type VaccineDose } from '../data/vaccines';
import type { Child, ChildMeasurement } from '../types';
import { addMonths, completedMonths, sortByDateDesc, todayKey } from './date';

/** Children are followed until their 18th birthday. */
export const MAX_CHILD_MONTHS = 216;

export const childAgeMonths = (child: Pick<Child, 'birthDate'>, onDate = todayKey()): number =>
  Math.max(0, completedMonths(child.birthDate, onDate));

/** "3 bulan", "1 tahun 4 bulan", "7 tahun" (Indonesian, matches the content language). */
export const formatChildAge = (months: number): string => {
  if (months < 1) return 'baru lahir';
  if (months < 24) {
    const years = Math.floor(months / 12);
    const rest = months % 12;
    if (years === 0) return `${months} bulan`;
    return rest ? `${years} tahun ${rest} bulan` : `${years} tahun`;
  }
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return rest ? `${years} tahun ${rest} bulan` : `${years} tahun`;
};

/** Short age label for schedules: "Lahir", "2 bln", "18 bln", "5 thn". */
export const formatAgeShort = (months: number): string => {
  if (months === 0) return 'Lahir';
  if (months < 24 || months % 12 !== 0) return `${months} bln`;
  return `${months / 12} thn`;
};

export const formatAgeWindow = (from: number, until: number): string =>
  from === until ? formatAgeShort(from) : `${formatAgeShort(from)} – ${formatAgeShort(until)}`;

export const latestMeasurement = (child: Child, field: 'weightKg' | 'heightCm' | 'headCm'): ChildMeasurement | undefined =>
  sortByDateDesc(child.measurements).find((m) => typeof m[field] === 'number');

// ---------- Vaccines ----------

export type DoseStatus = 'done' | 'upcoming' | 'due' | 'late' | 'missed' | 'optional';

export interface DoseState {
  vaccine: Vaccine;
  dose: VaccineDose;
  status: DoseStatus;
  givenOn?: string;
  /** First day of the recommended window. */
  dueFrom: string;
  /** Last day of the recommended window. */
  dueUntil: string;
}

export const doseStatus = (child: Child, vaccine: Vaccine, dose: VaccineDose, ageMonths: number): DoseStatus => {
  if (child.vaccines[dose.id]) return 'done';
  if (dose.hardLimitMonths !== undefined && ageMonths > dose.hardLimitMonths) return 'missed';
  if (ageMonths < dose.fromMonths) return 'upcoming';
  if (vaccine.condition) return 'optional';
  return ageMonths <= dose.untilMonths ? 'due' : 'late';
};

export const listDoseStates = (child: Child, onDate = todayKey()): DoseState[] => {
  const age = childAgeMonths(child, onDate);
  return VACCINES.flatMap((vaccine) =>
    vaccine.doses.map((dose) => ({
      vaccine,
      dose,
      status: doseStatus(child, vaccine, dose, age),
      givenOn: child.vaccines[dose.id],
      dueFrom: addMonths(child.birthDate, dose.fromMonths),
      // Window ends the day before the month after `untilMonths` starts.
      dueUntil: addMonths(child.birthDate, dose.untilMonths + 1),
    })),
  );
};

export interface RepeatState {
  vaccine: Vaccine;
  label: string;
  lastGiven: string | null;
  nextDue: string | null;
  isDue: boolean;
}

/** Yearly influenza / 3-yearly typhoid after the base doses. Logged under the vaccine id with a date suffix. */
export const repeatDoseKey = (vaccineId: string, date: string) => `${vaccineId}-repeat-${date}`;

export const listRepeatStates = (child: Child, onDate = todayKey()): RepeatState[] =>
  VACCINES.filter((vaccine) => vaccine.repeat).map((vaccine) => {
    const repeat = vaccine.repeat!;
    const prefix = `${vaccine.id}-repeat-`;
    const repeatDates = Object.keys(child.vaccines).filter((key) => key.startsWith(prefix)).map((key) => child.vaccines[key]);
    const base = child.vaccines[repeat.afterDoseId];
    const all = [base, ...repeatDates].filter(Boolean).sort();
    const lastGiven = all.length ? all[all.length - 1] : null;
    const nextDue = lastGiven ? addMonths(lastGiven, repeat.everyMonths) : null;
    const isWithinAge = childAgeMonths(child, onDate) <= repeat.untilMonths;
    return { vaccine, label: repeat.label, lastGiven, nextDue, isDue: Boolean(nextDue && isWithinAge && nextDue <= onDate) };
  });

export const countDue = (states: DoseState[]) => states.filter((s) => s.status === 'due' || s.status === 'late').length;

// ---------- Supplements ----------

export const supplementEntries = (child: Child, supplementId: string) =>
  sortByDateDesc(child.supplements.filter((entry) => entry.supplementId === supplementId));

export const dosesForAge = (supplement: ChildSupplement, ageMonths: number): DoseByAge[] =>
  supplement.doses.filter((dose) => ageMonths >= dose.fromMonths && ageMonths <= dose.untilMonths);

export const isSupplementForAge = (supplement: ChildSupplement, ageMonths: number) =>
  ageMonths >= supplement.fromMonths && ageMonths <= supplement.untilMonths;

export type RoundStatus = 'done' | 'missed' | 'current' | 'upcoming';

export interface SupplementRound {
  /** First day of the round month, YYYY-MM-01. */
  month: string;
  status: RoundStatus;
  givenOn?: string;
  ageMonths: number;
}

const monthStart = (key: string) => `${key.slice(0, 7)}-01`;

/**
 * Program rounds (e.g. vitamin A every February and August) the child is eligible for, oldest first.
 * A dose logged between one round month and the next counts for that round (late catch-up at the Puskesmas).
 */
export const listSupplementRounds = (child: Child, supplement: ChildSupplement, onDate = todayKey()): SupplementRound[] => {
  if (supplement.schedule.kind !== 'rounds') return [];
  const months = supplement.schedule.months;
  const entries = child.supplements.filter((entry) => entry.supplementId === supplement.id).map((entry) => entry.date).sort();
  const start = monthStart(addMonths(child.birthDate, supplement.fromMonths));
  const end = monthStart(addMonths(child.birthDate, supplement.untilMonths));
  const rounds: string[] = [];
  for (let cursor = start; cursor <= end; cursor = addMonths(cursor, 1)) {
    if (months.includes(Number(cursor.slice(5, 7)))) rounds.push(cursor);
  }
  const currentMonth = monthStart(onDate);
  return rounds.map((month, index) => {
    const next = rounds[index + 1] ?? addMonths(month, 6);
    const givenOn = entries.find((date) => date >= month && date < next);
    const ageMonths = completedMonths(child.birthDate, month);
    let status: RoundStatus;
    if (givenOn) status = 'done';
    else if (month > currentMonth) status = 'upcoming';
    else if (month === currentMonth || next > onDate) status = 'current';
    else status = 'missed';
    return { month, status, givenOn, ageMonths: Math.max(ageMonths, supplement.fromMonths) };
  });
};

export interface IntervalState {
  lastGiven: string | null;
  nextDue: string;
  isDue: boolean;
}

/** Interval schedule (e.g. deworming every 6 months), starting at the supplement's first month. */
export const intervalState = (child: Child, supplement: ChildSupplement, onDate = todayKey()): IntervalState | null => {
  if (supplement.schedule.kind !== 'interval') return null;
  const lastGiven = supplementEntries(child, supplement.id)[0]?.date ?? null;
  const firstDue = addMonths(child.birthDate, supplement.fromMonths);
  const nextDue = lastGiven ? addMonths(lastGiven, supplement.schedule.everyMonths) : firstDue;
  const age = childAgeMonths(child, onDate);
  return { lastGiven, nextDue, isDue: nextDue <= onDate && isSupplementForAge(supplement, age) };
};


// ---------- Development stages ----------

/** Last item whose `fromMonths` / `ageMonths` is ≤ the age (lists are sorted ascending). */
export const pickForAge = <T,>(items: T[], ageMonths: number, start: (item: T) => number): T =>
  [...items].reverse().find((item) => start(item) <= ageMonths) ?? items[0];

/** Share of a checkpoint's milestones ticked for a child. */
export const milestoneProgress = (child: Child, ids: string[]) => ({
  done: ids.filter((id) => child.milestones[id]).length,
  total: ids.length,
});
