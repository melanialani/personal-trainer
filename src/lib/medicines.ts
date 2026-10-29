import type { CareGuide } from '../data/careGuides';
import {
  AVAILABILITY_LABELS,
  GROUP_LABELS,
  SYMPTOM_KEYWORDS,
  SYMPTOM_LABELS,
  type Availability,
  type ChildUse,
  type MealTiming,
  type Medicine,
  type MedicineForm,
  type MedicineGroup,
  type PregnancyUse,
  type Symptom,
} from '../data/medicines';

export const ANY = 'any';
type OrAny<T> = T | typeof ANY;

export interface MedicineFilters {
  symptom: OrAny<Symptom>;
  group: OrAny<MedicineGroup>;
  ingredient: OrAny<string>;
  form: OrAny<MedicineForm>;
  timing: OrAny<MealTiming>;
  availability: OrAny<Availability>;
  childUse: OrAny<ChildUse>;
  pregnancy: OrAny<PregnancyUse>;
}

export const EMPTY_MEDICINE_FILTERS: MedicineFilters = {
  symptom: ANY,
  group: ANY,
  ingredient: ANY,
  form: ANY,
  timing: ANY,
  availability: ANY,
  childUse: ANY,
  pregnancy: ANY,
};

export const countActiveFilters = (filters: MedicineFilters): number => Object.values(filters).filter((value) => value !== ANY).length;

/** Lower-case, accent-free text so "Parasetamol" style queries match regardless of case. */
const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

const symptomText = (symptoms: Symptom[]) => symptoms.flatMap((symptom) => [SYMPTOM_LABELS[symptom], ...SYMPTOM_KEYWORDS[symptom]]);

const medicineSearchText = (medicine: Medicine) =>
  normalize(
    [
      medicine.name,
      ...medicine.brands,
      ...medicine.ingredients,
      GROUP_LABELS[medicine.group],
      AVAILABILITY_LABELS[medicine.availability],
      medicine.summary,
      ...symptomText(medicine.symptoms),
    ].join(' '),
  );

/** Every word of the query must appear somewhere (name, brand, ingredient, symptom words, summary). */
const matchesQuery = (haystack: string, query: string) => {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  return words.every((word) => haystack.includes(word));
};

export const filterMedicines = (medicines: Medicine[], filters: MedicineFilters, query: string): Medicine[] =>
  medicines.filter(
    (medicine) =>
      (filters.symptom === ANY || medicine.symptoms.includes(filters.symptom)) &&
      (filters.group === ANY || medicine.group === filters.group) &&
      (filters.ingredient === ANY || medicine.ingredients.includes(filters.ingredient)) &&
      (filters.form === ANY || medicine.forms.includes(filters.form)) &&
      (filters.timing === ANY || medicine.timing === filters.timing) &&
      (filters.availability === ANY || medicine.availability === filters.availability) &&
      (filters.childUse === ANY || medicine.childUse === filters.childUse) &&
      (filters.pregnancy === ANY || medicine.pregnancy === filters.pregnancy) &&
      matchesQuery(medicineSearchText(medicine), query),
  );

export const filterGuides = (guides: CareGuide[], symptom: OrAny<Symptom>, query: string): CareGuide[] =>
  guides.filter(
    (guide) =>
      (symptom === ANY || guide.symptoms.includes(symptom)) &&
      matchesQuery(
        normalize([guide.title, guide.summary, ...symptomText(guide.symptoms), ...guide.sections.flatMap((section) => [section.heading, ...section.points])].join(' ')),
        query,
      ),
  );

/** Sorted unique active ingredients, for the composition filter. */
export const listIngredients = (medicines: Medicine[]): string[] =>
  Array.from(new Set(medicines.flatMap((medicine) => medicine.ingredients))).sort((a, b) => a.localeCompare(b));

/** Symptoms that at least one medicine covers, in label order. */
export const listSymptoms = (medicines: Medicine[]): Symptom[] =>
  (Object.keys(SYMPTOM_LABELS) as Symptom[]).filter((symptom) => medicines.some((medicine) => medicine.symptoms.includes(symptom)));
