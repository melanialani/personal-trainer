import type { LiturgicalColor } from '../lib/liturgicalCalendar';

export type SaintRank = 'solemnity' | 'feast' | 'memorial' | 'optional';

export interface Saint {
  id: string;
  /** "MM-DD", or "immaculate-heart" (Saturday after the Sacred Heart). */
  date: string;
  name: string;
  role: string;
  years: string;
  rank: SaintRank;
  color: LiturgicalColor;
  story: string;
  example: string[];
  patron: string[];
  keywords: string[];
  sources: string[];
}

export const SAINTS: Saint[] = [];
