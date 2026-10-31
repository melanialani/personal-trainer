import { Calculator, Info } from 'lucide-react';
import { useState } from 'react';
import { BMI_ASIA_BANDS, bmiCategory, bmiCategoryWho, calcBmi, healthyWeightRange, latestWeight } from '../../lib/calc';
import { formatNumber, formatSigned } from '../../lib/format';
import { assessChildBmi } from '../../lib/growth';
import { clamp } from '../../lib/math';
import { Badge } from '../../shared/components/Badge';
import { Card } from '../../shared/components/Card';
import { Field, NumberInput, Segmented } from '../../shared/components/FormFields';
import { PageHeader } from '../../shared/components/PageHeader';
import { TextLink } from '../../shared/components/TextLink';
import { useAppData } from '../../store/AppDataContext';
import type { Sex } from '../../types';

type Mode = 'adult' | 'child';

const MODE_OPTIONS: { value: Mode; label: string }[] = [
  { value: 'adult', label: 'Adult (18+)' },
  { value: 'child', label: 'Child (under 18)' },
];

const SEX_OPTIONS: { value: Sex; label: string }[] = [
  { value: 'female', label: 'Girl' },
  { value: 'male', label: 'Boy' },
];

const isValidWeight = (v: number | '') => v !== '' && v >= 2 && v <= 300;
const isValidHeight = (v: number | '') => v !== '' && v >= 45 && v <= 250;

/** Stand-alone BMI calculator: works without a profile, prefilled from it when there is one. */
export const BmiPage = () => {
  const { data } = useAppData();
  const profile = data.profile;
  const [mode, setMode] = useState<Mode>('adult');
  const [weightKg, setWeightKg] = useState<number | ''>(() => latestWeight(data.weights)?.weightKg ?? profile?.startWeightKg ?? '');
  const [heightCm, setHeightCm] = useState<number | ''>(() => profile?.heightCm ?? '');
  const [sex, setSex] = useState<Sex>('female');
  const [years, setYears] = useState<number | ''>('');
  const [months, setMonths] = useState<number | ''>(0);

  const hasBody = isValidWeight(weightKg) && isValidHeight(heightCm);
  const ageMonths = years === '' ? null : years * 12 + (months === '' ? 0 : months);
  const isAgeValid = ageMonths !== null && ageMonths >= 0 && ageMonths < 216 && (months === '' || (months >= 0 && months <= 11));

  return (
    <div>
      <PageHeader
        title="BMI Calculator"
        description="Body Mass Index = weight (kg) ÷ height (m)². A quick screen for under- or overweight, for anyone — no profile needed."
      />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Card title="Your numbers" icon={<Calculator size={16} />}>
          <div className="space-y-4">
            <Segmented value={mode} options={MODE_OPTIONS} onChange={setMode} />
            {mode === 'child' && (
              <div className="grid grid-cols-2 gap-3">
                <Field label="Sex" className="col-span-2">
                  <Segmented value={sex} options={SEX_OPTIONS} onChange={setSex} />
                </Field>
                <Field label="Age (years)">
                  <NumberInput value={years} min={0} max={17} step={1} onValueChange={setYears} suffix="yr" />
                </Field>
                <Field label="+ months">
                  <NumberInput value={months} min={0} max={11} step={1} onValueChange={setMonths} suffix="mo" />
                </Field>
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <Field label="Weight" error={weightKg !== '' && !isValidWeight(weightKg) ? 'Check the weight.' : undefined}>
                <NumberInput value={weightKg} step={0.1} onValueChange={setWeightKg} suffix="kg" />
              </Field>
              <Field label="Height" error={heightCm !== '' && !isValidHeight(heightCm) ? 'Check the height.' : undefined}>
                <NumberInput value={heightCm} step={0.5} onValueChange={setHeightCm} suffix="cm" />
              </Field>
            </div>
            {profile && mode === 'adult' && <p className="text-xs text-slate-500">Prefilled from your profile and last weigh-in.</p>}
          </div>
        </Card>

        {!hasBody ? (
          <Card>
            <p className="py-8 text-center text-sm text-slate-500">Enter weight and height to see the result.</p>
          </Card>
        ) : mode === 'adult' ? (
          <AdultResult weightKg={weightKg as number} heightCm={heightCm as number} />
        ) : isAgeValid ? (
          <ChildResult sex={sex} ageMonths={ageMonths!} weightKg={weightKg as number} heightCm={heightCm as number} />
        ) : (
          <Card>
            <p className="py-8 text-center text-sm text-slate-500">Enter the child's age (0–17 years, 0–11 months).</p>
          </Card>
        )}
      </div>

      <Card title="Good to know" icon={<Info size={16} />} className="mt-5">
        <ul className="list-disc space-y-1.5 pl-4 text-sm text-slate-600">
          <li>
            BMI is like a speedometer, not a full engine check: it only compares weight with height. It cannot tell fat from
            muscle, so very muscular people can read "overweight" while healthy.
          </li>
          <li>
            Adults use the Asia-Pacific cut-offs (WHO WPRO 2000: normal 18.5–22.9), because Asian people carry more health risk
            at a lower BMI. The international WHO class is shown for comparison.
          </li>
          <li>Waist size adds risk information BMI misses: aim for under 90 cm (men) / 80 cm (women) for Asian adults.</li>
          <li>
            Children and teens are judged by BMI-for-age (WHO growth standards, Permenkes 2/2020), not adult cut-offs. For
            regular tracking of your own children use <TextLink to="/growth">Parenting → Growth</TextLink>.
          </li>
          <li>Not valid during pregnancy. For older adults, a slightly higher BMI is often fine — ask a doctor.</li>
        </ul>
      </Card>
    </div>
  );
};

const AdultResult = ({ weightKg, heightCm }: { weightKg: number; heightCm: number }) => {
  const bmi = calcBmi(weightKg, heightCm);
  const category = bmiCategory(bmi);
  const [low, high] = healthyWeightRange(heightCm);
  const diff = weightKg < low ? low - weightKg : weightKg > high ? weightKg - high : 0;
  // Scale from BMI 15 to 35.
  const position = (value: number) => ((clamp(value, 15, 35) - 15) / 20) * 100;

  return (
    <Card title="Result">
      <p className="text-4xl font-bold tabular-nums text-slate-900">{formatNumber(bmi, 1)}</p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <Badge tone={category.tone}>{category.label} (Asia-Pacific)</Badge>
        <span className="text-xs text-slate-500">WHO international: {bmiCategoryWho(bmi)}</span>
      </div>

      <div className="mt-5" aria-hidden>
        <div className="relative flex h-3 overflow-hidden rounded-full">
          {BMI_ASIA_BANDS.map((band) => (
            <div
              key={band.label}
              className={BAND_CLASSES[band.tone]}
              style={{ width: `${position(Math.min(band.to, 35)) - position(Math.max(band.from, 15))}%` }}
            />
          ))}
        </div>
        <div className="relative h-4">
          <span className="absolute -translate-x-1/2 text-xs text-slate-700" style={{ left: `${position(bmi)}%` }}>
            ▲
          </span>
        </div>
        <div className="flex justify-between text-[11px] text-slate-500">
          <span>15</span>
          <span>18.5</span>
          <span>23</span>
          <span>25</span>
          <span>35</span>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-700">
        Healthy weight for {formatNumber(heightCm, 1)} cm: <b>{formatNumber(low, 1)}–{formatNumber(high, 1)} kg</b>
      </p>
      <p className="mt-1 text-sm text-slate-600">
        {diff === 0
          ? 'Your weight is inside this range.'
          : weightKg < low
            ? `About ${formatNumber(diff, 1)} kg below the range.`
            : `About ${formatNumber(diff, 1)} kg above the range.`}
      </p>
    </Card>
  );
};

const BAND_CLASSES: Record<(typeof BMI_ASIA_BANDS)[number]['tone'], string> = {
  info: 'bg-sky-400',
  success: 'bg-emerald-500',
  warning: 'bg-amber-400',
  danger: 'bg-rose-500',
};

interface ChildResultProps {
  sex: Sex;
  ageMonths: number;
  weightKg: number;
  heightCm: number;
}

const ChildResult = ({ sex, ageMonths, weightKg, heightCm }: ChildResultProps) => {
  // Mid-month age, so "5 years 0 months" is not judged as exactly the birthday.
  const result = assessChildBmi(sex, ageMonths + 0.5, weightKg, heightCm);
  if (!result) {
    return (
      <Card>
        <p className="py-8 text-center text-sm text-slate-500">No WHO reference for this age.</p>
      </Card>
    );
  }
  return (
    <Card title="Result (BMI-for-age)">
      <p className="text-4xl font-bold tabular-nums text-slate-900">{formatNumber(result.bmi, 1)}</p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <Badge tone={result.status.tone}>{result.status.label}</Badge>
        <span className="text-xs text-slate-500">z-score {formatSigned(result.z, 1)}</span>
      </div>
      <p className="mt-4 text-sm text-slate-700">
        Normal BMI at this age: <b>{formatNumber(result.normalBmi.min, 1)}–{formatNumber(result.normalBmi.max, 1)}</b>
      </p>
      <p className="mt-1 text-sm text-slate-700">
        For {formatNumber(heightCm, 1)} cm that is about{' '}
        <b>
          {formatNumber(result.normalWeight.min, 1)}–{formatNumber(result.normalWeight.max, 1)} kg
        </b>
        .
      </p>
      <p className="mt-3 text-xs text-slate-500">
        Categories from Permenkes RI 2/2020 (WHO standards). Normal = −2 SD to +1 SD. A single result is a screen, not a
        diagnosis: check with a doctor or Posyandu.
      </p>
    </Card>
  );
};
