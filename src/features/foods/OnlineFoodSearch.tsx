import { Barcode, Globe, LoaderCircle } from 'lucide-react';
import { useRef, useState, type FormEvent } from 'react';
import { lookupBarcode, searchOpenFoodFacts } from '../../lib/openFoodFacts';
import { Button } from '../../shared/components/Button';
import { EmptyState } from '../../shared/components/EmptyState';
import { SearchInput } from '../../shared/components/FormFields';
import { Notice } from '../../shared/components/Notice';
import type { FoodItem } from '../../types';
import { FoodRow } from './FoodRow';

interface OnlineFoodSearchProps {
  initialQuery?: string;
  onSelect: (food: FoodItem) => void;
  actionLabel?: string;
}

const isBarcode = (value: string) => /^\d{8,14}$/.test(value.trim());

/** Searches Open Food Facts for packaged products by name or barcode. */
export const OnlineFoodSearch = ({ initialQuery = '', onSelect, actionLabel = 'Select' }: OnlineFoodSearchProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<FoodItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const abortRef = useRef<AbortController | null>(null);

  const handleSearch = async (e?: FormEvent) => {
    e?.preventDefault();
    const term = query.trim();
    if (term.length < 2) return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setIsLoading(true);
    setError('');
    try {
      if (isBarcode(term)) {
        const product = await lookupBarcode(term, controller.signal);
        setResults(product ? [product] : []);
      } else {
        setResults(await searchOpenFoodFacts(term, controller.signal));
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        setError('Open Food Facts is busy or unreachable (it allows about 10 searches per minute). Wait a minute and try again, or search by barcode.');
        setResults(null);
      }
    } finally {
      if (abortRef.current === controller) setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-2">
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Product name or barcode, e.g. Indomie, 089686010947"
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading || query.trim().length < 2} icon={isLoading ? <LoaderCircle size={16} className="animate-spin" /> : <Globe size={16} />}>
          Search
        </Button>
      </form>
      <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
        <Barcode size={14} /> Data from Open Food Facts (open database, values per serving when available, otherwise per 100 g).
      </p>
      {error && (
        <Notice tone="danger" className="mt-3">
          {error}
        </Notice>
      )}
      {results && (
        <div className="mt-3 max-h-[50dvh] divide-y divide-slate-100 overflow-y-auto rounded-xl border border-slate-200">
          {results.length === 0 ? (
            <EmptyState title="No products found" description="Try a shorter name, the brand, or the barcode number." />
          ) : (
            results.map((food) => (
              <FoodRow
                key={food.id}
                food={food}
                onSelect={() => onSelect(food)}
                trailing={
                  <Button size="sm" variant="secondary" onClick={() => onSelect(food)}>
                    {actionLabel}
                  </Button>
                }
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};
