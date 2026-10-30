export type MysterySetId = 'joyful' | 'sorrowful' | 'glorious' | 'luminous';

export interface MysterySet {
  id: MysterySetId;
  title: string;
  shortTitle: string;
  /** Weekdays it is prayed (Mon = 0 … Sun = 6). */
  days: number[];
}

export const MYSTERY_SETS: MysterySet[] = [
  { id: 'joyful', title: 'Peristiwa Gembira', shortTitle: 'Gembira', days: [0, 5] },
  { id: 'luminous', title: 'Peristiwa Terang', shortTitle: 'Terang', days: [3] },
  { id: 'sorrowful', title: 'Peristiwa Sedih', shortTitle: 'Sedih', days: [1, 4] },
  { id: 'glorious', title: 'Peristiwa Mulia', shortTitle: 'Mulia', days: [2, 6] },
];

export interface RosaryMystery {
  /** Also the image file name: public/rosary/<id>.webp. */
  id: string;
  set: MysterySetId;
  number: number;
  title: string;
  /** `param` is a Bible link "BOOK.chapter.verse" (see lib/bible.ts). */
  ref: { label: string; param: string };
  image: { artist: string; title: string; year: string; commonsUrl: string };
}

export const ROSARY_MYSTERIES: RosaryMystery[] = [];

export const ROSARY_STEPS: { text: string; prayerIds?: string[] }[] = [];
