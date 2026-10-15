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
        message: 'All current data in this browser will be replaced by sample data. Export a backup first if you want to keep it.',
        confirmLabel: 'Replace data',
        isDestructive: true,
      });
      if (!isConfirmed) return;
    }
    update(() => buildSampleData());
    showToast('Sample data loaded');
  }, [data, update, confirm, showToast]);
};
