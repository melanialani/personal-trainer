import { useState } from 'react';
import { Tabs } from '../../shared/components/Tabs';
import { MedicalDisclaimer, ParentingHeader } from './ParentingHeader';
import { SupplementsTab } from './SupplementsTab';
import { useChildren } from './useChildren';
import { VaccinesTab } from './VaccinesTab';

type ImmunizationTab = 'vaccines' | 'supplements';

export const ImmunizationPage = () => {
  const { activeChild } = useChildren();
  const [tab, setTab] = useState<ImmunizationTab>('vaccines');

  return (
    <div>
      <ParentingHeader
        title="Vaccines & Routine Meds"
        description="Full immunization schedule 0–18 years (IDAI 2024), vitamin A, deworming, iron and routine checks."
      />
      <div className="mb-4">
        <Tabs
          tabs={[
            { value: 'vaccines', label: 'Vaccines' },
            { value: 'supplements', label: 'Vitamins & meds' },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>
      {tab === 'vaccines' ? <VaccinesTab child={activeChild} /> : <SupplementsTab child={activeChild} />}
      <div className="mt-6">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};
