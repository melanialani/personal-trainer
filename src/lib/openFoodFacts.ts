import type { FoodItem } from '../types';
import { roundTo1 } from './math';

/** Open Food Facts — free, open database of packaged foods. No API key required. */
const BASE_URL = 'https://world.openfoodfacts.org';
const FIELDS = 'code,product_name,brands,nutriments,serving_size,serving_quantity,categories_tags';

interface OffProduct {
  code?: string;
  product_name?: string;
  brands?: string;
  serving_size?: string;
  serving_quantity?: number | string;
  nutriments?: Record<string, number | string | undefined>;
}

const num = (value: unknown): number => {
  const n = typeof value === 'string' ? Number.parseFloat(value) : typeof value === 'number' ? value : NaN;
  return Number.isFinite(n) ? n : 0;
};

const toFoodItem = (product: OffProduct): FoodItem | null => {
  const n = product.nutriments ?? {};
  const kcal100 = num(n['energy-kcal_100g']) || num(n['energy_100g']) / 4.184;
  if (!product.code || !product.product_name || kcal100 <= 0) return null;
  const servingGrams = num(product.serving_quantity) || 100;
  const factor = servingGrams / 100;
  return {
    id: `off-${product.code}`,
    name: product.product_name.trim(),
    brand: product.brands?.split(',')[0]?.trim() || undefined,
    category: 'Packaged (Open Food Facts)',
    servingLabel: product.serving_size?.trim() || '100 g',
    servingGrams,
    kcal: Math.round(kcal100 * factor),
    protein: roundTo1(num(n.proteins_100g) * factor),
    carbs: roundTo1(num(n.carbohydrates_100g) * factor),
    fat: roundTo1(num(n.fat_100g) * factor),
    tags: [],
    source: 'openfoodfacts',
  };
};

export const searchOpenFoodFacts = async (query: string, signal?: AbortSignal): Promise<FoodItem[]> => {
  const params = new URLSearchParams({
    search_terms: query,
    search_simple: '1',
    action: 'process',
    json: '1',
    page_size: '24',
    fields: FIELDS,
  });
  const response = await fetch(`${BASE_URL}/cgi/search.pl?${params.toString()}`, { signal });
  if (!response.ok) throw new Error(`Open Food Facts returned ${response.status}`);
  const body = (await response.json()) as { products?: OffProduct[] };
  return (body.products ?? []).map(toFoodItem).filter((item): item is FoodItem => item !== null);
};

export const lookupBarcode = async (barcode: string, signal?: AbortSignal): Promise<FoodItem | null> => {
  const response = await fetch(`${BASE_URL}/api/v2/product/${encodeURIComponent(barcode)}.json?fields=${FIELDS}`, { signal });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Open Food Facts returned ${response.status}`);
  const body = (await response.json()) as { status?: number; product?: OffProduct };
  return body.status === 1 && body.product ? toFoodItem({ ...body.product, code: body.product.code ?? barcode }) : null;
};
