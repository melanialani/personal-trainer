import { Fragment } from 'react';
import type { Prayer } from '../../data/prayers';
import { PRAYER_CATEGORY_LABELS } from '../../data/prayers';
import { Modal } from '../../shared/components/Modal';

interface PrayerModalProps {
  prayer: Prayer | null;
  onClose: () => void;
}

/** Marks a spot the reader answers in their own words (used by personal prayers). */
const BLANK = '……';

/** A line with each blank shown as an empty box, so it is clear where to answer. */
const PrayerLine = ({ line }: { line: string }) => {
  const parts = line.split(BLANK);
  return (
    <span className="block">
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <span
              role="img"
              aria-label="Your own answer"
              className="mt-1 mb-2 block h-10 w-full max-w-72 rounded-lg border border-dashed border-brand-300 bg-brand-50 dark:border-brand-700"
            />
          )}
        </Fragment>
      ))}
    </span>
  );
};

export const PrayerModal = ({ prayer, onClose }: PrayerModalProps) => (
  <Modal isOpen={prayer !== null} size="lg" title={prayer?.title ?? ''} description={prayer ? PRAYER_CATEGORY_LABELS[prayer.category] : ''} onClose={onClose}>
    {prayer && (
      <>
        {/* Blank lines in the text separate stanzas / sections; give them clear room. */}
        <div className="space-y-6 text-[17px] leading-8 text-slate-800">
          {prayer.text.split(/\n\s*\n/).map((stanza, index) => (
            <p key={index}>
              {stanza.split('\n').map((line, lineIndex) => (
                <PrayerLine key={lineIndex} line={line} />
              ))}
            </p>
          ))}
        </div>
        {prayer.note && <p className="mt-6 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">{prayer.note}</p>}
        {prayer.sources.length > 0 && (
          <details className="mt-3 text-xs text-slate-500">
            <summary className="cursor-pointer">Sources ({prayer.sources.length})</summary>
            <ul className="mt-1 space-y-0.5">
              {prayer.sources.map((url) => (
                <li key={url} className="truncate">
                  <a href={url} target="_blank" rel="noreferrer" className="underline">
                    {url.replace(/^https?:\/\/(www\.)?/, '')}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        )}
      </>
    )}
  </Modal>
);
