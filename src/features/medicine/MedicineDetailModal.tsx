import type { ReactNode } from 'react';
import { FORM_LABELS, GROUP_LABELS, MEDICINES, type Medicine } from '../../data/medicines';
import { Button } from '../../shared/components/Button';
import { Chip } from '../../shared/components/Chip';
import { Modal } from '../../shared/components/Modal';
import { MedicineBadges } from './medicineBadges';

interface MedicineDetailModalProps {
  medicine: Medicine | null;
  onSelect: (medicine: Medicine) => void;
  onClose: () => void;
}

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section>
    <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</h3>
    {children}
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const DoseBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-xl bg-slate-50 p-3">
    <p className="mb-1 text-sm font-semibold text-slate-900">{title}</p>
    <ul className="space-y-1 text-sm text-slate-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export const MedicineDetailModal = ({ medicine, onSelect, onClose }: MedicineDetailModalProps) => {
  const related = MEDICINES.filter((item) => medicine?.relatedIds?.includes(item.id));

  return (
    <Modal
      isOpen={medicine !== null}
      title={medicine?.name ?? ''}
      description={medicine && `${GROUP_LABELS[medicine.group]} · ${medicine.ingredients.join(', ')}`}
      size="lg"
      onClose={onClose}
      footer={
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      }
    >
      {medicine && (
        <div className="space-y-5">
          <div className="space-y-2">
            <MedicineBadges medicine={medicine} isDetailed />
            <p className="text-sm text-slate-700">{medicine.summary}</p>
            <p className="text-xs text-slate-500">
              <span className="font-medium text-slate-700">Brands: </span>
              {medicine.brands.join(' · ')}
              <span className="mx-1.5">|</span>
              <span className="font-medium text-slate-700">Forms: </span>
              {medicine.forms.map((form) => FORM_LABELS[form]).join(', ')}
            </p>
          </div>

          <Section title="How it works">
            <p className="text-sm text-slate-700">{medicine.howItWorks}</p>
            {medicine.analogy && <p className="mt-1.5 text-sm italic text-slate-500">Analogy: {medicine.analogy}</p>}
          </Section>

          <Section title="When to use / best time">
            <BulletList items={medicine.bestTime} />
          </Section>

          <Section title="How to use">
            <BulletList items={medicine.howToUse} />
          </Section>

          <Section title="Dose">
            <div className="grid gap-2 sm:grid-cols-2">
              <DoseBlock title="Adult" items={medicine.dose.adult} />
              <DoseBlock title="Child" items={medicine.dose.child} />
            </div>
            <p className="mt-1.5 text-xs text-slate-500">Typical doses. If your prescription says otherwise, follow your doctor.</p>
          </Section>

          <Section title="How long">
            <p className="text-sm text-slate-700">{medicine.duration}</p>
          </Section>

          {medicine.interactions.length > 0 && (
            <Section title="With other medicines">
              <BulletList items={medicine.interactions} />
            </Section>
          )}

          {medicine.sideEffects.length > 0 && (
            <Section title="Side effects">
              <BulletList items={medicine.sideEffects} />
            </Section>
          )}

          {medicine.warnings.length > 0 && (
            <Section title="Warnings">
              <BulletList items={medicine.warnings} />
            </Section>
          )}

          <Section title="See a doctor if">
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-3">
              <ul className="list-disc space-y-1 pl-5 text-sm text-rose-700 dark:text-rose-300">
                {medicine.seeDoctor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Section>

          {related.length > 0 && (
            <Section title="Related">
              <div className="flex flex-wrap gap-1.5">
                {related.map((item) => (
                  <Chip key={item.id} isActive={false} onClick={() => onSelect(item)}>
                    {item.name}
                  </Chip>
                ))}
              </div>
            </Section>
          )}
        </div>
      )}
    </Modal>
  );
};
