import { X } from 'lucide-react';
import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useVisualViewport } from '../hooks/useVisualViewport';
import { IconButton } from './Button';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

interface ModalProps {
  isOpen: boolean;
  title: ReactNode;
  description?: ReactNode;
  size?: ModalSize;
  onClose: () => void;
  footer?: ReactNode;
  children: ReactNode;
}

const SIZE_CLASSES: Record<ModalSize, string> = {
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-lg',
  lg: 'sm:max-w-2xl',
  xl: 'sm:max-w-4xl',
};

/** Overlay clicks are blocked on purpose — the modal closes only via × or footer buttons. */
const blockEvent = (e: React.SyntheticEvent) => e.stopPropagation();

export const Modal = ({ isOpen, title, description, size = 'md', onClose, footer, children }: ModalProps) => {
  // Fit the overlay to the visible area so the footer (Save) stays above the phone keyboard.
  const viewport = useVisualViewport(isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;
    // Lock page scroll behind the modal. overflow:hidden alone does not stop touch scrolling on iOS,
    // so the html element is locked too.
    const { body, documentElement: html } = document;
    const previous = { body: body.style.overflow, html: html.style.overflow };
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    return () => {
      body.style.overflow = previous.body;
      html.style.overflow = previous.html;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-x-0 top-0 z-50 flex items-end justify-center overscroll-contain bg-black/50 sm:items-center sm:p-4"
      style={{ top: viewport.offsetTop, height: viewport.height || '100dvh' }}
      onClick={blockEvent}
      onMouseDown={blockEvent}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={`flex w-full flex-col rounded-t-2xl bg-surface shadow-xl sm:rounded-2xl ${viewport.isKeyboardOpen ? 'max-h-full' : 'max-h-[92%]'} ${SIZE_CLASSES[size]}`}
      >
        <header className="flex items-start justify-between gap-3 border-b border-slate-100 px-5 py-4">
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-slate-900">{title}</h2>
            {description && <p className="mt-0.5 text-sm text-slate-500">{description}</p>}
          </div>
          <IconButton label="Close" onClick={onClose}>
            <X size={18} />
          </IconButton>
        </header>
        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
        {footer && <footer className="flex flex-wrap justify-end gap-2 border-t border-slate-100 px-5 py-3">{footer}</footer>}
      </div>
    </div>,
    document.body,
  );
};
