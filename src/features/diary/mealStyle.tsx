import { Apple, Coffee, Moon, Salad } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Tone } from '../../shared/tones';
import type { MealType } from '../../types';

/** Card icon and tone per meal, so the meal cards on a page each get their own color. */
export const MEAL_ICONS: Record<MealType, ReactNode> = {
  breakfast: <Coffee />,
  lunch: <Salad />,
  dinner: <Moon />,
  snack: <Apple />,
};

export const MEAL_TONES: Record<MealType, Tone> = {
  breakfast: 'sky',
  lunch: 'emerald',
  dinner: 'indigo',
  snack: 'pink',
};
