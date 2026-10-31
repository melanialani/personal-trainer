import type { ReactNode } from 'react';
import { PageHeader } from '../../shared/components/PageHeader';
import { ChildSwitcher } from './ChildSwitcher';

interface ParentingHeaderProps {
  title: string;
  description: ReactNode;
}

/** Page title plus the child picker shared by all parenting pages. */
export const ParentingHeader = ({ title, description }: ParentingHeaderProps) => (
  <>
    <PageHeader title={title} description={description} />
    <div className="mb-5">
      <ChildSwitcher />
    </div>
  </>
);

export const MedicalDisclaimer = () => (
  <p className="text-xs text-slate-500">
    Information only, based on WHO, IDAI, Kemenkes and CDC guidance. It does not replace a check-up with a doctor, midwife or Posyandu.
  </p>
);
