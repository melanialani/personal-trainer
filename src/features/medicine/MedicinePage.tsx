import { BookOpen, Pill, ShieldAlert, SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CARE_GUIDES } from '../../data/careGuides';
import {
  AVAILABILITY_LABELS,
  CHILD_USE_LABELS,
  FORM_LABELS,
  GROUP_LABELS,
  MEDICINES,
  PREGNANCY_LABELS,
  SYMPTOM_LABELS,
  TIMING_LABELS,
  type Medicine,
  type Symptom,
} from '../../data/medicines';
import {
  ANY,
  countActiveFilters,
  EMPTY_MEDICINE_FILTERS,
  filterGuides,
  filterMedicines,
  listIngredients,
  listSymptoms,
  type MedicineFilters,
} from '../../lib/medicines';
import { pluralize } from '../../lib/format';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';
import { EmptyState } from '../../shared/components/EmptyState';
import { Field, SearchInput, Select } from '../../shared/components/FormFields';
import { Notice } from '../../shared/components/Notice';
import { PageHeader } from '../../shared/components/PageHeader';
import { Tabs } from '../../shared/components/Tabs';
import { CareGuideCard } from './CareGuideCard';
import { MedicineCard } from './MedicineCard';
import { MedicineDetailModal } from './MedicineDetailModal';

type MedicineTab = 'medicines' | 'guides';

const TABS: { value: MedicineTab; label: string }[] = [
  { value: 'medicines', label: 'Medicines' },
  { value: 'guides', label: 'Care guides' },
];

const INGREDIENTS = listIngredients(MEDICINES);
const SYMPTOMS = listSymptoms(MEDICINES);

/** Builds Select options with a leading "any" entry from a label map. */
const toOptions = <T extends string>(labels: Record<T, string>, anyLabel: string): { value: T | typeof ANY; label: string }[] => [
  { value: ANY, label: anyLabel },
  ...(Object.keys(labels) as T[]).map((value) => ({ value, label: labels[value] })),
];

export const MedicinePage = () => {
  const [params, setParams] = useSearchParams();
  const tab = (TABS.find((t) => t.value === params.get('tab'))?.value ?? 'medicines') as MedicineTab;
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<MedicineFilters>(EMPTY_MEDICINE_FILTERS);
  const [isMoreShown, setIsMoreShown] = useState(false);
  const [selected, setSelected] = useState<Medicine | null>(null);

  const medicines = useMemo(() => filterMedicines(MEDICINES, filters, query), [filters, query]);
  const guides = useMemo(() => filterGuides(CARE_GUIDES, filters.symptom, query), [filters.symptom, query]);
  const activeCount = countActiveFilters(filters);

  const set = <K extends keyof MedicineFilters>(key: K, value: MedicineFilters[K]) => setFilters((current) => ({ ...current, [key]: value }));
  const clearAll = () => {
    setFilters(EMPTY_MEDICINE_FILTERS);
    setQuery('');
  };

  return (
    <>
      <PageHeader
        title="Medicine guide"
        description="What each medicine is for, how and when to take it, doses for adults and children, and what not to mix."
        actions={<Tabs tabs={TABS} value={tab} onChange={(value) => setParams({ tab: value }, { replace: true })} />}
      />

      <Notice icon={<ShieldAlert size={16} />} className="mb-4">
        General information, not a diagnosis or prescription. Children's doses depend on body weight — confirm with a doctor or pharmacist, and
        follow your prescription when it differs.
      </Notice>

      <div className="mb-3 flex flex-col gap-2 sm:flex-row">
        <SearchInput
          className="flex-1"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name, brand, ingredient or symptom (e.g. maag, Narfoz, luka bakar)"
          aria-label="Search medicines and guides"
        />
        {tab === 'medicines' && (
          <Button variant="secondary" icon={<SlidersHorizontal size={16} />} onClick={() => setIsMoreShown((shown) => !shown)}>
            Filters{activeCount > 0 ? ` (${activeCount})` : ''}
          </Button>
        )}
      </div>

      <div className="scrollbar-none -mx-4 mb-4 flex gap-1.5 overflow-x-auto whitespace-nowrap px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        <span className="shrink-0">
          <Chip isActive={filters.symptom === ANY} onClick={() => set('symptom', ANY)}>
            All symptoms
          </Chip>
        </span>
        {SYMPTOMS.map((symptom: Symptom) => (
          <span key={symptom} className="shrink-0">
            <Chip isActive={filters.symptom === symptom} onClick={() => set('symptom', filters.symptom === symptom ? ANY : symptom)}>
              {SYMPTOM_LABELS[symptom]}
            </Chip>
          </span>
        ))}
      </div>

      {tab === 'medicines' && isMoreShown && (
        <Card className="mb-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Field label="Group">
              <Select value={filters.group} options={toOptions(GROUP_LABELS, 'All groups')} onValueChange={(value) => set('group', value)} />
            </Field>
            <Field label="Active ingredient">
              <Select
                value={filters.ingredient}
                options={[{ value: ANY, label: 'Any ingredient' }, ...INGREDIENTS.map((value) => ({ value, label: value }))]}
                onValueChange={(value) => set('ingredient', value)}
              />
            </Field>
            <Field label="Form">
              <Select value={filters.form} options={toOptions(FORM_LABELS, 'Any form')} onValueChange={(value) => set('form', value)} />
            </Field>
            <Field label="When to take">
              <Select value={filters.timing} options={toOptions(TIMING_LABELS, 'Any time')} onValueChange={(value) => set('timing', value)} />
            </Field>
            <Field label="Availability">
              <Select
                value={filters.availability}
                options={toOptions(AVAILABILITY_LABELS, 'Any')}
                onValueChange={(value) => set('availability', value)}
              />
            </Field>
            <Field label="Children">
              <Select value={filters.childUse} options={toOptions(CHILD_USE_LABELS, 'Any')} onValueChange={(value) => set('childUse', value)} />
            </Field>
            <Field label="Pregnancy">
              <Select value={filters.pregnancy} options={toOptions(PREGNANCY_LABELS, 'Any')} onValueChange={(value) => set('pregnancy', value)} />
            </Field>
          </div>
        </Card>
      )}

      <div className="mb-3 flex items-center justify-between gap-2 text-sm text-slate-500">
        <span>{tab === 'medicines' ? pluralize(medicines.length, 'medicine') : pluralize(guides.length, 'guide')}</span>
        {(activeCount > 0 || query) && (
          <Button variant="ghost" size="sm" icon={<X size={14} />} onClick={clearAll}>
            Clear search & filters
          </Button>
        )}
      </div>

      {tab === 'medicines' &&
        (medicines.length === 0 ? (
          <Card>
            <EmptyState icon={<Pill size={20} />} title="No medicines match" description="Try another word or clear the filters." />
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {medicines.map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} onOpen={() => setSelected(medicine)} />
            ))}
          </div>
        ))}

      {tab === 'guides' &&
        (guides.length === 0 ? (
          <Card>
            <EmptyState icon={<BookOpen size={20} />} title="No guides match" description="Try another word or pick another symptom." />
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {guides.map((guide) => (
              <CareGuideCard key={guide.id} guide={guide} onOpenMedicine={setSelected} />
            ))}
          </div>
        ))}

      <MedicineDetailModal medicine={selected} onSelect={setSelected} onClose={() => setSelected(null)} />
    </>
  );
};
