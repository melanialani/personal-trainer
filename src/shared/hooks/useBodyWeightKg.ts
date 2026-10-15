import { currentWeightKg, DEFAULT_WEIGHT_KG } from '../../lib/calc';
import { useAppData } from '../../store/AppDataContext';

/** Latest body weight for calorie-burn estimates, with a neutral default before a profile exists. */
export const useBodyWeightKg = (): number => {
  const { data } = useAppData();
  return data.profile ? currentWeightKg(data.profile, data.weights) : DEFAULT_WEIGHT_KG;
};
