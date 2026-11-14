import type { FastingSession } from '../types';
import { addDays, todayKey } from './date';
import { average } from './math';

/** Fasts this long or longer, repeated, look like OMAD (one meal a day). */
export const LONG_FAST_HOURS = 20;

export const FASTING_PRESETS = [
  { hours: 12, label: '12:12' },
  { hours: 14, label: '14:10' },
  { hours: 16, label: '16:8' },
  { hours: 18, label: '18:6' },
  { hours: 20, label: '20:4' },
  { hours: 23, label: 'OMAD 23:1' },
] as const;

const pad = (n: number) => String(n).padStart(2, '0');

/** Local "YYYY-MM-DDTHH:mm" for a Date (the format of <input type="datetime-local">). */
export const toDateTimeKey = (date: Date): string =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;

export const nowDateTimeKey = (): string => toDateTimeKey(new Date());

/** Parses a local "YYYY-MM-DDTHH:mm" string as local time. */
export const parseDateTimeKey = (key: string): Date => {
  const [date, time] = key.split('T');
  const [y, m, d] = date.split('-').map(Number);
  const [hh, mm] = time.split(':').map(Number);
  return new Date(y, m - 1, d, hh, mm);
};

export const hoursBetween = (fromKey: string, to: Date | string): number => {
  const end = typeof to === 'string' ? parseDateTimeKey(to) : to;
  return Math.max(0, (end.getTime() - parseDateTimeKey(fromKey).getTime()) / 3_600_000);
};

export const sessionHours = (session: FastingSession, now = new Date()): number => hoursBetween(session.startAt, session.endAt ?? now);

/** "16:8" for 16 h; custom targets show as "15 h". */
export const fastingLabel = (hours: number): string => FASTING_PRESETS.find((preset) => preset.hours === hours)?.label ?? `${hours} h`;

/** "14 h 05 m" */
export const formatDuration = (hours: number): string => {
  const totalMinutes = Math.floor(hours * 60);
  return `${Math.floor(totalMinutes / 60)} h ${pad(totalMinutes % 60)} m`;
};

/** The running fast (no end yet); the newest one if a merged backup left several. */
export const activeSession = (sessions: FastingSession[]): FastingSession | undefined =>
  sessions.filter((session) => !session.endAt).sort((a, b) => b.startAt.localeCompare(a.startAt))[0];

export type CompletedFast = FastingSession & { endAt: string };

/** Finished fasts, newest first. */
export const completedSessions = (sessions: FastingSession[]): CompletedFast[] =>
  sessions.filter((session): session is CompletedFast => Boolean(session.endAt)).sort((a, b) => b.startAt.localeCompare(a.startAt));

export const isTargetMet = (session: FastingSession): boolean => Boolean(session.endAt) && sessionHours(session) >= session.targetHours;

export interface FastingSummary {
  count: number;
  averageHours: number;
  targetMetCount: number;
  longFastCount: number;
  bingeCount: number;
  /** Consecutive days (up to today) with a fast that met its target, ending that day. */
  streakDays: number;
}

/** Summary of fasts that ended in the last `days` days (today included). */
export const summarizeFasting = (sessions: FastingSession[], days = 7, today = todayKey()): FastingSummary => {
  const done = completedSessions(sessions);
  const from = addDays(today, -(days - 1));
  const recent = done.filter((session) => session.endAt.slice(0, 10) >= from && session.endAt.slice(0, 10) <= today);
  const hours = recent.map((session) => sessionHours(session));
  const metDays = new Set(done.filter(isTargetMet).map((session) => session.endAt.slice(0, 10)));
  // A streak may still be alive today before today's fast has ended, so it may start from yesterday.
  let day = metDays.has(today) ? today : addDays(today, -1);
  let streakDays = 0;
  while (metDays.has(day)) {
    streakDays += 1;
    day = addDays(day, -1);
  }
  return {
    count: recent.length,
    averageHours: average(hours),
    targetMetCount: recent.filter(isTargetMet).length,
    longFastCount: hours.filter((h) => h >= LONG_FAST_HOURS).length,
    bingeCount: recent.filter((session) => session.isBinge).length,
    streakDays,
  };
};

/** At least 3 fasts of 20 h+ in the window: the OMAD pattern we advise against long term. */
export const hasLongFastPattern = (summary: FastingSummary): boolean => summary.longFastCount >= 3;
