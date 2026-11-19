/**
 * Colors used from JS (SVG, Recharts) where Tailwind classes cannot be applied.
 * CSS variables keep them in sync with the light / dark theme defined in index.css.
 */
export const COLORS = {
  brand: 'var(--color-brand-500)',
  brandDark: 'var(--color-brand-600)',
  brandLight: 'var(--color-brand-400)',
  /** Brand-colored text on the page/card background (darker in light mode, lighter in dark mode). */
  brandText: 'var(--color-brand-ink)',
  over: '#f43f5e',
  overLight: '#fb7185',
  track: 'var(--color-slate-100)',
  muted: 'var(--color-slate-200)',
  mutedDark: 'var(--color-slate-300)',
  axis: 'var(--color-slate-400)',
  hover: 'var(--color-slate-50)',
  /** Module accent as a left-to-right gradient (progress bars). */
  brandGradient: 'linear-gradient(90deg, var(--grad-from, var(--color-brand-500)), var(--grad-to, var(--color-brand-600)))',
  gradFrom: 'var(--grad-from, var(--color-brand-500))',
  gradTo: 'var(--grad-to, var(--color-brand-600))',
} as const;

/** Growth chart lines: WHO SD curves and the child's own measurements. Fixed hues (not the module accent),
 * so "ideal" stays green and the child's line stays distinct from every SD curve. */
export const GROWTH_COLORS = {
  sd3: '#f43f5e',
  sd2: '#f59e0b',
  median: '#10b981',
  child: '#6366f1',
} as const;

/** Shared Recharts styling so every chart looks the same. */
export const CHART_GRID = { stroke: COLORS.track, vertical: false } as const;

export const CHART_AXIS = { tick: { fontSize: 11, fill: COLORS.axis }, tickLine: false, axisLine: false } as const;

export const CHART_TOOLTIP = {
  contentStyle: {
    borderRadius: 12,
    border: `1px solid ${COLORS.muted}`,
    fontSize: 12,
    background: 'var(--color-surface)',
    color: 'var(--color-slate-900)',
  },
  labelStyle: { color: 'var(--color-slate-700)' },
  cursor: { fill: COLORS.hover },
} as const;

export const CHART_BAR = { radius: [6, 6, 0, 0] as [number, number, number, number], maxBarSize: 36 };
