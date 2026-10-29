import {
  AVAILABILITY_LABELS,
  CHILD_USE_LABELS,
  PREGNANCY_LABELS,
  TIMING_LABELS,
  type Availability,
  type ChildUse,
  type Medicine,
  type PregnancyUse,
} from '../../data/medicines';
import { Badge, type BadgeTone } from '../../shared/components/Badge';

const AVAILABILITY_TONES: Record<Availability, BadgeTone> = {
  otc: 'success',
  prescription: 'warning',
  'medical-device': 'info',
  cosmetic: 'neutral',
  withdrawn: 'danger',
};

const CHILD_TONES: Record<ChildUse, BadgeTone> = { yes: 'success', doctor: 'warning', 'not-recommended': 'danger' };

const PREGNANCY_TONES: Record<PregnancyUse, BadgeTone> = { 'generally-ok': 'success', 'ask-doctor': 'warning', avoid: 'danger' };

export const MedicineBadges = ({ medicine, isDetailed = false }: { medicine: Medicine; isDetailed?: boolean }) => (
  <div className="flex flex-wrap gap-1.5">
    <Badge tone={AVAILABILITY_TONES[medicine.availability]}>{AVAILABILITY_LABELS[medicine.availability]}</Badge>
    <Badge tone="brand">{TIMING_LABELS[medicine.timing]}</Badge>
    <Badge tone={CHILD_TONES[medicine.childUse]}>{CHILD_USE_LABELS[medicine.childUse]}</Badge>
    {isDetailed && <Badge tone={PREGNANCY_TONES[medicine.pregnancy]}>{PREGNANCY_LABELS[medicine.pregnancy]}</Badge>}
  </div>
);
