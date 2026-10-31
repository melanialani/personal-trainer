import { useCallback } from 'react';
import { buildSampleData } from '../../lib/sampleData';
import { useConfirm } from '../components/ConfirmProvider';
import { useToast } from '../components/ToastProvider';
import { useAppData } from '../../store/AppDataContext';

export const useLoadSampleData = () => {
  const { data, update } = useAppData();
  const confirm = useConfirm();
  const showToast = useToast();

  return useCallback(async () => {
    const hasData = data.profile !== null || data.weights.length > 0 || data.foodLog.length > 0;
    if (hasData) {
      const isConfirmed = await confirm({
        title: 'Replace with sample data?',
        message: 'Your fitness and food data in this browser will be replaced by sample data (Bible highlights and notes are kept). Export a backup first if you want to keep it.',
        confirmLabel: 'Replace data',
        isDestructive: true,
      });
      if (!isConfirmed) return;
    }
    // Sample data covers fitness and food only; keep the user's Bible highlights and notes.
    update((current) => ({ ...buildSampleData(), bible: current.bible, parenting: current.parenting }));
    showToast('Sample data loaded');
  }, [data, update, confirm, showToast]);
};
