import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { parseRefParam } from '../../lib/bible';
import { PageHeader } from '../../shared/components/PageHeader';
import { Tabs } from '../../shared/components/Tabs';
import { useAppData } from '../../store/AppDataContext';
import { BibleReader } from './BibleReader';
import { NotesList } from './NotesList';

type BibleTab = 'read' | 'notes';

const TABS: { value: BibleTab; label: string }[] = [
  { value: 'read', label: 'Read' },
  { value: 'notes', label: 'Highlights & notes' },
];

/** `#/bible?ref=LUK.1.26` opens that passage (used by the rosary); the param is cleared once applied. */
export const BiblePage = () => {
  const { update } = useAppData();
  const [params, setParams] = useSearchParams();
  const tab: BibleTab = params.get('tab') === 'notes' ? 'notes' : 'read';
  const refParam = params.get('ref');

  useEffect(() => {
    const ref = parseRefParam(refParam);
    if (!refParam) return;
    if (ref) update((current) => ({ ...current, bible: { ...current.bible, ...ref } }));
    setParams({}, { replace: true });
  }, [refParam, update, setParams]);

  return (
    <>
      <PageHeader title="Bible" actions={<Tabs tabs={TABS} value={tab} onChange={(value) => setParams(value === 'read' ? {} : { tab: value }, { replace: true })} />} />
      {tab === 'read' ? (
        <BibleReader />
      ) : (
        <NotesList
          onOpen={(entry) => {
            update((current) => ({ ...current, bible: { ...current.bible, ...entry.ref } }));
            setParams({}, { replace: true });
          }}
        />
      )}
    </>
  );
};
