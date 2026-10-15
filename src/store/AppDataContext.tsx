import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { calcDailyTargets, type DailyTargets } from '../lib/calc';
import { loadData, saveData } from '../lib/storage';
import type { AppData } from '../types';

type CollectionKey = 'weights' | 'foodLog' | 'workoutLog' | 'customFoods';
type CollectionItem<K extends CollectionKey> = AppData[K][number];

interface AppDataContextValue {
  data: AppData;
  targets: DailyTargets | null;
  hasStorageError: boolean;
  update: (updater: (current: AppData) => AppData) => void;
  upsert: <K extends CollectionKey>(key: K, items: CollectionItem<K> | CollectionItem<K>[]) => void;
  remove: (key: CollectionKey, id: string) => void;
}

const AppDataContext = createContext<AppDataContextValue | null>(null);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<AppData>(loadData);
  const [hasStorageError, setHasStorageError] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setHasStorageError(!saveData(data));
  }, [data]);

  // Keep multiple open tabs in sync.
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key?.startsWith('fitplan:')) setData(loadData());
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const update = useCallback((updater: (current: AppData) => AppData) => setData(updater), []);

  const upsert = useCallback(<K extends CollectionKey>(key: K, items: CollectionItem<K> | CollectionItem<K>[]) => {
    const list = (Array.isArray(items) ? items : [items]) as { id: string }[];
    setData((current) => {
      const existing = current[key] as { id: string }[];
      const incomingIds = new Set(list.map((item) => item.id));
      const updated = existing.map((item) => list.find((next) => next.id === item.id) ?? item);
      const added = list.filter((item) => !existing.some((e) => e.id === item.id));
      return { ...current, [key]: incomingIds.size ? [...updated, ...added] : existing };
    });
  }, []);

  const remove = useCallback((key: CollectionKey, id: string) => {
    setData((current) => ({ ...current, [key]: (current[key] as { id: string }[]).filter((item) => item.id !== id) }));
  }, []);

  const targets = useMemo(
    () => (data.profile ? calcDailyTargets(data.profile, data.weights) : null),
    [data.profile, data.weights],
  );

  const value = useMemo(
    () => ({ data, targets, hasStorageError, update, upsert, remove }),
    [data, targets, hasStorageError, update, upsert, remove],
  );

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

export const useAppData = (): AppDataContextValue => {
  const context = useContext(AppDataContext);
  if (!context) throw new Error('useAppData must be used inside AppDataProvider');
  return context;
};
