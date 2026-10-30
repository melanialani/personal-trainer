import type { Prayer, PrayerCategory } from '../data/prayers';
import { MYSTERY_SETS, ROSARY_MYSTERIES, type MysterySetId, type RosaryMystery } from '../data/rosary';
import { weekdayIndex } from './date';

/** Lower-case and strip accents / punctuation so "salam maria" matches "Salam, Maria". */
export const normalizeSearch = (text: string): string =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** Every word of the query must appear in the title or text (any order). Title matches rank first. */
export const searchPrayers = (prayers: Prayer[], query: string, category: PrayerCategory | 'all'): Prayer[] => {
  const words = normalizeSearch(query).split(' ').filter(Boolean);
  const inCategory = prayers.filter((prayer) => category === 'all' || prayer.category === category);
  if (words.length === 0) return inCategory;
  const scored = inCategory
    .map((prayer) => {
      const title = normalizeSearch(`${prayer.title} ${prayer.aliases?.join(' ') ?? ''}`);
      const body = normalizeSearch(`${prayer.text} ${prayer.note ?? ''}`);
      if (!words.every((word) => title.includes(word) || body.includes(word))) return null;
      return { prayer, score: words.filter((word) => title.includes(word)).length };
    })
    .filter((item): item is { prayer: Prayer; score: number } => item !== null);
  return scored.sort((a, b) => b.score - a.score).map((item) => item.prayer);
};

export const searchMysteries = (query: string): RosaryMystery[] => {
  const words = normalizeSearch(query).split(' ').filter(Boolean);
  if (words.length === 0) return [];
  return ROSARY_MYSTERIES.filter((mystery) => {
    const set = MYSTERY_SETS.find((item) => item.id === mystery.set);
    const haystack = normalizeSearch(`${mystery.title} ${set?.title ?? ''} ${mystery.ref.label}`);
    return words.every((word) => haystack.includes(word));
  });
};

/** Traditional weekday schedule (Mon = 0 … Sun = 6), as set by St. John Paul II in Rosarium Virginis Mariae. */
export const mysterySetForDate = (dateKey: string): MysterySetId => {
  const day = weekdayIndex(dateKey);
  return MYSTERY_SETS.find((set) => set.days.includes(day))?.id ?? 'joyful';
};
