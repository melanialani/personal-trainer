import type { MealType, PlannedItem } from '../types';

export interface MealTemplate {
  id: string;
  title: string;
  meals: MealType[];
  /** Base servings; the generator scales them to hit the calorie budget of the meal. */
  items: PlannedItem[];
}

const t = (id: string, title: string, meals: MealType[], items: [string, number][]): MealTemplate => ({
  id,
  title,
  meals,
  items: items.map(([foodId, servings]) => ({ foodId, servings })),
});

export const MEAL_TEMPLATES: MealTemplate[] = [
  // Breakfast
  t('b-oat-banana', 'Oatmeal pisang + selai kacang', ['breakfast'], [['oatmeal', 1], ['banana', 1], ['peanut-butter', 1], ['milk-low', 0.5]]),
  t('b-oat-berries', 'Overnight oats blueberry + chia seed', ['breakfast'], [['oatmeal', 1], ['greek-yogurt', 0.5], ['blueberries', 0.5], ['chia-seeds', 1]]),
  t('b-egg-toast', 'Telur dadar + roti gandum + tomat', ['breakfast'], [['egg-omelette', 1], ['whole-wheat-bread', 2], ['tomato', 1]]),
  t('b-avocado-toast', 'Roti gandum alpukat + telur rebus', ['breakfast'], [['whole-wheat-bread', 2], ['avocado', 0.5], ['egg-boiled', 2]]),
  t('b-yogurt-bowl', 'Yogurt granola + stroberi', ['breakfast'], [['greek-yogurt', 1], ['granola', 0.5], ['strawberries', 1]]),
  t('b-bubur-ayam', 'Bubur ayam', ['breakfast'], [['bubur-ayam', 1]]),
  t('b-nasi-uduk', 'Nasi uduk + telur rebus + tempe bacem', ['breakfast'], [['nasi-uduk', 0.75], ['egg-boiled', 1], ['tempe-bacem', 1]]),
  t('b-tofu-scramble', 'Orak-arik tahu + roti gandum + bayam', ['breakfast'], [['tofu', 1.5], ['whole-wheat-bread', 2], ['spinach', 0.5], ['olive-oil', 0.5]]),
  t('b-smoothie', 'Smoothie protein pisang oat', ['breakfast'], [['whey-protein', 1], ['banana', 1], ['oatmeal', 0.75], ['milk-low', 1]]),
  t('b-vegan-smoothie', 'Smoothie mangga protein nabati', ['breakfast'], [['plant-protein', 1], ['mango', 1], ['soy-milk', 1], ['chia-seeds', 1]]),
  t('b-sweet-potato-egg', 'Ubi rebus + telur rebus + pepaya', ['breakfast'], [['sweet-potato', 1], ['egg-boiled', 2], ['papaya', 1]]),

  // Lunch & dinner
  t('m-chicken-rice-broc', 'Dada ayam panggang + nasi merah + brokoli', ['lunch', 'dinner'], [['chicken-breast', 1.5], ['brown-rice', 1], ['broccoli', 1]]),
  t('m-ayam-bakar', 'Ayam bakar + nasi + sayur asem', ['lunch', 'dinner'], [['ayam-bakar', 1], ['white-rice', 1], ['sayur-asem', 1]]),
  t('m-salmon-potato', 'Salmon panggang + kentang + buncis', ['lunch', 'dinner'], [['salmon', 1.5], ['potato-boiled', 1], ['green-beans', 1]]),
  t('m-ikan-bakar', 'Ikan bakar + nasi + tumis kangkung', ['lunch', 'dinner'], [['ikan-bakar', 1], ['white-rice', 1], ['tumis-kangkung', 1], ['sambal', 1]]),
  t('m-pepes-ikan', 'Pepes ikan + nasi merah + urap', ['lunch', 'dinner'], [['pepes-ikan', 1], ['brown-rice', 1], ['urap', 1]]),
  t('m-tempe-tahu', 'Tempe & tahu bacem + nasi + sayur sop', ['lunch', 'dinner'], [['tempe-bacem', 1], ['tahu-bacem', 1], ['white-rice', 1], ['sayur-sop', 1]]),
  t('m-gado-gado', 'Gado-gado + lontong', ['lunch', 'dinner'], [['gado-gado', 1], ['lontong', 0.5]]),
  t('m-pecel', 'Pecel + nasi + tempe goreng', ['lunch', 'dinner'], [['pecel', 1], ['white-rice', 0.75], ['tempe-goreng', 1]]),
  t('m-soto-ayam', 'Soto ayam + nasi', ['lunch', 'dinner'], [['soto-ayam', 1], ['white-rice', 1]]),
  t('m-sop-ayam', 'Sop ayam + nasi + tempe', ['lunch', 'dinner'], [['sop-ayam', 1], ['white-rice', 1], ['tempe-goreng', 0.5]]),
  t('m-beef-stirfry', 'Tumis daging sapi + nasi + pakcoy', ['lunch', 'dinner'], [['beef-lean', 1.25], ['white-rice', 1], ['pakcoy', 1]]),
  t('m-rendang', 'Rendang + nasi + sayuran', ['lunch', 'dinner'], [['rendang', 1], ['white-rice', 1], ['mixed-veg', 1]]),
  t('m-shrimp-capcay', 'Capcay udang + nasi', ['lunch', 'dinner'], [['capcay', 1], ['shrimp', 1], ['white-rice', 1]]),
  t('m-tuna-salad', 'Wrap tuna salad', ['lunch', 'dinner'], [['tuna-canned', 1], ['tortilla', 2], ['salad-bowl', 1], ['olive-oil', 0.5]]),
  t('m-chicken-pasta', 'Pasta gandum ayam tomat', ['lunch', 'dinner'], [['whole-wheat-pasta', 1.25], ['chicken-breast', 1], ['tomato', 1], ['olive-oil', 0.5]]),
  t('m-lentil-curry', 'Kari lentil + nasi merah', ['lunch', 'dinner'], [['lentils', 1], ['brown-rice', 1], ['spinach', 0.5]]),
  t('m-chickpea-bowl', 'Quinoa kacang arab + salad', ['lunch', 'dinner'], [['chickpeas', 0.75], ['quinoa', 1], ['salad-bowl', 1], ['olive-oil', 0.5]]),
  t('m-tofu-stirfry', 'Tumis tahu sayur + nasi', ['lunch', 'dinner'], [['tofu', 1.5], ['white-rice', 1], ['mixed-veg', 1], ['cooking-oil', 0.5]]),
  t('m-pork-loin', 'Babi panggang + kentang + salad', ['lunch', 'dinner'], [['pork-loin', 1.25], ['potato-boiled', 1], ['salad-bowl', 1]]),
  t('m-tilapia', 'Nila panggang + ubi + brokoli', ['lunch', 'dinner'], [['tilapia', 1.5], ['sweet-potato', 1], ['broccoli', 1]]),
  t('m-gulai-ayam', 'Gulai ayam + nasi + timun', ['lunch', 'dinner'], [['gulai-ayam', 1], ['white-rice', 1], ['cucumber', 0.5]]),
  t('m-mackerel', 'Kembung bakar + nasi + sayur lodeh', ['lunch', 'dinner'], [['mackerel', 1], ['white-rice', 1], ['sayur-lodeh', 0.75]]),
  t('m-egg-veg-rice', 'Telur balado + nasi + buncis', ['lunch', 'dinner'], [['telur-balado', 2], ['white-rice', 1], ['green-beans', 1]]),
  t('m-bean-tempeh', 'Tempe + kacang merah + nasi merah + brokoli', ['lunch', 'dinner'], [['tempeh', 1], ['kidney-beans', 0.5], ['brown-rice', 0.75], ['broccoli', 1]]),

  // Snacks
  t('s-apple-pb', 'Apel + selai kacang', ['snack'], [['apple', 1], ['peanut-butter', 1]]),
  t('s-yogurt-fruit', 'Yogurt greek + blueberry', ['snack'], [['greek-yogurt', 1], ['blueberries', 0.5]]),
  t('s-almonds', 'Almond + jeruk', ['snack'], [['almonds', 1], ['orange', 1]]),
  t('s-boiled-eggs', 'Telur rebus + timun', ['snack'], [['egg-boiled', 2], ['cucumber', 0.5]]),
  t('s-edamame', 'Edamame rebus', ['snack'], [['edamame', 0.75]]),
  t('s-protein-bar', 'Protein bar', ['snack'], [['protein-bar', 1]]),
  t('s-fruit-bowl', 'Buah potong (pepaya, semangka, jambu)', ['snack'], [['papaya', 1], ['watermelon', 1], ['guava', 1]]),
  t('s-banana-milk', 'Pisang + susu kedelai', ['snack'], [['banana', 1], ['soy-milk', 1]]),
  t('s-cottage', 'Keju cottage + nanas', ['snack'], [['cottage-cheese', 1], ['pineapple', 0.5]]),
  t('s-boiled-peanuts', 'Kacang rebus + buah naga', ['snack'], [['boiled-peanuts', 0.5], ['dragon-fruit', 0.5]]),
  // More Indonesian everyday menus
  t('b-lontong-sayur', 'Lontong sayur', ['breakfast'], [['lontong-sayur', 1]]),
  t('b-roti-telur', 'Roti gandum + telur ceplok + susu', ['breakfast'], [['whole-wheat-bread', 2], ['egg-fried', 1], ['milk-low', 1]]),
  t('b-nasi-kuning', 'Nasi kuning', ['breakfast'], [['nasi-kuning', 0.75]]),
  t('m-soto-lamongan', 'Soto lamongan + nasi', ['lunch', 'dinner'], [['soto-lamongan', 1], ['white-rice', 1]]),
  t('m-rawon', 'Rawon + nasi + telur asin', ['lunch', 'dinner'], [['rawon', 1], ['white-rice', 1], ['telur-asin', 0.5]]),
  t('m-ayam-taliwang', 'Ayam taliwang + nasi + lalapan', ['lunch', 'dinner'], [['ayam-taliwang', 1], ['white-rice', 1], ['lalapan', 1]]),
  t('m-ikan-balado', 'Ikan balado + nasi + sayur bening', ['lunch', 'dinner'], [['ikan-balado', 1], ['white-rice', 1], ['sayur-bening', 1]]),
  t('m-coto', 'Coto makassar + ketupat', ['lunch', 'dinner'], [['coto-makassar', 1], ['lontong', 1]]),
  t('m-karedok', 'Karedok + nasi + tempe goreng', ['lunch', 'dinner'], [['karedok', 1], ['white-rice', 0.75], ['tempe-goreng', 1]]),
  t('m-sate-taichan', 'Sate taichan + lontong', ['lunch', 'dinner'], [['sate-taichan', 1], ['lontong', 1]]),
  t('m-oseng-tempe', 'Oseng tempe + nasi merah + labu siam', ['lunch', 'dinner'], [['oseng-tempe', 1], ['brown-rice', 1], ['labu-siam', 1]]),
  t('s-rujak', 'Rujak buah', ['snack'], [['rujak-buah', 0.75]]),
  t('s-telur-puyuh', 'Telur puyuh + jeruk', ['snack'], [['telur-puyuh', 1], ['orange', 1]]),
];
