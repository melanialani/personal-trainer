/**
 * Color tones for icon tiles, stat tiles and card headers, so a page can mix colors instead of using only
 * the module accent. `brand` follows the current module accent (see `data-accent` in index.css).
 * Light: -100 tint under -700 text. Dark: translucent -500 tint under -300 text. Both ≥ 4.5:1.
 */
export type Tone = 'brand' | 'emerald' | 'teal' | 'sky' | 'indigo' | 'violet' | 'pink' | 'rose' | 'orange' | 'amber';

/** Tinted square behind an icon. */
export const TONE_TILE: Record<Tone, string> = {
  brand: 'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300',
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300',
  pink: 'bg-pink-100 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
  orange: 'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
};

/** Thin colored strip on the top edge of a tile/card. */
export const TONE_BAR: Record<Tone, string> = {
  brand: 'from-brand-400 to-brand-600',
  emerald: 'from-emerald-400 to-teal-500',
  teal: 'from-teal-400 to-cyan-500',
  sky: 'from-sky-400 to-blue-500',
  indigo: 'from-indigo-400 to-violet-500',
  violet: 'from-violet-400 to-fuchsia-500',
  pink: 'from-pink-400 to-rose-500',
  rose: 'from-rose-400 to-pink-500',
  orange: 'from-orange-400 to-amber-500',
  amber: 'from-amber-400 to-orange-500',
};
