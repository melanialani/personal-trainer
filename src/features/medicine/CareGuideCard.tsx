import type { CareGuide, GuideTable } from '../../data/careGuides';
import { MEDICINES, type Medicine } from '../../data/medicines';
import { Card } from '../../shared/components/Card';
import { Chip } from '../../shared/components/Chip';

interface CareGuideCardProps {
  guide: CareGuide;
  onOpenMedicine: (medicine: Medicine) => void;
}

/** Scrolls sideways on phones; the first column stays bold as the row label. */
const GuideTableView = ({ table }: { table: GuideTable }) => (
  <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
    <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
      <thead>
        <tr className="border-b border-slate-200 text-xs text-slate-500">
          {table.columns.map((column) => (
            <th key={column} className="px-2 py-1.5 font-semibold first:pl-0">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 align-top text-slate-700">
        {table.rows.map((row) => (
          <tr key={row.join('|')}>
            {row.map((cell, index) => (
              <td key={index} className={`px-2 py-1.5 first:pl-0 ${index === 0 ? 'font-medium text-slate-900' : ''}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const CareGuideCard = ({ guide, onOpenMedicine }: CareGuideCardProps) => {
  const medicines = MEDICINES.filter((medicine) => guide.relatedMedicineIds.includes(medicine.id));

  return (
    <Card title={guide.title} subtitle={guide.summary}>
      <div className="space-y-4">
        {guide.sections.map((section) => (
          <section key={section.heading} className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">{section.heading}</h3>
            {section.text && <p className="text-sm text-slate-700">{section.text}</p>}
            {section.table && <GuideTableView table={section.table} />}
            {section.points && (
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
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
