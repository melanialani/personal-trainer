const pad = (n: number) => String(n).padStart(2, '0');

/** Local date key in YYYY-MM-DD format. */
export const toDateKey = (date: Date): string =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

export const todayKey = (): string => toDateKey(new Date());

export const parseDateKey = (key: string): Date => {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
};

export const addDays = (key: string, days: number): string => {
  const date = parseDateKey(key);
  date.setDate(date.getDate() + days);
  return toDateKey(date);
};

export const diffDays = (fromKey: string, toKey: string): number =>
  Math.round((parseDateKey(toKey).getTime() - parseDateKey(fromKey).getTime()) / 86_400_000);

/** 0 = Monday … 6 = Sunday */
export const weekdayIndex = (key: string): number => (parseDateKey(key).getDay() + 6) % 7;

export const startOfWeek = (key: string): string => addDays(key, -weekdayIndex(key));

/** Newest first; returns a new array. */
export const sortByDateDesc = <T extends { date: string }>(items: T[]): T[] =>
  [...items].sort((a, b) => b.date.localeCompare(a.date));

export const WEEKDAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const WEEKDAY_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const formatDate = (key: string, options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }): string =>
  parseDateKey(key).toLocaleDateString('en-GB', options);

export const formatShortDate = (key: string): string => formatDate(key, { day: 'numeric', month: 'short' });

export const formatLongDate = (key: string): string =>
  formatDate(key, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

export const ageFromBirthDate = (birthDate: string, onDate = todayKey()): number => {
  const birth = parseDateKey(birthDate);
  const ref = parseDateKey(onDate);
  let age = ref.getFullYear() - birth.getFullYear();
  const hasHadBirthday =
    ref.getMonth() > birth.getMonth() || (ref.getMonth() === birth.getMonth() && ref.getDate() >= birth.getDate());
  if (!hasHadBirthday) age -= 1;
  return age;
};

/** Adds whole calendar months; the day is clamped to the month's length (31 Jan + 1 month = 28/29 Feb). */
export const addMonths = (key: string, months: number): string => {
  const date = parseDateKey(key);
  const day = date.getDate();
  date.setDate(1);
  date.setMonth(date.getMonth() + months);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  date.setDate(Math.min(day, lastDay));
  return toDateKey(date);
};

/** Completed calendar months between two dates (0 on the day of birth, 1 from the same day next month). */
export const completedMonths = (fromKey: string, toKey: string): number => {
  const from = parseDateKey(fromKey);
  const to = parseDateKey(toKey);
  let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  if (to.getDate() < from.getDate() && addMonths(fromKey, months) > toKey) months -= 1;
  return months;
};
