import { useMemo } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addDays, todayKey, WEEKDAY_SHORT, weekdayIndex } from '../../lib/date';
import { formatNumber } from '../../lib/format';
import { sumBy } from '../../lib/math';
import { CHART_AXIS, CHART_BAR, CHART_GRID, CHART_TOOLTIP, COLORS } from '../../shared/theme';
import type { FoodLogEntry } from '../../types';

interface WeeklyCaloriesChartProps {
  foodLog: FoodLogEntry[];
  targetKcal: number;
}

export const WeeklyCaloriesChart = ({ foodLog, targetKcal }: WeeklyCaloriesChartProps) => {
  const points = useMemo(() => {
    const today = todayKey();
    return Array.from({ length: 7 }, (_, i) => {
      const date = addDays(today, i - 6);
      return {
        date,
        label: date === today ? 'Today' : WEEKDAY_SHORT[weekdayIndex(date)],
        kcal: Math.round(sumBy(foodLog.filter((entry) => entry.date === date), (entry) => entry.kcal)),
      };
    });
  }, [foodLog]);

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={points} margin={{ top: 12, right: 8, bottom: 0, left: -16 }}>
        <CartesianGrid {...CHART_GRID} />
        <XAxis dataKey="label" {...CHART_AXIS} />
        <YAxis {...CHART_AXIS} />
        <Tooltip formatter={(value) => [`${formatNumber(Number(value))} kcal`, 'Eaten']} {...CHART_TOOLTIP} />
        <ReferenceLine y={targetKcal} stroke={COLORS.brandDark} strokeDasharray="4 4" />
        <Bar dataKey="kcal" {...CHART_BAR}>
          {points.map((point) => (
            <Cell key={point.date} fill={point.kcal > targetKcal * 1.05 ? COLORS.overLight : point.kcal === 0 ? COLORS.muted : COLORS.brandLight} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
