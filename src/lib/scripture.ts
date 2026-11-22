import { bookAbbr, getBook, hasBook, loadBook, type BookText } from './bible';
import type { BibleLanguage } from '../data/bibleBooks';

/**
 * Scripture references as stored in `data/lectionary` and `data/verseTopics`:
 * `BOOK chapter:verses[; chapter:verses]`, verses = comma-separated items `4`, `4b`, `4-7`, `4b-7a` or a cross-chapter
 * range `9:35-10:1`. Lectionary refs use the US Lectionary (NABRE / Hebrew) numbering; the bundled Bibles use the
 * English numbering, so `toBundledNumbering` maps the known differences (psalm titles, Joel, Malachi, Hosea, …).
 */

export interface VerseRange {
  chapter: number;
  verse: number;
  endChapter: number;
  endVerse: number;
}

export interface ParsedRef {
  bookId: string;
  ranges: VerseRange[];
  /** Verse list as written (letters kept), e.g. "16b-17, 19b; 64:2-7". */
  verses: string;
  /** Greek Esther addition ("EST C:12"): only WEB-C has it (in chapter 4, C:1 = 4:18). */
  isGreekAddition: boolean;
}

const ITEM = /^(?:(\d+):)?(\d+)[a-z]*(?:-(?:(\d+):)?(\d+)[a-z]*)?$/;
const LETTER_CHAPTER = /^C:/;

/** Parses one reference; null when malformed or the book is unknown. */
export const parseRef = (ref: string): ParsedRef | null => {
  const match = ref.trim().match(/^([1-3]?[A-Z]{2,3})\s+(.+)$/);
  if (!match || !getBook(match[1])) return null;
  const [, bookId, verses] = match;
  const ranges: VerseRange[] = [];
  const isGreekAddition = LETTER_CHAPTER.test(verses);
  let chapter = 0;
  for (const rawItem of verses.replace(LETTER_CHAPTER, '').split(/[,;]/)) {
    const item = rawItem.trim();
    if (!item) continue;
    const parts = item.match(ITEM);
    if (!parts) return null;
    const [, startChapter, startVerse, endChapterText, endVerseText] = parts;
    if (startChapter) chapter = Number(startChapter);
    if (isGreekAddition) chapter = 4;
    if (!chapter) return null;
    const endChapter = endChapterText ? Number(endChapterText) : chapter;
    const shift = isGreekAddition ? 17 : 0;
    ranges.push({ chapter, verse: Number(startVerse) + shift, endChapter, endVerse: (endVerseText ? Number(endVerseText) : Number(startVerse)) + shift });
    chapter = endChapter;
  }
  return ranges.length ? { bookId, ranges, verses: verses.trim(), isGreekAddition } : null;
};

/**
 * "Yes 63:16b-17, 19b; 64:2-7" (book abbreviation in the reader's language, verses as in the source). With
 * `lectionaryNumbering`, books whose Hebrew numbering differs from the Indonesian TB / English Bibles (Joel, Malachi,
 * 1 Kings 5, …) are shown in TB numbering ("Yl 2:28-32", not "Yl 3:1-5"); psalms keep the Hebrew numbering, as in TB.
 */
export const formatScriptureRef = (ref: string, language: BibleLanguage = 'id', lectionaryNumbering = false): string => {
  const parsed = parseRef(ref);
  const book = parsed && getBook(parsed.bookId);
  if (!parsed || !book) return ref;
  const abbr = bookAbbr(book, language);
  if (lectionaryNumbering && parsed.bookId !== 'PSA' && !parsed.isGreekAddition) {
    const mapped = parsed.ranges.map((range) => ({
      start: toBundledNumbering(parsed.bookId, range.chapter, range.verse),
      end: toBundledNumbering(parsed.bookId, range.endChapter, range.endVerse),
    }));
    const changed = mapped.some(
      ({ start, end }, index) =>
        start.chapter !== parsed.ranges[index].chapter || start.verse !== parsed.ranges[index].verse || end.verse !== parsed.ranges[index].endVerse,
    );
    if (changed) {
      let chapter = 0;
      const parts = mapped.map(({ start, end }) => {
        const head = start.chapter !== chapter ? `${chapter ? '; ' : ''}${start.chapter}:` : ', ';
        chapter = end.chapter;
        const tail = end.chapter !== start.chapter ? `–${end.chapter}:${end.verse}` : end.verse !== start.verse ? `–${end.verse}` : '';
        return `${head}${start.verse}${tail}`;
      });
      return `${abbr} ${parts.join('')}`;
    }
  }
  return `${abbr} ${parsed.verses.replace(/-/g, '–')}`;
};

/** Psalms whose Hebrew numbering counts the title as verse 1 (or 1–2): Hebrew verse − offset = English verse. */
const PSALM_TITLE_OFFSET: Record<number, number> = {
  3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 12: 1, 13: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 30: 1, 31: 1, 34: 1, 36: 1, 38: 1,
  39: 1, 40: 1, 41: 1, 42: 1, 44: 1, 45: 1, 46: 1, 47: 1, 48: 1, 49: 1, 51: 2, 52: 2, 53: 1, 54: 2, 55: 1, 56: 1, 57: 1, 58: 1,
  59: 1, 60: 2, 61: 1, 62: 1, 63: 1, 64: 1, 65: 1, 67: 1, 68: 1, 69: 1, 70: 1, 75: 1, 76: 1, 77: 1, 80: 1, 81: 1, 83: 1, 84: 1,
  85: 1, 88: 1, 89: 1, 92: 1, 102: 1, 108: 1, 140: 1, 142: 1,
};

/** [book, Hebrew chapter, first verse, last verse, English chapter, English first verse]. */
type ShiftRule = [string, number, number, number, number, number];
const SHIFT_RULES: ShiftRule[] = [
  ['EXO', 7, 26, 29, 8, 1], ['EXO', 8, 1, 28, 8, 5], ['EXO', 21, 37, 37, 22, 1], ['EXO', 22, 1, 30, 22, 2],
  ['LEV', 5, 20, 26, 6, 1], ['LEV', 6, 1, 23, 6, 8],
  ['NUM', 17, 1, 15, 16, 36], ['NUM', 17, 16, 28, 17, 1], ['NUM', 30, 1, 1, 29, 40], ['NUM', 30, 2, 17, 30, 1],
  ['DEU', 13, 1, 1, 12, 32], ['DEU', 13, 2, 19, 13, 1], ['DEU', 23, 1, 1, 22, 30], ['DEU', 23, 2, 26, 23, 1], ['DEU', 28, 69, 69, 29, 1], ['DEU', 29, 1, 28, 29, 2],
  ['1SA', 21, 1, 1, 20, 42], ['1SA', 21, 2, 16, 21, 1], ['1SA', 24, 1, 1, 23, 29], ['1SA', 24, 2, 23, 24, 1],
  ['2SA', 19, 1, 1, 18, 33], ['2SA', 19, 2, 44, 19, 1],
  ['1KI', 5, 1, 14, 4, 21], ['1KI', 5, 15, 32, 5, 1],
  ['2KI', 12, 1, 1, 11, 21], ['2KI', 12, 2, 22, 12, 1],
  ['1CH', 5, 27, 41, 6, 1], ['1CH', 6, 1, 66, 6, 16],
  ['2CH', 1, 18, 18, 2, 1], ['2CH', 2, 1, 17, 2, 2], ['2CH', 13, 23, 23, 14, 1], ['2CH', 14, 1, 14, 14, 2],
  ['NEH', 3, 33, 38, 4, 1], ['NEH', 4, 1, 17, 4, 7], ['NEH', 10, 1, 1, 9, 38], ['NEH', 10, 2, 40, 10, 1],
  ['JOB', 40, 25, 32, 41, 1], ['JOB', 41, 1, 26, 41, 9],
  ['ECC', 4, 17, 17, 5, 1], ['ECC', 5, 1, 19, 5, 2],
  ['SOL', 7, 1, 1, 6, 13], ['SOL', 7, 2, 14, 7, 1],
  ['ISA', 8, 23, 23, 9, 1], ['ISA', 63, 19, 19, 64, 1], ['ISA', 9, 1, 20, 9, 2], ['ISA', 64, 1, 11, 64, 2],
  ['JER', 8, 23, 23, 9, 1], ['JER', 9, 1, 25, 9, 2],
  ['EZE', 21, 1, 5, 20, 45], ['EZE', 21, 6, 37, 21, 1],
  ['DAN', 3, 91, 97, 3, 24], ['DAN', 3, 31, 33, 4, 1], ['DAN', 4, 1, 34, 4, 4], ['DAN', 6, 1, 1, 5, 31], ['DAN', 6, 2, 29, 6, 1],
  ['HOS', 2, 1, 2, 1, 10], ['HOS', 2, 3, 25, 2, 1], ['HOS', 12, 1, 1, 11, 12], ['HOS', 12, 2, 15, 12, 1], ['HOS', 14, 1, 1, 13, 16], ['HOS', 14, 2, 10, 14, 1],
  ['JOE', 3, 1, 5, 2, 28], ['JOE', 4, 1, 21, 3, 1],
  ['JON', 2, 1, 1, 1, 17], ['JON', 2, 2, 11, 2, 1],
  ['MIC', 4, 14, 14, 5, 1], ['MIC', 5, 1, 14, 5, 2],
  ['NAH', 2, 1, 1, 1, 15], ['NAH', 2, 2, 14, 2, 1],
  ['ZEC', 2, 1, 4, 1, 18], ['ZEC', 2, 5, 17, 2, 1],
  ['MAL', 3, 19, 24, 4, 1],
  ['2CO', 13, 13, 13, 13, 14],
];

/**
 * Maps a Hebrew/NABRE-numbered verse to the English numbering of the bundled Bibles. `greekDaniel` keeps Daniel 3
 * as is (WEB-C has the Greek chapter 3 with 97 verses, numbered like the Lectionary).
 */
export const toBundledNumbering = (bookId: string, chapter: number, verse: number, greekDaniel = false): { chapter: number; verse: number } => {
  if (bookId === 'PSA') {
    const offset = PSALM_TITLE_OFFSET[chapter] ?? 0;
    return { chapter, verse: Math.max(1, verse - offset) };
  }
  if (bookId === 'DAN' && greekDaniel && chapter === 3) return { chapter, verse };
  const rule = SHIFT_RULES.find(([book, ch, from, to]) => book === bookId && ch === chapter && verse >= from && verse <= to);
  return rule ? { chapter: rule[4], verse: rule[5] + (verse - rule[2]) } : { chapter, verse };
};

export interface PassageVerse {
  chapter: number;
  verse: number;
  text: string;
}

export interface Passage {
  versionId: string;
  verses: PassageVerse[];
}

/** AYT marks Hebrew verse numbers inline as "(51-2)"; they are noise in a reading. */
const cleanVerseText = (text: string) => text.replace(/\s*\(\d+-\d+\)\s*/g, ' ').trim();

const collect = (book: BookText, start: { chapter: number; verse: number }, end: { chapter: number; verse: number }): PassageVerse[] => {
  const result: PassageVerse[] = [];
  for (let chapter = start.chapter; chapter <= end.chapter; chapter += 1) {
    (book[String(chapter)] ?? []).forEach(([verse, text]) => {
      if (chapter === start.chapter && verse < start.verse) return;
      if (chapter === end.chapter && verse > end.verse) return;
      result.push({ chapter, verse, text: cleanVerseText(text) });
    });
  }
  return result;
};

/** Version to read a book in: the preferred one, else WEB-C (all 73 books). */
export const versionForBook = (preferredVersionId: string, bookId: string): string =>
  hasBook(preferredVersionId, bookId) ? preferredVersionId : 'webc';

/**
 * Loads the text of a reference. `lectionaryNumbering` = the ref uses Hebrew/NABRE numbering (lectionary data);
 * topical verse refs are already in the bundled numbering. Duplicated verses (overlapping ranges) are dropped.
 */
export const loadPassage = async (ref: string, preferredVersionId: string, lectionaryNumbering: boolean): Promise<Passage> => {
  const parsed = parseRef(ref);
  if (!parsed) throw new Error(`Bad reference: ${ref}`);
  // Greek parts (Esther additions, Daniel 3:24–90) are only in WEB-C, which numbers Daniel 3 like the Lectionary.
  const needsGreek =
    parsed.isGreekAddition ||
    (parsed.bookId === 'DAN' && parsed.ranges.some((range) => range.chapter === 3 && range.endVerse >= 24 && range.verse <= 90));
  const versionId = needsGreek ? 'webc' : versionForBook(preferredVersionId, parsed.bookId);
  const book = await loadBook(versionId, parsed.bookId);
  const greekDaniel = (book['3']?.length ?? 0) > 90;
  const seen = new Set<string>();
  const verses: PassageVerse[] = [];
  parsed.ranges.forEach((range) => {
    const map = (chapter: number, verse: number) =>
      lectionaryNumbering ? toBundledNumbering(parsed.bookId, chapter, verse, greekDaniel) : { chapter, verse };
    collect(book, map(range.chapter, range.verse), map(range.endChapter, range.endVerse)).forEach((verse) => {
      const key = `${verse.chapter}:${verse.verse}`;
      if (seen.has(key)) return;
      seen.add(key);
      verses.push(verse);
    });
  });
  // E.g. the Greek parts of Daniel 3 (vv. 24–90) exist only in WEB-C.
  if (verses.length === 0 && versionId !== 'webc') return loadPassage(ref, 'webc', lectionaryNumbering);
  return { versionId, verses };
};
