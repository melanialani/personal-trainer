import type { Prayer } from '../../data/prayers';
import { PRAYER_CATEGORY_LABELS } from '../../data/prayers';
import { Modal } from '../../shared/components/Modal';

interface PrayerModalProps {
  prayer: Prayer | null;
  onClose: () => void;
}

export const PrayerModal = ({ prayer, onClose }: PrayerModalProps) => (
  <Modal isOpen={prayer !== null} size="lg" title={prayer?.title ?? ''} description={prayer ? PRAYER_CATEGORY_LABELS[prayer.category] : ''} onClose={onClose}>
    {prayer && (
      <>
        <p className="whitespace-pre-line text-[17px] leading-8 text-slate-800">{prayer.text}</p>
        {prayer.note && <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">{prayer.note}</p>}
      </>
    )}
  </Modal>
);
