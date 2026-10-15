export interface Activity {
  id: string;
  name: string;
  met: number;
}

/** MET values from the Compendium of Physical Activities (2024). */
export const ACTIVITIES: Activity[] = [
  { id: 'walking', name: 'Walking, moderate (5 km/h)', met: 3.5 },
  { id: 'walking-brisk', name: 'Walking, brisk (6 km/h)', met: 4.3 },
  { id: 'running-8', name: 'Running (8 km/h)', met: 8.3 },
  { id: 'running-10', name: 'Running (10 km/h)', met: 9.8 },
  { id: 'cycling-leisure', name: 'Cycling, leisure', met: 4 },
  { id: 'cycling-moderate', name: 'Cycling, moderate (19–22 km/h)', met: 8 },
  { id: 'swimming', name: 'Swimming, moderate laps', met: 7 },
  { id: 'strength-training', name: 'Strength training, general', met: 5 },
  { id: 'hiit', name: 'HIIT / circuit training', met: 8 },
  { id: 'yoga', name: 'Yoga (hatha)', met: 2.5 },
  { id: 'pilates', name: 'Pilates', met: 3 },
  { id: 'zumba', name: 'Aerobic dance / Zumba', met: 6.5 },
  { id: 'badminton', name: 'Badminton, recreational', met: 5.5 },
  { id: 'futsal', name: 'Futsal / soccer', met: 7 },
  { id: 'basketball', name: 'Basketball, game', met: 6.5 },
  { id: 'tennis', name: 'Tennis, singles', met: 8 },
  { id: 'hiking', name: 'Hiking', met: 6 },
  { id: 'jump-rope', name: 'Jump rope, moderate', met: 11 },
  { id: 'stairs', name: 'Stair climbing', met: 8 },
  { id: 'housework', name: 'Housework, vigorous', met: 3.5 },
];
