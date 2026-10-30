import { BookOpenText, Highlighter, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { formatRef, getVersion, hasBook, HIGHLIGHT_CLASSES, HIGHLIGHT_COLORS, listNotes, loadBook, verseKey, type BookText, type NoteEntry } from '../../lib/bible';
import { formatDate } from '../../lib/date';
import { pluralize } from '../../lib/format';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { EmptyState } from '../../shared/components/EmptyState';
import { SearchInput } from '../../shared/components/FormFields';
import { IconButton } from '../../shared/components/Button';
import { useAppData } from '../../store/AppDataContext';
import type { HighlightColor } from '../../types';

type ColorFilter = HighlightColor | 'all' | 'comments';

/** Version used for the verse preview: the reading version when it has the book, otherwise the full Catholic canon. */
const previewVersionId = (versionId: string, bookId: string) => (hasBook(versionId, bookId) ? versionId : 'webc');

interface NotesListProps {
  onOpen: (entry: NoteEntry) => void;
}

export const NotesList = ({ onOpen }: NotesListProps) => {
  const { data, update } = useAppData();
  const confirmDelete = useConfirmDelete();
  const version = getVersion(data.bible.versionId);
  const [filter, setFilter] = useState<ColorFilter>('all');
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<Record<string, BookText>>({});

  const entries = useMemo(() => listNotes(data.bible.notes), [data.bible.notes]);

  // Load the books needed for verse previews (cached by loadBook).
  const neededBooks = useMemo(
    () => Array.from(new Set(entries.map((entry) => `${previewVersionId(version.id, entry.ref.bookId)}/${entry.ref.bookId}`))),
    [entries, version.id],
  );
  useEffect(() => {
    let isCurrent = true;
    neededBooks.forEach((key) => {
      const [versionId, bookId] = key.split('/');
      loadBook(versionId, bookId)
        .then((book) => isCurrent && setBooks((current) => ({ ...current, [key]: book })))
        .catch(() => undefined);
    });
    return () => {
      isCurrent = false;
    };
  }, [neededBooks]);

  const previewText = (entry: NoteEntry): string => {
    const book = books[`${previewVersionId(version.id, entry.ref.bookId)}/${entry.ref.bookId}`];
    const verses = book?.[String(entry.ref.chapter)] ?? [];
    return verses
      .filter(([verse]) => verse >= entry.ref.verse && verse <= entry.endVerse)
      .map(([, text]) => text)
      .join(' ');
  };

  const q = query.trim().toLowerCase();
  const visible = entries.filter((entry) => {
    if (filter === 'comments' && !entry.comment) return false;
    if (filter !== 'all' && filter !== 'comments' && entry.color !== filter) return false;
    if (!q) return true;
    return [entry.comment ?? '', previewText(entry), formatRef(entry.ref, version.language)].some((text) => text.toLowerCase().includes(q));
  });

  const deleteEntry = async (entry: NoteEntry) => {
    const label = formatRef(entry.ref, version.language, entry.endVerse);
    if (!(await confirmDelete(entry.comment ? `Comment on ${label}` : `Highlight on ${label}`))) return;
    // A comment entry is one stored verse; a merged highlight covers every verse of its run.
    const lastVerse = entry.comment ? entry.ref.verse : entry.endVerse;
    update((current) => {
      const notes = { ...current.bible.notes };
      for (let verse = entry.ref.verse; verse <= lastVerse; verse += 1) delete notes[verseKey(entry.ref.bookId, entry.ref.chapter, verse)];
      return { ...current, bible: { ...current.bible, notes } };
    });
  };

  if (entries.length === 0) {
    return (
      <Card>
        <EmptyState
          icon={<Highlighter size={20} />}
          title="No highlights or comments yet"
          description="While reading, tap a verse to select it, then pick a color or add a comment."
        />
      </Card>
    );
  }

  return (
    <>
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search your comments and verses" aria-label="Search notes" />
      <div className="scrollbar-none -mx-4 my-3 flex gap-1.5 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        <span className="shrink-0">
          <Chip isActive={filter === 'all'} onClick={() => setFilter('all')}>
            All
          </Chip>
        </span>
        <span className="shrink-0">
          <Chip isActive={filter === 'comments'} onClick={() => setFilter('comments')}>
            With comment
          </Chip>
        </span>
        {HIGHLIGHT_COLORS.map((color) => (
          <span key={color.value} className="shrink-0">
            <Chip isActive={filter === color.value} onClick={() => setFilter(filter === color.value ? 'all' : color.value)}>
              <span className="inline-flex items-center gap-1.5">
                <span className={`h-3 w-3 rounded-full border border-slate-300 ${HIGHLIGHT_CLASSES[color.value]}`} />
                {color.label}
              </span>
            </Chip>
          </span>
        ))}
      </div>
      <p className="mb-3 text-sm text-slate-500">{pluralize(visible.length, 'note')}</p>
      <div className="flex flex-col gap-3">
        {visible.map((entry) => {
          const text = previewText(entry);
          return (
            <Card key={entry.key} bodyClassName="p-4">
              <div className="flex items-start gap-3">
                <button type="button" onClick={() => onOpen(entry)} className="min-w-0 flex-1 text-left">
                  <p className="flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-400">
                    <BookOpenText size={15} />
                    {formatRef(entry.ref, version.language, entry.endVerse)}
                  </p>
                  {text && (
                    <p className="mt-1.5 line-clamp-3 text-sm leading-6 text-slate-700">
                      <span className={entry.color ? `${HIGHLIGHT_CLASSES[entry.color]} rounded px-0.5 text-slate-900 [box-decoration-break:clone]` : ''}>
                        {text}
                      </span>
                    </p>
                  )}
                  {entry.comment && <p className="mt-2 whitespace-pre-line rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-800">{entry.comment}</p>}
                  <p className="mt-1.5 text-xs text-slate-500">Updated {formatDate(entry.updatedAt.slice(0, 10))}</p>
                </button>
                <IconButton label="Delete" tone="danger" onClick={() => deleteEntry(entry)}>
                  <Trash2 size={16} />
                </IconButton>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};
