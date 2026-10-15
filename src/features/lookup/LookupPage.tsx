import { Footprints, Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { ACTIVITIES } from '../../data/activities';
import { minutesToBurn } from '../../lib/calc';
import { scaleNutrition } from '../../lib/foods';
import { formatNumber } from '../../lib/format';
import { Button, IconButton } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useConfirmDelete } from '../../shared/components/ConfirmProvider';
import { EmptyState } from '../../shared/components/EmptyState';
import { Modal } from '../../shared/components/Modal';
import { PageHeader } from '../../shared/components/PageHeader';
import { Tabs } from '../../shared/components/Tabs';
import { useBodyWeightKg } from '../../shared/hooks/useBodyWeightKg';
import { useIsDesktop } from '../../shared/hooks/useMediaQuery';
import { useAppData } from '../../store/AppDataContext';
import type { FoodItem } from '../../types';
import { AddFoodModal } from '../foods/AddFoodModal';
import { CustomFoodModal } from '../foods/CustomFoodModal';
import { FoodPicker } from '../foods/FoodPicker';
import { FoodRow } from '../foods/FoodRow';
import { OnlineFoodSearch } from '../foods/OnlineFoodSearch';
import { ServingForm } from '../foods/ServingForm';

type LookupTab = 'database' | 'online' | 'mine';

const BURN_ACTIVITY_IDS = ['walking-brisk', 'running-8', 'cycling-moderate', 'jump-rope'];

export const LookupPage = () => {
  const { data, targets, remove } = useAppData();
  const confirmDelete = useConfirmDelete();
  const isDesktop = useIsDesktop();
  const [tab, setTab] = useState<LookupTab>('database');
  const [selected, setSelected] = useState<FoodItem | null>(null);
  const [servings, setServings] = useState<number | ''>(1);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingFood, setEditingFood] = useState<FoodItem | null | undefined>(undefined);

  const weightKg = useBodyWeightKg();
  const amount = servings === '' ? 0 : servings;
  const totals = selected ? scaleNutrition(selected, amount) : null;

  const handleSelect = (food: FoodItem) => {
    setSelected(food);
    setServings(1);
  };

  const handleDeleteCustom = async (food: FoodItem) => {
    if (!(await confirmDelete(food.name))) return;
    remove('customFoods', food.id);
    if (selected?.id === food.id) setSelected(null);
  };

  const details = selected && totals && (
    <div className="space-y-5">
      <ServingForm food={selected} servings={servings} onServingsChange={setServings} />
      {targets && (
        <p className="text-sm text-slate-600">
          That is <span className="font-semibold text-slate-900">{formatNumber((totals.kcal / targets.kcal) * 100)}%</span> of your daily target of{' '}
          {formatNumber(targets.kcal)} kcal.
        </p>
      )}
      <div>
        <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <Footprints size={14} /> Time to burn it off
        </p>
        <ul className="space-y-1.5 text-sm">
          {ACTIVITIES.filter((activity) => BURN_ACTIVITY_IDS.includes(activity.id)).map((activity) => (
            <li key={activity.id} className="flex justify-between gap-2">
              <span className="text-slate-600">{activity.name}</span>
              <span className="shrink-0 font-medium tabular-nums text-slate-900">
                {formatNumber(minutesToBurn(totals.kcal, activity.met, weightKg))} min
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-1 text-[11px] text-slate-400">Based on a body weight of {formatNumber(weightKg, 1)} kg.</p>
      </div>
      {data.profile && (
        <Button className="w-full" icon={<Plus size={16} />} disabled={amount <= 0} onClick={() => setIsAddOpen(true)}>
          Add to food diary
        </Button>
      )}
    </div>
  );

  return (
    <>
      <PageHeader
        title="Calorie Lookup"
        description="Ask how many calories are in a food — search the built-in database or packaged products online."
        actions={
          <Button variant="secondary" icon={<Plus size={16} />} onClick={() => setEditingFood(null)}>
            Custom food
          </Button>
        }
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_380px]">
        <Card>
          <div className="mb-4">
            <Tabs
              tabs={[
                { value: 'database', label: 'Database' },
                { value: 'online', label: 'Online' },
                { value: 'mine', label: `My foods (${data.customFoods.length})` },
              ]}
              value={tab}
              onChange={setTab}
            />
          </div>
          {tab === 'database' && (
            <FoodPicker
              onSelect={handleSelect}
              listClassName="lg:max-h-[60dvh]"
              emptyAction={() => (
                <Button size="sm" variant="secondary" onClick={() => setTab('online')}>
                  Search online instead
                </Button>
              )}
            />
          )}
          {tab === 'online' && <OnlineFoodSearch onSelect={handleSelect} actionLabel="View" />}
          {tab === 'mine' &&
            (data.customFoods.length === 0 ? (
              <EmptyState
                icon={<Plus size={22} />}
                title="No custom foods yet"
                description="Create foods from nutrition labels or home recipes. Products you add from online search also appear here."
                action={<Button onClick={() => setEditingFood(null)}>Create custom food</Button>}
              />
            ) : (
              <div className="divide-y divide-slate-100 rounded-xl border border-slate-200">
                {data.customFoods.map((food) => (
                  <FoodRow
                    key={food.id}
                    food={food}
                    onSelect={() => handleSelect(food)}
                    trailing={
                      <div className="flex">
                        <IconButton label="Edit food" onClick={() => setEditingFood(food)}>
                          <Pencil size={15} />
                        </IconButton>
                        <IconButton label="Delete food" tone="danger" onClick={() => handleDeleteCustom(food)}>
                          <Trash2 size={15} />
                        </IconButton>
                      </div>
                    }
                  />
                ))}
              </div>
            ))}
        </Card>

        <div className="hidden lg:sticky lg:top-8 lg:block lg:self-start">
          <Card title="Nutrition details">
            {details || (
              <EmptyState icon={<Search size={22} />} title="Pick a food" description="Select any food to see its calories, macros and how long it takes to burn off." />
            )}
          </Card>
        </div>
      </div>

      {/* Phones: details open as a sheet instead of far below the long list. */}
      <Modal
        isOpen={!isDesktop && selected !== null}
        title="Nutrition details"
        onClose={() => setSelected(null)}
        footer={
          <Button variant="secondary" onClick={() => setSelected(null)}>
            Close
          </Button>
        }
      >
        {details}
      </Modal>
      <AddFoodModal isOpen={isAddOpen} initialFood={selected} initialServings={amount || 1} onClose={() => setIsAddOpen(false)} />
      <CustomFoodModal isOpen={editingFood !== undefined} food={editingFood} onClose={() => setEditingFood(undefined)} onSaved={handleSelect} />
    </>
  );
};
