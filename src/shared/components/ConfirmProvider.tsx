import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react';
import { Button } from './Button';
import { Modal } from './Modal';

interface ConfirmOptions {
  title: string;
  message: ReactNode;
  confirmLabel?: string;
  isDestructive?: boolean;
}

type ConfirmFn = (options: ConfirmOptions) => Promise<boolean>;

const ConfirmContext = createContext<ConfirmFn | null>(null);

/** Shared confirmation dialog — use `useConfirm()` instead of `window.confirm()`. */
export const ConfirmProvider = ({ children }: { children: ReactNode }) => {
  const [options, setOptions] = useState<ConfirmOptions | null>(null);
  const resolverRef = useRef<((value: boolean) => void) | null>(null);

  const confirm = useCallback<ConfirmFn>(
    (next) =>
      new Promise<boolean>((resolve) => {
        resolverRef.current = resolve;
        setOptions(next);
      }),
    [],
  );

  const handleClose = (result: boolean) => {
    resolverRef.current?.(result);
    resolverRef.current = null;
    setOptions(null);
  };

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      <Modal
        isOpen={options !== null}
        title={options?.title ?? ''}
        size="sm"
        onClose={() => handleClose(false)}
        footer={
          <>
            <Button variant="secondary" onClick={() => handleClose(false)}>
              Cancel
            </Button>
            <Button variant={options?.isDestructive ? 'danger' : 'primary'} onClick={() => handleClose(true)}>
              {options?.confirmLabel ?? 'Confirm'}
            </Button>
          </>
        }
      >
        <div className="text-sm text-slate-600">{options?.message}</div>
      </Modal>
    </ConfirmContext.Provider>
  );
};

export const useConfirm = (): ConfirmFn => {
  const context = useContext(ConfirmContext);
  if (!context) throw new Error('useConfirm must be used inside ConfirmProvider');
  return context;
};

/** Standard delete confirmation used across the app. */
export const useConfirmDelete = () => {
  const confirm = useConfirm();
  return useCallback(
    (itemLabel: string) =>
      confirm({
        title: 'Delete item?',
        message: (
          <>
            <span className="font-medium text-slate-800">{itemLabel}</span> will be permanently removed from this browser.
          </>
        ),
        confirmLabel: 'Delete',
        isDestructive: true,
      }),
    [confirm],
  );
};
