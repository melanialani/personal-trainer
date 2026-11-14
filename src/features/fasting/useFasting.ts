import { useCallback } from 'react';
import { nowDateTimeKey } from '../../lib/fasting';
import { createId } from '../../lib/id';
import { useAppData } from '../../store/AppDataContext';
import type { FastingSession, FastingState } from '../../types';

/** Read/write helpers for `AppData.fasting` (nested, so it goes through `update`). */
export const useFasting = () => {
  const { data, update } = useAppData();

  const setFasting = useCallback(
    (updater: (current: FastingState) => FastingState) => update((current) => ({ ...current, fasting: updater(current.fasting) })),
    [update],
  );

  const setTargetHours = useCallback((targetHours: number) => setFasting((current) => ({ ...current, targetHours })), [setFasting]);

  const startFast = useCallback(
    (targetHours: number) => {
      const startAt = nowDateTimeKey();
      const session: FastingSession = { id: createId(), date: startAt.slice(0, 10), startAt, targetHours };
      setFasting((current) => ({ ...current, sessions: [...current.sessions, session] }));
    },
    [setFasting],
  );

  const saveSession = useCallback(
    (session: FastingSession) =>
      setFasting((current) => ({
        ...current,
        sessions: current.sessions.some((s) => s.id === session.id)
          ? current.sessions.map((s) => (s.id === session.id ? session : s))
          : [...current.sessions, session],
      })),
    [setFasting],
  );

  /** Ends a running fast now; a fast ended within its first minute is discarded (it has no length). */
  const endFast = useCallback(
    (id: string) => {
      const endAt = nowDateTimeKey();
      setFasting((current) => ({
        ...current,
        sessions: current.sessions
          .filter((s) => s.id !== id || endAt > s.startAt)
          .map((s) => (s.id === id && !s.endAt ? { ...s, endAt } : s)),
      }));
    },
    [setFasting],
  );

  const deleteSession = useCallback(
    (id: string) => setFasting((current) => ({ ...current, sessions: current.sessions.filter((s) => s.id !== id) })),
    [setFasting],
  );

  return { fasting: data.fasting, setTargetHours, startFast, saveSession, endFast, deleteSession };
};
