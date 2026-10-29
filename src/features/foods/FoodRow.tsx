import { Star } from 'lucide-react';
import type { ReactNode } from 'react';
import { formatNumber } from '../../lib/format';
import { Badge } from '../../shared/components/Badge';
import { MacroInline } from '../../shared/components/Nutrition';
import type { FoodItem } from '../../types';

interface FoodRowProps {
  food: FoodItem;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  onSelect?: () => void;
  trailing?: ReactNode;
}

const SOURCE_BADGE: Partial<Record<FoodItem['source'], { label: string; tone: 'brand' | 'info' }>> = {
  custom: { label: 'My food', tone: 'brand' },
  openfoodfacts: { label: 'Online', tone: 'info' },
};

/** One food in a list: name, serving and calories. Used by every food list in the app. */
export const FoodRow = ({ food, isFavorite, onToggleFavorite, onSelect, trailing }: FoodRowProps) => {
  const badge = SOURCE_BADGE[food.source];
  return (
    <div className="flex items-center gap-2 px-3 py-2.5 hover:bg-slate-50">
      {onToggleFavorite && (
        <button
          type="button"
          onClick={onToggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className={`shrink-0 rounded p-1 ${isFavorite ? 'text-amber-400' : 'text-slate-400 hover:text-slate-500'}`}
        >
          <Star size={16} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      )}
      <button type="button" onClick={onSelect} disabled={!onSelect} className="min-w-0 flex-1 text-left disabled:cursor-default">
        <p className="flex items-start gap-2 text-sm font-medium text-slate-800">
          <span className="line-clamp-2">{food.name}</span>
          {badge && <Badge tone={badge.tone}>{badge.label}</Badge>}
        </p>
        <p className="truncate text-xs text-slate-500">
          {food.brand ? `${food.brand} · ` : ''}
          {food.servingLabel} ({formatNumber(food.servingGrams)} g)
        </p>
        <MacroInline values={food} />
      </button>
      <div className="shrink-0 text-right">
        <p className="text-sm font-semibold tabular-nums text-slate-900">{formatNumber(food.kcal)}</p>
        <p className="text-[11px] text-slate-400">kcal</p>
      </div>
      {trailing}
    </div>
  );
};
