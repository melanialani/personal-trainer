import { BookOpenText, CalendarDays, ChevronRight, ExternalLink, Lightbulb, RotateCw, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BIBLE_VERSIONS } from '../../data/bibleBooks';
import type { LectionaryReading } from '../../data/lectionary';
import { getBook, tbChapterUrl, toRefParam } from '../../lib/bible';
import { addDays, parseDateKey, todayKey } from '../../lib/date';
import { loadDayReadings, readingLabels, type DayReadings } from '../../lib/lectionary';
import {
  COLOR_LABELS,
  formatIndonesianDate,
  getLiturgicalDay,
  RANK_LABELS,
  SEASON_LABELS,
  type LiturgicalColor,
  type LiturgicalDay,
} from '../../lib/liturgicalCalendar';
import { displayColor, SAINT_STATUS_LABELS, saintsForDay } from '../../lib/saints';
import { formatScriptureRef, parseRef, toBundledNumbering } from '../../lib/scripture';
import type { Saint } from '../../data/saints';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';
import { DateNav } from '../../shared/components/DateNav';
import { Segmented } from '../../shared/components/FormFields';
import { PageHeader } from '../../shared/components/PageHeader';
import { Tabs } from '../../shared/components/Tabs';
import type { Tone } from '../../shared/tones';
import { useAppData } from '../../store/AppDataContext';
import { PassageText } from '../bible/PassageText';
import { SaintModal } from '../saints/SaintModal';
import { SaintsList } from '../saints/SaintsList';
import { useSaints } from '../saints/useSaints';

type ReadingsTab = 'day' | 'saints';
const TABS: { value: ReadingsTab; label: string }[] = [
  { value: 'day', label: 'Readings' },
  { value: 'saints', label: 'Saints' },
];

/** Swatch per liturgical color (white gets a ring so it shows on light cards). */
const COLOR_SWATCH: Record<LiturgicalColor, string> = {
  green: 'bg-emerald-600',
  violet: 'bg-violet-700',
  rose: 'bg-pink-300',
  white: 'bg-white ring-1 ring-slate-300',
  red: 'bg-red-600',
};

const READING_TONES: Tone[] = ['violet', 'sky', 'teal', 'amber', 'rose', 'indigo', 'emerald', 'orange', 'pink'];

const isValidDate = (value: string | null): value is string => !!value && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(parseDateKey(value).getTime());

type LoadState = { status: 'loading' } | { status: 'error' } | { status: 'ready'; readings: DayReadings };

const useDayReadings = (day: LiturgicalDay): [LoadState, () => void] => {
  const [retryToken, setRetryToken] = useState(0);
  const key = `${day.date}|${retryToken}`;
  const [state, setState] = useState<{ key: string; value: LoadState }>({ key: '', value: { status: 'loading' } });
  useEffect(() => {
    let isCurrent = true;
    loadDayReadings(day)
      .then((readings) => isCurrent && setState({ key, value: { status: 'ready', readings } }))
      .catch(() => isCurrent && setState({ key, value: { status: 'error' } }));
    return () => {
      isCurrent = false;
    };
  }, [day, key]);
  return [state.key === key ? state.value : { status: 'loading' }, () => setRetryToken((token) => token + 1)];
};

/** `#/bible?ref=…` link for the first verse of a lectionary reference (converted to the bundled numbering). */
const bibleLink = (ref: string): string | null => {
  const parsed = parseRef(ref);
  if (!parsed || parsed.isGreekAddition) return null;
  const first = parsed.ranges[0];
  const target = toBundledNumbering(parsed.bookId, first.chapter, first.verse);
  return `/bible?ref=${toRefParam({ bookId: parsed.bookId, chapter: target.chapter, verse: target.verse })}`;
};

interface ReadingCardProps {
  reading: LectionaryReading;
  label: string;
  tone: Tone;
  versionId: string;
}

const ReadingCard = ({ reading, label, tone, versionId }: ReadingCardProps) => {
  const [choice, setChoice] = useState(0);
  const ref = reading.refs[Math.min(choice, reading.refs.length - 1)];
  const parsed = parseRef(ref);
  const book = parsed ? getBook(parsed.bookId) : undefined;
  const link = bibleLink(ref);
  return (
    <Card tone={tone} title={label} subtitle={formatScriptureRef(ref, 'id', true)} icon={<BookOpenText />}>
      {reading.refs.length > 1 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {reading.refs.map((option, index) => (
            <Chip key={option} isActive={index === choice} onClick={() => setChoice(index)}>
              {index === 0 ? formatScriptureRef(option, 'id', true) : `atau ${formatScriptureRef(option, 'id', true)}`}
            </Chip>
          ))}
        </div>
      )}
      <PassageText refText={ref} versionId={versionId} lectionaryNumbering />
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
        {link && (
          <Link to={link} className="font-medium text-brand-700 hover:underline dark:text-brand-400">
            Open in Bible
          </Link>
        )}
        {book && parsed && (
          <a
            href={tbChapterUrl(book, toBundledNumbering(parsed.bookId, parsed.ranges[0].chapter, parsed.ranges[0].verse).chapter)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-brand-700 hover:underline dark:text-brand-400"
          >
            TB (imankatolik.or.id) <ExternalLink size={12} />
          </a>
        )}
      </div>
    </Card>
  );
};

const DayReadings = () => {
  const { data, update } = useAppData();
  const [params, setParams] = useSearchParams();
  const dateParam = params.get('date');
  const date = isValidDate(dateParam) ? dateParam : todayKey();
  const day = useMemo(() => getLiturgicalDay(date), [date]);
  const [state, retry] = useDayReadings(day);
  const [massIndex, setMassIndex] = useState(0);
  const versionId = data.bible.versionId;

  const setDate = (next: string) => {
    setMassIndex(0);
    setParams(next === todayKey() ? {} : { date: next }, { replace: true });
  };

  const week = useMemo(() => Array.from({ length: 7 }, (_, index) => getLiturgicalDay(addDays(date, index + 1))), [date]);
  const entry = state.status === 'ready' ? state.readings.entry : null;
  const masses = entry?.masses ?? [];
  const mass = masses[Math.min(massIndex, masses.length - 1)];
  const labels = mass ? readingLabels(mass.readings.map((reading) => reading.kind)) : [];
  const reflection = state.status === 'ready' ? state.readings.reflection : null;
  const saints = useSaints();
  const daySaints = useMemo(() => (saints ? saintsForDay(saints, day) : []), [saints, day]);
  const color = displayColor(day, daySaints);
  const [openSaint, setOpenSaint] = useState<Saint | null>(null);

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <DateNav date={date} onChange={setDate} />
        <div className="w-full sm:w-56">
          <Segmented
            value={versionId}
            options={BIBLE_VERSIONS.map((version) => ({ value: version.id, label: version.shortName }))}
            onChange={(value) => update((current) => ({ ...current, bible: { ...current.bible, versionId: value } }))}
          />
        </div>
      </div>

      <Card tone="violet" icon={<CalendarDays />} title={formatIndonesianDate(date)} subtitle={SEASON_LABELS[day.season]}>
        <p className="font-display text-lg font-bold text-slate-900">{day.name}</p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
          <Badge tone="brand">{RANK_LABELS[day.rank]}</Badge>
          <span className="inline-flex items-center gap-1.5 text-slate-600">
            <span className={`inline-block h-3 w-3 rounded-full ${COLOR_SWATCH[color]}`} aria-hidden="true" />
            Warna liturgi: {COLOR_LABELS[color]}
          </span>
          <span className="text-slate-600">
            Tahun {day.sundayCycle} · Tahun {day.weekdayCycle}
          </span>
        </div>
        {daySaints.length > 0 && (
          <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3">
            {daySaints.map(({ saint, status }) => (
              <li key={saint.id}>
                <button type="button" onClick={() => setOpenSaint(saint)} className="flex w-full items-center gap-2 rounded-lg text-left hover:bg-slate-50">
                  <Sparkles size={16} className="shrink-0 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-slate-900">{saint.name}</span>
                    <span className="block text-xs text-slate-500">{SAINT_STATUS_LABELS[status]} · kisah hidup & teladan</span>
                  </span>
                  <ChevronRight size={16} className="shrink-0 text-slate-400" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </Card>

      {masses.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {masses.map((option, index) => (
            <Chip key={option.label ?? index} isActive={index === massIndex} onClick={() => setMassIndex(index)}>
              {option.label ?? `Misa ${index + 1}`}
            </Chip>
          ))}
        </div>
      )}

      <div className="mt-4 grid gap-4">
        {state.status === 'loading' && <p className="text-sm text-slate-500">Loading readings…</p>}
        {state.status === 'error' && (
          <Card>
            <p className="text-sm text-rose-700 dark:text-rose-400">Could not load the readings.</p>
            <Button variant="secondary" size="sm" className="mt-2" onClick={retry}>
              <RotateCw size={14} /> Try again
            </Button>
          </Card>
        )}
        {state.status === 'ready' && !mass && (
          <Card>
            <p className="text-sm text-slate-600">No readings found for this day.</p>
          </Card>
        )}
        {mass?.readings.map((reading, index) => (
          <ReadingCard
            key={`${date}-${massIndex}-${index}`}
            reading={reading}
            label={labels[index]}
            tone={READING_TONES[index % READING_TONES.length]}
            versionId={versionId}
          />
        ))}

        {reflection && (
          <Card tone="amber" icon={<Lightbulb />} title="Renungan" subtitle="Ditulis untuk aplikasi ini, bukan teks resmi Gereja">
            <p className="whitespace-pre-line text-[15px] leading-relaxed text-slate-800">{reflection.renungan}</p>
            <h3 className="mt-4 font-display text-sm font-bold text-slate-900">Refleksi</h3>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-[15px] text-slate-800">
              {reflection.refleksi.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </Card>
        )}
      </div>

      <Card tone="indigo" icon={<CalendarDays />} title="Next 7 days" className="mt-4">
        <ul className="divide-y divide-slate-100">
          {week.map((next) => {
            const nextSaints = saints ? saintsForDay(saints, next).filter((item) => item.status === 'memorial') : [];
            const nextColor = displayColor(next, nextSaints);
            return (
            <li key={next.date}>
              <button type="button" onClick={() => setDate(next.date)} className="flex w-full items-center gap-3 py-2 text-left hover:bg-slate-50">
                <span className={`inline-block h-3 w-3 shrink-0 rounded-full ${COLOR_SWATCH[nextColor]}`} aria-hidden="true" />
                <span className="w-28 shrink-0 text-xs text-slate-500">{formatIndonesianDate(next.date).replace(/ \d{4}$/, '')}</span>
                <span className="min-w-0 flex-1 truncate text-sm text-slate-800">{nextSaints[0] ? `PW ${nextSaints[0].saint.name}` : next.name}</span>
              </button>
            </li>
            );
          })}
        </ul>
      </Card>

      <p className="mt-6 text-xs text-slate-500">
        Saints follow the General Roman Calendar; on their memorials the weekday readings are shown. Readings follow the Roman Lectionary (three-year Sunday cycle A/B/C, two-year weekday cycle I/II) and the Indonesian calendar (Epiphany and
        Corpus Christi on Sunday, Ascension on Thursday). Citations come from the Lectionary tables of Felix Just, S.J. (catholic-resources.org); verse
        splits in the Indonesian Lectionary can differ slightly. Texts are from the bundled
        Bibles; the official Catholic Indonesian text (TB) is linked.
      </p>
      <SaintModal saint={openSaint} onClose={() => setOpenSaint(null)} />
    </>
  );
};

export const DailyReadingsPage = () => {
  const [params, setParams] = useSearchParams();
  const tab: ReadingsTab = params.get('tab') === 'saints' ? 'saints' : 'day';
  return (
    <>
      <PageHeader
        title="Daily Readings"
        description="Catholic Mass readings for every day (Years A/B/C and I/II), saints of the day, and a short reflection."
        actions={<Tabs tabs={TABS} value={tab} onChange={(value) => setParams(value === 'day' ? {} : { tab: value }, { replace: true })} />}
      />
      {tab === 'day' ? <DayReadings /> : <SaintsList />}
    </>
  );
};
