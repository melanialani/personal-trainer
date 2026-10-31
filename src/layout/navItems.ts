import {
  Apple,
  Baby,
  BookOpenText,
  Church,
  Dumbbell,
  Flower2,
  HandHeart,
  HeartPulse,
  LayoutDashboard,
  NotebookPen,
  Pill,
  Ruler,
  Smile,
  Sparkles,
  Syringe,
  Scale,
  Search,
  Settings,
  Target,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  path: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
}

export type NavGroupId = 'fitness' | 'health' | 'parenting' | 'spiritual';

export interface NavGroup {
  id: NavGroupId;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  /** Shown in the phone bottom bar when the group is active (keep ≤ 4). */
  items: NavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'fitness',
    label: 'Fitness',
    shortLabel: 'Fitness',
    icon: HeartPulse,
    items: [
      { path: '/', label: 'Dashboard', shortLabel: 'Home', icon: LayoutDashboard },
      { path: '/workouts', label: 'Workouts', shortLabel: 'Workouts', icon: Dumbbell },
      { path: '/weight', label: 'Weight Log', shortLabel: 'Weight', icon: Scale },
      { path: '/profile', label: 'Profile & Goals', shortLabel: 'Goals', icon: Target },
    ],
  },
  {
    id: 'health',
    label: 'Food & Health',
    shortLabel: 'Health',
    icon: Apple,
    items: [
      { path: '/diary', label: 'Food Diary', shortLabel: 'Diary', icon: NotebookPen },
      { path: '/lookup', label: 'Calorie Lookup', shortLabel: 'Lookup', icon: Search },
      { path: '/meal-plan', label: 'Meal Planner', shortLabel: 'Meals', icon: UtensilsCrossed },
      { path: '/medicine', label: 'Medicine Guide', shortLabel: 'Medicine', icon: Pill },
    ],
  },
  {
    id: 'parenting',
    label: 'Parenting',
    shortLabel: 'Parenting',
    icon: Baby,
    items: [
      { path: '/children', label: 'My Children', shortLabel: 'Children', icon: Smile },
      { path: '/development', label: 'Development', shortLabel: 'Growing', icon: Sparkles },
      { path: '/immunization', label: 'Vaccines & Meds', shortLabel: 'Vaccines', icon: Syringe },
      { path: '/growth', label: 'Growth', shortLabel: 'Growth', icon: Ruler },
    ],
  },
  {
    id: 'spiritual',
    label: 'Spiritual Guide',
    shortLabel: 'Spiritual',
    icon: Church,
    items: [
      { path: '/bible', label: 'Bible', shortLabel: 'Bible', icon: BookOpenText },
      { path: '/prayers', label: 'Prayers', shortLabel: 'Prayers', icon: HandHeart },
      { path: '/rosary', label: 'Rosary', shortLabel: 'Rosary', icon: Flower2 },
    ],
  },
];

export const SETTINGS_ITEM: NavItem = { path: '/settings', label: 'Data & Settings', shortLabel: 'Data', icon: Settings };

export const findGroupByPath = (path: string): NavGroup | undefined =>
  NAV_GROUPS.find((group) => group.items.some((item) => item.path === path));
