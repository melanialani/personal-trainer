import { Plus, Ruler } from 'lucide-react';
import { useState } from 'react';
import type { GrowthIndicator } from '../../data/growthStandards';
import { childAgeMonths, formatChildAge } from '../../lib/child';
import { formatDate, sortByDateDesc } from '../../lib/date';
import { formatNumber, formatSigned } from '../../lib/format';
import { assessMeasurement, GROWTH_UNITS, type GrowthAssessment } from '../../lib/growth';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { EmptyState } from '../../shared/components/EmptyState';
import { Field, Segmented, Select } from '../../shared/components/FormFields';
import { Tabs } from '../../shared/components/Tabs';
import type { Child, ChildMeasurement, Sex } from '../../types';
import { GrowthChart, GrowthChartLegend } from './GrowthChart';
import { GROWTH_INDICATOR_LABELS, GROWTH_INDICATOR_OPTIONS } from './growthLabels';
import { GrowthReferenceTable } from './GrowthReferenceTable';
import { MeasurementModal } from './MeasurementModal';
import { MedicalDisclaimer, ParentingHeader } from './ParentingHeader';
import { useChildren } from './useChildren';

type GrowthTab = 'child' | 'reference';

const INDICATORS: GrowthIndicator[] = ['weight', 'height', 'head', 'bmi'];

const SEX_OPTIONS: { value: Sex; label: string }[] = [
  { value: 'female', label: 'Girls' },
  { value: 'male', label: 'Boys' },
];

export const GrowthPage = () => {
  const { activeChild } = useChildren();
  const [tab, setTab] = useState<GrowthTab>(activeChild ? 'child' : 'reference');

  return (
    <div>
      <ParentingHeader
        title="Growth"
        description="Weight, height, head circumference and BMI compared with the WHO growth standards used in the Buku KIA."
      />
      <div className="mb-4">
        <Tabs
          tabs={[
            { value: 'child', label: activeChild ? `${activeChild.name}'s growth` : 'My child' },
            { value: 'reference', label: 'Normal ranges by age' },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>
      {tab === 'child' ? <ChildGrowth child={activeChild} /> : <ReferenceRanges defaultSex={activeChild?.sex ?? 'female'} highlightMonths={activeChild ? childAgeMonths(activeChild) : undefined} />}
      <div className="mt-6">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

const ChildGrowth = ({ child }: { child: Child | null }) => {
  const [indicator, setIndicator] = useState<GrowthIndicator>('weight');
  const [editing, setEditing] = useState<ChildMeasurement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!child) {
    return (
      <Card>
        <EmptyState icon={<Ruler size={22} />} title="No child yet" description="Add your child above to log weight and height and see them on the WHO growth chart." />
      </Card>
    );
  }

  const age = childAgeMonths(child);
  const history = sortByDateDesc(child.measurements);
  const openModal = (entry: ChildMeasurement | null) => {
    setEditing(entry);
    setIsModalOpen(true);
  };

  // Latest assessment per indicator (BMI needs weight + height on the same day).
  const latest = INDICATORS.map((ind) => history.map((m) => assessMeasurement(m, ind, child.sex, child.birthDate)).find(Boolean) ?? null);

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <Button icon={<Plus size={16} />} onClick={() => openModal(null)}>
          Add measurement
        </Button>
      </div>

      {history.length === 0 ? (
        <Card>
          <EmptyState
            icon={<Ruler size={22} />}
            title="No measurements yet"
            description="Copy the numbers from the Buku KIA / Posyandu card, or measure at home. Weigh monthly until age 5."
          />
        </Card>
      ) : (
        <>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {latest.map((assessment, index) =>
              assessment ? <AssessmentTile key={INDICATORS[index]} assessment={assessment} /> : null,
            )}
          </div>

          <Card
            title="Growth chart"
            subtitle={`${child.name} · ${formatChildAge(age)}`}
            action={
              <div className="w-48">
                <Select value={indicator} options={GROWTH_INDICATOR_OPTIONS} onValueChange={setIndicator} aria-label="Indicator" />
              </div>
            }
          >
            <GrowthChart child={child} indicator={indicator} ageMonths={age} />
            <div className="mt-3">
              <GrowthChartLegend childName={child.name} />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              What matters most is the trend: the line should follow the curves. A line that turns flat or crosses down two
              lines is worth a visit to the doctor, even inside the normal range.
            </p>
          </Card>

          <Card title="History" bodyClassName="divide-y divide-slate-100">
            {history.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => openModal(m)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50 sm:px-5"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-800">{formatDate(m.date)}</p>
                  <p className="text-xs text-slate-500">
                    {formatChildAge(childAgeMonths(child, m.date))}
                    {m.note ? ` · ${m.note}` : ''}
                  </p>
                </div>
                <p className="shrink-0 text-right text-sm tabular-nums text-slate-700">
                  {[
                    m.weightKg !== undefined && `${formatNumber(m.weightKg, 2)} kg`,
                    m.heightCm !== undefined && `${formatNumber(m.heightCm, 1)} cm`,
                    m.headCm !== undefined && `LK ${formatNumber(m.headCm, 1)} cm`,
                  ]
                    .filter(Boolean)
                    .join(' · ')}
                </p>
              </button>
            ))}
          </Card>
        </>
      )}
      <MeasurementModal isOpen={isModalOpen} child={child} entry={editing} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

const AssessmentTile = ({ assessment }: { assessment: GrowthAssessment }) => {
  const { indicator, value, z, status, range } = assessment;
  const unit = GROWTH_UNITS[indicator];
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-surface p-4 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{GROWTH_INDICATOR_LABELS[indicator]}</p>
      <p className="mt-1 text-xl font-bold tabular-nums text-slate-900">
        {formatNumber(value, 1)} <span className="text-sm font-medium text-slate-500">{unit}</span>
      </p>
      <div className="mt-1.5">
        <Badge tone={status.tone}>{status.label}</Badge>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        z-score {formatSigned(z, 1)} · −2 to +2 SD: {formatNumber(range.min ?? 0, 1)}–{formatNumber(range.max ?? 0, 1)} {unit}
      </p>
    </div>
  );
};

interface ReferenceRangesProps {
  defaultSex: Sex;
  highlightMonths?: number;
}

const ReferenceRanges = ({ defaultSex, highlightMonths }: ReferenceRangesProps) => {
  const [sex, setSex] = useState<Sex>(defaultSex);
  const [indicator, setIndicator] = useState<GrowthIndicator>('weight');

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
      <Card
        title={GROWTH_INDICATOR_LABELS[indicator]}
        subtitle="WHO Child Growth Standards 2006 (0–5 years) · WHO Growth Reference 2007 (5–18 years)"
      >
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <Field label="Sex">
            <Segmented value={sex} options={SEX_OPTIONS} onChange={setSex} />
          </Field>
          <Field label="Indicator">
            <Select value={indicator} options={GROWTH_INDICATOR_OPTIONS} onValueChange={setIndicator} />
          </Field>
        </div>
        <GrowthReferenceTable sex={sex} indicator={indicator} highlightMonths={highlightMonths} />
      </Card>
      <Card title="How to read this">
        <ul className="list-disc space-y-2 pl-4 text-sm text-slate-600">
          <li>
            <b>Min (−2 SD)</b> and <b>Max (+2 SD)</b> bound the range where about 95% of healthy children fall. SD (standard
            deviation) measures spread — think of it as steps away from the average.
          </li>
          <li><b>Median</b> is the middle: half of healthy children are above, half below. Not a target to chase.</li>
          <li>Height under −2 SD = <i>pendek</i> (risk of stunting); under −3 SD = <i>sangat pendek</i>.</li>
          <li>
            Weight under −2 SD = <i>berat badan kurang</i>. Weight above +1 SD already counts as <i>risiko berat badan lebih</i>:
            check BMI.
          </li>
          <li>
            BMI 5–18 years: above +1 SD = <i>gizi lebih</i>, above +2 SD = <i>obesitas</i>; under −2 SD = <i>gizi kurang</i>.
          </li>
          <li>
            WHO has no weight-for-age after 10 years. Weights marked ≈ are an estimate for a child of median height (BMI −2 SD
            to +1 SD); judge older children by BMI instead.
          </li>
          <li>Under 2 years, length is measured lying down; standing height is about 0.7 cm shorter.</li>
        </ul>
        <p className="mt-3 text-xs text-slate-500">Categories: Permenkes RI No. 2 Tahun 2020 tentang Standar Antropometri Anak.</p>
      </Card>
    </div>
  );
};
