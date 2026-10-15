import { ArrowLeft, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createFoodLogEntry, findFood } from '../../lib/foods';
import { MEAL_LABELS, mealForCurrentTime } from '../../lib/meals';
import { formatShortDate, todayKey } from '../../lib/date';
import { Button } from '../../shared/components/Button';
import { Modal } from '../../shared/components/Modal';
import { Tabs } from '../../shared/components/Tabs';
import { useToast } from '../../shared/components/ToastProvider';
import { useAppData } from '../../store/AppDataContext';
import type { FoodItem, FoodLogEntry, MealType } from '../../types';
import { CustomFoodModal } from './CustomFoodModal';
import { FoodPicker } from './FoodPicker';
import { OnlineFoodSearch } from './OnlineFoodSearch';
import { ServingForm } from './ServingForm';
import { useFoods } from './useFoods';

type SourceTab = 'database' | 'online';

interface AddFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  date?: string;
  meal?: MealType;
  /** Skip the picker and go straight to the amount step. */
  initialFood?: FoodItem | null;
  initialServings?: number;
  /** When set, the modal edits this entry instead of adding a new one. */
  entry?: FoodLogEntry | null;
}

export const AddFoodModal = ({ isOpen, onClose, date = todayKey(), meal, initialFood, initialServings = 1, entry }: AddFoodModalProps) => {
  const { data, upsert } = useAppData();
  const { rememberFood } = useFoods();
  const showToast = useToast();
  const [food, setFood] = useState<FoodItem | null>(null);
  const [servings, setServings] = useState<number | ''>(1);
  const [selectedMeal, setSelectedMeal] = useState<MealType>('breakfast');
  const [tab, setTab] = useState<SourceTab>('database');
  const [customName, setCustomName] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const entryFood = entry ? findFood(entry.foodId, data.customFoods) : null;
    setFood(entryFood ?? initialFood ?? null);
    setServings(entry?.servings ?? initialServings);
    setSelectedMeal(entry?.meal ?? meal ?? mealForCurrentTime());
    setTab('database');
    // Only reset when the modal opens.
  }, [isOpen]);

  const handleSelect = (selected: FoodItem) => {
    setFood(selected);
    setServings(1);
  };

  const handleSave = () => {
    if (!food || servings === '' || servings <= 0) return;
    rememberFood(food);
    upsert('foodLog', createFoodLogEntry({ food, servings, date: entry?.date ?? date, meal: selectedMeal, id: entry?.id }));
    showToast(entry ? 'Entry updated' : `Added to ${MEAL_LABELS[selectedMeal].toLowerCase()}`);
    onClose();
  };

  const isPicking = !food;
  const title = entry ? 'Edit entry' : `Add food · ${date === todayKey() ? 'Today' : formatShortDate(date)}`;

  return (
    <>
      <Modal
        isOpen={isOpen}
        title={title}
        size="lg"
        onClose={onClose}
        footer={
          isPicking ? (
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          ) : (
            <>
              {!entry && !initialFood && (
                <Button variant="ghost" icon={<ArrowLeft size={16} />} onClick={() => setFood(null)} className="mr-auto">
                  Back
                </Button>
              )}
              <Button variant="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={servings === '' || servings <= 0}>
                {entry ? 'Save changes' : `Add to ${MEAL_LABELS[selectedMeal]}`}
              </Button>
            </>
          )
        }
      >
        {isPicking ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Tabs
                tabs={[
                  { value: 'database', label: 'Food database' },
                  { value: 'online', label: 'Search online' },
                ]}
                value={tab}
                onChange={setTab}
              />
              <Button size="sm" variant="secondary" icon={<Plus size={14} />} onClick={() => setCustomName('')}>
                Custom food
              </Button>
            </div>
            {tab === 'database' ? (
              <FoodPicker
                onSelect={handleSelect}
                emptyAction={(query) => (
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button size="sm" variant="secondary" onClick={() => setTab('online')}>
                      Search online
                    </Button>
                    <Button size="sm" variant="secondary" onClick={() => setCustomName(query)}>
                      Create “{query || 'custom food'}”
                    </Button>
                  </div>
                )}
              />
            ) : (
              <OnlineFoodSearch onSelect={handleSelect} />
            )}
          </div>
        ) : (
          <ServingForm food={food} servings={servings} meal={selectedMeal} onServingsChange={setServings} onMealChange={setSelectedMeal} />
        )}
      </Modal>
      <CustomFoodModal
        isOpen={customName !== null}
        initialName={customName ?? ''}
        onClose={() => setCustomName(null)}
        onSaved={handleSelect}
      />
    </>
  );
};
