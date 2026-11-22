export interface Reflection {
  /** Short meditation on the day's readings (Indonesian). */
  renungan: string;
  /** One or two questions for personal reflection. */
  refleksi: string[];
}

/**
 * Short reflections written for this app on the readings of each lectionary day (not official Church texts).
 * Keys: lectionary keys (see `lib/liturgicalCalendar`); Sunday-cycle days are prefixed with the cycle ("A:ot2").
 * Ordinary Time weekdays share one reflection for Years I and II (it follows the Gospel).
 */
export const REFLECTIONS: Record<string, Reflection> = {};
