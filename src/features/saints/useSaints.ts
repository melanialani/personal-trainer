import { useEffect, useState } from 'react';
import type { Saint } from '../../data/saints';
import { loadSaints } from '../../lib/saints';

/** All saints (lazy-loaded); `null` while loading or after a failed load. */
export const useSaints = (): Saint[] | null => {
  const [saints, setSaints] = useState<Saint[] | null>(null);
  useEffect(() => {
    let isCurrent = true;
    loadSaints()
      .then((list) => isCurrent && setSaints(list))
      .catch(() => undefined);
    return () => {
      isCurrent = false;
    };
  }, []);
  return saints;
};
