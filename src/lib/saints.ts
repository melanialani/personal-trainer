import type { Saint, SaintRank } from '../data/saints';
import { addDays } from './date';
import { easterDate, type LiturgicalColor, type LiturgicalDay } from './liturgicalCalendar';
import { normalizeSearch } from './prayers';

export const SAINT_RANK_LABELS: Record<SaintRank, string> = {
  solemnity: 'Hari Raya',
  feast: 'Pesta',
  memorial: 'Peringatan Wajib',
  optional: 'Peringatan Fakultatif',
};

/**
 * How a saint is kept on a given day:
 * - `celebrated`: the day's celebration is this saint's feast or solemnity;
 * - `memorial` / `optional`: an obligatory / optional memorial on an ordinary weekday;
 * - `commemoration`: on privileged weekdays (Lent, 17–24 December, Christmas octave) a memorial may only be commemorated;
 * - `impeded`: a Sunday, solemnity, feast or Holy Week day takes its place this year.
 */
export type SaintStatus = 'celebrated' | 'memorial' | 'optional' | 'commemoration' | 'impeded';

export interface SaintOfDay {
  saint: Saint;
  status: SaintStatus;
}

export const SAINT_STATUS_LABELS: Record<SaintStatus, string> = {
  celebrated: 'Dirayakan hari ini',
  memorial: 'Peringatan Wajib',
  optional: 'Peringatan Fakultatif',
  commemoration: 'Dapat dikenangkan (masa khusus)',
  impeded: 'Tidak dirayakan tahun ini',
};

let saintsModule: Promise<Saint[]> | null = null;

/** The saints' stories are large, so they load on demand as a separate chunk. */
export const loadSaints = (): Promise<Saint[]> => {
  saintsModule ??= import('../data/saints').then((module) => module.SAINTS);
  saintsModule.catch(() => {
    saintsModule = null;
  });
  return saintsModule;
};

/** Immaculate Heart of Mary: the Saturday after the Sacred Heart (Pentecost + 20 days). */
export const immaculateHeartDate = (year: number): string => addDays(easterDate(year), 69);

const isPrivilegedWeekday = (day: LiturgicalDay) =>
  day.season === 'lent' || day.key.startsWith('adv-dec') || /^chr-dec(29|30|31)$/.test(day.key);

const matchesDate = (saint: Saint, date: string) =>
  saint.date === date.slice(5) || (saint.date === 'immaculate-heart' && date === immaculateHeartDate(Number(date.slice(0, 4))));

/** Saints connected with a day and how they are kept (feast days use the feast's own date, also when transferred). */
export const saintsForDay = (saints: Saint[], day: LiturgicalDay): SaintOfDay[] => {
  if (day.key.startsWith('san-')) {
    const monthDay = `${day.key.slice(4, 6)}-${day.key.slice(6, 8)}`;
    return saints.filter((saint) => saint.date === monthDay && (saint.rank === 'feast' || saint.rank === 'solemnity')).map((saint) => ({ saint, status: 'celebrated' }));
  }
  const memorials = saints.filter((saint) => (saint.rank === 'memorial' || saint.rank === 'optional') && matchesDate(saint, day.date));
  const canKeep = day.rank === 'weekday' && !day.key.startsWith('holy-');
  return memorials.map((saint) => {
    if (!canKeep) return { saint, status: 'impeded' };
    if (isPrivilegedWeekday(day)) return { saint, status: 'commemoration' };
    return { saint, status: saint.rank === 'memorial' ? 'memorial' : 'optional' };
  });
};

/** Liturgical color shown for the day: an obligatory memorial on an ordinary weekday uses the saint's color. */
export const displayColor = (day: LiturgicalDay, saints: SaintOfDay[]): LiturgicalColor =>
  saints.find((item) => item.status === 'memorial')?.saint.color ?? day.color;

/** Every word of the query must appear in name, role, keywords, patronages or story; name hits rank first. */
export const searchSaints = (saints: Saint[], query: string, month: number | null): Saint[] => {
  const words = normalizeSearch(query).split(' ').filter(Boolean);
  const inMonth = saints.filter((saint) => month === null || Number(saint.date.slice(0, 2)) === month || (saint.date === 'immaculate-heart' && month === 6));
  if (words.length === 0) return inMonth;
  return inMonth
    .map((saint) => {
      const head = normalizeSearch(`${saint.name} ${saint.role} ${saint.keywords.join(' ')} ${saint.patron.join(' ')}`);
      const body = normalizeSearch(`${saint.story} ${saint.example.join(' ')}`);
      if (!words.every((word) => head.includes(word) || body.includes(word))) return null;
      return { saint, score: words.filter((word) => head.includes(word)).length };
    })
    .filter((item): item is { saint: Saint; score: number } => item !== null)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.saint);
};
