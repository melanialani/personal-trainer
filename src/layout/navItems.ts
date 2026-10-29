import { Dumbbell, LayoutDashboard, NotebookPen, Pill, Scale, Search, Settings, Target, UtensilsCrossed, type LucideIcon } from 'lucide-react';

export interface NavItem {
  path: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  isPrimaryOnMobile?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Dashboard', shortLabel: 'Home', icon: LayoutDashboard, isPrimaryOnMobile: true },
  { path: '/diary', label: 'Food Diary', shortLabel: 'Diary', icon: NotebookPen, isPrimaryOnMobile: true },
  { path: '/lookup', label: 'Calorie Lookup', shortLabel: 'Lookup', icon: Search },
  { path: '/meal-plan', label: 'Meal Planner', shortLabel: 'Meals', icon: UtensilsCrossed },
  { path: '/workouts', label: 'Workouts', shortLabel: 'Workouts', icon: Dumbbell, isPrimaryOnMobile: true },
  { path: '/weight', label: 'Weight Log', shortLabel: 'Weight', icon: Scale, isPrimaryOnMobile: true },
  { path: '/medicine', label: 'Medicine Guide', shortLabel: 'Medicine', icon: Pill },
  { path: '/profile', label: 'Profile & Goals', shortLabel: 'Goals', icon: Target },
  { path: '/settings', label: 'Data & Settings', shortLabel: 'Data', icon: Settings },
];
