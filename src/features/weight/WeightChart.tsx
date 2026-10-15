import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addDays, formatShortDate, todayKey } from '../../lib/date';
import { formatNumber } from '../../lib/format';
import { average, roundTo1 } from '../../lib/math';
import { CHART_AXIS, CHART_GRID, CHART_TOOLTIP, COLORS } from '../../shared/theme';
import type { WeightEntry } from '../../types';

interface WeightChartProps {
  weights: WeightEntry[];
  targetKg?: number;
  /** Number of days to show; omit for all data. */
  rangeDays?: number;
  height?: number;
}

const MOVING_AVERAGE_DAYS = 7;

export const WeightChart = ({ weights, targetKg, rangeDays, height = 260 }: WeightChartProps) => {
  const sorted = [...weights].sort((a, b) => a.date.localeCompare(b.date));
  const withAverage = sorted.map((entry) => {
    const windowStart = addDays(entry.date, -(MOVING_AVERAGE_DAYS - 1));
    const window = sorted.filter((w) => w.date >= windowStart && w.date <= entry.date);
    return { date: entry.date, weight: entry.weightKg, average: roundTo1(average(window.map((w) => w.weightKg))) };
  });
  const cutoff = rangeDays ? addDays(todayKey(), -rangeDays) : '';
  const points = withAverage.filter((point) => point.date >= cutoff);

  if (points.length === 0) {
    return <p className="py-10 text-center text-sm text-slate-400">No weigh-ins in this period yet.</p>;
  }

  const values = points.flatMap((p) => [p.weight, p.average]);
  if (targetKg) values.push(targetKg);
  const min = Math.floor(Math.min(...values) - 1);
  const max = Math.ceil(Math.max(...values) + 1);

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={points} margin={{ top: 8, right: 12, bottom: 0, left: -12 }}>
        <CartesianGrid {...CHART_GRID} />
        <XAxis dataKey="date" tickFormatter={formatShortDate} {...CHART_AXIS} minTickGap={24} />
        <YAxis domain={[min, max]} {...CHART_AXIS} width={44} />
        <Tooltip
          labelFormatter={(label) => formatShortDate(String(label))}
          formatter={(value, name) => [`${formatNumber(Number(value), 1)} kg`, name === 'weight' ? 'Weight' : '7-day average']}
          contentStyle={CHART_TOOLTIP.contentStyle}
        />
        {targetKg && (
          <ReferenceLine y={targetKg} stroke={COLORS.brandHex} strokeDasharray="4 4" label={{ value: `Target ${targetKg} kg`, position: 'insideTopRight', fontSize: 11, fill: COLORS.brandDark }} />
        )}
        <Line type="monotone" dataKey="weight" stroke={COLORS.mutedDark} strokeWidth={1.5} dot={{ r: 2.5, fill: COLORS.axis, strokeWidth: 0 }} isAnimationActive={false} />
        <Line type="monotone" dataKey="average" stroke={COLORS.brandDark} strokeWidth={2.5} dot={false} isAnimationActive={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};
