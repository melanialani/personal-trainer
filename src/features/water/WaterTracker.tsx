import { Droplets, Minus, Plus } from 'lucide-react';
import { formatNumber } from '../../lib/format';
import { IconButton } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useAppData } from '../../store/AppDataContext';

const GLASS_ML = 250;

export const WaterTracker = ({ date }: { date: string }) => {
  const { data, update } = useAppData();
  const consumed = data.water[date] ?? 0;
  const target = data.profile?.waterTargetMl ?? 2000;
  const glasses = Math.max(Math.ceil(target / GLASS_ML), Math.ceil(consumed / GLASS_ML));

  const setWater = (ml: number) =>
    update((current) => ({ ...current, water: { ...current.water, [date]: Math.max(0, ml) } }));

  return (
    <Card
      icon={<Droplets size={16} className="text-sky-500" />}
      title="Water"
      subtitle={`${formatNumber(consumed)} / ${formatNumber(target)} ml`}
      action={
        <>
          <IconButton label="Remove a glass" onClick={() => setWater(consumed - GLASS_ML)} disabled={consumed <= 0}>
            <Minus size={16} />
          </IconButton>
          <IconButton label="Add a glass" onClick={() => setWater(consumed + GLASS_ML)}>
            <Plus size={16} />
          </IconButton>
        </>
      }
    >
      <div className="flex flex-wrap gap-1.5">
        {Array.from({ length: glasses }, (_, i) => {
          const isFilled = (i + 1) * GLASS_ML <= consumed;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setWater(isFilled && (i + 1) * GLASS_ML === consumed ? i * GLASS_ML : (i + 1) * GLASS_ML)}
              aria-label={`Set to ${(i + 1) * GLASS_ML} ml`}
              className={`h-9 w-7 rounded-b-lg rounded-t-sm border-2 transition-colors ${
                isFilled ? 'border-sky-400 bg-sky-400' : 'border-slate-200 bg-surface hover:border-sky-300'
              }`}
            />
          );
        })}
      </div>
      <p className="mt-2 text-xs text-slate-400">1 glass = {GLASS_ML} ml. Tap a glass to set the amount.</p>
    </Card>
  );
};
