import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

const TEXT_LINK_CLASSES = 'font-medium text-brand-700 dark:text-brand-400 hover:underline';

interface TextLinkProps {
  to: string;
  className?: string;
  children: ReactNode;
}

/** In-app text link in the brand color. */
export const TextLink = ({ to, className = '', children }: TextLinkProps) => (
  <Link to={to} className={`${TEXT_LINK_CLASSES} ${className}`}>
    {children}
  </Link>
);

/** A button that looks like `TextLink`, for inline actions that stay on the page. */
export const TextButton = ({ className = '', type = 'button', ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button type={type} className={`${TEXT_LINK_CLASSES} ${className}`} {...rest} />
);
