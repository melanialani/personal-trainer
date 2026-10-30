import { BIBLE_BOOKS, BIBLE_VERSIONS, type BibleBook, type BibleLanguage, type BibleVersion } from '../data/bibleBooks';
import { BIBLE_CHAPTERS } from '../data/bibleChapters';
import type { HighlightColor, VerseNote } from '../types';

/** One chapter: [verse number, text] pairs. */
export type ChapterText = [number, string][];
/** Chapters of one book keyed by chapter number. */
export type BookText = Record<string, ChapterText>;

export interface BibleRef {
  bookId: string;
  chapter: number;
  verse: number;
}

export const HIGHLIGHT_COLORS: { value: HighlightColor; label: string }[] = [
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
  { value: 'pink', label: 'Pink' },
  { value: 'purple', label: 'Purple' },
];

/** Static class names (Tailwind only generates classes it can see in source). */
export const HIGHLIGHT_CLASSES: Record<HighlightColor, string> = {
  yellow: 'bg-hl-yellow',
  green: 'bg-hl-green',
  blue: 'bg-hl-blue',
  pink: 'bg-hl-pink',
  purple: 'bg-hl-purple',
};

export const getVersion = (versionId: string): BibleVersion => BIBLE_VERSIONS.find((version) => version.id === versionId) ?? BIBLE_VERSIONS[0];

export const getBook = (bookId: string): BibleBook | undefined => BIBLE_BOOKS.find((book) => book.id === bookId);

export const bookName = (book: BibleBook, language: BibleLanguage): string => (language === 'id' ? book.nameId : book.nameEn);

export const bookAbbr = (book: BibleBook, language: BibleLanguage): string => (language === 'id' ? book.abbrId : book.abbrEn);

/** 0 when the version does not contain the book (e.g. Tobit in a Protestant Bible). */
export const chapterCount = (versionId: string, bookId: string): number => BIBLE_CHAPTERS[versionId]?.[bookId] ?? 0;

export const hasBook = (versionId: string, bookId: string): boolean => chapterCount(versionId, bookId) > 0;

/** Most chapters any bundled version has for the book (Greek Esther / Daniel are longer). */
export const maxChapterCount = (bookId: string): number => Math.max(...BIBLE_VERSIONS.map((version) => chapterCount(version.id, bookId)));

export const verseKey = (bookId: string, chapter: number, verse: number): string => `${bookId}.${chapter}.${verse}`;

export const parseVerseKey = (key: string): BibleRef | null => {
  const [bookId, chapter, verse] = key.split('.');
  const ref = { bookId, chapter: Number(chapter), verse: Number(verse) };
  return getBook(bookId) && ref.chapter > 0 && ref.verse > 0 ? ref : null;
};

/** "Yoh 9:5", "Yoh 9:5–7" or "John 9:5". */
export const formatRef = (ref: BibleRef, language: BibleLanguage, endVerse?: number): string => {
  const book = getBook(ref.bookId);
  const name = book ? bookAbbr(book, language) : ref.bookId;
  return `${name} ${ref.chapter}:${ref.verse}${endVerse && endVerse > ref.verse ? `–${endVerse}` : ''}`;
};

/** Parses a "BOOK.chapter[.verse]" link parameter (used by the rosary and notes). */
export const parseRefParam = (value: string | null): BibleRef | null => {
  if (!value) return null;
  const [bookId, chapter, verse = '1'] = value.split('.');
  const ref = { bookId, chapter: Number(chapter), verse: Number(verse) };
  return getBook(bookId) && ref.chapter > 0 && ref.verse > 0 ? ref : null;
};

export const toRefParam = ({ bookId, chapter, verse }: BibleRef): string => `${bookId}.${chapter}.${verse}`;

/** The previous / next chapter within the version, crossing into neighbouring books it contains. */
export const adjacentChapter = (versionId: string, bookId: string, chapter: number, step: 1 | -1): BibleRef | null => {
  const count = chapterCount(versionId, bookId);
  if (step === 1 && chapter < count) return { bookId, chapter: chapter + 1, verse: 1 };
  if (step === -1 && chapter > 1 && count > 0) return { bookId, chapter: chapter - 1, verse: 1 };
  const index = BIBLE_BOOKS.findIndex((book) => book.id === bookId);
  for (let i = index + step; i >= 0 && i < BIBLE_BOOKS.length; i += step) {
    const nextCount = chapterCount(versionId, BIBLE_BOOKS[i].id);
    if (nextCount > 0) return { bookId: BIBLE_BOOKS[i].id, chapter: step === 1 ? 1 : nextCount, verse: 1 };
  }
  return null;
};

/** Official Indonesian Catholic text (TB with Deuterocanon) of the chapter, hosted by imankatolik.or.id. */
export const tbChapterUrl = (book: BibleBook, chapter: number): string =>
  `https://www.imankatolik.or.id/alkitab.php?k=${book.tbCode}&b=${chapter}`;

const bookCache = new Map<string, Promise<BookText>>();

/** Loads one book of one version (cached per session; failed loads are retried on the next call). */
export const loadBook = (versionId: string, bookId: string): Promise<BookText> => {
  const cacheKey = `${versionId}/${bookId}`;
  const cached = bookCache.get(cacheKey);
  if (cached) return cached;
  const request = fetch(`${import.meta.env.BASE_URL}bible/${versionId}/${bookId}.json`).then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json() as Promise<BookText>;
  });
  bookCache.set(cacheKey, request);
  request.catch(() => bookCache.delete(cacheKey));
  return request;
};

export interface NoteEntry {
  key: string;
  ref: BibleRef;
  /** Last verse of a run of consecutive verses with the same color (or of the comment's range). */
  endVerse: number;
  color?: HighlightColor;
  comment?: string;
  updatedAt: string;
}

const bookOrder = new Map(BIBLE_BOOKS.map((book, index) => [book.id, index]));

/**
 * Notes in Bible order. Consecutive highlighted verses of the same color without comments are merged into one
 * entry so a highlighted passage shows once; a comment stays its own entry.
 */
export const listNotes = (notes: Record<string, VerseNote>): NoteEntry[] => {
  const entries = Object.entries(notes)
    .map(([key, note]) => ({ key, ref: parseVerseKey(key), note }))
    .filter((entry): entry is { key: string; ref: BibleRef; note: VerseNote } => entry.ref !== null)
    .sort(
      (a, b) =>
        (bookOrder.get(a.ref.bookId) ?? 0) - (bookOrder.get(b.ref.bookId) ?? 0) || a.ref.chapter - b.ref.chapter || a.ref.verse - b.ref.verse,
    );
  const result: NoteEntry[] = [];
  entries.forEach(({ key, ref, note }) => {
    const previous = result[result.length - 1];
    const canMerge =
      previous &&
      !previous.comment &&
      !note.comment &&
      note.color &&
      previous.color === note.color &&
      previous.ref.bookId === ref.bookId &&
      previous.ref.chapter === ref.chapter &&
      previous.endVerse + 1 === ref.verse;
    if (canMerge) {
      previous.endVerse = ref.verse;
      if (note.updatedAt > previous.updatedAt) previous.updatedAt = note.updatedAt;
      return;
    }
    result.push({ key, ref, endVerse: note.commentEndVerse ?? ref.verse, color: note.color, comment: note.comment, updatedAt: note.updatedAt });
  });
  return result;
};

/** Sets or clears the highlight on several verses; notes left with neither color nor comment are removed. */
export const applyHighlight = (
  notes: Record<string, VerseNote>,
  keys: string[],
  color: HighlightColor | undefined,
  now: string,
): Record<string, VerseNote> => {
  const next = { ...notes };
  keys.forEach((key) => {
    const updated: VerseNote = { ...next[key], color, updatedAt: now };
    if (!color) delete updated.color;
    if (updated.color || updated.comment) next[key] = updated;
    else delete next[key];
  });
  return next;
};

/** Saves (or with an empty text, removes) the comment stored on the first verse of a selection. */
export const applyComment = (
  notes: Record<string, VerseNote>,
  key: string,
  comment: string,
  endVerse: number | undefined,
  now: string,
): Record<string, VerseNote> => {
  const next = { ...notes };
  const updated: VerseNote = { ...next[key], comment: comment.trim(), commentEndVerse: endVerse, updatedAt: now };
  if (!updated.comment) {
    delete updated.comment;
    delete updated.commentEndVerse;
  }
  if (!updated.commentEndVerse) delete updated.commentEndVerse;
  if (updated.color || updated.comment) next[key] = updated;
  else delete next[key];
  return next;
};
