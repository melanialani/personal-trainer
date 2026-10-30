import { ChevronDown, ChevronLeft, ChevronRight, Eraser, ExternalLink, MessageSquareText, RotateCw, X } from 'lucide-react';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BIBLE_VERSIONS } from '../../data/bibleBooks';
import {
  adjacentChapter,
  applyComment,
  applyHighlight,
  bookName,
  chapterCount,
  formatRef,
  getBook,
  getVersion,
  HIGHLIGHT_CLASSES,
  HIGHLIGHT_COLORS,
  maxChapterCount,
  tbChapterUrl,
  verseKey,
  type BibleRef,
} from '../../lib/bible';
import { clamp } from '../../lib/math';
import { Button, IconButton } from '../../shared/components/Button';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { Segmented } from '../../shared/components/FormFields';
import { Notice } from '../../shared/components/Notice';
import { useAppData } from '../../store/AppDataContext';
import type { BibleState, HighlightColor } from '../../types';
import { BookPickerModal } from './BookPickerModal';
import { CommentModal } from './CommentModal';
import { useBookText } from './useBookText';

/** Saves the verse at the top of the screen this long after scrolling stops. */
const SAVE_POSITION_DELAY_MS = 600;

interface CommentTarget {
  verse: number;
  endVerse?: number;
}

export const BibleReader = () => {
  const { data, update } = useAppData();
  const bible = data.bible;
  const version = getVersion(bible.versionId);
  const book = getBook(bible.bookId) ?? getBook('MAT')!;
  const count = chapterCount(version.id, book.id);
  const isMissing = count === 0;
  const chapter = clamp(bible.chapter, 1, count || maxChapterCount(book.id));
  const [retryToken, setRetryToken] = useState(0);
  const text = useBookText(isMissing ? null : version.id, book.id, retryToken);
  const verses = text.status === 'ready' ? (text.book[String(chapter)] ?? []) : [];

  const [selected, setSelected] = useState<number[]>([]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [commentTarget, setCommentTarget] = useState<CommentTarget | null>(null);
  const confirmDelete = useConfirmDelete();
  const toolbarRef = useRef<HTMLDivElement>(null);
  const versesRef = useRef<HTMLDivElement>(null);
  const latestVerse = useRef(bible.verse);
  latestVerse.current = bible.verse;

  const setBible = useCallback((patch: Partial<BibleState>) => update((current) => ({ ...current, bible: { ...current.bible, ...patch } })), [update]);

  /** The verse whose line is at the top of the reading area, just under the sticky toolbar. */
  const findTopVerse = useCallback((): number => {
    const top = toolbarRef.current?.getBoundingClientRect().bottom ?? 0;
    const items = versesRef.current?.querySelectorAll<HTMLElement>('[data-verse]') ?? [];
    for (const item of items) {
      // Ignore a verse with only its last few pixels peeking out under the toolbar.
      if (item.getBoundingClientRect().bottom > top + 12) return Number(item.dataset.verse);
    }
    return latestVerse.current;
  }, []);

  // Scroll to the saved verse whenever another chapter or version finishes loading.
  const loadedKey = text.status === 'ready' ? `${version.id}/${book.id}/${chapter}` : '';
  useLayoutEffect(() => {
    if (!loadedKey) return;
    const target = versesRef.current?.querySelector<HTMLElement>(`[data-verse="${latestVerse.current}"]`);
    if (!target || latestVerse.current <= 1) {
      window.scrollTo({ top: 0 });
      return;
    }
    // Align the verse right under the sticky toolbar, so reading the position back gives the same verse.
    // Use where the toolbar ends once stuck (it sits lower while the page is scrolled to the top).
    const toolbar = toolbarRef.current;
    const stuckBottom = toolbar ? parseFloat(getComputedStyle(toolbar).top) + toolbar.offsetHeight : 0;
    window.scrollBy({ top: target.getBoundingClientRect().top - stuckBottom - 4 });
  }, [loadedKey]);

  // Remember the reading position while scrolling.
  useEffect(() => {
    if (!loadedKey) return undefined;
    let timer = 0;
    const handleScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const verse = findTopVerse();
        if (verse !== latestVerse.current) setBible({ verse });
      }, SAVE_POSITION_DELAY_MS);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadedKey, findTopVerse, setBible]);

  useEffect(() => setSelected([]), [version.id, book.id, chapter]);

  const goTo = (ref: BibleRef) => setBible({ bookId: ref.bookId, chapter: ref.chapter, verse: ref.verse });
  const switchVersion = (versionId: string) => setBible({ versionId, verse: text.status === 'ready' ? findTopVerse() : latestVerse.current });
  const previous = adjacentChapter(version.id, book.id, chapter, -1);
  const next = adjacentChapter(version.id, book.id, chapter, 1);

  const toggleVerse = (verse: number) =>
    setSelected((current) => (current.includes(verse) ? current.filter((v) => v !== verse) : [...current, verse].sort((a, b) => a - b)));

  const highlight = (color: HighlightColor | undefined) => {
    const keys = selected.map((verse) => verseKey(book.id, chapter, verse));
    update((current) => ({ ...current, bible: { ...current.bible, notes: applyHighlight(current.bible.notes, keys, color, new Date().toISOString()) } }));
    setSelected([]);
  };

  const commentNote = commentTarget ? bible.notes[verseKey(book.id, chapter, commentTarget.verse)] : undefined;
  const commentEnd = commentNote?.comment ? commentNote.commentEndVerse : commentTarget?.endVerse;
  const commentRef = commentTarget ? formatRef({ bookId: book.id, chapter, verse: commentTarget.verse }, version.language, commentEnd) : '';

  const saveComment = (comment: string) => {
    if (!commentTarget) return;
    const key = verseKey(book.id, chapter, commentTarget.verse);
    update((current) => ({
      ...current,
      bible: { ...current.bible, notes: applyComment(current.bible.notes, key, comment, commentEnd, new Date().toISOString()) },
    }));
    setCommentTarget(null);
    setSelected([]);
  };

  const deleteComment = async () => {
    if (!commentTarget || !(await confirmDelete(`Comment on ${commentRef}`))) return;
    saveComment('');
  };

  const selectionLabel =
    selected.length > 0
      ? formatRef({ bookId: book.id, chapter, verse: selected[0] }, version.language, selected.length > 1 ? selected[selected.length - 1] : undefined)
      : '';
  const name = bookName(book, version.language);

  return (
    <div className={selected.length > 0 ? 'pb-40 md:pb-24' : ''}>
      {/* Sticky under the 56px phone header (h-14); at the top on desktop */}
      <div ref={toolbarRef} className="sticky top-14 z-20 -mx-4 mb-3 border-b border-slate-200 bg-page/95 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6 md:top-0">
        <div className="flex items-center gap-1">
          <IconButton label="Previous chapter" onClick={() => previous && goTo(previous)} disabled={!previous}>
            <ChevronLeft size={18} />
          </IconButton>
          <button
            type="button"
            onClick={() => setIsPickerOpen(true)}
            className="flex min-w-0 flex-1 items-center justify-center gap-1 rounded-lg px-2 py-1.5 text-base font-semibold text-slate-900 hover:bg-slate-100"
          >
            <span className="truncate">
              {name} {chapter}
            </span>
            <ChevronDown size={16} className="shrink-0 text-slate-500" />
          </button>
          <IconButton label="Next chapter" onClick={() => next && goTo(next)} disabled={!next}>
            <ChevronRight size={18} />
          </IconButton>
        </div>
        <div className="mt-2">
          <Segmented
            value={version.id}
            options={BIBLE_VERSIONS.map((item) => ({ value: item.id, label: `${item.shortName} · ${item.language.toUpperCase()}` }))}
            onChange={switchVersion}
          />
        </div>
      </div>

      {isMissing && (
        <Notice className="mb-4">
          <p>
            <span className="font-semibold">{name}</span> is a Deuterocanonical book, which {version.shortName} (a Protestant Bible) does not include.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Button size="sm" onClick={() => switchVersion('webc')}>
              Read in WEB-C (English)
            </Button>
            <a
              href={tbChapterUrl(book, chapter)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-amber-300 px-2.5 py-1 text-sm font-medium dark:border-amber-700"
            >
              Open in TB (Indonesian) <ExternalLink size={14} />
            </a>
          </div>
        </Notice>
      )}

      {!isMissing && text.status === 'loading' && <p className="py-10 text-center text-sm text-slate-500">Loading {name}…</p>}
      {!isMissing && text.status === 'error' && (
        <Notice tone="danger" className="mb-4">
          Could not load {name}. Check your internet connection.
          <div className="mt-2">
            <Button size="sm" variant="secondary" icon={<RotateCw size={14} />} onClick={() => setRetryToken((token) => token + 1)}>
              Try again
            </Button>
          </div>
        </Notice>
      )}

      {verses.length > 0 && (
        <div ref={versesRef} className="mx-auto max-w-2xl">
          {verses.map(([verse, verseText]) => {
            const note = bible.notes[verseKey(book.id, chapter, verse)];
            const isSelected = selected.includes(verse);
            return (
              <p
                key={verse}
                data-verse={verse}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => toggleVerse(verse)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleVerse(verse);
                  }
                }}
                className="cursor-pointer rounded-md py-1 text-[17px] leading-8 text-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <sup className="mr-1 select-none text-[11px] font-semibold text-slate-500">{verse}</sup>
                <span
                  className={`${note?.color ? `${HIGHLIGHT_CLASSES[note.color]} rounded px-0.5 text-slate-900 [box-decoration-break:clone]` : ''} ${
                    isSelected ? 'underline decoration-brand-500 decoration-dotted decoration-2 underline-offset-[6px]' : ''
                  }`}
                >
                  {verseText}
                </span>
                {note?.comment && (
                  <button
                    type="button"
                    aria-label={`Comment on verse ${verse}`}
                    title={note.comment}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCommentTarget({ verse });
                    }}
                    className="ml-1 inline-flex translate-y-0.5 items-center rounded p-0.5 text-brand-700 hover:bg-brand-50 dark:text-brand-400"
                  >
                    <MessageSquareText size={16} />
                  </button>
                )}
              </p>
            );
          })}

          <div className="mt-6 flex items-center justify-between gap-2 border-t border-slate-200 pt-4">
            <Button variant="secondary" size="sm" icon={<ChevronLeft size={16} />} onClick={() => previous && goTo(previous)} disabled={!previous}>
              Previous
            </Button>
            <Button variant="secondary" size="sm" onClick={() => next && goTo(next)} disabled={!next}>
              Next <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            {version.name} ({version.shortName}) · {version.license} ·{' '}
            <a href={version.sourceUrl} target="_blank" rel="noreferrer" className="underline">
              source
            </a>
            {version.language === 'id' && (
              <>
                {' · '}
                <a href={tbChapterUrl(book, chapter)} target="_blank" rel="noreferrer" className="font-medium text-brand-700 underline dark:text-brand-400">
                  Compare with TB (official Catholic text)
                </a>
              </>
            )}
          </p>
        </div>
      )}

      {/* Actions for the selected verses, above the phone bottom bar */}
      {selected.length > 0 && (
        <div className="fixed inset-x-3 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-30 rounded-2xl border border-slate-200 bg-surface p-3 shadow-xl md:inset-x-auto md:bottom-6 md:left-1/2 md:w-[28rem] md:-translate-x-1/2">
          <div className="mb-2.5 flex items-center gap-2">
            <p className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-900">{selectionLabel}</p>
            <Button
              size="sm"
              variant="secondary"
              icon={<MessageSquareText size={16} />}
              onClick={() => setCommentTarget({ verse: selected[0], endVerse: selected.length > 1 ? selected[selected.length - 1] : undefined })}
            >
              Comment
            </Button>
            <IconButton label="Clear selection" onClick={() => setSelected([])}>
              <X size={16} />
            </IconButton>
          </div>
          <div className="flex items-center justify-between gap-1.5">
            {HIGHLIGHT_COLORS.map((color) => (
              <button
                key={color.value}
                type="button"
                aria-label={`Highlight ${color.label.toLowerCase()}`}
                title={color.label}
                onClick={() => highlight(color.value)}
                className={`h-9 w-9 shrink-0 rounded-full border border-slate-300 ${HIGHLIGHT_CLASSES[color.value]}`}
              />
            ))}
            <button
              type="button"
              aria-label="Remove highlight"
              title="Remove highlight"
              onClick={() => highlight(undefined)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-500"
            >
              <Eraser size={16} />
            </button>
          </div>
        </div>
      )}

      <BookPickerModal
        isOpen={isPickerOpen}
        version={version}
        currentBookId={book.id}
        currentChapter={chapter}
        onSelect={(bookId, nextChapter) => goTo({ bookId, chapter: nextChapter, verse: 1 })}
        onClose={() => setIsPickerOpen(false)}
      />
      <CommentModal
        isOpen={commentTarget !== null}
        refLabel={commentRef}
        initialComment={commentNote?.comment ?? ''}
        onSave={saveComment}
        onDelete={deleteComment}
        onClose={() => setCommentTarget(null)}
      />
    </div>
  );
};
