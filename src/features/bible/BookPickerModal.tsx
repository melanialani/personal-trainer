import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { BIBLE_BOOKS, TESTAMENT_LABELS, type BibleBook, type BibleVersion, type Testament } from '../../data/bibleBooks';
import { bookName, chapterCount, maxChapterCount } from '../../lib/bible';
import { Button } from '../../shared/components/Button';
import { SearchInput } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';

interface BookPickerModalProps {
  isOpen: boolean;
  version: BibleVersion;
  currentBookId: string;
  currentChapter: number;
  onSelect: (bookId: string, chapter: number) => void;
  onClose: () => void;
}

const TESTAMENTS: Testament[] = ['ot', 'dc', 'nt'];

const matches = (book: BibleBook, query: string) => {
  const q = query.trim().toLowerCase();
  return !q || [book.nameId, book.nameEn, book.abbrId, book.abbrEn].some((name) => name.toLowerCase().includes(q));
};

/** Two steps: pick a book (grouped by testament), then a chapter. */
export const BookPickerModal = ({ isOpen, version, currentBookId, currentChapter, onSelect, onClose }: BookPickerModalProps) => {
  const [query, setQuery] = useState('');
  const [bookId, setBookId] = useState<string | null>(null);
  const book = BIBLE_BOOKS.find((item) => item.id === bookId);
  const language = version.language;

  const close = () => {
    setBookId(null);
    setQuery('');
    onClose();
  };

  const chapters = book ? chapterCount(version.id, book.id) || maxChapterCount(book.id) : 0;

  return (
    <Modal
      isOpen={isOpen}
      size="lg"
      title={book ? bookName(book, language) : 'Choose a book'}
      description={book ? 'Choose a chapter' : `${version.shortName} · ${version.name}`}
      onClose={close}
    >
      {book ? (
        <>
          <Button variant="ghost" size="sm" icon={<ChevronLeft size={16} />} onClick={() => setBookId(null)} className="mb-3">
            All books
          </Button>
          <div className="grid grid-cols-5 gap-2 sm:grid-cols-8">
            {Array.from({ length: chapters }, (_, i) => i + 1).map((chapter) => {
              const isCurrent = book.id === currentBookId && chapter === currentChapter;
              return (
                <button
                  key={chapter}
                  type="button"
                  onClick={() => {
                    onSelect(book.id, chapter);
                    close();
                  }}
                  className={`rounded-lg border py-2.5 text-sm font-medium ${
                    isCurrent ? 'border-brand-500 bg-brand-50 text-brand-700 dark:text-brand-300' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {chapter}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search book (e.g. Yohanes, John)" aria-label="Search book" />
          {TESTAMENTS.map((testament) => {
            const books = BIBLE_BOOKS.filter((item) => item.testament === testament && matches(item, query));
            if (books.length === 0) return null;
            return (
              <section key={testament} className="mt-4">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{TESTAMENT_LABELS[testament][language]}</h3>
                <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                  {books.map((item) => {
                    const isMissing = chapterCount(version.id, item.id) === 0;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setBookId(item.id)}
                        className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm ${
                          item.id === currentBookId
                            ? 'border-brand-500 bg-brand-50 font-semibold text-brand-700 dark:text-brand-300'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span className="truncate">{bookName(item, language)}</span>
                        {isMissing && <span className="shrink-0 text-[10px] font-medium text-slate-500">not in {version.shortName}</span>}
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </>
      )}
    </Modal>
  );
};
