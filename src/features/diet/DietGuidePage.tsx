import { BookOpen, ShieldAlert, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { DIET_GUIDES, DIET_TOPICS } from '../../data/dietGuides';
import type { Medicine } from '../../data/medicines';
import { pluralize } from '../../lib/format';
import { ANY, filterGuides } from '../../lib/medicines';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';
import { EmptyState } from '../../shared/components/EmptyState';
import { SearchInput } from '../../shared/components/FormFields';
import { Notice } from '../../shared/components/Notice';
import { PageHeader } from '../../shared/components/PageHeader';
import { CareGuideCard } from '../medicine/CareGuideCard';
import { MedicineDetailModal } from '../medicine/MedicineDetailModal';

export const DietGuidePage = () => {
  const [query, setQuery] = useState('');
  const [topicId, setTopicId] = useState<string>(ANY);
  const [selected, setSelected] = useState<Medicine | null>(null);

  const guides = useMemo(() => {
    const topic = DIET_TOPICS.find((t) => t.id === topicId);
    const inTopic = topic ? DIET_GUIDES.filter((guide) => topic.guideIds.includes(guide.id)) : DIET_GUIDES;
    return filterGuides(inTopic, ANY, query);
  }, [topicId, query]);

  const clearAll = () => {
    setQuery('');
    setTopicId(ANY);
  };

  return (
    <>
      <PageHeader
        title="Diet guide"
        description="How weight loss really works: water vs fat, plateaus, intermittent fasting, drinks, fiber, protein and slimming herbs."
      />

      <Notice icon={<ShieldAlert size={16} />} className="mb-4">
        General information, not medical advice. Ask a doctor first if you are pregnant, breastfeeding, have a chronic illness or take daily
        medicine.
      </Notice>

      <SearchInput
        className="mb-3"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search (e.g. OMAD, plateau, psyllium, jeruk pahit, haid)"
        aria-label="Search diet guides"
      />

      <div className="mb-3 flex flex-wrap gap-1.5">
        <Chip isActive={topicId === ANY} onClick={() => setTopicId(ANY)}>
          All topics
        </Chip>
        {DIET_TOPICS.map((topic) => (
          <Chip key={topic.id} isActive={topicId === topic.id} onClick={() => setTopicId(topic.id)}>
            {topic.label}
          </Chip>
        ))}
      </div>

      <div className="mb-3 flex items-center justify-between gap-2 text-sm text-slate-500">
        <span>{pluralize(guides.length, 'guide')}</span>
        {(query || topicId !== ANY) && (
          <Button variant="ghost" size="sm" icon={<X size={14} />} onClick={clearAll}>
            Clear search & topic
          </Button>
        )}
      </div>

      {guides.length === 0 ? (
        <Card>
          <EmptyState icon={<BookOpen size={20} />} title="No guides match" description="Try another word or pick another topic." />
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {guides.map((guide) => (
            <CareGuideCard key={guide.id} guide={guide} onOpenMedicine={setSelected} />
          ))}
        </div>
      )}

      <MedicineDetailModal medicine={selected} onSelect={setSelected} onClose={() => setSelected(null)} />
    </>
  );
};
