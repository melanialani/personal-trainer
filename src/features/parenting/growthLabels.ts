import type { GrowthIndicator } from '../../data/growthStandards';

export const GROWTH_INDICATOR_LABELS: Record<GrowthIndicator, string> = {
  weight: 'Weight (BB/U)',
  height: 'Length / height (TB/U)',
  head: 'Head circumference (LK/U)',
  bmi: 'BMI (IMT/U)',
};

export const GROWTH_INDICATOR_OPTIONS = (Object.keys(GROWTH_INDICATOR_LABELS) as GrowthIndicator[]).map((value) => ({
  value,
  label: GROWTH_INDICATOR_LABELS[value],
}));
