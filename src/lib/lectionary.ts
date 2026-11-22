import type { LectionaryEntry, ReadingKind } from '../data/lectionary';
import type { Reflection } from '../data/reflections';
import type { LiturgicalDay } from './liturgicalCalendar';

export const READING_LABELS: Record<ReadingKind, string> = {
  procession: 'Injil Perarakan Daun Palma',
  first: 'Bacaan Pertama',
  psalm: 'Mazmur Tanggapan',
  second: 'Bacaan Kedua',
  gospel: 'Bacaan Injil',
};

/** Easter Vigil: the OT readings are numbered ("Bacaan I" … "Bacaan VII"); the epistle follows them. */
const VIGIL_NUMBERS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

/** Labels for the readings of one Mass, numbering repeated first readings / psalms (Easter Vigil, Pentecost vigil). */
export const readingLabels = (kinds: ReadingKind[]): string[] => {
  const firstCount = kinds.filter((kind) => kind === 'first').length;
  if (firstCount <= 1) return kinds.map((kind) => READING_LABELS[kind]);
  let firstIndex = 0;
  return kinds.map((kind) => {
    if (kind === 'first') return `Bacaan ${VIGIL_NUMBERS[firstIndex++] ?? firstIndex}`;
    if (kind === 'second') return 'Epistola';
    return READING_LABELS[kind];
  });
};

type LectionaryModule = typeof import('../data/lectionary');
type ReflectionsModule = typeof import('../data/reflections');

let lectionaryModule: Promise<LectionaryModule> | null = null;
let reflectionsModule: Promise<ReflectionsModule> | null = null;

/** The lectionary and reflections are large, so they load on demand as separate chunks. */
const loadLectionary = () => (lectionaryModule ??= import('../data/lectionary'));
const loadReflections = () => (reflectionsModule ??= import('../data/reflections'));

/** Sunday-cycle entries are stored per cycle; weekday entries once; Ordinary Time weekdays per Year I / II. */
export const findLectionaryEntry = (module: LectionaryModule, day: LiturgicalDay): LectionaryEntry | null =>
  module.LECTIONARY_CYCLE[day.sundayCycle][day.key] ??
  module.LECTIONARY_WEEKDAY[day.key] ??
  module.LECTIONARY_ORDINARY[day.weekdayCycle][day.key] ??
  null;

/** Key of the reflection for a day: cycle-specific days are prefixed with the Sunday cycle ("A:ot2"). */
export const reflectionKey = (module: LectionaryModule, day: LiturgicalDay): string =>
  module.LECTIONARY_CYCLE[day.sundayCycle][day.key] ? `${day.sundayCycle}:${day.key}` : day.key;

export interface DayReadings {
  entry: LectionaryEntry | null;
  reflection: Reflection | null;
}

export const loadDayReadings = async (day: LiturgicalDay): Promise<DayReadings> => {
  const [lectionary, reflections] = await Promise.all([loadLectionary(), loadReflections()]);
  return {
    entry: findLectionaryEntry(lectionary, day),
    reflection: reflections.REFLECTIONS[reflectionKey(lectionary, day)] ?? null,
  };
};
