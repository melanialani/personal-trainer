import { addDays, diffDays, parseDateKey, pad2, weekdayIndex } from './date';

/**
 * Roman (Ordinary Form) liturgical calendar as celebrated in Indonesia: Epiphany on the Sunday between 2 and 8
 * January, Ascension on Thursday, Corpus Christi on Sunday. Computes the celebration of a date and the key of its
 * readings in `data/lectionary` (General Norms for the Liturgical Year and the Calendar, table of precedence).
 * Optional memorials are not tracked: on those days the weekday readings are shown.
 */

export type Season = 'advent' | 'christmas' | 'ordinary' | 'lent' | 'triduum' | 'easter';
export type LiturgicalColor = 'green' | 'violet' | 'rose' | 'white' | 'red';
export type CelebrationRank = 'solemnity' | 'feast' | 'memorial' | 'sunday' | 'weekday';
export type SundayCycle = 'A' | 'B' | 'C';
export type WeekdayCycle = 'I' | 'II';

export interface LiturgicalDay {
  date: string;
  season: Season;
  /** Week of the season (Advent 1–4, Lent 0–5 with 0 = Ash Wednesday to Saturday, Easter 1–7, Ordinary 1–34). */
  week: number;
  /** Lectionary key (see `data/lectionary`). */
  key: string;
  /** Indonesian name of the celebration. */
  name: string;
  rank: CelebrationRank;
  color: LiturgicalColor;
  sundayCycle: SundayCycle;
  weekdayCycle: WeekdayCycle;
}

export const SEASON_LABELS: Record<Season, string> = {
  advent: 'Masa Adven',
  christmas: 'Masa Natal',
  ordinary: 'Masa Biasa',
  lent: 'Masa Prapaskah',
  triduum: 'Trihari Suci',
  easter: 'Masa Paskah',
};

export const COLOR_LABELS: Record<LiturgicalColor, string> = {
  green: 'Hijau',
  violet: 'Ungu',
  rose: 'Merah muda',
  white: 'Putih',
  red: 'Merah',
};

export const RANK_LABELS: Record<CelebrationRank, string> = {
  solemnity: 'Hari Raya',
  feast: 'Pesta',
  memorial: 'Peringatan Wajib',
  sunday: 'Hari Minggu',
  weekday: 'Hari Biasa',
};

const DAY_NAMES = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

/** 1 → "I", 34 → "XXXIV". */
export const toRoman = (value: number): string => {
  const tens = ['', 'X', 'XX', 'XXX'];
  return `${tens[Math.floor(value / 10)]}${ROMAN[value % 10]}`;
};

const MONTHS_ID = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

/** Easter Sunday (Gregorian computus, anonymous algorithm). */
export const easterDate = (year: number): string => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return `${year}-${pad2(month)}-${pad2(day)}`;
};

const ymd = (year: number, month: number, day: number) => `${year}-${pad2(month)}-${pad2(day)}`;

/** The Sunday on or after a date. */
const sundayOnOrAfter = (key: string) => addDays(key, (6 - weekdayIndex(key) + 7) % 7);

/** First Sunday of Advent: the Sunday between 27 November and 3 December. */
export const firstSundayOfAdvent = (year: number): string => sundayOnOrAfter(ymd(year, 11, 27));

/** Epiphany in Indonesia: the Sunday between 2 and 8 January. */
export const epiphanyDate = (year: number): string => sundayOnOrAfter(ymd(year, 1, 2));

/** Baptism of the Lord: the Sunday after Epiphany, or Monday when Epiphany falls on 7 or 8 January. */
export const baptismDate = (year: number): string => {
  const epiphany = epiphanyDate(year);
  return Number(epiphany.slice(8)) >= 7 ? addDays(epiphany, 1) : addDays(epiphany, 7);
};

/** Holy Family: the Sunday within the Christmas octave, or 30 December when Christmas is a Sunday. */
export const holyFamilyDate = (year: number): string => {
  const christmas = ymd(year, 12, 25);
  return weekdayIndex(christmas) === 6 ? ymd(year, 12, 30) : addDays(christmas, 7 - weekdayIndex(christmas) - 1);
};

/** Civil year in which the liturgical year containing the date ends (Advent 2025 → 2026). */
export const liturgicalYear = (date: string): number => {
  const year = Number(date.slice(0, 4));
  return date >= firstSundayOfAdvent(year) ? year + 1 : year;
};

export const sundayCycleOf = (date: string): SundayCycle => (['C', 'A', 'B'] as const)[liturgicalYear(date) % 3];
export const weekdayCycleOf = (date: string): WeekdayCycle => (liturgicalYear(date) % 2 === 1 ? 'I' : 'II');

interface Celebration {
  key: string;
  name: string;
  rank: CelebrationRank;
  color: LiturgicalColor;
  /** Precedence number from the General Norms table (lower wins). */
  precedence: number;
}

interface Temporal extends Celebration {
  season: Season;
  week: number;
}

/** Fixed-date feasts and solemnities of the General Roman Calendar. */
const SANCTORAL: Record<string, Omit<Celebration, 'key'>> = {
  '01-25': { name: 'Pesta Bertobatnya St. Paulus, Rasul', rank: 'feast', color: 'white', precedence: 7 },
  '02-02': { name: 'Pesta Yesus Dipersembahkan di Kenisah', rank: 'feast', color: 'white', precedence: 5 },
  '02-22': { name: 'Pesta Takhta St. Petrus, Rasul', rank: 'feast', color: 'white', precedence: 7 },
  '03-19': { name: 'Hari Raya St. Yusuf, Suami SP Maria', rank: 'solemnity', color: 'white', precedence: 3 },
  '03-25': { name: 'Hari Raya Kabar Sukacita', rank: 'solemnity', color: 'white', precedence: 3 },
  '04-25': { name: 'Pesta St. Markus, Pengarang Injil', rank: 'feast', color: 'red', precedence: 7 },
  '05-03': { name: 'Pesta St. Filipus dan St. Yakobus, Rasul', rank: 'feast', color: 'red', precedence: 7 },
  '05-14': { name: 'Pesta St. Matias, Rasul', rank: 'feast', color: 'red', precedence: 7 },
  '05-31': { name: 'Pesta SP Maria Mengunjungi Elisabet', rank: 'feast', color: 'white', precedence: 7 },
  '06-24': { name: 'Hari Raya Kelahiran St. Yohanes Pembaptis', rank: 'solemnity', color: 'white', precedence: 3 },
  '06-29': { name: 'Hari Raya St. Petrus dan St. Paulus, Rasul', rank: 'solemnity', color: 'red', precedence: 3 },
  '07-03': { name: 'Pesta St. Tomas, Rasul', rank: 'feast', color: 'red', precedence: 7 },
  '07-22': { name: 'Pesta St. Maria Magdalena', rank: 'feast', color: 'white', precedence: 7 },
  '07-25': { name: 'Pesta St. Yakobus, Rasul', rank: 'feast', color: 'red', precedence: 7 },
  '08-06': { name: 'Pesta Yesus Menampakkan Kemuliaan-Nya', rank: 'feast', color: 'white', precedence: 5 },
  '08-10': { name: 'Pesta St. Laurensius, Diakon dan Martir', rank: 'feast', color: 'red', precedence: 7 },
  '08-15': { name: 'Hari Raya SP Maria Diangkat ke Surga', rank: 'solemnity', color: 'white', precedence: 3 },
  '08-24': { name: 'Pesta St. Bartolomeus, Rasul', rank: 'feast', color: 'red', precedence: 7 },
  '09-08': { name: 'Pesta Kelahiran SP Maria', rank: 'feast', color: 'white', precedence: 7 },
  '09-14': { name: 'Pesta Salib Suci', rank: 'feast', color: 'red', precedence: 5 },
  '09-21': { name: 'Pesta St. Matius, Rasul dan Pengarang Injil', rank: 'feast', color: 'red', precedence: 7 },
  '09-29': { name: 'Pesta St. Mikael, St. Gabriel, dan St. Rafael, Malaikat Agung', rank: 'feast', color: 'white', precedence: 7 },
  '10-18': { name: 'Pesta St. Lukas, Pengarang Injil', rank: 'feast', color: 'red', precedence: 7 },
  '10-28': { name: 'Pesta St. Simon dan St. Yudas, Rasul', rank: 'feast', color: 'red', precedence: 7 },
  '11-01': { name: 'Hari Raya Semua Orang Kudus', rank: 'solemnity', color: 'white', precedence: 3 },
  '11-02': { name: 'Peringatan Arwah Semua Orang Beriman', rank: 'solemnity', color: 'violet', precedence: 3 },
  '11-09': { name: 'Pesta Pemberkatan Gereja Basilik Lateran', rank: 'feast', color: 'white', precedence: 5 },
  '11-30': { name: 'Pesta St. Andreas, Rasul', rank: 'feast', color: 'red', precedence: 7 },
  '12-08': { name: 'Hari Raya SP Maria Dikandung Tanpa Noda', rank: 'solemnity', color: 'white', precedence: 3 },
  '12-26': { name: 'Pesta St. Stefanus, Martir Pertama', rank: 'feast', color: 'red', precedence: 7 },
  '12-27': { name: 'Pesta St. Yohanes, Rasul dan Pengarang Injil', rank: 'feast', color: 'white', precedence: 7 },
  '12-28': { name: 'Pesta Kanak-kanak Suci, Martir', rank: 'feast', color: 'red', precedence: 7 },
};

const sanctoralKey = (monthDay: string) => `san-${monthDay.replace('-', '')}`;

/** Season of the date in the temporal cycle, with its own celebration (before saints are considered). */
const temporalDay = (date: string): Temporal => {
  const year = Number(date.slice(0, 4));
  const day = weekdayIndex(date);
  const dayName = DAY_NAMES[day];
  const easter = easterDate(year);
  const ashWednesday = addDays(easter, -46);
  const palmSunday = addDays(easter, -7);
  const pentecost = addDays(easter, 49);
  const advent = firstSundayOfAdvent(year);
  const christmas = ymd(year, 12, 25);
  const epiphany = epiphanyDate(year);
  const baptism = baptismDate(year);
  const make = (season: Season, week: number, key: string, name: string, rank: CelebrationRank, color: LiturgicalColor, precedence: number): Temporal => ({
    season,
    week,
    key,
    name,
    rank,
    color,
    precedence,
  });

  // Christmas season, early January part.
  if (date === ymd(year, 1, 1)) return make('christmas', 0, 'marymother', 'Hari Raya SP Maria Bunda Allah', 'solemnity', 'white', 3);
  if (date < epiphany) {
    const dom = Number(date.slice(8));
    return make('christmas', 0, `chr-jan${dom}`, `Hari Biasa Masa Natal (${dom} Januari)`, 'weekday', 'white', 13);
  }
  if (date === epiphany) return make('christmas', 0, 'epiphany', 'Hari Raya Penampakan Tuhan', 'solemnity', 'white', 2);
  if (date < baptism) return make('christmas', 0, `epi-${day + 1}`, `${dayName} sesudah Penampakan Tuhan`, 'weekday', 'white', 13);
  if (date === baptism) return make('christmas', 1, 'baptism', 'Pesta Pembaptisan Tuhan', 'feast', 'white', 5);

  // Ordinary Time before Lent.
  if (date < ashWednesday) {
    // Week 1 opens on the Baptism Sunday (or on Epiphany when the Baptism moves to Monday).
    const opening = weekdayIndex(baptism) === 6 ? baptism : epiphany;
    const ordinaryWeek = Math.floor(diffDays(opening, date) / 7) + 1;
    return day === 6
      ? make('ordinary', ordinaryWeek, `ot-${ordinaryWeek}`, `Hari Minggu Biasa ${toRoman(ordinaryWeek)}`, 'sunday', 'green', 6)
      : make('ordinary', ordinaryWeek, `ord-${ordinaryWeek}-${day + 1}`, `${dayName} Pekan Biasa ${toRoman(ordinaryWeek)}`, 'weekday', 'green', 13);
  }

  // Lent and Holy Week.
  if (date < palmSunday) {
    const week = date < addDays(ashWednesday, 4) ? 0 : Math.floor(diffDays(addDays(ashWednesday, 4), date) / 7) + 1;
    if (date === ashWednesday) return make('lent', 0, 'lent-0-3', 'Hari Rabu Abu', 'weekday', 'violet', 2);
    if (week === 0) return make('lent', 0, `lent-0-${day + 1}`, `${dayName} sesudah Rabu Abu`, 'weekday', 'violet', 9);
    if (day === 6) return make('lent', week, `lent${week}`, `Hari Minggu Prapaskah ${toRoman(week)}`, 'sunday', week === 4 ? 'rose' : 'violet', 2);
    return make('lent', week, `lent-${week}-${day + 1}`, `${dayName} Pekan Prapaskah ${toRoman(week)}`, 'weekday', 'violet', 9);
  }
  if (date === palmSunday) return make('lent', 6, 'palm', 'Hari Minggu Palma Mengenangkan Sengsara Tuhan', 'sunday', 'red', 2);
  const holyThursday = addDays(easter, -3);
  if (date < holyThursday) return make('lent', 6, `holy-${day + 1}`, `${dayName} dalam Pekan Suci`, 'weekday', 'violet', 2);
  if (date === holyThursday) return make('triduum', 6, 'holythu', 'Kamis Putih', 'solemnity', 'white', 1);
  if (date === addDays(easter, -2)) return make('triduum', 6, 'goodfri', 'Jumat Agung', 'solemnity', 'red', 1);
  if (date === addDays(easter, -1)) return make('triduum', 6, 'eastervigil', 'Sabtu Suci – Malam Paskah', 'solemnity', 'white', 1);

  // Easter season.
  if (date === easter) return make('triduum', 1, 'easter', 'Hari Raya Paskah Kebangkitan Tuhan', 'solemnity', 'white', 1);
  if (date <= pentecost) {
    const week = Math.floor(diffDays(easter, date) / 7) + 1;
    if (date === pentecost) return make('easter', 8, 'pentecost', 'Hari Raya Pentakosta', 'solemnity', 'red', 2);
    if (date === addDays(easter, 39)) return make('easter', 6, 'ascension', 'Hari Raya Kenaikan Tuhan', 'solemnity', 'white', 2);
    if (week === 1) return make('easter', 1, `easter-1-${day + 1}`, `${dayName} dalam Oktaf Paskah`, 'solemnity', 'white', 2);
    if (day === 6) return make('easter', week, `easter${week}`, `Hari Minggu Paskah ${toRoman(week)}`, 'sunday', 'white', 2);
    return make('easter', week, `easter-${week}-${day + 1}`, `${dayName} Pekan Paskah ${toRoman(week)}`, 'weekday', 'white', 13);
  }

  // Ordinary Time after Pentecost, until Advent.
  if (date < advent) {
    const week = 34 - Math.floor((diffDays(date, advent) - 1) / 7);
    if (date === addDays(pentecost, 7)) return make('ordinary', week, 'trinity', 'Hari Raya Tritunggal Mahakudus', 'solemnity', 'white', 3);
    if (date === addDays(pentecost, 14)) return make('ordinary', week, 'corpus', 'Hari Raya Tubuh dan Darah Kristus', 'solemnity', 'white', 3);
    if (date === addDays(pentecost, 19)) return make('ordinary', week, 'sacredheart', 'Hari Raya Hati Yesus yang Mahakudus', 'solemnity', 'white', 3);
    if (date === addDays(advent, -7)) return make('ordinary', 34, 'christking', 'Hari Raya Tuhan Kita Yesus Kristus Raja Semesta Alam', 'solemnity', 'white', 3);
    if (date === addDays(pentecost, 1)) return make('ordinary', week, 'marymotherchurch', 'Peringatan Wajib SP Maria Bunda Gereja', 'memorial', 'white', 10);
    return day === 6
      ? make('ordinary', week, `ot-${week}`, `Hari Minggu Biasa ${toRoman(week)}`, 'sunday', 'green', 6)
      : make('ordinary', week, `ord-${week}-${day + 1}`, `${dayName} Pekan Biasa ${toRoman(week)}`, 'weekday', 'green', 13);
  }

  // Advent.
  if (date < christmas) {
    const week = Math.floor(diffDays(advent, date) / 7) + 1;
    if (day === 6) return make('advent', week, `adv${week}`, `Hari Minggu Adven ${toRoman(week)}`, 'sunday', week === 3 ? 'rose' : 'violet', 2);
    const dom = Number(date.slice(8));
    if (dom >= 17) return make('advent', week, `adv-dec${dom}`, `Hari Biasa Adven (${dom} Desember)`, 'weekday', 'violet', 9);
    return make('advent', week, `adv-${week}-${day + 1}`, `${dayName} Pekan Adven ${toRoman(week)}`, 'weekday', 'violet', 13);
  }

  // Christmas octave (Dec 25–31).
  if (date === christmas) return make('christmas', 0, 'christmas', 'Hari Raya Natal', 'solemnity', 'white', 2);
  if (date === holyFamilyDate(year)) return make('christmas', 0, 'holyfamily', 'Pesta Keluarga Kudus: Yesus, Maria, Yusuf', 'feast', 'white', 5);
  const dom = Number(date.slice(8));
  const octaveDay = ['Kedua', 'Ketiga', 'Keempat', 'Kelima', 'Keenam', 'Ketujuh'][dom - 26];
  return make('christmas', 0, `chr-dec${dom}`, `Hari ${octaveDay} dalam Oktaf Natal`, 'weekday', 'white', 9);
};

/** Date a fixed solemnity is actually celebrated in a given year (transferred out of privileged days). */
const transferredSolemnity = (monthDay: string, year: number): string => {
  const date = `${year}-${monthDay}`;
  const easter = easterDate(year);
  const palmSunday = addDays(easter, -7);
  const divineMercy = addDays(easter, 7);
  if (monthDay === '03-19' && date >= palmSunday && date <= divineMercy) return addDays(palmSunday, -1);
  if (monthDay === '03-25' && date >= palmSunday && date <= divineMercy) return addDays(divineMercy, 1);
  const temporal = temporalDay(date);
  // Sundays of Advent, Lent and Easter outrank solemnities: move to the Monday.
  if (temporal.precedence <= 2 && temporal.rank === 'sunday') return addDays(date, 1);
  // A solemnity of the Lord on the same day (e.g. Sacred Heart on 24 June): anticipate by a day.
  if (temporal.precedence <= 3 && temporal.rank === 'solemnity') return addDays(date, -1);
  return date;
};

/** The fixed-date feast or solemnity celebrated on the date, if any (after transfers). */
const sanctoralDay = (date: string): Celebration | null => {
  const year = Number(date.slice(0, 4));
  for (const [monthDay, celebration] of Object.entries(SANCTORAL)) {
    if (celebration.rank !== 'solemnity') continue;
    if (transferredSolemnity(monthDay, year) === date) return { key: sanctoralKey(monthDay), ...celebration };
  }
  const monthDay = date.slice(5);
  const celebration = SANCTORAL[monthDay];
  if (!celebration || celebration.rank === 'solemnity') return null;
  return { key: sanctoralKey(monthDay), ...celebration };
};

/** The celebration and lectionary key of a date (YYYY-MM-DD). */
export const getLiturgicalDay = (date: string): LiturgicalDay => {
  const temporal = temporalDay(date);
  const saint = sanctoralDay(date);
  // Lower precedence number wins (feasts of the Lord, 5, replace Ordinary Sundays, 6; other feasts, 7, do not).
  const saintWins = saint !== null && saint.precedence < temporal.precedence;
  const chosen = saintWins ? saint : temporal;
  return {
    date,
    season: temporal.season,
    week: temporal.week,
    key: chosen.key,
    name: chosen.name,
    rank: chosen.rank,
    color: chosen.color,
    sundayCycle: sundayCycleOf(date),
    weekdayCycle: weekdayCycleOf(date),
  };
};

/** "Minggu, 22 November 2026" */
export const formatIndonesianDate = (date: string): string => {
  const parsed = parseDateKey(date);
  return `${DAY_NAMES[weekdayIndex(date)]}, ${parsed.getDate()} ${MONTHS_ID[parsed.getMonth()]} ${parsed.getFullYear()}`;
};
