import { CartesianGrid, ComposedChart, Line, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import { GROWTH_LMS, type GrowthIndicator } from '../../data/growthStandards';
import { formatAgeShort } from '../../lib/child';
import { ageInMonthsExact, GROWTH_UNITS, measurementValue, valueAtZ } from '../../lib/growth';
import { formatNumber } from '../../lib/format';
import { roundTo1 } from '../../lib/math';
import { CHART_AXIS, CHART_GRID, CHART_TOOLTIP, GROWTH_COLORS } from '../../shared/theme';
import type { Child } from '../../types';

interface GrowthChartProps {
  child: Child;
  indicator: GrowthIndicator;
  ageMonths: number;
  height?: number;
}

const SD_LINES = [
  { key: 'p3', z: 3, color: GROWTH_COLORS.sd3, name: '+3 SD' },
  { key: 'p2', z: 2, color: GROWTH_COLORS.sd2, name: '+2 SD' },
  { key: 'median', z: 0, color: GROWTH_COLORS.median, name: 'Median' },
  { key: 'm2', z: -2, color: GROWTH_COLORS.sd2, name: '−2 SD' },
  { key: 'm3', z: -3, color: GROWTH_COLORS.sd3, name: '−3 SD' },
] as const;

/** Child's measurements over the WHO SD curves for the chosen indicator. */
export const GrowthChart = ({ child, indicator, ageMonths, height = 300 }: GrowthChartProps) => {
  const rows = GROWTH_LMS[indicator][child.sex];
  const tableMin = rows[0][0];
  const tableMax = rows[rows.length - 1][0];
  const points = child.measurements
    .map((m) => ({ months: ageInMonthsExact(child.birthDate, m.date), value: measurementValue(m, indicator) }))
    .filter((p): p is { months: number; value: number } => p.value !== null && p.months >= tableMin && p.months <= tableMax);

  // Show up to 5 years of curve ending a little after today's age (or the last point).
  const lastAge = Math.max(ageMonths, ...points.map((p) => p.months));
  const end = Math.min(tableMax, Math.max(tableMin + 12, Math.ceil(lastAge) + 6));
  const start = Math.max(tableMin, end - (end <= 60 ? 60 : 72));
  if (ageMonths < tableMin || start >= end) return null;

  const step = end - start > 36 ? 2 : 1;
  const curve: Record<string, number>[] = [];
  for (let m = start; m <= end; m += step) {
    const row: Record<string, number> = { months: m };
    SD_LINES.forEach((line) => {
      const value = valueAtZ(indicator, child.sex, m, line.z);
      if (value !== null) row[line.key] = roundTo1(value);
    });
    curve.push(row);
  }
  const childPoints = points.filter((p) => p.months >= start).map((p) => ({ months: roundTo1(p.months), child: roundTo1(p.value) }));
  const unit = GROWTH_UNITS[indicator];

  return (
    <ResponsiveContainer width="100%" height={height}>
      <ComposedChart margin={{ top: 8, right: 12, bottom: 0, left: -12 }}>
        <CartesianGrid {...CHART_GRID} />
        <XAxis
          type="number"
          dataKey="months"
          domain={[start, end]}
          tickFormatter={(m: number) => formatAgeShort(Math.round(m))}
          {...CHART_AXIS}
          minTickGap={24}
          allowDuplicatedCategory={false}
        />
        <YAxis domain={['auto', 'auto']} {...CHART_AXIS} width={44} />
        <Tooltip
          labelFormatter={(label) => `Age ${formatNumber(Number(label), 1)} months`}
          formatter={(value, name) => [`${formatNumber(Number(value), 1)} ${unit}`, name]}
          contentStyle={CHART_TOOLTIP.contentStyle}
        />
        {SD_LINES.map((line) => (
          <Line
            key={line.key}
            data={curve}
            dataKey={line.key}
            name={line.name}
            stroke={line.color}
            strokeWidth={line.z === 0 ? 2 : 1.25}
            strokeDasharray={Math.abs(line.z) === 3 ? '4 4' : undefined}
            dot={false}
            isAnimationActive={false}
          />
        ))}
        <Scatter data={childPoints} dataKey="child" name={child.name} fill={GROWTH_COLORS.child} isAnimationActive={false} line={{ stroke: GROWTH_COLORS.child, strokeWidth: 2 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export const GrowthChartLegend = ({ childName }: { childName: string }) => (
  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
    <LegendItem color={GROWTH_COLORS.child} label={childName} />
    <LegendItem color={GROWTH_COLORS.median} label="Median (ideal)" />
    <LegendItem color={GROWTH_COLORS.sd2} label="±2 SD (normal range)" />
    <LegendItem color={GROWTH_COLORS.sd3} label="±3 SD" dashed />
  </div>
);

const LegendItem = ({ color, label, dashed }: { color: string; label: string; dashed?: boolean }) => (
  <span className="inline-flex items-center gap-1.5">
    <span className="inline-block h-0 w-4 border-t-2" style={{ borderColor: color, borderStyle: dashed ? 'dashed' : 'solid' }} />
    {label}
  </span>
);
