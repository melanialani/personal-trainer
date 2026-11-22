import { ExternalLink } from 'lucide-react';
import type { Saint } from '../../data/saints';
import { formatDayMonth } from '../../lib/liturgicalCalendar';
import { SAINT_RANK_LABELS } from '../../lib/saints';
import { Badge } from '../../shared/components/Badge';
import { Modal } from '../../shared/components/Modal';

interface SaintModalProps {
  saint: Saint | null;
  onClose: () => void;
}

export const saintDateLabel = (saint: Saint): string =>
  saint.date === 'immaculate-heart' ? 'Sabtu sesudah Hari Raya Hati Yesus' : formatDayMonth(saint.date);

export const SaintModal = ({ saint, onClose }: SaintModalProps) => (
  <Modal
    isOpen={saint !== null}
    size="lg"
    title={saint?.name ?? ''}
    description={saint ? [saint.role, saint.years].filter(Boolean).join(' · ') : ''}
    onClose={onClose}
  >
    {saint && (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <Badge tone="brand">{SAINT_RANK_LABELS[saint.rank]}</Badge>
          <span>{saintDateLabel(saint)}</span>
        </div>
        <section>
          <h3 className="font-display text-sm font-bold text-slate-900">Kisah hidup</h3>
          <p className="mt-1 text-[15px] leading-relaxed text-slate-800">{saint.story}</p>
        </section>
        <section className="rounded-xl bg-amber-50 p-3 dark:bg-amber-500/10">
          <h3 className="font-display text-sm font-bold text-amber-800 dark:text-amber-300">Yang bisa diteladani</h3>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-[15px] text-slate-800">
            {saint.example.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
        {saint.patron.length > 0 && (
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-800">Pelindung: </span>
            {saint.patron.join(', ')}
          </p>
        )}
        <div className="text-xs text-slate-500">
          Sumber:{' '}
          {saint.sources.map((url) => (
            <a key={url} href={url} target="_blank" rel="noreferrer" className="mr-2 inline-flex items-center gap-0.5 text-brand-700 hover:underline dark:text-brand-400">
              {new URL(url).hostname.replace(/^www\./, '')}
              <ExternalLink size={11} />
            </a>
          ))}
        </div>
      </div>
    )}
  </Modal>
);
