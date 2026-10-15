import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface TextLinkProps {
  to: string;
  className?: string;
  children: ReactNode;
}

/** In-app text link in the brand color. */
export const TextLink = ({ to, className = '', children }: TextLinkProps) => (
  <Link to={to} className={`font-medium text-brand-600 hover:underline ${className}`}>
    {children}
  </Link>
);
