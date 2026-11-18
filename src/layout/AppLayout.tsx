import { AlertCircle } from 'lucide-react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Notice } from '../shared/components/Notice';
import { useKeyboardOpen } from '../shared/hooks/useKeyboardOpen';
import { useAppData } from '../store/AppDataContext';
import { BottomNav } from './BottomNav';
import { MobileHeader } from './MobileHeader';
import { Sidebar } from './Sidebar';
import { useNavGroup } from './useNavGroup';

export const AppLayout = () => {
  const { hasStorageError } = useAppData();
  const { activeGroup, pathFor } = useNavGroup();
  const isKeyboardOpen = useKeyboardOpen();

  // The module accent lives on <html> so modals and toasts (rendered outside this tree) follow it too.
  useEffect(() => {
    document.documentElement.dataset.accent = activeGroup.id;
  }, [activeGroup.id]);

  return (
    <div className="relative min-h-dvh md:flex">
      <Sidebar />
      <MobileHeader activeGroup={activeGroup} pathFor={pathFor} />

      <main className="relative isolate min-w-0 flex-1 px-4 pb-28 pt-5 sm:px-6 md:pb-10 lg:px-10 lg:pt-8">
        <div className="bg-accent-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-80" aria-hidden="true" />
        <div className="mx-auto max-w-6xl">
          {hasStorageError && (
            <Notice tone="danger" icon={<AlertCircle size={16} />} className="mb-4">
              Could not save to browser storage (storage may be full or disabled). Export a backup to avoid losing data.
            </Notice>
          )}
          <Outlet />
        </div>
      </main>

      <BottomNav group={activeGroup} isHidden={isKeyboardOpen} />
    </div>
  );
};
