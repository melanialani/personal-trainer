import { HandHeart } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PRAYER_CATEGORY_LABELS, PRAYERS, type Prayer, type PrayerCategory } from '../../data/prayers';
import { pluralize } from '../../lib/format';
import { searchPrayers } from '../../lib/prayers';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';
import { EmptyState } from '../../shared/components/EmptyState';
import { SearchInput } from '../../shared/components/FormFields';
import { PageHeader } from '../../shared/components/PageHeader';
import { PrayerModal } from './PrayerModal';

// Rosary prayers are browsed from the Rosary page, so they get no filter chip here.
const CATEGORIES = (Object.keys(PRAYER_CATEGORY_LABELS) as PrayerCategory[]).filter((value) => value !== 'rosary');

/** First line of the prayer without leader / response markers, as a preview. */
const previewLine = (text: string) => text.split('\n').find((line) => line.trim())?.replace(/^\s*[A-Z]\s*[:/.]\s*/, '') ?? '';

export const PrayersPage = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<PrayerCategory | 'all'>('all');
  const [selected, setSelected] = useState<Prayer | null>(null);

  const prayers = useMemo(() => searchPrayers(PRAYERS, query, category), [query, category]);

  return (
    <>
      <PageHeader title="Prayers" description="Common Catholic prayers in Indonesian (KWI / Puji Syukur wording)." />

      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search title or words (e.g. salam maria, malaikat)"
        aria-label="Search prayers"
      />
      <div className="scrollbar-none -mx-4 my-3 flex gap-1.5 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        <span className="shrink-0">
          <Chip isActive={category === 'all'} onClick={() => setCategory('all')}>
            All
          </Chip>
        </span>
        {CATEGORIES.map((value) => (
          <span key={value} className="shrink-0">
            <Chip isActive={category === value} onClick={() => setCategory(category === value ? 'all' : value)}>
              {PRAYER_CATEGORY_LABELS[value]}
            </Chip>
          </span>
        ))}
      </div>

      <p className="mb-3 text-sm text-slate-500">{pluralize(prayers.length, 'prayer')}</p>

      {prayers.length === 0 ? (
        <Card>
          <EmptyState icon={<HandHeart size={20} />} title="No prayers match" description="Try another word or category." />
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {prayers.map((prayer) => (
            <button
              key={prayer.id}
              type="button"
              onClick={() => setSelected(prayer)}
              className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-surface p-4 text-left shadow-sm hover:bg-slate-50"
            >
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-slate-900">{prayer.title}</span>
                <span className="mt-0.5 block truncate text-sm text-slate-500">{previewLine(prayer.text)}</span>
              </span>
              <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                {PRAYER_CATEGORY_LABELS[prayer.category]}
              </span>
            </button>
          ))}
        </div>
      )}

      <p className="mt-6 text-xs text-slate-500">
        Texts follow the wording used in Indonesian parishes, checked against Catholic sources. If a word differs from your Puji Syukur book, follow
        the book.
      </p>

      <PrayerModal prayer={selected} onClose={() => setSelected(null)} />
    </>
  );
};
