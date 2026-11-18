import { ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';

interface SourceLinkProps {
  source: { name: string; url?: string };
  /** Text before the source name, e.g. "Source: ". */
  prefix?: ReactNode;
  className?: string;
}

/** Small external link to the official source of parenting content; plain text when there is no URL. */
export const SourceLink = ({ source, prefix, className = '' }: SourceLinkProps) =>
  source.url ? (
    <a href={source.url} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1 text-xs text-slate-500 hover:underline ${className}`}>
      {prefix}
      {source.name} <ExternalLink size={12} />
    </a>
  ) : (
    <span className={`text-xs text-slate-500 ${className}`}>
      {prefix}
      {source.name}
    </span>
  );
