import type { Profile } from '../../types';

type NumericKey = 'heightCm' | 'startWeightKg' | 'targetWeightKg' | 'weeklyRateKg' | 'waterTargetMl';

export type ProfileDraft = Omit<Profile, NumericKey | 'excludedKeywords'> & {
  [K in NumericKey]: number | '';
} & { excludedKeywords: string };

export const DEFAULT_DRAFT: ProfileDraft = {
  name: '',
  sex: 'female',
  birthDate: '1995-01-01',
  heightCm: '',
  activityLevel: 'light',
  goal: 'lose',
  startWeightKg: '',
  targetWeightKg: '',
  weeklyRateKg: 0.5,
  macroPreset: 'balanced',
  dietPreference: 'none',
  isHalal: true,
  excludedKeywords: '',
  waterTargetMl: 2000,
  workout: { level: 'beginner', equipment: [], daysPerWeek: 3, minutesPerSession: 45, isCustomSchedule: false, hasMat: true, hasFurniture: true, levelSince: '' },
};

export const profileToDraft = (profile: Profile): ProfileDraft => ({
  ...profile,
  excludedKeywords: profile.excludedKeywords.join(', '),
});

export type DraftErrors = Partial<Record<keyof ProfileDraft, string>>;

export const validateDraft = (draft: ProfileDraft): DraftErrors => {
  const errors: DraftErrors = {};
  if (!draft.name.trim()) errors.name = 'Name is required';
  if (draft.heightCm === '' || draft.heightCm < 100 || draft.heightCm > 250) errors.heightCm = 'Enter a height between 100 and 250 cm';
  if (draft.startWeightKg === '' || draft.startWeightKg < 30 || draft.startWeightKg > 300) errors.startWeightKg = 'Enter a weight between 30 and 300 kg';
  if (draft.targetWeightKg === '' || draft.targetWeightKg < 30 || draft.targetWeightKg > 300) errors.targetWeightKg = 'Enter a weight between 30 and 300 kg';
  if (!errors.startWeightKg && !errors.targetWeightKg) {
    if (draft.goal === 'lose' && draft.targetWeightKg >= draft.startWeightKg) errors.targetWeightKg = 'Target must be below your current weight to lose weight';
    if (draft.goal === 'gain' && draft.targetWeightKg <= draft.startWeightKg) errors.targetWeightKg = 'Target must be above your current weight to gain weight';
  }
  if (draft.weeklyRateKg === '' || draft.weeklyRateKg < 0 || draft.weeklyRateKg > 1.5) errors.weeklyRateKg = 'Use 0 – 1.5 kg per week';
  if (draft.waterTargetMl === '' || draft.waterTargetMl < 500) errors.waterTargetMl = 'At least 500 ml';
  if (!draft.birthDate) errors.birthDate = 'Birth date is required';
  return errors;
};

/** Converts a valid draft into a profile. Call only after `validateDraft` returns no errors. */
export const draftToProfile = (draft: ProfileDraft): Profile => ({
  ...draft,
  name: draft.name.trim(),
  heightCm: Number(draft.heightCm),
  startWeightKg: Number(draft.startWeightKg),
  targetWeightKg: Number(draft.targetWeightKg),
  weeklyRateKg: draft.goal === 'maintain' ? 0 : Number(draft.weeklyRateKg),
  waterTargetMl: Number(draft.waterTargetMl),
  excludedKeywords: draft.excludedKeywords
    .split(',')
    .map((keyword) => keyword.trim().toLowerCase())
    .filter(Boolean),
});
