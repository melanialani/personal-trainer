import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme, type ThemePreference } from '../hooks/useTheme';
import { Segmented } from './FormFields';
import { IconButton } from './Button';

const NEXT: Record<ThemePreference, ThemePreference> = { light: 'dark', dark: 'system', system: 'light' };
const ICONS = { light: Sun, dark: Moon, system: Monitor };
const LABELS: Record<ThemePreference, string> = { light: 'Light', dark: 'Dark', system: 'System' };

/** Compact header button that cycles light → dark → system. */
export const ThemeToggleButton = () => {
  const { preference, setPreference } = useTheme();
  const Icon = ICONS[preference];
  return (
    <IconButton label={`Theme: ${LABELS[preference]} (tap to change)`} onClick={() => setPreference(NEXT[preference])}>
      <Icon size={18} />
    </IconButton>
  );
};

export const ThemeSegmented = () => {
  const { preference, setPreference } = useTheme();
  return (
    <Segmented
      value={preference}
      options={(Object.keys(LABELS) as ThemePreference[]).map((value) => ({ value, label: LABELS[value] }))}
      onChange={setPreference}
    />
  );
};
