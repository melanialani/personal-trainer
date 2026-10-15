export const formatNumber = (value: number, maxFractionDigits = 0): string =>
  value.toLocaleString('en-US', { maximumFractionDigits: maxFractionDigits });

export const formatKcal = (value: number): string => `${formatNumber(Math.round(value))} kcal`;

export const formatGrams = (value: number): string => `${formatNumber(value, value < 10 ? 1 : 0)} g`;

export const formatKg = (value: number): string => `${formatNumber(value, 1)} kg`;

/** Number with an explicit "+" for positive values, e.g. "+0.4". */
export const formatSigned = (value: number, maxFractionDigits = 1): string =>
  `${value > 0 ? '+' : ''}${formatNumber(value, maxFractionDigits)}`;

/** "1.5 × 1 bowl" */
export const formatServings = (servings: number, servingLabel: string): string =>
  `${formatNumber(servings, 2)} × ${servingLabel}`;

/** "1 item", "3 items" */
export const pluralize = (count: number, singular: string, plural = `${singular}s`): string =>
  `${count} ${count === 1 ? singular : plural}`;
