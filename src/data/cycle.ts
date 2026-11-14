/*
 * Menstrual cycle reference values and messages for the Cycle page. Content in Indonesian (by request).
 * Sources:
 * - ACOG Committee Opinion 651 "Menstruation in Girls and Adolescents: Using the Menstrual Cycle as a Vital Sign"
 *   (2015, reaffirmed): adult cycles 21–35 days, adolescents 21–45 days, bleeding up to 7 days.
 * - FIGO System 1 (Munro et al., Int J Gynecol Obstet 2018): regular = shortest-to-longest cycle variation ≤ 7–9 days;
 *   normal frequency 24–38 days; duration ≤ 8 days.
 * - ACOG FAQ "Amenorrhea: Absence of Periods": no period for 3 months in a row → see a doctor.
 * Predictions are calendar averages: not a contraceptive method and not a fertile-window calculator.
 */

export const CYCLE_RULES = {
  /** Used until two periods are logged. */
  defaultCycleDays: 28,
  defaultPeriodDays: 5,
  /** Number of most recent cycles averaged for predictions. */
  cyclesForAverage: 6,
  /** Gaps outside this range are treated as missed logging and left out of averages. */
  minPlausibleCycle: 15,
  maxPlausibleCycle: 90,
  adultMinCycle: 21,
  adultMaxCycle: 35,
  /** FIGO: variation above 7–9 days = irregular; the upper bound avoids false alarms. */
  maxVariationDays: 9,
  maxPeriodDays: 7,
  /** No period for this many days → amenorrhea check. */
  missedPeriodDays: 90,
} as const;

export type CycleFlagId = 'late' | 'very-late' | 'short-cycle' | 'long-cycle' | 'irregular' | 'long-period';

export const CYCLE_FLAG_TEXT: Record<CycleFlagId, string> = {
  late: 'Haid lewat dari perkiraan. Bila aktif berhubungan seksual, lakukan test pack dulu. Penyebab lain yang sering: defisit kalori besar / berat turun cepat, stres, kurang tidur, atau variasi normal.',
  'very-late': 'Tidak haid ≥ 3 bulan. Periksa ke dokter kandungan (amenore) — setelah memastikan tidak hamil.',
  'short-cycle': 'Rata-rata siklus < 21 hari (di bawah rentang normal dewasa 21–35 hari). Bila berulang, periksa ke dokter.',
  'long-cycle': 'Rata-rata siklus > 35 hari (di atas rentang normal dewasa). Bila berulang, periksa ke dokter (mis. PCOS, tiroid, defisit energi).',
  irregular: 'Selisih siklus terpendek dan terpanjang > 9 hari = tidak teratur (FIGO). Catat terus; periksa ke dokter bila menetap.',
  'long-period': 'Haid > 7 hari. Periksa ke dokter, terutama bila darah sangat banyak (ganti pembalut tiap 1–2 jam) atau lemas.',
};

export const CYCLE_TIPS = [
  'Catat hari pertama haid (bukan flek) sebagai awal siklus.',
  'Prediksi = rata-rata maksimal 6 siklus terakhir. Makin banyak data, makin akurat.',
  'Menjelang haid tubuh menahan air: berat bisa naik 0,5–2 kg. Bandingkan berat di fase siklus yang sama.',
  'Diet terlalu ketat, IF terlalu panjang (OMAD), atau berat turun cepat bisa menggeser atau menghentikan haid.',
  'Prediksi kalender bukan alat kontrasepsi.',
];
