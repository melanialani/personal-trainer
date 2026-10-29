import { ChevronRight } from 'lucide-react';
import { GROUP_LABELS, SYMPTOM_LABELS, type Medicine } from '../../data/medicines';
import { Card } from '../../shared/components/Card';
import { MedicineBadges } from './medicineBadges';

interface MedicineCardProps {
  medicine: Medicine;
  onOpen: () => void;
}

export const MedicineCard = ({ medicine, onOpen }: MedicineCardProps) => (
  <Card className="flex flex-col" bodyClassName="flex flex-1 flex-col gap-3 p-4 sm:p-5">
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{GROUP_LABELS[medicine.group]}</p>
      <h2 className="mt-0.5 text-base font-semibold text-slate-900">{medicine.name}</h2>
      <p className="mt-0.5 text-xs text-slate-500">{medicine.brands.join(' · ')}</p>
    </div>
    <MedicineBadges medicine={medicine} />
    <p className="text-sm text-slate-600">{medicine.summary}</p>
    <p className="text-xs text-slate-500">
      <span className="font-medium text-slate-700">For: </span>
      {medicine.symptoms.map((symptom) => SYMPTOM_LABELS[symptom]).join(', ')}
    </p>
    <button
      type="button"
      onClick={onOpen}
      className="mt-auto inline-flex items-center gap-1 self-start text-sm font-medium text-brand-700 hover:underline dark:text-brand-300"
    >
      How to use, dose & interactions
      <ChevronRight size={16} />
    </button>
  </Card>
);
