import type { GrowthIndicator } from '../../data/growthStandards';
import { formatAgeShort } from '../../lib/child';
import { estimatedWeightRange, GROWTH_UNITS, hasStandard, REFERENCE_AGES_MONTHS, referenceRow } from '../../lib/growth';
import { formatNumber } from '../../lib/format';
import type { Sex } from '../../types';

interface GrowthReferenceTableProps {
  sex: Sex;
  indicator: GrowthIndicator;
  /** Highlights the row closest to this age. */
  highlightMonths?: number;
}

const fmt = (value: number | null) => (value === null ? '—' : formatNumber(value, 1));

/** WHO −2 SD / median / +2 SD per age for one indicator. */
export const GrowthReferenceTable = ({ sex, indicator, highlightMonths }: GrowthReferenceTableProps) => {
  const ages = REFERENCE_AGES_MONTHS.filter((m) => hasStandard(indicator, sex, m) || (indicator === 'weight' && m <= 216));
  const highlight =
    highlightMonths === undefined ? undefined : [...ages].reverse().find((m) => m <= highlightMonths) ?? ages[0];
  const unit = GROWTH_UNITS[indicator];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm tabular-nums">
        <thead>
          <tr className="border-b border-slate-100 text-left text-xs text-slate-500">
            <th className="py-2 pr-3 font-medium">Age</th>
            <th className="py-2 pr-3 text-right font-medium">Min (−2 SD)</th>
            <th className="py-2 pr-3 text-right font-medium">Median</th>
            <th className="py-2 text-right font-medium">Max (+2 SD)</th>
          </tr>
        </thead>
        <tbody>
          {ages.map((months) => {
            const isEstimate = indicator === 'weight' && !hasStandard('weight', sex, months);
            const estimate = isEstimate ? estimatedWeightRange(sex, months) : null;
            const row = referenceRow(indicator, sex, months);
            const isHighlighted = months === highlight;
            return (
              <tr
                key={months}
                className={`border-b border-slate-100 last:border-0 ${isHighlighted ? 'bg-brand-50 font-semibold text-brand-700 dark:text-brand-300' : 'text-slate-700'}`}
              >
                <td className="py-1.5 pr-3">{formatAgeShort(months)}</td>
                {isEstimate ? (
                  <>
                    <td className="py-1.5 pr-3 text-right">≈ {fmt(estimate?.min ?? null)}</td>
                    <td className="py-1.5 pr-3 text-right text-slate-400">—</td>
                    <td className="py-1.5 text-right">≈ {fmt(estimate?.max ?? null)}</td>
                  </>
                ) : (
                  <>
                    <td className="py-1.5 pr-3 text-right">{fmt(row.min)}</td>
                    <td className="py-1.5 pr-3 text-right">{fmt(row.median)}</td>
                    <td className="py-1.5 text-right">{fmt(row.max)}</td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-slate-500">Values in {unit}.</p>
    </div>
  );
};
