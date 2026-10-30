import { BookOpenText, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PRAYERS, type Prayer } from '../../data/prayers';
import { MYSTERY_SETS, ROSARY_MYSTERIES, ROSARY_STEPS, type MysterySetId } from '../../data/rosary';
import { todayKey, WEEKDAY_SHORT } from '../../lib/date';
import { mysterySetForDate } from '../../lib/prayers';
import { Card } from '../../shared/components/Card';
import { PageHeader } from '../../shared/components/PageHeader';
import { Tabs } from '../../shared/components/Tabs';
import { PrayerModal } from '../prayers/PrayerModal';

const prayerById = (id: string): Prayer | undefined => PRAYERS.find((prayer) => prayer.id === id);

export const RosaryPage = () => {
  const [params, setParams] = useSearchParams();
  const todaySet = mysterySetForDate(todayKey());
  const setId = (MYSTERY_SETS.find((set) => set.id === params.get('set'))?.id ?? todaySet) as MysterySetId;
  const set = MYSTERY_SETS.find((item) => item.id === setId)!;
  const mysteries = ROSARY_MYSTERIES.filter((mystery) => mystery.set === setId);
  const [isStepsOpen, setIsStepsOpen] = useState(false);
  const [selected, setSelected] = useState<Prayer | null>(null);

  return (
    <>
      <PageHeader
        title="Rosary"
        description={`Today's mysteries: ${MYSTERY_SETS.find((item) => item.id === todaySet)?.title}.`}
        actions={
          <Tabs
            tabs={MYSTERY_SETS.map((item) => ({ value: item.id, label: item.shortTitle }))}
            value={setId}
            onChange={(value) => setParams({ set: value }, { replace: true })}
          />
        }
      />

      <Card className="mb-4" bodyClassName="p-0">
        <button
          type="button"
          onClick={() => setIsStepsOpen((open) => !open)}
          className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left sm:px-5"
          aria-expanded={isStepsOpen}
        >
          <span>
            <span className="block text-sm font-semibold text-slate-900">How to pray the rosary</span>
            <span className="text-xs text-slate-500">Tap a prayer name to read it</span>
          </span>
          {isStepsOpen ? <ChevronUp size={18} className="text-slate-500" /> : <ChevronDown size={18} className="text-slate-500" />}
        </button>
        {isStepsOpen && (
          <ol className="list-decimal space-y-2 border-t border-slate-100 px-4 py-3 pl-9 text-sm text-slate-700 sm:px-5 sm:pl-10">
            {ROSARY_STEPS.map((step) => (
              <li key={step.text}>
                {step.text}
                {step.prayerIds && (
                  <span className="mt-1 flex flex-wrap gap-1.5">
                    {step.prayerIds.map((id) => {
                      const prayer = prayerById(id);
                      return (
                        prayer && (
                          <button
                            key={id}
                            type="button"
                            onClick={() => setSelected(prayer)}
                            className="rounded-full border border-brand-200 px-2.5 py-0.5 text-xs font-medium text-brand-700 hover:bg-brand-50 dark:text-brand-300"
                          >
                            {prayer.title}
                          </button>
                        )
                      );
                    })}
                  </span>
                )}
              </li>
            ))}
          </ol>
        )}
      </Card>

      <h2 className="mb-1 text-lg font-bold text-slate-900">{set.title}</h2>
      <p className="mb-3 text-sm text-slate-500">Prayed on {set.days.map((day) => WEEKDAY_SHORT[day]).join(' & ')}</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mysteries.map((mystery) => (
          <Card key={mystery.id} bodyClassName="p-0" className="overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}rosary/${mystery.id}.webp`}
              alt={`${mystery.image.title} — ${mystery.image.artist}`}
              loading="lazy"
              className="aspect-[4/3] w-full bg-slate-100 object-cover"
            />
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-400">
                {set.title} {mystery.number}
              </p>
              <h3 className="mt-0.5 text-base font-semibold text-slate-900">{mystery.title}</h3>
              <Link
                to={`/bible?ref=${mystery.ref.param}`}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline dark:text-brand-400"
              >
                <BookOpenText size={15} /> Read {mystery.ref.label}
              </Link>
              <p className="mt-3 text-[11px] leading-4 text-slate-500">
                <a href={mystery.image.commonsUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  {mystery.image.artist}, <i>{mystery.image.title}</i> ({mystery.image.year}) · public domain
                </a>
              </p>
            </div>
          </Card>
        ))}
      </div>

      <PrayerModal prayer={selected} onClose={() => setSelected(null)} />
    </>
  );
};
