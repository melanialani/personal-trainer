/** Colors used from JS (SVG, Recharts) where Tailwind classes cannot be applied. */
export const COLORS = {
  brand: 'var(--color-brand-500)',
  brandHex: '#10b981',
  brandDark: '#059669',
  brandLight: '#34d399',
  over: '#f43f5e',
  overLight: '#fb7185',
  track: '#f1f5f9',
  muted: '#e2e8f0',
  mutedDark: '#cbd5e1',
  axis: '#94a3b8',
  hover: '#f8fafc',
} as const;

/** Shared Recharts styling so every chart looks the same. */
export const CHART_GRID = { stroke: COLORS.track, vertical: false } as const;

export const CHART_AXIS = { tick: { fontSize: 11, fill: COLORS.axis }, tickLine: false, axisLine: false } as const;

export const CHART_TOOLTIP = {
  contentStyle: { borderRadius: 12, border: `1px solid ${COLORS.muted}`, fontSize: 12 },
  cursor: { fill: COLORS.hover },
} as const;

export const CHART_BAR = { radius: [6, 6, 0, 0] as [number, number, number, number], maxBarSize: 36 };
