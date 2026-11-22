import { useEffect, useState } from 'react';
import { getVersion } from '../../lib/bible';
import { loadPassage, type Passage } from '../../lib/scripture';
import { TextButton } from '../../shared/components/TextLink';

type PassageState = { status: 'loading' } | { status: 'error' } | { status: 'ready'; passage: Passage };

/** Loads a reference's text (see `lib/scripture` for the numbering flag). */
export const usePassage = (ref: string, versionId: string, lectionaryNumbering: boolean): [PassageState, () => void] => {
  const [retryToken, setRetryToken] = useState(0);
  const key = `${ref}|${versionId}|${lectionaryNumbering}|${retryToken}`;
  const [state, setState] = useState<{ key: string; value: PassageState }>({ key: '', value: { status: 'loading' } });

  useEffect(() => {
    let isCurrent = true;
    loadPassage(ref, versionId, lectionaryNumbering)
      .then((passage) => isCurrent && setState({ key, value: { status: 'ready', passage } }))
      .catch(() => isCurrent && setState({ key, value: { status: 'error' } }));
    return () => {
      isCurrent = false;
    };
  }, [ref, versionId, lectionaryNumbering, key]);

  return [state.key === key ? state.value : { status: 'loading' }, () => setRetryToken((token) => token + 1)];
};

interface PassageTextProps {
  refText: string;
  versionId: string;
  lectionaryNumbering: boolean;
  /** Smaller text for lists (topic verses). */
  isCompact?: boolean;
}

/** Verse text with superscript verse numbers; notes when another version had to be used (e.g. Deuterocanon). */
export const PassageText = ({ refText, versionId, lectionaryNumbering, isCompact = false }: PassageTextProps) => {
  const [state, retry] = usePassage(refText, versionId, lectionaryNumbering);

  if (state.status === 'loading') return <p className="text-sm text-slate-500">Loading text…</p>;
  if (state.status === 'error')
    return (
      <p className="text-sm text-rose-700 dark:text-rose-400">
        Could not load the text. <TextButton onClick={retry}>Try again</TextButton>
      </p>
    );

  const { passage } = state;
  const isOtherVersion = passage.versionId !== versionId;
  const showChapter = new Set(passage.verses.map((verse) => verse.chapter)).size > 1;
  return (
    <div>
      {isOtherVersion && (
        <p className="mb-1.5 text-xs text-slate-500">Shown in {getVersion(passage.versionId).shortName}: this part is not in {getVersion(versionId).shortName}.</p>
      )}
      {passage.verses.length === 0 ? (
        <p className="text-sm text-slate-500">Text not available in the bundled Bibles.</p>
      ) : (
        <p className={`${isCompact ? 'text-sm' : 'text-[15px]'} leading-relaxed text-slate-800`}>
          {passage.verses.map((verse, index) => (
            <span key={`${verse.chapter}:${verse.verse}`}>
              <sup className="mr-0.5 text-[10px] font-semibold text-brand-700 dark:text-brand-400">
                {showChapter && (index === 0 || passage.verses[index - 1].chapter !== verse.chapter) ? `${verse.chapter}:` : ''}
                {verse.verse}
              </sup>
              {verse.text}{' '}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};
