import { useEffect, useState } from 'react';
import { kcalFromMacros } from '../../lib/calc';
import { createId } from '../../lib/id';
import { Button } from '../../shared/components/Button';
import { Checkbox, Field, NumberInput, TextInput } from '../../shared/components/FormFields';
import { Modal } from '../../shared/components/Modal';
import { useToast } from '../../shared/components/ToastProvider';
import { useAppData } from '../../store/AppDataContext';
import type { FoodItem, FoodTag } from '../../types';

interface CustomFoodModalProps {
  isOpen: boolean;
  food?: FoodItem | null;
  initialName?: string;
  onClose: () => void;
  onSaved?: (food: FoodItem) => void;
}

interface Draft {
  name: string;
  brand: string;
  servingLabel: string;
  servingGrams: number | '';
  kcal: number | '';
  protein: number | '';
  carbs: number | '';
  fat: number | '';
  tags: FoodTag[];
}

const TAG_OPTIONS: { value: FoodTag; label: string }[] = [
  { value: 'meat', label: 'Red meat' },
  { value: 'poultry', label: 'Poultry' },
  { value: 'pork', label: 'Pork' },
  { value: 'seafood', label: 'Fish / seafood' },
  { value: 'egg', label: 'Egg' },
  { value: 'dairy', label: 'Dairy' },
  { value: 'alcohol', label: 'Alcohol' },
];

const toDraft = (food?: FoodItem | null, initialName = ''): Draft => ({
  name: food?.name ?? initialName,
  brand: food?.brand ?? '',
  servingLabel: food?.servingLabel ?? '1 portion',
  servingGrams: food?.servingGrams ?? 100,
  kcal: food?.kcal ?? '',
  protein: food?.protein ?? '',
  carbs: food?.carbs ?? '',
  fat: food?.fat ?? '',
  tags: food?.tags ?? [],
});

export const CustomFoodModal = ({ isOpen, food, initialName, onClose, onSaved }: CustomFoodModalProps) => {
  const { upsert } = useAppData();
  const showToast = useToast();
  const [draft, setDraft] = useState<Draft>(() => toDraft(food, initialName));
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDraft(toDraft(food, initialName));
      setHasSubmitted(false);
    }
  }, [isOpen, food, initialName]);

  const set = <K extends keyof Draft>(key: K, value: Draft[K]) => setDraft((current) => ({ ...current, [key]: value }));
  const toggleTag = (tag: FoodTag, checked: boolean) =>
    set('tags', checked ? [...draft.tags, tag] : draft.tags.filter((t) => t !== tag));

  const errors = {
    name: !draft.name.trim() ? 'Name is required' : '',
    servingGrams: draft.servingGrams === '' || draft.servingGrams <= 0 ? 'Required' : '',
    kcal: draft.kcal === '' || draft.kcal < 0 ? 'Required' : '',
  };
  const isValid = !errors.name && !errors.servingGrams && !errors.kcal;
  const show = (message: string) => (hasSubmitted ? message || undefined : undefined);

  // Suggest calories from macros when the label only lists macros.
  const macroKcal = kcalFromMacros({ protein: Number(draft.protein || 0), carbs: Number(draft.carbs || 0), fat: Number(draft.fat || 0) });

  const handleSave = () => {
    setHasSubmitted(true);
    if (!isValid) return;
    const saved: FoodItem = {
      id: food?.id ?? `custom-${createId()}`,
      name: draft.name.trim(),
      brand: draft.brand.trim() || undefined,
      category: food?.source === 'openfoodfacts' ? food.category : 'My foods',
      servingLabel: draft.servingLabel.trim() || `${draft.servingGrams} g`,
      servingGrams: Number(draft.servingGrams),
      kcal: Number(draft.kcal),
      protein: Number(draft.protein || 0),
      carbs: Number(draft.carbs || 0),
      fat: Number(draft.fat || 0),
      tags: draft.tags,
      source: food?.source ?? 'custom',
    };
    upsert('customFoods', saved);
    showToast(food ? 'Food updated' : 'Food added to My foods');
    onSaved?.(saved);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title={food ? 'Edit food' : 'Create custom food'}
      description="Values are per serving. Check the nutrition label on the package."
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save food</Button>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Food name" error={show(errors.name)} className="sm:col-span-2">
          <TextInput value={draft.name} onChange={(e) => set('name', e.target.value)} placeholder="e.g. Mom's chicken soup" />
        </Field>
        <Field label="Brand (optional)">
          <TextInput value={draft.brand} onChange={(e) => set('brand', e.target.value)} placeholder="e.g. Indofood" />
        </Field>
        <Field label="Serving label">
          <TextInput value={draft.servingLabel} onChange={(e) => set('servingLabel', e.target.value)} placeholder="1 bowl" />
        </Field>
        <Field label="Serving weight" error={show(errors.servingGrams)}>
          <NumberInput value={draft.servingGrams} min={1} onValueChange={(v) => set('servingGrams', v)} suffix="g" />
        </Field>
        <Field
          label="Calories"
          error={show(errors.kcal)}
          hint={macroKcal > 0 && draft.kcal === '' ? (
            <button type="button" className="text-brand-700 dark:text-brand-400 hover:underline" onClick={() => set('kcal', macroKcal)}>
              Use {macroKcal} kcal (from macros)
            </button>
          ) : undefined}
        >
          <NumberInput value={draft.kcal} min={0} onValueChange={(v) => set('kcal', v)} suffix="kcal" />
        </Field>
        <Field label="Protein">
          <NumberInput value={draft.protein} min={0} step={0.1} onValueChange={(v) => set('protein', v)} suffix="g" />
        </Field>
        <Field label="Carbs">
          <NumberInput value={draft.carbs} min={0} step={0.1} onValueChange={(v) => set('carbs', v)} suffix="g" />
        </Field>
        <Field label="Fat">
          <NumberInput value={draft.fat} min={0} step={0.1} onValueChange={(v) => set('fat', v)} suffix="g" />
        </Field>
        <div className="sm:col-span-2">
          <p className="mb-2 text-xs font-medium text-slate-600">Contains (used for diet filters)</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {TAG_OPTIONS.map((tag) => (
              <Checkbox key={tag.value} label={tag.label} checked={draft.tags.includes(tag.value)} onChange={(checked) => toggleTag(tag.value, checked)} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
