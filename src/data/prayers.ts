export type PrayerCategory = 'core' | 'marian' | 'rosary' | 'daily' | 'saints' | 'chaplet';

export const PRAYER_CATEGORY_LABELS: Record<PrayerCategory, string> = {
  core: 'Doa Pokok',
  marian: 'Doa Maria',
  rosary: 'Rosario',
  daily: 'Doa Harian',
  saints: 'Santo-Santa',
  chaplet: 'Koronka',
};

export interface Prayer {
  id: string;
  category: PrayerCategory;
  title: string;
  /** Other names people search for (e.g. "Angelus"). */
  aliases?: string[];
  /** Lines separated by "\n"; leader / response markers kept as in the source. */
  text: string;
  note?: string;
}

/** Indonesian Catholic prayers (KWI wording), verified against Catholic sources. */
export const PRAYERS: Prayer[] = [];
