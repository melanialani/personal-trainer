import { HeartHandshake } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BIBLE_VERSIONS } from '../../data/bibleBooks';
import { VERSE_TOPIC_GROUP_LABELS, VERSE_TOPICS, type VerseTopic, type VerseTopicGroup } from '../../data/verseTopics';
import { toRefParam } from '../../lib/bible';
import { pluralize } from '../../lib/format';
import { formatScriptureRef, parseRef } from '../../lib/scripture';
import { searchVerseTopics } from '../../lib/verseTopics';
import { Badge } from '../../shared/components/Badge';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';
import { EmptyState } from '../../shared/components/EmptyState';
import { SearchInput, Segmented } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';
import { useAppData } from '../../store/AppDataContext';
import { PassageText } from './PassageText';

const GROUPS = Object.keys(VERSE_TOPIC_GROUP_LABELS) as VerseTopicGroup[];

const bibleLink = (ref: string): string | null => {
  const parsed = parseRef(ref);
  if (!parsed) return null;
  const [first] = parsed.ranges;
  return `/bible?ref=${toRefParam({ bookId: parsed.bookId, chapter: first.chapter, verse: first.verse })}`;
};

interface TopicModalProps {
  topic: VerseTopic | null;
  onClose: () => void;
  onOpenVerse: () => void;
}

const TopicModal = ({ topic, onClose, onOpenVerse }: TopicModalProps) => {
  const { data, update } = useAppData();
  const versionId = data.bible.versionId;
  return (
    <Modal isOpen={topic !== null} size="lg" title={topic?.title ?? ''} description={topic ? VERSE_TOPIC_GROUP_LABELS[topic.group] : ''} onClose={onClose}>
      {topic && (
        <>
          <p className="text-sm text-slate-600">{topic.intro}</p>
          <div className="my-3">
            <Segmented
              value={versionId}
              options={BIBLE_VERSIONS.map((version) => ({ value: version.id, label: version.shortName }))}
              onChange={(value) => update((current) => ({ ...current, bible: { ...current.bible, versionId: value } }))}
            />
          </div>
          <ol className="space-y-4">
            {topic.verses.map((ref) => {
              const link = bibleLink(ref);
              return (
                <li key={ref} className="rounded-xl border border-slate-200 p-3">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-bold text-brand-700 dark:text-brand-400">{formatScriptureRef(ref)}</span>
                    {link && (
                      <Link to={link} onClick={onOpenVerse} className="text-xs font-medium text-brand-700 hover:underline dark:text-brand-400">
                        Open in Bible
                      </Link>
                    )}
                  </div>
                  <PassageText refText={ref} versionId={versionId} lectionaryNumbering={false} isCompact />
                </li>
              );
            })}
          </ol>
        </>
      )}
    </Modal>
  );
};

/** Verses grouped by life situation ("saat merasa ditinggalkan", "saat bingung", …), searchable. */
export const VerseTopicsList = () => {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState<VerseTopicGroup | 'all'>('all');
  const [selected, setSelected] = useState<VerseTopic | null>(null);
  const topics = useMemo(() => searchVerseTopics(VERSE_TOPICS, query, group), [query, group]);

  return (
    <>
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari situasi (mis. ditinggalkan, bingung, takut, sakit)"
        aria-label="Search topics"
      />
      <div className="scrollbar-none -mx-4 my-3 flex gap-1.5 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        <span className="shrink-0">
          <Chip isActive={group === 'all'} onClick={() => setGroup('all')}>
            Semua
          </Chip>
        </span>
        {GROUPS.map((value) => (
          <span key={value} className="shrink-0">
            <Chip isActive={group === value} onClick={() => setGroup(group === value ? 'all' : value)}>
              {VERSE_TOPIC_GROUP_LABELS[value]}
            </Chip>
          </span>
        ))}
      </div>

      <p className="mb-3 text-sm text-slate-500">{pluralize(topics.length, 'topic')}</p>

      {topics.length === 0 ? (
        <Card>
          <EmptyState icon={<HeartHandshake size={20} />} title="No topics match" description="Try another word, e.g. sedih, cemas, keluarga." />
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {topics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => setSelected(topic)}
              className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-surface p-4 text-left shadow-sm hover:bg-slate-50"
            >
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-slate-900">{topic.title}</span>
                <span className="mt-0.5 block truncate text-sm text-slate-500">{topic.verses.slice(0, 3).map((ref) => formatScriptureRef(ref)).join(' · ')}</span>
              </span>
              <span className="shrink-0">
                <Badge tone="brand">{pluralize(topic.verses.length, 'ayat', 'ayat')}</Badge>
              </span>
            </button>
          ))}
        </div>
      )}

      <TopicModal topic={selected} onClose={() => setSelected(null)} onOpenVerse={() => setSelected(null)} />
    </>
  );
};
