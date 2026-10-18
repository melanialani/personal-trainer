import { useMemo, useState } from 'react';
import { ALL_EQUIPMENT, EQUIPMENT_LABELS, EXERCISES, isExerciseAvailable, MUSCLE_LABELS, type MuscleGroup, type TrainingSetup } from '../../data/exercises';
import { useAppData } from '../../store/AppDataContext';
import { Card } from '../../shared/components/Card';
import { EmptyState } from '../../shared/components/EmptyState';
import { SearchInput, Select } from '../../shared/components/FormFields';
import type { Equipment } from '../../types';
import { ExerciseDetails } from './ExerciseInfoModal';

const ALL = 'all';
const MINE = 'mine';
const BODYWEIGHT = 'bodyweight';
const NOTHING = 'nothing';

type EquipmentFilter = Equipment | typeof ALL | typeof MINE | typeof BODYWEIGHT | typeof NOTHING;

const NO_SETUP: TrainingSetup = { equipment: [], hasMat: false, hasFurniture: false };

export const ExerciseLibraryTab = () => {
  const [query, setQuery] = useState('');
  const [muscle, setMuscle] = useState<MuscleGroup | typeof ALL>(ALL);
  const { data } = useAppData();
  const setup = data.profile?.workout ?? NO_SETUP;
  const [equipment, setEquipment] = useState<EquipmentFilter>(data.profile ? MINE : ALL);

  const results = useMemo(
    () =>
      EXERCISES.filter(
        (exercise) =>
          (muscle === ALL || exercise.muscle === muscle) &&
          (equipment === ALL ||
            (equipment === MINE && isExerciseAvailable(exercise, setup)) ||
            (equipment === BODYWEIGHT && exercise.equipment.length === 0) ||
            (equipment === NOTHING && isExerciseAvailable(exercise, NO_SETUP)) ||
            exercise.equipment.includes(equipment as Equipment)) &&
          exercise.name.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query, muscle, equipment, setup],
  );

  return (
    <>
      <div className="mb-4 grid gap-2 sm:grid-cols-[minmax(0,1fr)_180px_180px]">
        <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`Search ${EXERCISES.length} exercises`} />
        <Select
          value={muscle}
          options={[{ value: ALL, label: 'All muscles' }, ...(Object.keys(MUSCLE_LABELS) as MuscleGroup[]).map((value) => ({ value, label: MUSCLE_LABELS[value] }))]}
          onValueChange={setMuscle}
        />
        <Select
          value={equipment}
          options={[
            { value: ALL, label: 'Any equipment' },
            ...(data.profile ? [{ value: MINE, label: 'What I have' }] : []),
            { value: BODYWEIGHT, label: 'Bodyweight only' },
            { value: NOTHING, label: 'No equipment, no mat' },
            ...ALL_EQUIPMENT.map((value) => ({ value, label: EQUIPMENT_LABELS[value] })),
          ] as { value: EquipmentFilter; label: string }[]}
          onValueChange={setEquipment}
        />
      </div>
      {results.length === 0 ? (
        <Card>
          <EmptyState title="No exercises match these filters" />
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {results.map((exercise) => (
            <Card key={exercise.id} title={exercise.name}>
              <ExerciseDetails exercise={exercise} />
            </Card>
          ))}
        </div>
      )}
    </>
  );
};
