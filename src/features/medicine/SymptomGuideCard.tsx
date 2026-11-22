import { Stethoscope } from 'lucide-react';
import { MEDICINES, type Medicine } from '../../data/medicines';
import type { SymptomGuide } from '../../data/symptomGuides';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';
import type { Tone } from '../../shared/tones';

interface SymptomGuideCardProps {
  guide: SymptomGuide;
  tone?: Tone;
  onOpenMedicine: (medicine: Medicine) => void;
}

const Heading = ({ children }: { children: string }) => (
  <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">{children}</h3>
);

const BulletList = ({ items, className = 'text-slate-700' }: { items: string[]; className?: string }) => (
  <ul className={`list-disc space-y-1 pl-5 text-sm ${className}`}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

/** One complaint: ingredients to look for on the label (each opens its medicine), what to avoid, self-care, red flags. */
export const SymptomGuideCard = ({ guide, tone, onOpenMedicine }: SymptomGuideCardProps) => (
  <Card title={guide.title} icon={<Stethoscope />} tone={tone} subtitle={guide.summary}>
    <div className="space-y-4">
      <section>
        <Heading>Look for these ingredients</Heading>
        {guide.lookFor.length === 0 ? (
          <p className="text-sm text-slate-700">No over-the-counter medicine is recommended for regular use — see the tips below.</p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {guide.lookFor.map((pick) => {
              const medicines = MEDICINES.filter((medicine) => pick.medicineIds.includes(medicine.id));
              return (
                <li key={pick.ingredient} className="py-2 first:pt-0 last:pb-0">
                  <p className="text-sm font-semibold text-slate-900">{pick.ingredient}</p>
                  <p className="text-sm text-slate-600">{pick.note}</p>
                  {medicines.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {medicines.map((medicine) => (
                        <Chip key={medicine.id} isActive={false} onClick={() => onOpenMedicine(medicine)}>
                          {medicine.name}
                        </Chip>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {guide.avoid.length > 0 && (
        <section>
          <Heading>Avoid</Heading>
          <div className="rounded-xl bg-amber-50 p-3">
            <BulletList items={guide.avoid} className="text-amber-800 dark:text-amber-200" />
          </div>
        </section>
      )}

      {guide.withoutMedicine.length > 0 && (
        <section>
          <Heading>Without medicine</Heading>
          <BulletList items={guide.withoutMedicine} />
        </section>
      )}

      <section>
        <Heading>See a doctor if</Heading>
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-3">
          <BulletList items={guide.seeDoctor} className="text-rose-700 dark:text-rose-300" />
        </div>
      </section>
    </div>
  </Card>
);
