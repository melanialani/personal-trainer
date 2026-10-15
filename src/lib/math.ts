export const roundTo = (value: number, step: number): number => Math.round(value / step) * step;

/** Rounds to one decimal place (avoids float noise from `roundTo(value, 0.1)`). */
export const roundTo1 = (value: number): number => Math.round(value * 10) / 10;

export const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));

export const sumBy = <T,>(items: T[], pick: (item: T) => number): number =>
  items.reduce((total, item) => total + pick(item), 0);

/** Arithmetic mean; 0 for an empty list. */
export const average = (values: number[]): number => (values.length ? sumBy(values, (value) => value) / values.length : 0);
