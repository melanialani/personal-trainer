import { GROWTH_LMS, type GrowthIndicator, type LmsRow } from '../data/growthStandards';
import type { BadgeTone } from '../shared/components/Badge';
import type { ChildMeasurement, Sex } from '../types';
import { diffDays } from './date';

/** WHO uses 30.4375 days per month (365.25 / 12). */
export const DAYS_PER_MONTH = 30.4375;

/** Age in months as a decimal (e.g. 7.4), for interpolating between monthly rows. */
export const ageInMonthsExact = (birthDate: string, onDate: string): number => diffDays(birthDate, onDate) / DAYS_PER_MONTH;

export const GROWTH_UNITS: Record<GrowthIndicator, string> = { weight: 'kg', height: 'cm', head: 'cm', bmi: 'kg/m²' };

/** Weight and BMI are skewed: WHO restricts the LMS curve beyond ±3 SD (linear extrapolation). */
const isRestricted = (indicator: GrowthIndicator) => indicator === 'weight' || indicator === 'bmi';

const rangeOf = (indicator: GrowthIndicator, sex: Sex) => {
  const rows = GROWTH_LMS[indicator][sex];
  return { min: rows[0][0], max: rows[rows.length - 1][0] };
};

export const hasStandard = (indicator: GrowthIndicator, sex: Sex, months: number): boolean => {
  const { min, max } = rangeOf(indicator, sex);
  return months >= min && months <= max;
};

/** L, M, S at a (fractional) age in months, linearly interpolated; null outside the table. */
export const lmsAt = (indicator: GrowthIndicator, sex: Sex, months: number): LmsRow | null => {
  if (!hasStandard(indicator, sex, months)) return null;
  const rows = GROWTH_LMS[indicator][sex];
  const lowerIndex = rows.findIndex((row, index) => row[0] <= months && (rows[index + 1]?.[0] ?? Infinity) > months);
  const lower = rows[lowerIndex];
  const upper = rows[lowerIndex + 1];
  if (!upper || lower[0] === months) return lower;
  const t = (months - lower[0]) / (upper[0] - lower[0]);
  const mix = (a: number, b: number) => a + (b - a) * t;
  return [months, mix(lower[1], upper[1]), mix(lower[2], upper[2]), mix(lower[3], upper[3])];
};

const lmsValue = ([, l, m, s]: LmsRow, z: number): number => (l === 0 ? m * Math.exp(s * z) : m * (1 + l * s * z) ** (1 / l));

/** Measurement at a given z-score (SD line), e.g. z = -2 → lower limit of normal. */
export const valueAtZ = (indicator: GrowthIndicator, sex: Sex, months: number, z: number): number | null => {
  const lms = lmsAt(indicator, sex, months);
  if (!lms) return null;
  if (!isRestricted(indicator) || Math.abs(z) <= 3) return lmsValue(lms, z);
  const sign = Math.sign(z);
  const sd3 = lmsValue(lms, 3 * sign);
  const sd23 = sd3 - lmsValue(lms, 2 * sign);
  return sd3 + (z - 3 * sign) * sd23;
};

/** z-score of a measurement (WHO method, including the ±3 SD restriction for weight and BMI). */
export const zScore = (indicator: GrowthIndicator, sex: Sex, months: number, value: number): number | null => {
  const lms = lmsAt(indicator, sex, months);
  if (!lms || value <= 0) return null;
  const [, l, m, s] = lms;
  const z = l === 0 ? Math.log(value / m) / s : ((value / m) ** l - 1) / (l * s);
  if (!isRestricted(indicator) || Math.abs(z) <= 3) return z;
  const sign = Math.sign(z);
  const sd3 = lmsValue(lms, 3 * sign);
  const sd23 = Math.abs(sd3 - lmsValue(lms, 2 * sign));
  return 3 * sign + (value - sd3) / sd23;
};

export const bmiOf = (weightKg: number, heightCm: number): number => weightKg / (heightCm / 100) ** 2;

export interface GrowthStatus {
  label: string;
  tone: BadgeTone;
}

/**
 * Nutrition-status categories from Permenkes RI No. 2/2020 (Standar Antropometri Anak).
 * Labels are Indonesian, as printed in the regulation and the Buku KIA.
 */
export const classifyZ = (indicator: GrowthIndicator, months: number, z: number): GrowthStatus => {
  switch (indicator) {
    case 'weight':
      if (z < -3) return { label: 'Berat badan sangat kurang', tone: 'danger' };
      if (z < -2) return { label: 'Berat badan kurang', tone: 'warning' };
      if (z > 1) return { label: 'Risiko berat badan lebih (cek IMT)', tone: 'warning' };
      return { label: 'Berat badan normal', tone: 'success' };
    case 'height':
      if (z < -3) return { label: 'Sangat pendek', tone: 'danger' };
      if (z < -2) return { label: 'Pendek (risiko stunting)', tone: 'warning' };
      if (z > 3) return { label: 'Tinggi', tone: 'info' };
      return { label: 'Tinggi normal', tone: 'success' };
    case 'head':
      if (z < -2) return { label: 'Lingkar kepala di bawah normal', tone: 'warning' };
      if (z > 2) return { label: 'Lingkar kepala di atas normal', tone: 'warning' };
      return { label: 'Lingkar kepala normal', tone: 'success' };
    case 'bmi':
      if (z < -3) return { label: 'Gizi buruk', tone: 'danger' };
      if (z < -2) return { label: 'Gizi kurang', tone: 'warning' };
      if (months <= 60) {
        if (z > 3) return { label: 'Obesitas', tone: 'danger' };
        if (z > 2) return { label: 'Gizi lebih', tone: 'warning' };
        if (z > 1) return { label: 'Berisiko gizi lebih', tone: 'warning' };
      } else {
        if (z > 2) return { label: 'Obesitas', tone: 'danger' };
        if (z > 1) return { label: 'Gizi lebih', tone: 'warning' };
      }
      return { label: 'Gizi baik', tone: 'success' };
    default:
      return { label: '', tone: 'neutral' };
  }
};

export interface ReferenceRow {
  months: number;
  /** −2 SD: below this is "kurang" / "pendek". */
  min: number | null;
  median: number | null;
  /** +2 SD. For weight, above +1 SD already counts as "risiko berat badan lebih" (see `classifyZ`). */
  max: number | null;
}

export const referenceRow = (indicator: GrowthIndicator, sex: Sex, months: number): ReferenceRow => ({
  months,
  min: valueAtZ(indicator, sex, months, -2),
  median: valueAtZ(indicator, sex, months, 0),
  max: valueAtZ(indicator, sex, months, 2),
});

/** Ages listed in the reference table: monthly to 1 year, quarterly to 2, half-yearly to 5, then yearly. */
export const REFERENCE_AGES_MONTHS: number[] = [
  ...Array.from({ length: 13 }, (_, i) => i),
  15, 18, 21, 24, 30, 36, 42, 48, 54, 60,
  ...Array.from({ length: 13 }, (_, i) => 72 + i * 12),
];

/**
 * Rough weight range for a child of median height when WHO has no weight-for-age (over 10 years):
 * BMI −2 SD … +1 SD × (median height)². Only an estimate — real judgement uses the child's own BMI.
 */
export const estimatedWeightRange = (sex: Sex, months: number): { min: number; max: number } | null => {
  const height = valueAtZ('height', sex, months, 0);
  const low = valueAtZ('bmi', sex, months, -2);
  const high = valueAtZ('bmi', sex, months, 1);
  if (!height || !low || !high) return null;
  const m2 = (height / 100) ** 2;
  return { min: low * m2, max: high * m2 };
};

/** Value of one indicator in a measurement; BMI needs both weight and height. */
export const measurementValue = (m: ChildMeasurement, indicator: GrowthIndicator): number | null => {
  if (indicator === 'weight') return m.weightKg ?? null;
  if (indicator === 'height') return m.heightCm ?? null;
  if (indicator === 'head') return m.headCm ?? null;
  return m.weightKg && m.heightCm ? bmiOf(m.weightKg, m.heightCm) : null;
};

export interface GrowthAssessment {
  indicator: GrowthIndicator;
  value: number;
  months: number;
  z: number;
  status: GrowthStatus;
  range: ReferenceRow;
}

/** z-score + Permenkes category for one measurement; null when the value is missing or outside the WHO tables. */
export const assessMeasurement = (
  m: ChildMeasurement,
  indicator: GrowthIndicator,
  sex: Sex,
  birthDate: string,
): GrowthAssessment | null => {
  const value = measurementValue(m, indicator);
  if (value === null) return null;
  const months = ageInMonthsExact(birthDate, m.date);
  const z = zScore(indicator, sex, months, value);
  if (z === null) return null;
  return { indicator, value, months, z, status: classifyZ(indicator, months, z), range: referenceRow(indicator, sex, months) };
};
