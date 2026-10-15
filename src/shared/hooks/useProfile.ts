import { useAppData } from '../../store/AppDataContext';
import type { Profile } from '../../types';

/** Profile for screens rendered inside `RequireProfile` (or otherwise guarded); throws if it is missing. */
export const useProfile = (): Profile => {
  const { data } = useAppData();
  if (!data.profile) throw new Error('useProfile must be used where a profile exists (wrap the page in RequireProfile)');
  return data.profile;
};
