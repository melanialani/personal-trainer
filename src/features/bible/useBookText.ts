import { useEffect, useState } from 'react';
import { loadBook, type BookText } from '../../lib/bible';

type BookTextState = { status: 'loading' } | { status: 'error' } | { status: 'ready'; book: BookText };

/** Loads one book of one version; `null` versionId skips loading (book not in that version). */
export const useBookText = (versionId: string | null, bookId: string, retryToken = 0): BookTextState => {
  const [state, setState] = useState<{ key: string; value: BookTextState }>({ key: '', value: { status: 'loading' } });
  const key = `${versionId}/${bookId}/${retryToken}`;

  useEffect(() => {
    if (!versionId) return undefined;
    let isCurrent = true;
    loadBook(versionId, bookId)
      .then((book) => isCurrent && setState({ key, value: { status: 'ready', book } }))
      .catch(() => isCurrent && setState({ key, value: { status: 'error' } }));
    return () => {
      isCurrent = false;
    };
  }, [versionId, bookId, key]);

  return state.key === key ? state.value : { status: 'loading' };
};
