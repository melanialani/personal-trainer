import { useMemo, useState, type ReactNode } from 'react';
import { FOOD_CATEGORIES } from '../../data/foods';
import { searchFoods } from '../../lib/foods';
import { EmptyState } from '../../shared/components/EmptyState';
import { SearchInput, Select } from '../../shared/components/FormFields';
import type { FoodItem } from '../../types';
import { FoodRow } from './FoodRow';
import { useFoods } from './useFoods';

const ALL = 'all';
const FAVORITES = 'favorites';
const MY_FOODS = 'mine';
const MAX_RESULTS = 80;

interface FoodPickerProps {
  onSelect: (food: FoodItem) => void;
  /** Rendered under the list when nothing matches, e.g. an online-search shortcut. */
  emptyAction?: (query: string) => ReactNode;
  renderTrailing?: (food: FoodItem) => ReactNode;
  listClassName?: string;
}

/** Searchable picker over the built-in database plus the user's own foods. */
export const FoodPicker = ({ onSelect, emptyAction, renderTrailing, listClassName = 'max-h-[50dvh]' }: FoodPickerProps) => {
  const { allFoods, favoriteIds, toggleFavorite } = useFoods();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<string>(ALL);

  const filterOptions = useMemo(
    () => [
      { value: ALL, label: 'All foods' },
      { value: FAVORITES, label: '★ Favorites' },
      { value: MY_FOODS, label: 'My foods & saved' },
      ...FOOD_CATEGORIES.map((category) => ({ value: category, label: category })),
    ],
    [],
  );

  const results = useMemo(() => {
    const scoped = allFoods.filter((food) => {
      if (filter === ALL) return true;
      if (filter === FAVORITES) return favoriteIds.includes(food.id);
      if (filter === MY_FOODS) return food.source !== 'builtin';
      return food.category === filter;
    });
    return searchFoods(scoped, query);
  }, [allFoods, favoriteIds, filter, query]);

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <SearchInput
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search food, e.g. nasi goreng, chicken breast"
          className="flex-1"
        />
        <Select value={filter} options={filterOptions} onValueChange={setFilter} className="sm:w-48" />
      </div>
      <div className={`mt-3 divide-y divide-slate-100 overflow-y-auto rounded-xl border border-slate-200 ${listClassName}`}>
        {results.length === 0 ? (
          <EmptyState
            title={filter === FAVORITES && !query ? 'No favorites yet' : 'No matching food'}
            description={filter === FAVORITES && !query ? 'Tap the star next to a food to add it here.' : 'Try another keyword or search online.'}
            action={emptyAction?.(query)}
          />
        ) : (
          results.slice(0, MAX_RESULTS).map((food) => (
            <FoodRow
              key={food.id}
              food={food}
              isFavorite={favoriteIds.includes(food.id)}
              onToggleFavorite={() => toggleFavorite(food.id)}
              onSelect={() => onSelect(food)}
              trailing={renderTrailing?.(food)}
            />
          ))
        )}
        {results.length > MAX_RESULTS && (
          <p className="px-3 py-2 text-center text-xs text-slate-400">
            Showing {MAX_RESULTS} of {results.length} — refine your search to see more.
          </p>
        )}
      </div>
    </div>
  );
};
