import { useEffect, useSyncExternalStore } from 'react';

export type ThemePreference = 'light' | 'dark' | 'system';

/** Kept outside `fitplan:data` on purpose: it is a per-device display setting, not part of backups. */
const THEME_STORAGE_KEY = 'fitplan:theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';
const THEME_COLORS = { light: '#059669', dark: '#0b1120' };

const isThemePreference = (value: unknown): value is ThemePreference => value === 'light' || value === 'dark' || value === 'system';

const readPreference = (): ThemePreference => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(stored) ? stored : 'system';
  } catch {
    return 'system';
  }
};

let preference = readPreference();
const listeners = new Set<() => void>();

const isDarkPreferred = () => preference === 'dark' || (preference === 'system' && window.matchMedia(DARK_QUERY).matches);

/** Mirrors the inline script in index.html, which applies the theme before React renders (no light flash). */
const applyTheme = () => {
  const isDark = isDarkPreferred();
  document.documentElement.classList.toggle('dark', isDark);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? THEME_COLORS.dark : THEME_COLORS.light);
};

const setPreference = (next: ThemePreference) => {
  preference = next;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Storage disabled: the choice still applies for this visit.
  }
  applyTheme();
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const useTheme = () => {
  const current = useSyncExternalStore(subscribe, () => preference);

  useEffect(() => {
    if (current !== 'system') return undefined;
    const media = window.matchMedia(DARK_QUERY);
    media.addEventListener('change', applyTheme);
    return () => media.removeEventListener('change', applyTheme);
  }, [current]);

  return { preference: current, setPreference };
};
