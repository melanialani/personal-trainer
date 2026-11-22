import { Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { Saint } from '../../data/saints';
import { pluralize } from '../../lib/format';
import { MONTHS_ID } from '../../lib/liturgicalCalendar';
import { SAINT_RANK_LABELS, searchSaints } from '../../lib/saints';
import { Badge } from '../../shared/components/Badge';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';
import { EmptyState } from '../../shared/components/EmptyState';
import { SearchInput } from '../../shared/components/FormFields';
import { SaintModal, saintDateLabel } from './SaintModal';
import { useSaints } from './useSaints';

/** Saints of the General Roman Calendar: search by name, patronage or theme; filter by month. */
export const SaintsList = () => {
  const saints = useSaints();
  const [query, setQuery] = useState('');
  const [month, setMonth] = useState<number | null>(null);
  const [selected, setSelected] = useState<Saint | null>(null);
  const results = useMemo(() => (saints ? searchSaints(saints, query, month) : []), [saints, query, month]);

  return (
    <>
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari nama, pelindung, atau tema (mis. fransiskus, guru, martir)"
        aria-label="Search saints"
      />
      <div className="scrollbar-none -mx-4 my-3 flex gap-1.5 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        <span className="shrink-0">
          <Chip isActive={month === null} onClick={() => setMonth(null)}>
            Semua
          </Chip>
        </span>
        {MONTHS_ID.map((name, index) => (
          <span key={name} className="shrink-0">
            <Chip isActive={month === index + 1} onClick={() => setMonth(month === index + 1 ? null : index + 1)}>
              {name}
            </Chip>
          </span>
        ))}
      </div>

      {saints === null ? (
        <p className="text-sm text-slate-500">Loading saints…</p>
      ) : (
        <>
          <p className="mb-3 text-sm text-slate-500">{pluralize(results.length, 'saint')}</p>
          {results.length === 0 ? (
            <Card>
              <EmptyState icon={<Sparkles size={20} />} title="No saints match" description="Try another name or word." />
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {results.map((saint) => (
                <button
                  key={saint.id}
                  type="button"
                  onClick={() => setSelected(saint)}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-surface p-4 text-left shadow-sm hover:bg-slate-50"
                >
                  <span className="w-16 shrink-0 text-xs font-semibold text-brand-700 dark:text-brand-400">{saintDateLabel(saint)}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-slate-900">{saint.name}</span>
                    <span className="mt-0.5 block truncate text-sm text-slate-500">{[saint.role, saint.years].filter(Boolean).join(' · ')}</span>
                  </span>
                  <span className="hidden shrink-0 sm:block">
                    <Badge tone={saint.rank === 'optional' ? 'neutral' : 'brand'}>{SAINT_RANK_LABELS[saint.rank]}</Badge>
                  </span>
                </button>
              ))}
            </div>
          )}
        </>
      )}

      <p className="mt-6 text-xs text-slate-500">
        Saints and Marian memorials of the General Roman Calendar (including additions up to 2026). Stories are short summaries written for this app
        from the sources listed in each entry.
      </p>
      <SaintModal saint={selected} onClose={() => setSelected(null)} />
    </>
  );
};
