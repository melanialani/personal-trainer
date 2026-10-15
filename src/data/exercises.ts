import type { Equipment } from '../types';

export type MuscleGroup = 'chest' | 'back' | 'shoulders' | 'arms' | 'legs' | 'glutes' | 'core' | 'full_body' | 'cardio';
export type ExerciseType = 'strength' | 'cardio' | 'core' | 'mobility';

export interface Exercise {
  id: string;
  name: string;
  muscle: MuscleGroup;
  type: ExerciseType;
  /** Every item listed is required. Empty = bodyweight only. */
  equipment: Equipment[];
  /** Metabolic equivalent used to estimate calories burned. */
  met: number;
  /** Rep target is time-based (e.g. "30s") instead of counted reps. */
  isTimed?: boolean;
  /** Folder id in free-exercise-db (public domain) for start/finish photos. */
  imageId?: string;
  steps: string[];
}

export const MUSCLE_LABELS: Record<MuscleGroup, string> = {
  chest: 'Chest',
  back: 'Back',
  shoulders: 'Shoulders',
  arms: 'Arms',
  legs: 'Legs',
  glutes: 'Glutes',
  core: 'Core',
  full_body: 'Full body',
  cardio: 'Cardio',
};

export const EQUIPMENT_LABELS: Record<Equipment, string> = {
  dumbbell: 'Dumbbells',
  kettlebell: 'Kettlebell',
  resistance_band: 'Resistance band',
  pull_up_bar: 'Pull-up bar',
  bench: 'Bench / sturdy step',
  jump_rope: 'Jump rope',
  barbell: 'Barbell & rack',
  gym_machines: 'Gym machines & cables',
  cardio_machine: 'Treadmill / bike / rower',
};

export const ALL_EQUIPMENT = Object.keys(EQUIPMENT_LABELS) as Equipment[];

const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises';

/** Start (0) and finish (1) position photos. */
export const exerciseImageUrls = (exercise: Exercise): string[] =>
  exercise.imageId ? [0, 1].map((frame) => `${IMAGE_BASE_URL}/${exercise.imageId}/${frame}.jpg`) : [];

export const exerciseVideoUrl = (exercise: Exercise): string =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${exercise.name} exercise proper form beginner`)}`;

export const EXERCISES: Exercise[] = [
  // Chest
  { id: 'push-up', name: 'Push-up', muscle: 'chest', type: 'strength', equipment: [], met: 3.8, imageId: 'Pushups', steps: ['Hands slightly wider than shoulders, body in a straight line from head to heels.', 'Lower your chest until it is just above the floor, elbows at about 45°.', 'Press back up while keeping your core tight.'] },
  { id: 'incline-push-up', name: 'Incline push-up (hands on table)', muscle: 'chest', type: 'strength', equipment: [], met: 3.3, imageId: 'Incline_Push-Up', steps: ['Place your hands on a sturdy table, wall or sofa edge.', 'Walk your feet back until your body is straight.', 'Lower your chest to the edge, then push back up. The higher the surface, the easier it is.'] },
  { id: 'decline-push-up', name: 'Decline push-up', muscle: 'chest', type: 'strength', equipment: [], met: 4.5, imageId: 'Push-Ups_With_Feet_Elevated', steps: ['Put your feet on a chair or step, hands on the floor.', 'Lower your chest with control.', 'Press up without letting your hips sag.'] },
  { id: 'db-bench-press', name: 'Dumbbell chest press', muscle: 'chest', type: 'strength', equipment: ['dumbbell'], met: 5, imageId: 'Dumbbell_Bench_Press', steps: ['Lie on a bench or the floor holding dumbbells above your chest.', 'Lower them slowly until your elbows are level with your torso.', 'Press up until your arms are straight without locking the elbows.'] },
  { id: 'db-fly', name: 'Dumbbell fly', muscle: 'chest', type: 'strength', equipment: ['dumbbell', 'bench'], met: 4.5, imageId: 'Dumbbell_Flyes', steps: ['Lie on a bench with dumbbells above your chest, palms facing.', 'With a slight bend in the elbows, open your arms wide.', 'Squeeze your chest to bring the weights back together.'] },
  { id: 'bench-press', name: 'Barbell bench press', muscle: 'chest', type: 'strength', equipment: ['barbell', 'bench'], met: 6, imageId: 'Barbell_Bench_Press_-_Medium_Grip', steps: ['Lie on the bench with eyes under the bar, feet flat.', 'Lower the bar to mid-chest with control.', 'Press up and lock out above your shoulders.'] },
  { id: 'chest-press-machine', name: 'Chest press machine', muscle: 'chest', type: 'strength', equipment: ['gym_machines'], met: 5, imageId: 'Leverage_Chest_Press', steps: ['Adjust the seat so the handles are at chest height.', 'Push the handles forward until your arms are extended.', 'Return slowly without letting the weight stack touch.'] },

  // Back
  { id: 'superman', name: 'Superman', muscle: 'back', type: 'strength', equipment: [], met: 3, isTimed: true, imageId: 'Superman', steps: ['Lie face down with arms extended overhead.', 'Lift arms, chest and legs off the floor.', 'Hold, squeezing your lower back and glutes, then lower.'] },
  { id: 'table-row', name: 'Inverted row (under a table)', muscle: 'back', type: 'strength', equipment: [], met: 4, imageId: 'Inverted_Row', steps: ['Lie under a sturdy table and grip the edge.', 'Keep your body straight and pull your chest to the table.', 'Lower slowly until your arms are straight.'] },
  { id: 'band-pull-apart', name: 'Band pull-apart', muscle: 'back', type: 'strength', equipment: ['resistance_band'], met: 3, imageId: 'Band_Pull_Apart', steps: ['Hold a band in front of your chest with straight arms.', 'Pull the band apart by squeezing your shoulder blades together.', 'Return slowly with control.'] },
  { id: 'band-good-morning', name: 'Band good morning', muscle: 'back', type: 'strength', equipment: ['resistance_band'], met: 3.5, imageId: 'Band_Good_Morning', steps: ['Stand on the band and loop it behind your neck.', 'Hinge forward at the hips with a flat back.', 'Drive your hips forward to stand tall.'] },
  { id: 'db-row', name: 'One-arm dumbbell row', muscle: 'back', type: 'strength', equipment: ['dumbbell'], met: 5, imageId: 'One-Arm_Dumbbell_Row', steps: ['Place one hand and knee on a bench or chair, back flat.', 'Pull the dumbbell toward your hip, elbow close to the body.', 'Lower with control, then switch sides.'] },
  { id: 'db-deadlift', name: 'Dumbbell Romanian deadlift', muscle: 'back', type: 'strength', equipment: ['dumbbell'], met: 5.5, imageId: 'Stiff-Legged_Dumbbell_Deadlift', steps: ['Stand holding dumbbells in front of your thighs.', 'Hinge at the hips, sliding the weights down your legs with a flat back.', 'Drive your hips forward to stand tall.'] },
  { id: 'pull-up', name: 'Pull-up', muscle: 'back', type: 'strength', equipment: ['pull_up_bar'], met: 6, imageId: 'Pullups', steps: ['Hang from the bar with hands slightly wider than shoulders.', 'Pull your chest toward the bar, leading with the elbows.', 'Lower all the way down with control. Beginners: use a band or jump up and lower slowly.'] },
  { id: 'lat-pulldown', name: 'Lat pulldown', muscle: 'back', type: 'strength', equipment: ['gym_machines'], met: 5, imageId: 'Wide-Grip_Lat_Pulldown', steps: ['Grip the bar wider than shoulders and lock your thighs in.', 'Pull the bar to your upper chest, squeezing your shoulder blades.', 'Return slowly to full arm extension.'] },
  { id: 'seated-row', name: 'Seated cable row', muscle: 'back', type: 'strength', equipment: ['gym_machines'], met: 5, imageId: 'Seated_Cable_Rows', steps: ['Sit tall with feet on the platform, holding the handle.', 'Pull the handle to your stomach, chest up.', 'Extend your arms slowly without rounding your back.'] },
  { id: 'deadlift', name: 'Barbell deadlift', muscle: 'back', type: 'strength', equipment: ['barbell'], met: 6, imageId: 'Barbell_Deadlift', steps: ['Feet hip-width under the bar, grip just outside your legs.', 'Brace your core and push the floor away to stand up.', 'Hinge back down keeping the bar close to your legs.'] },

  // Shoulders
  { id: 'pike-push-up', name: 'Pike push-up', muscle: 'shoulders', type: 'strength', equipment: [], met: 4, steps: ['Start in a downward-dog position, hips high.', 'Bend your elbows to lower your head toward the floor.', 'Press back up to the start.'] },
  { id: 'band-shoulder-press', name: 'Band shoulder press', muscle: 'shoulders', type: 'strength', equipment: ['resistance_band'], met: 4, imageId: 'Shoulder_Press_-_With_Bands', steps: ['Stand on the band, handles at shoulder height.', 'Press overhead until your arms are straight.', 'Lower slowly back to the shoulders.'] },
  { id: 'band-lateral-raise', name: 'Band lateral raise', muscle: 'shoulders', type: 'strength', equipment: ['resistance_band'], met: 3.5, imageId: 'Lateral_Raise_-_With_Bands', steps: ['Stand on the band holding one end in each hand.', 'Raise your arms out to shoulder height.', 'Lower slowly.'] },
  { id: 'db-shoulder-press', name: 'Dumbbell shoulder press', muscle: 'shoulders', type: 'strength', equipment: ['dumbbell'], met: 5, imageId: 'Dumbbell_Shoulder_Press', steps: ['Hold dumbbells at shoulder height, palms forward.', 'Press overhead until your arms are straight.', 'Lower slowly back to shoulder height.'] },
  { id: 'db-lateral-raise', name: 'Dumbbell lateral raise', muscle: 'shoulders', type: 'strength', equipment: ['dumbbell'], met: 4, imageId: 'Side_Lateral_Raise', steps: ['Stand with dumbbells at your sides.', 'Raise your arms out to shoulder height with a slight elbow bend.', 'Lower slowly.'] },
  { id: 'machine-shoulder-press', name: 'Shoulder press machine', muscle: 'shoulders', type: 'strength', equipment: ['gym_machines'], met: 5, imageId: 'Leverage_Shoulder_Press', steps: ['Adjust the seat so the handles are at shoulder level.', 'Press up until your arms are extended.', 'Lower under control.'] },

  // Arms
  { id: 'chair-dip', name: 'Chair dip', muscle: 'arms', type: 'strength', equipment: [], met: 3.8, imageId: 'Bench_Dips', steps: ['Hands on the edge of a sturdy chair behind you.', 'Bend your elbows to lower your hips toward the floor.', 'Press back up using your triceps.'] },
  { id: 'band-skull-crusher', name: 'Band triceps extension', muscle: 'arms', type: 'strength', equipment: ['resistance_band'], met: 3.3, imageId: 'Band_Skull_Crusher', steps: ['Anchor the band low behind you and hold it overhead.', 'Bend only at the elbows to lower your hands behind your head.', 'Extend your arms back up.'] },
  { id: 'db-curl', name: 'Dumbbell biceps curl', muscle: 'arms', type: 'strength', equipment: ['dumbbell'], met: 3.5, imageId: 'Dumbbell_Bicep_Curl', steps: ['Stand holding dumbbells, palms forward.', 'Curl the weights toward your shoulders, elbows fixed at your sides.', 'Lower slowly.'] },
  { id: 'db-triceps-ext', name: 'Overhead triceps extension', muscle: 'arms', type: 'strength', equipment: ['dumbbell'], met: 3.5, imageId: 'Standing_Dumbbell_Triceps_Extension', steps: ['Hold one dumbbell overhead with both hands.', 'Lower it behind your head by bending your elbows.', 'Extend your arms back up.'] },
  { id: 'cable-pushdown', name: 'Cable triceps pushdown', muscle: 'arms', type: 'strength', equipment: ['gym_machines'], met: 3.5, imageId: 'Triceps_Pushdown', steps: ['Grip the rope or bar at chest height.', 'Push down until your arms are straight, elbows tucked.', 'Return slowly.'] },

  // Legs & glutes
  { id: 'bw-squat', name: 'Bodyweight squat', muscle: 'legs', type: 'strength', equipment: [], met: 5, imageId: 'Bodyweight_Squat', steps: ['Feet shoulder-width apart, toes slightly out.', 'Sit your hips back and down until your thighs are parallel to the floor.', 'Drive through your heels to stand.'] },
  { id: 'lunge', name: 'Lunge', muscle: 'legs', type: 'strength', equipment: [], met: 4, imageId: 'Bodyweight_Walking_Lunge', steps: ['Step one foot forward and lower until both knees are at 90°.', 'Push through the front heel to return.', 'Alternate legs.'] },
  { id: 'wall-sit', name: 'Wall sit', muscle: 'legs', type: 'strength', equipment: [], met: 3.5, isTimed: true, steps: ['Lean your back against a wall.', 'Slide down until your knees are at 90°.', 'Hold the position.'] },
  { id: 'glute-bridge', name: 'Glute bridge', muscle: 'glutes', type: 'strength', equipment: [], met: 3.5, imageId: 'Butt_Lift_Bridge', steps: ['Lie on your back with knees bent and feet flat.', 'Drive your hips up, squeezing your glutes.', 'Lower slowly.'] },
  { id: 'step-up', name: 'Step-up with knee raise', muscle: 'legs', type: 'strength', equipment: [], met: 5, imageId: 'Step-up_with_Knee_Raise', steps: ['Stand in front of a sturdy step or the bottom stair.', 'Step up with one foot and lift the other knee to hip height.', 'Step down and alternate legs.'] },
  { id: 'calf-raise', name: 'Calf raise', muscle: 'legs', type: 'strength', equipment: [], met: 3, imageId: 'Standing_Calf_Raises', steps: ['Stand on the edge of a step.', 'Rise onto your toes as high as possible.', 'Lower your heels below the step.'] },
  { id: 'goblet-squat', name: 'Goblet squat', muscle: 'legs', type: 'strength', equipment: ['dumbbell'], met: 5.5, imageId: 'Goblet_Squat', steps: ['Hold a dumbbell vertically at your chest.', 'Squat down keeping your chest up.', 'Stand back up through your heels.'] },
  { id: 'db-lunge', name: 'Dumbbell lunge', muscle: 'legs', type: 'strength', equipment: ['dumbbell'], met: 5.5, imageId: 'Dumbbell_Lunges', steps: ['Hold dumbbells at your sides.', 'Step forward into a lunge until both knees are at 90°.', 'Push back to standing and alternate legs.'] },
  { id: 'db-step-up', name: 'Dumbbell step-up', muscle: 'legs', type: 'strength', equipment: ['dumbbell', 'bench'], met: 5.5, imageId: 'Dumbbell_Step_Ups', steps: ['Hold dumbbells and face a bench.', 'Step up and stand tall on the bench.', 'Step down with control and alternate legs.'] },
  { id: 'db-hip-thrust', name: 'Dumbbell hip thrust', muscle: 'glutes', type: 'strength', equipment: ['dumbbell', 'bench'], met: 4, imageId: 'Barbell_Hip_Thrust', steps: ['Upper back on a bench, dumbbell on your hips.', 'Drive your hips up until your body is straight from knees to shoulders.', 'Lower with control.'] },
  { id: 'back-squat', name: 'Barbell back squat', muscle: 'legs', type: 'strength', equipment: ['barbell'], met: 6, imageId: 'Barbell_Full_Squat', steps: ['Bar on your upper back, feet shoulder-width.', 'Brace and squat to at least parallel.', 'Drive up keeping your chest proud.'] },
  { id: 'leg-press', name: 'Leg press', muscle: 'legs', type: 'strength', equipment: ['gym_machines'], met: 5, imageId: 'Leg_Press', steps: ['Feet shoulder-width on the platform.', 'Lower until your knees reach about 90°.', 'Press back without locking your knees.'] },
  { id: 'leg-curl', name: 'Lying leg curl', muscle: 'legs', type: 'strength', equipment: ['gym_machines'], met: 4, imageId: 'Lying_Leg_Curls', steps: ['Lie face down with the pad above your heels.', 'Curl your heels toward your glutes.', 'Lower slowly.'] },

  // Core
  { id: 'plank', name: 'Plank', muscle: 'core', type: 'core', equipment: [], met: 3.8, isTimed: true, imageId: 'Plank', steps: ['Forearms on the floor, body in a straight line.', 'Brace your abs and glutes.', 'Hold without letting your hips sag.'] },
  { id: 'side-plank', name: 'Side plank', muscle: 'core', type: 'core', equipment: [], met: 3.5, isTimed: true, imageId: 'Side_Bridge', steps: ['Lie on your side, propped on one forearm.', 'Lift your hips so your body is straight.', 'Hold, then switch sides.'] },
  { id: 'dead-bug', name: 'Dead bug', muscle: 'core', type: 'core', equipment: [], met: 3, imageId: 'Dead_Bug', steps: ['Lie on your back, arms up and knees at 90°.', 'Lower the opposite arm and leg while keeping your back flat.', 'Return and alternate.'] },
  { id: 'bicycle-crunch', name: 'Bicycle crunch', muscle: 'core', type: 'core', equipment: [], met: 3.8, imageId: 'Air_Bike', steps: ['Lie on your back, hands behind your head.', 'Bring one elbow toward the opposite knee while extending the other leg.', 'Alternate sides in a pedaling motion.'] },
  { id: 'leg-raise', name: 'Lying leg raise', muscle: 'core', type: 'core', equipment: [], met: 3.5, imageId: 'Flat_Bench_Lying_Leg_Raise', steps: ['Lie flat with legs straight.', 'Raise your legs to 90° keeping your lower back down.', 'Lower slowly without touching the floor.'] },
  { id: 'hanging-leg-raise', name: 'Hanging leg raise', muscle: 'core', type: 'core', equipment: ['pull_up_bar'], met: 4, imageId: 'Hanging_Leg_Raise', steps: ['Hang from the bar with straight arms.', 'Raise your knees (easier) or straight legs toward your chest.', 'Lower slowly without swinging.'] },
  { id: 'russian-twist', name: 'Russian twist', muscle: 'core', type: 'core', equipment: [], met: 3.8, imageId: 'Russian_Twist', steps: ['Sit with knees bent and lean back slightly.', 'Rotate your torso side to side (hold a dumbbell or bottle to make it harder).', 'Keep your chest lifted.'] },

  // Cardio & full body
  { id: 'jumping-jack', name: 'Jumping jacks', muscle: 'cardio', type: 'cardio', equipment: [], met: 8, isTimed: true, imageId: 'Star_Jump', steps: ['Jump your feet out while raising your arms overhead.', 'Jump back to the start.', 'Keep a steady rhythm. Low impact: step out instead of jumping.'] },
  { id: 'mountain-climber', name: 'Mountain climbers', muscle: 'cardio', type: 'cardio', equipment: [], met: 8, isTimed: true, imageId: 'Mountain_Climbers', steps: ['Start in a high plank.', 'Drive your knees toward your chest one at a time.', 'Move quickly while keeping your hips low.'] },
  { id: 'burpee', name: 'Burpee', muscle: 'full_body', type: 'cardio', equipment: [], met: 8, steps: ['Squat and place your hands on the floor.', 'Jump or step your feet back to a plank, then bring them forward.', 'Stand or jump up with arms overhead.'] },
  { id: 'high-knees', name: 'High knees', muscle: 'cardio', type: 'cardio', equipment: [], met: 8, isTimed: true, steps: ['Run in place.', 'Drive your knees to hip height.', 'Pump your arms.'] },
  { id: 'brisk-walk', name: 'Brisk walk', muscle: 'cardio', type: 'cardio', equipment: [], met: 4.3, isTimed: true, steps: ['Walk at a pace where you can talk but not sing.', 'Keep your posture upright and arms swinging.'] },
  { id: 'jump-rope', name: 'Jump rope', muscle: 'cardio', type: 'cardio', equipment: ['jump_rope'], met: 11, isTimed: true, imageId: 'Rope_Jumping', steps: ['Hold the handles at hip height, elbows close.', 'Turn the rope with your wrists and jump just high enough to clear it.', 'Land softly on the balls of your feet.'] },
  { id: 'db-thruster', name: 'Dumbbell thruster', muscle: 'full_body', type: 'strength', equipment: ['dumbbell'], met: 7, imageId: 'Kettlebell_Thruster', steps: ['Hold dumbbells at shoulder height.', 'Squat down, then drive up and press the weights overhead.', 'Lower to the shoulders and repeat.'] },
  { id: 'kb-swing', name: 'Kettlebell swing', muscle: 'full_body', type: 'cardio', equipment: ['kettlebell'], met: 8, imageId: 'One-Arm_Kettlebell_Swings', steps: ['Hold the kettlebell with both hands between your legs.', 'Hinge and drive your hips forward to swing it to chest height.', 'Let it swing back and repeat.'] },
  { id: 'kb-goblet-squat', name: 'Kettlebell goblet squat', muscle: 'legs', type: 'strength', equipment: ['kettlebell'], met: 5.5, imageId: 'Goblet_Squat', steps: ['Hold the kettlebell by the horns at your chest.', 'Squat down keeping your chest up and elbows inside your knees.', 'Stand back up through your heels.'] },
  { id: 'treadmill-incline', name: 'Incline treadmill walk', muscle: 'cardio', type: 'cardio', equipment: ['cardio_machine'], met: 6, isTimed: true, imageId: 'Walking_Treadmill', steps: ['Set the incline to 8–12% at 4–5 km/h.', 'Walk without holding the rails.'] },
  { id: 'rowing-machine', name: 'Rowing machine', muscle: 'cardio', type: 'cardio', equipment: ['cardio_machine'], met: 7, isTimed: true, imageId: 'Rowing_Stationary', steps: ['Push with your legs first, then lean back and pull.', 'Return arms, then body, then legs.'] },
  { id: 'stationary-bike', name: 'Stationary bike', muscle: 'cardio', type: 'cardio', equipment: ['cardio_machine'], met: 6.8, isTimed: true, imageId: 'Bicycling_Stationary', steps: ['Adjust the seat to hip height.', 'Pedal at a moderate-to-hard effort.'] },

  // Mobility
  { id: 'cat-cow', name: 'Cat-cow stretch', muscle: 'back', type: 'mobility', equipment: [], met: 2.3, isTimed: true, imageId: 'Cat_Stretch', steps: ['On hands and knees, round your back up.', 'Then drop your belly and lift your chest.', 'Move slowly with your breath.'] },
  { id: 'hip-flexor-stretch', name: 'Hip flexor stretch', muscle: 'legs', type: 'mobility', equipment: [], met: 2.3, isTimed: true, imageId: 'Kneeling_Hip_Flexor', steps: ['Kneel on one knee, other foot in front.', 'Shift your hips forward until you feel a stretch.', 'Hold, then switch sides.'] },
  { id: 'worlds-greatest', name: "World's greatest stretch", muscle: 'full_body', type: 'mobility', equipment: [], met: 2.5, imageId: 'Worlds_Greatest_Stretch', steps: ['Step into a deep lunge, hand inside the front foot.', 'Rotate and reach the other arm to the ceiling.', 'Return and switch sides.'] },
];

export const exerciseById = (id: string): Exercise | undefined => EXERCISES.find((exercise) => exercise.id === id);

/** True when the user has every piece of equipment the exercise needs. */
export const isEquipmentAvailable = (required: Equipment[], available: Equipment[]): boolean =>
  required.every((item) => available.includes(item));

export const equipmentSummary = (equipment: Equipment[]): string =>
  equipment.length === 0 ? 'Bodyweight only' : equipment.map((item) => EQUIPMENT_LABELS[item]).join(', ');
