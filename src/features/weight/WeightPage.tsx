import { Pencil, Plus, Scale, Trash2, TrendingDown, TrendingUp } from 'lucide-react';
import { useMemo, useState } from 'react';
import { bmiCategory, calcBmi, currentWeightKg, goalProgress, weeklyTrendKg } from '../../lib/calc';
import { formatDate, sortByDateDesc } from '../../lib/date';
import { formatKg, formatNumber, formatSigned } from '../../lib/format';
import { Badge } from '../../shared/components/Badge';
import { Button, IconButton } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { EmptyState } from '../../shared/components/EmptyState';
import { Notice } from '../../shared/components/Notice';
import { PageHeader } from '../../shared/components/PageHeader';
import { ProgressBar } from '../../shared/components/ProgressBar';
import { RequireProfile } from '../../shared/components/RequireProfile';
import { StatTile } from '../../shared/components/StatTile';
import { Tabs } from '../../shared/components/Tabs';
import { useProfile } from '../../shared/hooks/useProfile';
import { useAppData } from '../../store/AppDataContext';
import type { WeightEntry } from '../../types';
import { WeightChart } from './WeightChart';
import { WeightEntryModal } from './WeightEntryModal';

type Range = '30' | '90' | '180' | 'all';

const RANGE_TABS: { value: Range; label: string }[] = [
  { value: '30', label: '1M' },
  { value: '90', label: '3M' },
  { value: '180', label: '6M' },
  { value: 'all', label: 'All' },
];

export const WeightPage = () => (
  <RequireProfile>
    <WeightContent />
  </RequireProfile>
);

const WeightContent = () => {
  const { data, remove } = useAppData();
  const confirmDelete = useConfirmDelete();
  const [range, setRange] = useState<Range>('90');
  const [modalEntry, setModalEntry] = useState<WeightEntry | null | undefined>(undefined);
  const profile = useProfile();

  const sortedDesc = useMemo(() => sortByDateDesc(data.weights), [data.weights]);
  const current = currentWeightKg(profile, data.weights);
  const change = current - profile.startWeightKg;
  const toGo = profile.targetWeightKg - current;
  const trend = weeklyTrendKg(data.weights);
  const bmi = calcBmi(current, profile.heightCm);
  const category = bmiCategory(bmi);
  const progress = goalProgress(profile, current);

  const handleDelete = async (entry: WeightEntry) => {
    if (await confirmDelete(`Weigh-in on ${formatDate(entry.date)}`)) remove('weights', entry.id);
  };

  return (
    <>
      <PageHeader
        title="Weight Log"
        description="Daily weight fluctuates — the 7-day average shows your real trend."
        actions={
          <Button icon={<Plus size={16} />} onClick={() => setModalEntry(null)}>
            Log weight
          </Button>
        }
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile label="Current" value={formatKg(current)} hint={sortedDesc[0] ? `Last weigh-in ${formatDate(sortedDesc[0].date)}` : 'No weigh-ins yet'} icon={<Scale size={16} />} />
        <StatTile label="Since start" value={`${formatSigned(change)} kg`} hint={`Started at ${formatKg(profile.startWeightKg)}`} />
        <StatTile
          label="To goal"
          value={Math.abs(toGo) < 0.1 ? 'Reached 🎉' : `${formatNumber(Math.abs(toGo), 1)} kg`}
          hint={`Target ${formatKg(profile.targetWeightKg)}`}
        />
        <StatTile
          label="4-week trend"
          value={trend === null ? '—' : `${formatSigned(trend)} kg/wk`}
          hint={trend === null ? 'Log at least 3 weigh-ins' : `Planned ${profile.goal === 'lose' ? '−' : profile.goal === 'gain' ? '+' : '±'}${profile.weeklyRateKg} kg/wk`}
          icon={trend !== null && trend < 0 ? <TrendingDown size={16} /> : <TrendingUp size={16} />}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Card title="Progress chart" action={<Tabs tabs={RANGE_TABS} value={range} onChange={setRange} />}>
          <WeightChart weights={data.weights} targetKg={profile.targetWeightKg} rangeDays={range === 'all' ? undefined : Number(range)} height={300} />
        </Card>
        <Card title="Goal progress">
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex justify-between text-xs text-slate-500">
                <span>{formatKg(profile.startWeightKg)}</span>
                <span className="font-semibold text-slate-800">{formatNumber(progress * 100)}%</span>
                <span>{formatKg(profile.targetWeightKg)}</span>
              </div>
              <ProgressBar value={progress} height="h-3" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">BMI</span>
              <span className="inline-flex items-center gap-2 font-semibold">
                {formatNumber(bmi, 1)} <Badge tone={category.tone}>{category.label}</Badge>
              </span>
            </div>
            {trend !== null && profile.goal === 'lose' && trend > 0.1 && (
              <Notice size="sm">
                Your trend is going up. Double-check your portions in the Food Diary — sauces, drinks and fried snacks add up quickly.
              </Notice>
            )}
            {trend !== null && profile.goal === 'lose' && trend < -1 && (
              <Notice size="sm">You are losing more than 1 kg/week. Make sure you are eating enough protein to protect muscle.</Notice>
            )}
          </div>
        </Card>
      </div>

      <Card title="History" className="mt-5" bodyClassName="">
        {sortedDesc.length === 0 ? (
          <EmptyState icon={<Scale size={22} />} title="No weigh-ins yet" action={<Button onClick={() => setModalEntry(null)}>Log your first weight</Button>} />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-2.5 font-medium sm:px-5">Date</th>
                  <th className="px-3 py-2.5 text-right font-medium">Weight</th>
                  <th className="px-3 py-2.5 text-right font-medium">Change</th>
                  <th className="hidden px-3 py-2.5 text-right font-medium sm:table-cell">Waist</th>
                  <th className="hidden px-3 py-2.5 font-medium sm:table-cell">Note</th>
                  <th className="px-5 py-2.5" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sortedDesc.map((entry, index) => {
                  const previous = sortedDesc[index + 1];
                  const delta = previous ? entry.weightKg - previous.weightKg : null;
                  return (
                    <tr key={entry.id} className="hover:bg-slate-50">
                      <td className="whitespace-nowrap px-4 py-2.5 text-slate-700 sm:px-5">{formatDate(entry.date)}</td>
                      <td className="px-3 py-2.5 text-right font-semibold tabular-nums">{formatKg(entry.weightKg)}</td>
                      <td className={`px-3 py-2.5 text-right tabular-nums ${delta === null ? 'text-slate-400' : delta < 0 ? 'text-emerald-700 dark:text-emerald-400' : delta > 0 ? 'text-rose-700 dark:text-rose-400' : 'text-slate-500'}`}>
                        {delta === null ? '—' : formatSigned(delta)}
                      </td>
                      <td className="hidden px-3 py-2.5 text-right tabular-nums text-slate-600 sm:table-cell">{entry.waistCm ? `${entry.waistCm} cm` : '—'}</td>
                      <td className="hidden max-w-[16rem] truncate px-3 py-2.5 text-slate-500 sm:table-cell">{entry.note ?? ''}</td>
                      <td className="px-2 py-2.5 sm:px-5">
                        <div className="flex justify-end">
                          <IconButton label="Edit weigh-in" onClick={() => setModalEntry(entry)}>
                            <Pencil size={15} />
                          </IconButton>
                          <IconButton label="Delete weigh-in" tone="danger" onClick={() => handleDelete(entry)}>
                            <Trash2 size={15} />
                          </IconButton>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <WeightEntryModal isOpen={modalEntry !== undefined} entry={modalEntry} onClose={() => setModalEntry(undefined)} />
    </>
  );
};
