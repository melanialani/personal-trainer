import { formatDate } from '../../lib/date';
import type { DoseStatus, RoundStatus } from '../../lib/child';
import { Badge } from '../../shared/components/Badge';

interface DoseStatusBadgeProps {
  status: DoseStatus;
  givenOn?: string;
  dueFrom: string;
  /** Late program doses are urgent; late optional (paid) doses are only a reminder. */
  isProgram: boolean;
}

export const DoseStatusBadge = ({ status, givenOn, dueFrom, isProgram }: DoseStatusBadgeProps) => {
  switch (status) {
    case 'done':
      return <Badge tone="success">Given {givenOn ? formatDate(givenOn) : ''}</Badge>;
    case 'due':
      return <Badge tone="warning">Due now</Badge>;
    case 'late':
      return isProgram ? <Badge tone="danger">Late — catch up</Badge> : <Badge tone="warning">Not given yet</Badge>;
    case 'missed':
      return <Badge tone="neutral">Age limit passed</Badge>;
    case 'optional':
      return <Badge tone="info">If needed</Badge>;
    default:
      return <Badge tone="neutral">From {formatDate(dueFrom)}</Badge>;
  }
};

export const RoundStatusBadge = ({ status, givenOn }: { status: RoundStatus; givenOn?: string }) => {
  if (status === 'done') return <Badge tone="success">Given {givenOn ? formatDate(givenOn, { day: 'numeric', month: 'short' }) : ''}</Badge>;
  if (status === 'current') return <Badge tone="warning">Due now</Badge>;
  if (status === 'missed') return <Badge tone="neutral">Missed</Badge>;
  return <Badge tone="neutral">Upcoming</Badge>;
};

export const ProgramBadge = ({ isProgram }: { isProgram: boolean }) =>
  isProgram ? <Badge tone="brand">Free (program)</Badge> : <Badge tone="neutral">Optional · paid</Badge>;
