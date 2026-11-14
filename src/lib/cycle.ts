import { CYCLE_RULES, type CycleFlagId } from '../data/cycle';
import type { PeriodEntry } from '../types';
import { addDays, diffDays, todayKey } from './date';
import { average } from './math';

export const sortPeriodsAsc = (periods: PeriodEntry[]): PeriodEntry[] => [...periods].sort((a, b) => a.date.localeCompare(b.date));

/** Days from one period start to the next (only plausible gaps; longer gaps are probably missed logging). */
export const cycleLengths = (periods: PeriodEntry[]): number[] => {
  const sorted = sortPeriodsAsc(periods);
  return sorted
    .slice(1)
    .map((entry, index) => diffDays(sorted[index].date, entry.date))
    .filter((days) => days >= CYCLE_RULES.minPlausibleCycle && days <= CYCLE_RULES.maxPlausibleCycle);
};

/** Bleeding days including the first and last day; undefined when the end is not logged. */
export const periodLength = (entry: PeriodEntry): number | undefined => (entry.endDate ? diffDays(entry.date, entry.endDate) + 1 : undefined);

export interface CycleStats {
  lastStart?: string;
  /** 1 on the first day of the latest period. */
  cycleDay?: number;
  averageCycle: number;
  /** Cycles used for the average (0 = default 28 days). */
  cyclesUsed: number;
  shortestCycle?: number;
  longestCycle?: number;
  averagePeriod: number;
  periodsWithEnd: number;
  nextStart?: string;
  /** Negative when the period is late. */
  daysUntilNext?: number;
  isOngoing: boolean;
  flags: CycleFlagId[];
}

export const calcCycleStats = (periods: PeriodEntry[], today = todayKey()): CycleStats => {
  const sorted = sortPeriodsAsc(periods.filter((entry) => entry.date <= today));
  const recentCycles = cycleLengths(sorted).slice(-CYCLE_RULES.cyclesForAverage);
  const lengths = sorted.map(periodLength).filter((days): days is number => days !== undefined);
  const averageCycle = recentCycles.length ? Math.round(average(recentCycles)) : CYCLE_RULES.defaultCycleDays;
  const averagePeriod = lengths.length ? Math.round(average(lengths.slice(-CYCLE_RULES.cyclesForAverage))) : CYCLE_RULES.defaultPeriodDays;
  const last = sorted[sorted.length - 1];
  const shortestCycle = recentCycles.length ? Math.min(...recentCycles) : undefined;
  const longestCycle = recentCycles.length ? Math.max(...recentCycles) : undefined;

  const flags: CycleFlagId[] = [];
  let cycleDay: number | undefined;
  let nextStart: string | undefined;
  let daysUntilNext: number | undefined;
  let isOngoing = false;

  if (last) {
    cycleDay = diffDays(last.date, today) + 1;
    nextStart = addDays(last.date, averageCycle);
    daysUntilNext = diffDays(today, nextStart);
    isOngoing = !last.endDate && cycleDay <= CYCLE_RULES.maxPeriodDays + 3;
    if (cycleDay > CYCLE_RULES.missedPeriodDays) flags.push('very-late');
    else if (daysUntilNext < 0) flags.push('late');
  }
  if (recentCycles.length >= 2) {
    if (averageCycle < CYCLE_RULES.adultMinCycle) flags.push('short-cycle');
    if (averageCycle > CYCLE_RULES.adultMaxCycle) flags.push('long-cycle');
  }
  if (recentCycles.length >= 3 && longestCycle !== undefined && shortestCycle !== undefined && longestCycle - shortestCycle > CYCLE_RULES.maxVariationDays) {
    flags.push('irregular');
  }
  if (lengths.slice(-3).some((days) => days > CYCLE_RULES.maxPeriodDays)) flags.push('long-period');

  return {
    lastStart: last?.date,
    cycleDay,
    averageCycle,
    cyclesUsed: recentCycles.length,
    shortestCycle,
    longestCycle,
    averagePeriod,
    periodsWithEnd: lengths.length,
    nextStart,
    daysUntilNext,
    isOngoing,
    flags,
  };
};

export type CycleDayKind = 'period' | 'period-estimated' | 'predicted';

/**
 * Day → kind for the calendar: logged bleeding days, the estimated rest of an ongoing period (no end logged), and
 * predicted periods for the next `cyclesAhead` cycles.
 */
export const cycleCalendarDays = (periods: PeriodEntry[], stats: CycleStats, today = todayKey(), cyclesAhead = 3): Map<string, CycleDayKind> => {
  const days = new Map<string, CycleDayKind>();
  const sorted = sortPeriodsAsc(periods);
  sorted.forEach((entry, index) => {
    const isLatest = index === sorted.length - 1;
    const end = entry.endDate ?? addDays(entry.date, stats.averagePeriod - 1);
    for (let day = entry.date; day <= end; day = addDays(day, 1)) {
      days.set(day, entry.endDate || (isLatest && day <= today) ? 'period' : 'period-estimated');
    }
  });
  if (stats.nextStart) {
    // A late period keeps showing as predicted from today on.
    let start = stats.nextStart < today ? today : stats.nextStart;
    for (let cycle = 0; cycle < cyclesAhead; cycle += 1) {
      for (let offset = 0; offset < stats.averagePeriod; offset += 1) {
        const day = addDays(start, offset);
        if (!days.has(day)) days.set(day, 'predicted');
      }
      start = addDays(start, stats.averageCycle);
    }
  }
  return days;
};

/** The logged period that covers `day` (start..end, or start..start+averagePeriod-1 when no end is logged). */
export const periodCovering = (periods: PeriodEntry[], day: string, averagePeriod: number): PeriodEntry | undefined =>
  periods.find((entry) => day >= entry.date && day <= (entry.endDate ?? addDays(entry.date, averagePeriod - 1)));
