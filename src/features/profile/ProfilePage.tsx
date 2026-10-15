import { Save } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACTIVITY_LEVELS, calcBmi, calcDailyTargets, GOAL_OPTIONS, latestWeight, MACRO_PRESETS } from '../../lib/calc';
import { ageFromBirthDate, todayKey } from '../../lib/date';
import { DIET_OPTIONS } from '../../lib/foods';
import { formatNumber } from '../../lib/format';
import { createId } from '../../lib/id';
import { recommendSchedule } from '../../lib/workoutGenerator';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { Checkbox, Field, NumberInput, Segmented, Select, TextInput } from '../../shared/components/FormFields';
import { PageHeader } from '../../shared/components/PageHeader';
import { useToast } from '../../shared/components/ToastProvider';
import { useAppData } from '../../store/AppDataContext';
import type { Sex } from '../../types';
import { DEFAULT_DRAFT, draftToProfile, profileToDraft, validateDraft, type ProfileDraft } from './profileDraft';
import { TargetsPreview } from './TargetsPreview';
import { TrainingPreferencesCard } from './TrainingPreferencesCard';

const SEX_OPTIONS: { value: Sex; label: string }[] = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
];

export const ProfilePage = () => {
  const { data, update } = useAppData();
  const navigate = useNavigate();
  const showToast = useToast();
  const isNew = data.profile === null;
  const [draft, setDraft] = useState<ProfileDraft>(() => (data.profile ? profileToDraft(data.profile) : DEFAULT_DRAFT));
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const errors = useMemo(() => validateDraft(draft), [draft]);
  const isValid = Object.keys(errors).length === 0;
  const visibleErrors = hasSubmitted ? errors : {};

  const setField = <K extends keyof ProfileDraft>(key: K, value: ProfileDraft[K]) => setDraft((current) => ({ ...current, [key]: value }));

  // Recommendation updates live from the draft; falls back to neutral values while fields are empty.
  const recommendation = useMemo(() => {
    const weightKg = latestWeight(data.weights)?.weightKg ?? (draft.startWeightKg || 0);
    const bmi = weightKg && draft.heightCm ? calcBmi(weightKg, draft.heightCm) : 22;
    return recommendSchedule({
      goal: draft.goal,
      level: draft.workout.level,
      activityLevel: draft.activityLevel,
      age: draft.birthDate ? ageFromBirthDate(draft.birthDate) : 30,
      bmi,
    });
  }, [data.weights, draft.startWeightKg, draft.heightCm, draft.goal, draft.workout.level, draft.activityLevel, draft.birthDate]);

  const handleSave = () => {
    setHasSubmitted(true);
    if (!isValid) return;
    const profile = draftToProfile(draft);
    update((current) => ({
      ...current,
      profile,
      // Seed the weight log with the starting weight on first setup.
      weights: current.weights.length === 0 ? [{ id: createId(), date: todayKey(), weightKg: profile.startWeightKg }] : current.weights,
    }));
    showToast(isNew ? 'Profile created — your plan is ready' : 'Profile saved');
    if (isNew) navigate('/');
  };

  return (
    <>
      <PageHeader
        title={isNew ? 'Set up your profile' : 'Profile & Goals'}
        description="Your daily calorie and macro targets are calculated from these details."
        actions={
          <div className="hidden lg:block">
            <Button icon={<Save size={16} />} onClick={handleSave}>
              Save profile
            </Button>
          </div>
        }
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-5">
          <Card title="About you">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" error={visibleErrors.name}>
                <TextInput value={draft.name} onChange={(e) => setField('name', e.target.value)} placeholder="e.g. Rina" />
              </Field>
              <Field label="Sex" hint="Used for the BMR formula">
                <Segmented value={draft.sex} options={SEX_OPTIONS} onChange={(value) => setField('sex', value)} />
              </Field>
              <Field label="Birth date" error={visibleErrors.birthDate}>
                <TextInput type="date" value={draft.birthDate} max={todayKey()} onChange={(e) => setField('birthDate', e.target.value)} />
              </Field>
              <Field label="Height" error={visibleErrors.heightCm}>
                <NumberInput value={draft.heightCm} onValueChange={(v) => setField('heightCm', v)} suffix="cm" placeholder="160" />
              </Field>
              <Field label="Activity level (outside planned workouts)" className="sm:col-span-2">
                <Select
                  value={draft.activityLevel}
                  options={ACTIVITY_LEVELS.map((level) => ({ value: level.value, label: `${level.label} — ${level.description}` }))}
                  onValueChange={(value) => setField('activityLevel', value)}
                />
              </Field>
            </div>
          </Card>

          <Card title="Goal">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="What do you want to achieve?" className="sm:col-span-2">
                <Segmented value={draft.goal} options={GOAL_OPTIONS} onChange={(value) => setField('goal', value)} />
              </Field>
              <Field label={isNew ? 'Current weight' : 'Starting weight'} hint={isNew ? undefined : 'Your weight when you started this goal'} error={visibleErrors.startWeightKg}>
                <NumberInput value={draft.startWeightKg} step={0.1} onValueChange={(v) => setField('startWeightKg', v)} suffix="kg" placeholder="68" />
              </Field>
              <Field label="Target weight" error={visibleErrors.targetWeightKg}>
                <NumberInput value={draft.targetWeightKg} step={0.1} onValueChange={(v) => setField('targetWeightKg', v)} suffix="kg" placeholder="60" />
              </Field>
              {draft.goal !== 'maintain' && (
                <Field
                  label={`Planned ${draft.goal === 'lose' ? 'loss' : 'gain'} per week`}
                  hint={draft.goal === 'lose' ? '0.25–0.75 kg/week is sustainable for most people' : '0.25–0.5 kg/week limits fat gain'}
                  error={visibleErrors.weeklyRateKg}
                >
                  <Select
                    value={String(draft.weeklyRateKg)}
                    options={[0.25, 0.5, 0.75, 1].map((n) => ({ value: String(n), label: `${n} kg / week` }))}
                    onValueChange={(value) => setField('weeklyRateKg', Number(value))}
                  />
                </Field>
              )}
              <Field label="Macro style">
                <Select value={draft.macroPreset} options={MACRO_PRESETS} onValueChange={(value) => setField('macroPreset', value)} />
              </Field>
              <Field label="Daily water target" error={visibleErrors.waterTargetMl}>
                <NumberInput value={draft.waterTargetMl} step={250} onValueChange={(v) => setField('waterTargetMl', v)} suffix="ml" />
              </Field>
            </div>
          </Card>

          <Card title="Food preferences" subtitle="Used by the meal planner">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Diet">
                <Select value={draft.dietPreference} options={DIET_OPTIONS} onValueChange={(value) => setField('dietPreference', value)} />
              </Field>
              <Field label="Foods to avoid" hint="Comma-separated keywords, e.g. shrimp, peanut">
                <TextInput value={draft.excludedKeywords} onChange={(e) => setField('excludedKeywords', e.target.value)} placeholder="shrimp, peanut" />
              </Field>
              <div className="sm:col-span-2">
                <Checkbox label="Halal only (exclude pork and alcohol)" checked={draft.isHalal} onChange={(checked) => setField('isHalal', checked)} />
              </div>
            </div>
          </Card>

          <TrainingPreferencesCard
            workout={draft.workout}
            recommendation={recommendation}
            onChange={(workout) => setField('workout', workout)}
          />
        </div>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <TargetsPreview profile={isValid ? draftToProfile(draft) : null} weights={data.weights} />
        </div>
      </div>

      {/* Phones: keep Save reachable above the bottom navigation while scrolling the long form. */}
      <div className="h-16 lg:hidden" />
      <div className="no-print fixed inset-x-0 bottom-[calc(55px+env(safe-area-inset-bottom))] z-20 flex items-center justify-between gap-3 border-t border-slate-200 bg-white/95 px-4 py-2.5 backdrop-blur md:bottom-0 lg:hidden">
        <p className="text-xs text-slate-500">
          {isValid ? (
            <>
              Daily target{' '}
              <span className="block text-base font-bold tabular-nums text-slate-900">
                {formatNumber(calcDailyTargets(draftToProfile(draft), data.weights).kcal)} kcal
              </span>
            </>
          ) : (
            'Complete the required fields'
          )}
        </p>
        <Button icon={<Save size={16} />} onClick={handleSave}>
          Save profile
        </Button>
      </div>
    </>
  );
};
