import type { CareGuide } from '../../data/careGuides';
import { MEDICINES, type Medicine } from '../../data/medicines';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';

interface CareGuideCardProps {
  guide: CareGuide;
  onOpenMedicine: (medicine: Medicine) => void;
}

export const CareGuideCard = ({ guide, onOpenMedicine }: CareGuideCardProps) => {
  const medicines = MEDICINES.filter((medicine) => guide.relatedMedicineIds.includes(medicine.id));

  return (
    <Card title={guide.title} subtitle={guide.summary}>
      <div className="space-y-4">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">{section.heading}</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
        {medicines.length > 0 && (
          <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
            {medicines.map((medicine) => (
              <Chip key={medicine.id} isActive={false} onClick={() => onOpenMedicine(medicine)}>
                {medicine.name}
              </Chip>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
