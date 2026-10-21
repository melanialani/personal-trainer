import type { Equipment, FitnessLevel } from '../types';
import { EXERCISE_VIDEOS } from './exerciseVideos';

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
  /** Lowest level the planner uses it for; omitted = suitable for beginners. */
  minLevel?: Exclude<FitnessLevel, 'beginner'>;
  /** Lying, sitting or kneeling on the floor — needs a mat, carpet or other soft surface. */
  isFloorWork?: boolean;
  /** Needs a sturdy chair, table, door frame or stairs. */
  usesFurniture?: boolean;
  /** Too demanding for the first weeks; beginners get it from the Consolidating stage on. */
  needsBaseFitness?: boolean;
  /** Jumping or hopping; skipped for low-impact plans. */
  isHighImpact?: boolean;
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

export interface ExerciseVideo {
  /** YouTube video id. */
  id: string;
  /** Vertical YouTube Short. */
  isShort?: boolean;
}

/** Curated YouTube demo for the exercise, if one was found. */
export const exerciseVideo = (exercise: Exercise): ExerciseVideo | undefined => EXERCISE_VIDEOS[exercise.id];

export const exerciseVideoEmbedUrl = (video: ExerciseVideo): string =>
  `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`;

export const exerciseVideoThumbnailUrl = (video: ExerciseVideo): string => `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

/** Opens the curated video on YouTube, or a YouTube search when there is none. */
export const exerciseVideoUrl = (exercise: Exercise): string => {
  const video = exerciseVideo(exercise);
  if (video) return `https://www.youtube.com/watch?v=${video.id}`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${exercise.name} exercise proper form beginner`)}`;
};

export const EXERCISES: Exercise[] = [
  // Chest
  { id: 'wall-push-up', name: 'Wall push-up', muscle: 'chest', type: 'strength', equipment: [], met: 2.8, steps: ['Stand an arm’s length from a wall, hands on it at chest height.', 'Bend your elbows to bring your chest toward the wall, body straight.', 'Push back to the start. Step further back to make it harder.'] },
  { id: 'incline-push-up', name: 'Incline push-up (hands on table)', muscle: 'chest', type: 'strength', equipment: [], met: 3.3, usesFurniture: true, imageId: 'Incline_Push-Up', steps: ['Place your hands on a sturdy table, wall or sofa edge.', 'Walk your feet back until your body is straight.', 'Lower your chest to the edge, then push back up. The higher the surface, the easier it is.'] },
  { id: 'knee-push-up', name: 'Knee push-up', muscle: 'chest', type: 'strength', equipment: [], met: 3.3, isFloorWork: true, steps: ['Hands on the floor under your shoulders, knees on the mat.', 'Keep a straight line from head to knees and lower your chest.', 'Press back up.'] },
  { id: 'push-up', name: 'Push-up', muscle: 'chest', type: 'strength', equipment: [], met: 3.8, needsBaseFitness: true, imageId: 'Pushups', steps: ['Hands slightly wider than shoulders, body in a straight line from head to heels.', 'Lower your chest until it is just above the floor, elbows at about 45°.', 'Press back up while keeping your core tight. Can’t finish the reps yet? Do the rest with your knees down or hands on a wall.'] },
  { id: 'wide-push-up', name: 'Wide push-up', muscle: 'chest', type: 'strength', equipment: [], met: 4, minLevel: 'intermediate', imageId: 'Push-Up_Wide', steps: ['Set your hands about 1.5× shoulder width.', 'Lower your chest between your hands with control.', 'Press up without letting your hips sag.'] },
  { id: 'isometric-chest-squeeze', name: 'Standing palm press (isometric)', muscle: 'chest', type: 'strength', equipment: [], met: 2.5, isTimed: true, imageId: 'Isometric_Chest_Squeezes', steps: ['Stand tall and press your palms together in front of your chest.', 'Push your hands into each other as hard as you comfortably can.', 'Hold while breathing normally.'] },
  { id: 'decline-push-up', name: 'Decline push-up', muscle: 'chest', type: 'strength', equipment: [], met: 4.5, minLevel: 'intermediate', usesFurniture: true, imageId: 'Push-Ups_With_Feet_Elevated', steps: ['Put your feet on a chair or step, hands on the floor.', 'Lower your chest with control.', 'Press up without letting your hips sag.'] },
  { id: 'plyo-push-up', name: 'Plyometric push-up', muscle: 'chest', type: 'strength', equipment: [], met: 8, minLevel: 'advanced', isHighImpact: true, imageId: 'Plyo_Push-up', steps: ['Start in a push-up position.', 'Lower, then push up explosively so your hands leave the floor.', 'Land softly with bent elbows and go straight into the next rep.'] },
  { id: 'db-bench-press', name: 'Dumbbell chest press', muscle: 'chest', type: 'strength', equipment: ['dumbbell'], met: 5, imageId: 'Dumbbell_Bench_Press', steps: ['Lie on a bench or the floor holding dumbbells above your chest.', 'Lower them slowly until your elbows are level with your torso.', 'Press up until your arms are straight without locking the elbows.'] },
  { id: 'db-incline-press', name: 'Incline dumbbell press', muscle: 'chest', type: 'strength', equipment: ['dumbbell', 'bench'], met: 5, imageId: 'Incline_Dumbbell_Press', steps: ['Set the bench to about 30° and hold dumbbells at chest level.', 'Press up and slightly in until your arms are straight.', 'Lower slowly to the upper chest.'] },
  { id: 'db-fly', name: 'Dumbbell fly', muscle: 'chest', type: 'strength', equipment: ['dumbbell', 'bench'], met: 4.5, imageId: 'Dumbbell_Flyes', steps: ['Lie on a bench with dumbbells above your chest, palms facing.', 'With a slight bend in the elbows, open your arms wide.', 'Squeeze your chest to bring the weights back together.'] },
  { id: 'db-pullover', name: 'Dumbbell pullover', muscle: 'chest', type: 'strength', equipment: ['dumbbell', 'bench'], met: 4, minLevel: 'intermediate', imageId: 'Straight-Arm_Dumbbell_Pullover', steps: ['Lie across a bench holding one dumbbell above your chest with both hands.', 'Lower it behind your head with slightly bent arms.', 'Pull it back over your chest.'] },
  { id: 'band-chest-press', name: 'Band chest press', muscle: 'chest', type: 'strength', equipment: ['resistance_band'], met: 3.8, imageId: 'Bench_Press_-_With_Bands', steps: ['Wrap the band around your upper back, one end in each hand.', 'Press your hands forward until your arms are straight.', 'Return slowly to the chest.'] },
  { id: 'bench-press', name: 'Barbell bench press', muscle: 'chest', type: 'strength', equipment: ['barbell', 'bench'], met: 6, minLevel: 'intermediate', imageId: 'Barbell_Bench_Press_-_Medium_Grip', steps: ['Lie on the bench with eyes under the bar, feet flat.', 'Lower the bar to mid-chest with control.', 'Press up and lock out above your shoulders.'] },
  { id: 'chest-press-machine', name: 'Chest press machine', muscle: 'chest', type: 'strength', equipment: ['gym_machines'], met: 5, imageId: 'Leverage_Chest_Press', steps: ['Adjust the seat so the handles are at chest height.', 'Push the handles forward until your arms are extended.', 'Return slowly without letting the weight stack touch.'] },
  { id: 'pec-deck', name: 'Pec deck (machine fly)', muscle: 'chest', type: 'strength', equipment: ['gym_machines'], met: 4, imageId: 'Butterfly', steps: ['Sit with your back flat and arms on the pads at chest height.', 'Bring the pads together in front of you, squeezing your chest.', 'Open slowly until you feel a light stretch.'] },
  { id: 'cable-crossover', name: 'Cable crossover', muscle: 'chest', type: 'strength', equipment: ['gym_machines'], met: 4, minLevel: 'intermediate', imageId: 'Cable_Crossover', steps: ['Stand between two high pulleys holding a handle in each hand.', 'With a slight elbow bend, pull your hands down and together in front of your hips.', 'Return slowly.'] },

  // Back
  { id: 'standing-ytw', name: 'Bent-over Y-T-W raise', muscle: 'back', type: 'strength', equipment: [], met: 3, steps: ['Hinge forward at the hips with a flat back, arms hanging down.', 'Raise your arms into a Y, then a T, then pull your elbows back into a W.', 'Squeeze your shoulder blades in each position. Hold water bottles to make it harder.'] },
  { id: 'wall-angel', name: 'Wall angel', muscle: 'back', type: 'strength', equipment: [], met: 2.5, steps: ['Stand with your back, head and arms against a wall, elbows bent at 90°.', 'Slide your arms up the wall as high as you can while keeping contact.', 'Slide back down, squeezing your shoulder blades together.'] },
  { id: 'bw-good-morning', name: 'Bodyweight good morning', muscle: 'back', type: 'strength', equipment: [], met: 3.5, steps: ['Stand with feet hip-width apart, hands crossed on your chest.', 'Push your hips back and lean forward with a flat back until you feel your hamstrings.', 'Squeeze your glutes to stand back up.'] },
  { id: 'superman', name: 'Superman', muscle: 'back', type: 'strength', equipment: [], met: 3, isTimed: true, isFloorWork: true, imageId: 'Superman', steps: ['Lie face down with arms extended overhead.', 'Lift arms, chest and legs off the floor.', 'Hold, squeezing your lower back and glutes, then lower.'] },
  { id: 'reverse-snow-angel', name: 'Reverse snow angel', muscle: 'back', type: 'strength', equipment: [], met: 3, isFloorWork: true, steps: ['Lie face down, arms by your sides, forehead just off the floor.', 'Lift your arms and sweep them in a wide arc over your head.', 'Sweep back to your sides without letting them touch the floor.'] },
  { id: 'table-row', name: 'Inverted row (under a table)', muscle: 'back', type: 'strength', equipment: [], met: 4, usesFurniture: true, imageId: 'Inverted_Row', steps: ['Lie under a sturdy table and grip the edge.', 'Keep your body straight and pull your chest to the table.', 'Lower slowly until your arms are straight.'] },
  { id: 'doorframe-row', name: 'Doorframe row', muscle: 'back', type: 'strength', equipment: [], met: 3.5, usesFurniture: true, steps: ['Stand in an open doorway and grip both sides of the frame at chest height.', 'Lean back with straight arms, feet close to the door.', 'Pull your chest toward the frame, then lower slowly.'] },
  { id: 'band-pull-apart', name: 'Band pull-apart', muscle: 'back', type: 'strength', equipment: ['resistance_band'], met: 3, imageId: 'Band_Pull_Apart', steps: ['Hold a band in front of your chest with straight arms.', 'Pull the band apart by squeezing your shoulder blades together.', 'Return slowly with control.'] },
  { id: 'band-row', name: 'Band row', muscle: 'back', type: 'strength', equipment: ['resistance_band'], met: 3.5, steps: ['Anchor the band at chest height (or loop it around your feet while seated).', 'Pull the handles to your ribs, elbows close to your body.', 'Return slowly until your arms are straight.'] },
  { id: 'band-reverse-fly', name: 'Band reverse fly', muscle: 'back', type: 'strength', equipment: ['resistance_band'], met: 3, imageId: 'Back_Flyes_-_With_Bands', steps: ['Anchor the band in front of you at chest height and hold one end in each hand.', 'With straight arms, open them out to the sides.', 'Return slowly.'] },
  { id: 'band-good-morning', name: 'Band good morning', muscle: 'back', type: 'strength', equipment: ['resistance_band'], met: 3.5, imageId: 'Band_Good_Morning', steps: ['Stand on the band and loop it behind your neck.', 'Hinge forward at the hips with a flat back.', 'Drive your hips forward to stand tall.'] },
  { id: 'db-row', name: 'One-arm dumbbell row', muscle: 'back', type: 'strength', equipment: ['dumbbell'], met: 5, imageId: 'One-Arm_Dumbbell_Row', steps: ['Place one hand and knee on a bench or chair, back flat.', 'Pull the dumbbell toward your hip, elbow close to the body.', 'Lower with control, then switch sides.'] },
  { id: 'db-bent-over-row', name: 'Bent-over dumbbell row', muscle: 'back', type: 'strength', equipment: ['dumbbell'], met: 5, imageId: 'Bent_Over_Two-Dumbbell_Row', steps: ['Hold dumbbells and hinge forward until your torso is at about 45°.', 'Row both weights to your ribs, squeezing your shoulder blades.', 'Lower slowly without rounding your back.'] },
  { id: 'db-deadlift', name: 'Dumbbell Romanian deadlift', muscle: 'back', type: 'strength', equipment: ['dumbbell'], met: 5.5, imageId: 'Stiff-Legged_Dumbbell_Deadlift', steps: ['Stand holding dumbbells in front of your thighs.', 'Hinge at the hips, sliding the weights down your legs with a flat back.', 'Drive your hips forward to stand tall.'] },
  { id: 'db-shrug', name: 'Dumbbell shrug', muscle: 'back', type: 'strength', equipment: ['dumbbell'], met: 3, imageId: 'Dumbbell_Shrug', steps: ['Stand tall with dumbbells at your sides.', 'Lift your shoulders straight up toward your ears.', 'Pause, then lower slowly.'] },
  { id: 'kb-row', name: 'One-arm kettlebell row', muscle: 'back', type: 'strength', equipment: ['kettlebell'], met: 5, imageId: 'One-Arm_Kettlebell_Row', steps: ['Stagger your stance and hinge forward, one hand on your front knee.', 'Row the kettlebell to your hip.', 'Lower with control and switch sides.'] },
  { id: 'kb-deadlift', name: 'Kettlebell deadlift', muscle: 'back', type: 'strength', equipment: ['kettlebell'], met: 5, steps: ['Stand over the kettlebell, feet hip-width apart.', 'Hinge at the hips, grip the handle with a flat back.', 'Stand up by driving your hips forward, then lower with control.'] },
  { id: 'scapular-pull-up', name: 'Scapular pull-up', muscle: 'back', type: 'strength', equipment: ['pull_up_bar'], met: 3.5, imageId: 'Scapular_Pull-Up', steps: ['Hang from the bar with straight arms.', 'Without bending your elbows, pull your shoulder blades down and together to lift slightly.', 'Lower slowly back to a full hang.'] },
  { id: 'band-assisted-pull-up', name: 'Band-assisted pull-up', muscle: 'back', type: 'strength', equipment: ['pull_up_bar', 'resistance_band'], met: 5, imageId: 'Band_Assisted_Pull-Up', steps: ['Loop a band over the bar and put one knee or foot in it.', 'Pull your chest toward the bar, leading with the elbows.', 'Lower all the way with control.'] },
  { id: 'pull-up', name: 'Pull-up', muscle: 'back', type: 'strength', equipment: ['pull_up_bar'], met: 6, minLevel: 'intermediate', imageId: 'Pullups', steps: ['Hang from the bar with hands slightly wider than shoulders.', 'Pull your chest toward the bar, leading with the elbows.', 'Lower all the way down with control. Beginners: use a band or jump up and lower slowly.'] },
  { id: 'chin-up', name: 'Chin-up', muscle: 'back', type: 'strength', equipment: ['pull_up_bar'], met: 6, minLevel: 'intermediate', imageId: 'Chin-Up', steps: ['Hang from the bar with palms facing you, shoulder-width apart.', 'Pull until your chin is over the bar.', 'Lower slowly to a full hang.'] },
  { id: 'lat-pulldown', name: 'Lat pulldown', muscle: 'back', type: 'strength', equipment: ['gym_machines'], met: 5, imageId: 'Wide-Grip_Lat_Pulldown', steps: ['Grip the bar wider than shoulders and lock your thighs in.', 'Pull the bar to your upper chest, squeezing your shoulder blades.', 'Return slowly to full arm extension.'] },
  { id: 'seated-row', name: 'Seated cable row', muscle: 'back', type: 'strength', equipment: ['gym_machines'], met: 5, imageId: 'Seated_Cable_Rows', steps: ['Sit tall with feet on the platform, holding the handle.', 'Pull the handle to your stomach, chest up.', 'Extend your arms slowly without rounding your back.'] },
  { id: 'barbell-row', name: 'Barbell bent-over row', muscle: 'back', type: 'strength', equipment: ['barbell'], met: 6, minLevel: 'intermediate', imageId: 'Bent_Over_Barbell_Row', steps: ['Hold the bar with an overhand grip and hinge to about 45°.', 'Row the bar to your lower ribs.', 'Lower with control, keeping your back flat.'] },
  { id: 'deadlift', name: 'Barbell deadlift', muscle: 'back', type: 'strength', equipment: ['barbell'], met: 6, minLevel: 'intermediate', imageId: 'Barbell_Deadlift', steps: ['Feet hip-width under the bar, grip just outside your legs.', 'Brace your core and push the floor away to stand up.', 'Hinge back down keeping the bar close to your legs.'] },

  // Shoulders
  { id: 'arm-circles', name: 'Arm circles', muscle: 'shoulders', type: 'strength', equipment: [], met: 3, isTimed: true, imageId: 'Arm_Circles', steps: ['Stand tall with your arms straight out to the sides.', 'Draw small circles forward, gradually making them bigger.', 'Halfway through, switch direction.'] },
  { id: 'arm-raise-no-weight', name: 'Front & side arm raises (no weight)', muscle: 'shoulders', type: 'strength', equipment: [], met: 3, isTimed: true, steps: ['Stand tall, arms by your sides, thumbs up.', 'Raise your arms to shoulder height in front, lower, then raise them out to the sides.', 'Move slowly; hold water bottles to make it harder.'] },
  { id: 'plank-shoulder-tap', name: 'Plank shoulder taps', muscle: 'shoulders', type: 'strength', equipment: [], met: 4, needsBaseFitness: true, steps: ['Start in a high plank on your hands, feet wider than hips.', 'Tap one hand to the opposite shoulder without twisting your hips.', 'Alternate sides. Easier: do it with your hands on a wall.'] },
  { id: 'pike-push-up', name: 'Pike push-up', muscle: 'shoulders', type: 'strength', equipment: [], met: 4, minLevel: 'intermediate', steps: ['Start in a downward-dog position, hips high.', 'Bend your elbows to lower your head toward the floor.', 'Press back up to the start.'] },
  { id: 'wall-handstand-push-up', name: 'Wall handstand push-up', muscle: 'shoulders', type: 'strength', equipment: [], met: 6, minLevel: 'advanced', imageId: 'Handstand_Push-Ups', steps: ['Kick up into a handstand facing away from the wall.', 'Lower your head toward the floor with control.', 'Press back up to straight arms.'] },
  { id: 'band-shoulder-press', name: 'Band shoulder press', muscle: 'shoulders', type: 'strength', equipment: ['resistance_band'], met: 4, imageId: 'Shoulder_Press_-_With_Bands', steps: ['Stand on the band, handles at shoulder height.', 'Press overhead until your arms are straight.', 'Lower slowly back to the shoulders.'] },
  { id: 'band-lateral-raise', name: 'Band lateral raise', muscle: 'shoulders', type: 'strength', equipment: ['resistance_band'], met: 3.5, imageId: 'Lateral_Raise_-_With_Bands', steps: ['Stand on the band holding one end in each hand.', 'Raise your arms out to shoulder height.', 'Lower slowly.'] },
  { id: 'band-upright-row', name: 'Band upright row', muscle: 'shoulders', type: 'strength', equipment: ['resistance_band'], met: 3.5, imageId: 'Upright_Row_-_With_Bands', steps: ['Stand on the band with hands close together in front of your thighs.', 'Pull your hands up to chest height, elbows leading.', 'Lower slowly.'] },
  { id: 'db-shoulder-press', name: 'Dumbbell shoulder press', muscle: 'shoulders', type: 'strength', equipment: ['dumbbell'], met: 5, imageId: 'Dumbbell_Shoulder_Press', steps: ['Hold dumbbells at shoulder height, palms forward.', 'Press overhead until your arms are straight.', 'Lower slowly back to shoulder height.'] },
  { id: 'db-lateral-raise', name: 'Dumbbell lateral raise', muscle: 'shoulders', type: 'strength', equipment: ['dumbbell'], met: 4, imageId: 'Side_Lateral_Raise', steps: ['Stand with dumbbells at your sides.', 'Raise your arms out to shoulder height with a slight elbow bend.', 'Lower slowly.'] },
  { id: 'db-front-raise', name: 'Dumbbell front raise', muscle: 'shoulders', type: 'strength', equipment: ['dumbbell'], met: 3.5, imageId: 'Front_Dumbbell_Raise', steps: ['Hold dumbbells in front of your thighs.', 'Raise one or both arms straight in front to shoulder height.', 'Lower slowly.'] },
  { id: 'db-reverse-fly', name: 'Dumbbell reverse fly', muscle: 'shoulders', type: 'strength', equipment: ['dumbbell'], met: 3.5, imageId: 'Reverse_Flyes', steps: ['Hinge forward with a flat back, dumbbells hanging below your chest.', 'Raise your arms out to the sides, squeezing your upper back.', 'Lower slowly.'] },
  { id: 'db-upright-row', name: 'Dumbbell upright row', muscle: 'shoulders', type: 'strength', equipment: ['dumbbell'], met: 4, imageId: 'Standing_Dumbbell_Upright_Row', steps: ['Hold dumbbells in front of your thighs.', 'Pull them up to chest height, elbows higher than wrists.', 'Lower slowly.'] },
  { id: 'db-arnold-press', name: 'Arnold press', muscle: 'shoulders', type: 'strength', equipment: ['dumbbell'], met: 5, minLevel: 'intermediate', imageId: 'Arnold_Dumbbell_Press', steps: ['Hold dumbbells in front of your shoulders, palms facing you.', 'Press up while rotating your palms to face forward.', 'Reverse the motion on the way down.'] },
  { id: 'kb-press', name: 'Kettlebell overhead press', muscle: 'shoulders', type: 'strength', equipment: ['kettlebell'], met: 5, imageId: 'Alternating_Kettlebell_Press', steps: ['Hold the kettlebell at your shoulder, wrist straight.', 'Press it overhead until your arm is straight.', 'Lower slowly and switch sides.'] },
  { id: 'kb-halo', name: 'Kettlebell halo', muscle: 'shoulders', type: 'strength', equipment: ['kettlebell'], met: 3.5, imageId: 'Kettlebell_Halo', steps: ['Hold the kettlebell upside down by the horns at chest height.', 'Circle it slowly around your head, close to your neck.', 'Alternate directions while keeping your core tight.'] },
  { id: 'machine-shoulder-press', name: 'Shoulder press machine', muscle: 'shoulders', type: 'strength', equipment: ['gym_machines'], met: 5, imageId: 'Leverage_Shoulder_Press', steps: ['Adjust the seat so the handles are at shoulder level.', 'Press up until your arms are extended.', 'Lower under control.'] },
  { id: 'face-pull', name: 'Cable face pull', muscle: 'shoulders', type: 'strength', equipment: ['gym_machines'], met: 3.5, imageId: 'Face_Pull', steps: ['Set a rope at face height and grip it with thumbs back.', 'Pull the rope toward your face, elbows high and wide.', 'Return slowly.'] },
  { id: 'overhead-press', name: 'Barbell overhead press', muscle: 'shoulders', type: 'strength', equipment: ['barbell'], met: 6, minLevel: 'intermediate', imageId: 'Standing_Military_Press', steps: ['Hold the bar at your collarbone, grip just outside your shoulders.', 'Brace and press the bar straight overhead.', 'Lower it back to your collarbone with control.'] },

  // Arms
  { id: 'chair-dip', name: 'Chair dip', muscle: 'arms', type: 'strength', equipment: [], met: 3.8, usesFurniture: true, imageId: 'Bench_Dips', steps: ['Hands on the edge of a sturdy chair behind you.', 'Bend your elbows to lower your hips toward the floor.', 'Press back up using your triceps.'] },
  { id: 'wall-triceps-press', name: 'Wall triceps press', muscle: 'arms', type: 'strength', equipment: [], met: 2.8, steps: ['Face a wall, forearms on it at eye level with elbows bent.', 'Lean in, then push through your palms to straighten your arms.', 'Step further back to make it harder.'] },
  { id: 'diamond-push-up', name: 'Diamond push-up', muscle: 'arms', type: 'strength', equipment: [], met: 4, minLevel: 'intermediate', imageId: 'Push-Ups_-_Close_Triceps_Position', steps: ['Place your hands close together under your chest, thumbs and index fingers touching.', 'Lower your chest to your hands, elbows close to your body.', 'Press back up.'] },
  { id: 'band-curl', name: 'Band biceps curl', muscle: 'arms', type: 'strength', equipment: ['resistance_band'], met: 3, steps: ['Stand on the band holding the ends, palms forward.', 'Curl your hands toward your shoulders, elbows fixed at your sides.', 'Lower slowly.'] },
  { id: 'band-skull-crusher', name: 'Band triceps extension', muscle: 'arms', type: 'strength', equipment: ['resistance_band'], met: 3.3, imageId: 'Band_Skull_Crusher', steps: ['Anchor the band low behind you and hold it overhead.', 'Bend only at the elbows to lower your hands behind your head.', 'Extend your arms back up.'] },
  { id: 'db-curl', name: 'Dumbbell biceps curl', muscle: 'arms', type: 'strength', equipment: ['dumbbell'], met: 3.5, imageId: 'Dumbbell_Bicep_Curl', steps: ['Stand holding dumbbells, palms forward.', 'Curl the weights toward your shoulders, elbows fixed at your sides.', 'Lower slowly.'] },
  { id: 'db-hammer-curl', name: 'Hammer curl', muscle: 'arms', type: 'strength', equipment: ['dumbbell'], met: 3.5, imageId: 'Hammer_Curls', steps: ['Hold dumbbells at your sides, palms facing each other.', 'Curl them up without turning your wrists.', 'Lower slowly.'] },
  { id: 'db-triceps-ext', name: 'Overhead triceps extension', muscle: 'arms', type: 'strength', equipment: ['dumbbell'], met: 3.5, imageId: 'Standing_Dumbbell_Triceps_Extension', steps: ['Hold one dumbbell overhead with both hands.', 'Lower it behind your head by bending your elbows.', 'Extend your arms back up.'] },
  { id: 'db-kickback', name: 'Dumbbell triceps kickback', muscle: 'arms', type: 'strength', equipment: ['dumbbell'], met: 3.3, imageId: 'Tricep_Dumbbell_Kickback', steps: ['Hinge forward, upper arms tight to your sides, elbows bent.', 'Straighten your arms behind you.', 'Return slowly without moving the upper arms.'] },
  { id: 'cable-pushdown', name: 'Cable triceps pushdown', muscle: 'arms', type: 'strength', equipment: ['gym_machines'], met: 3.5, imageId: 'Triceps_Pushdown', steps: ['Grip the rope or bar at chest height.', 'Push down until your arms are straight, elbows tucked.', 'Return slowly.'] },
  { id: 'cable-curl', name: 'Cable biceps curl', muscle: 'arms', type: 'strength', equipment: ['gym_machines'], met: 3.5, imageId: 'Standing_Biceps_Cable_Curl', steps: ['Hold the bar on a low pulley, palms up.', 'Curl it to your shoulders, elbows fixed.', 'Lower slowly.'] },
  { id: 'barbell-curl', name: 'Barbell curl', muscle: 'arms', type: 'strength', equipment: ['barbell'], met: 4, imageId: 'Barbell_Curl', steps: ['Hold the bar shoulder-width, palms up.', 'Curl it to your shoulders without swinging.', 'Lower slowly.'] },

  // Legs & glutes
  { id: 'bw-squat', name: 'Bodyweight squat', muscle: 'legs', type: 'strength', equipment: [], met: 5, imageId: 'Bodyweight_Squat', steps: ['Feet shoulder-width apart, toes slightly out.', 'Sit your hips back and down until your thighs are parallel to the floor (or as low as is comfortable).', 'Drive through your heels to stand.'] },
  { id: 'half-squat', name: 'Half squat (hands on wall)', muscle: 'legs', type: 'strength', equipment: [], met: 3.5, steps: ['Stand facing a wall with your fingertips on it for balance.', 'Push your hips back and bend your knees halfway down.', 'Stand back up. Go a little deeper each week.'] },
  { id: 'chair-squat', name: 'Sit-to-stand (chair squat)', muscle: 'legs', type: 'strength', equipment: [], met: 3.5, usesFurniture: true, steps: ['Stand in front of a sturdy chair, feet hip-width apart.', 'Sit down slowly with control, arms forward.', 'Stand back up without using your hands.'] },
  { id: 'sumo-squat', name: 'Sumo squat', muscle: 'legs', type: 'strength', equipment: [], met: 4.5, steps: ['Stand with feet wide and toes turned out.', 'Lower your hips straight down, knees tracking over your toes.', 'Squeeze your glutes to stand.'] },
  { id: 'lunge', name: 'Lunge', muscle: 'legs', type: 'strength', equipment: [], met: 4, imageId: 'Bodyweight_Walking_Lunge', steps: ['Step one foot forward and lower until both knees are at 90°.', 'Push through the front heel to return.', 'Alternate legs.'] },
  { id: 'reverse-lunge', name: 'Reverse lunge', muscle: 'legs', type: 'strength', equipment: [], met: 4, steps: ['Stand tall, then step one foot back.', 'Lower until both knees are bent at about 90°.', 'Push through the front heel to return. Easier on the knees than a forward lunge.'] },
  { id: 'side-lunge', name: 'Side lunge', muscle: 'legs', type: 'strength', equipment: [], met: 4, needsBaseFitness: true, steps: ['Stand with feet together.', 'Take a big step to the side, bend that knee and sit your hips back, other leg straight.', 'Push back to the middle and alternate sides.'] },
  { id: 'split-squat', name: 'Split squat', muscle: 'legs', type: 'strength', equipment: [], met: 4.5, needsBaseFitness: true, imageId: 'Split_Squats', steps: ['Take a long stance, one foot forward and one back.', 'Lower your back knee straight down toward the floor.', 'Push up through the front foot. Finish all reps, then switch.'] },
  { id: 'curtsy-lunge', name: 'Curtsy lunge', muscle: 'glutes', type: 'strength', equipment: [], met: 4, needsBaseFitness: true, steps: ['Stand tall, then step one leg diagonally behind the other.', 'Bend both knees as if curtsying.', 'Return and alternate sides.'] },
  { id: 'wall-sit', name: 'Wall sit', muscle: 'legs', type: 'strength', equipment: [], met: 3.5, isTimed: true, steps: ['Lean your back against a wall.', 'Slide down until your knees are at 90° (higher if that is too hard).', 'Hold the position.'] },
  { id: 'calf-raise', name: 'Calf raise', muscle: 'legs', type: 'strength', equipment: [], met: 3, imageId: 'Standing_Calf_Raises', steps: ['Stand on a flat floor (or a step edge for more range), fingertips on a wall for balance.', 'Rise onto your toes as high as possible.', 'Lower your heels slowly.'] },
  { id: 'single-leg-calf-raise', name: 'Single-leg calf raise', muscle: 'legs', type: 'strength', equipment: [], met: 3.3, minLevel: 'intermediate', steps: ['Stand on one foot, fingertips on a wall.', 'Rise onto your toes as high as you can.', 'Lower slowly, then switch legs.'] },
  { id: 'single-leg-rdl', name: 'Single-leg Romanian deadlift', muscle: 'legs', type: 'strength', equipment: [], met: 3.5, needsBaseFitness: true, steps: ['Stand on one leg with a soft knee, fingertips on a wall if needed.', 'Hinge forward while the other leg extends behind you, back flat.', 'Squeeze your glute to stand back up, then switch legs.'] },
  { id: 'step-up', name: 'Step-up with knee raise', muscle: 'legs', type: 'strength', equipment: [], met: 5, usesFurniture: true, imageId: 'Step-up_with_Knee_Raise', steps: ['Stand in front of a sturdy step or the bottom stair.', 'Step up with one foot and lift the other knee to hip height.', 'Step down and alternate legs.'] },
  { id: 'bulgarian-split-squat', name: 'Bulgarian split squat', muscle: 'legs', type: 'strength', equipment: [], met: 5, minLevel: 'intermediate', usesFurniture: true, steps: ['Stand in front of a chair and rest the top of your back foot on the seat.', 'Lower your back knee toward the floor.', 'Drive up through the front heel. Finish all reps, then switch.'] },
  { id: 'jump-squat', name: 'Jump squat', muscle: 'legs', type: 'strength', equipment: [], met: 8, minLevel: 'intermediate', isHighImpact: true, imageId: 'Freehand_Jump_Squat', steps: ['Squat down with your arms back.', 'Jump up explosively, swinging your arms.', 'Land softly and sink straight into the next squat.'] },
  { id: 'split-jump', name: 'Jumping lunge', muscle: 'legs', type: 'strength', equipment: [], met: 8, minLevel: 'advanced', isHighImpact: true, imageId: 'Split_Jump', steps: ['Start in a lunge.', 'Jump and switch legs in the air.', 'Land softly in a lunge on the other side.'] },
  { id: 'standing-hip-abduction', name: 'Standing side leg raise', muscle: 'glutes', type: 'strength', equipment: [], met: 3, steps: ['Stand tall with a hand on a wall.', 'Lift one straight leg out to the side without leaning.', 'Lower slowly. Finish all reps, then switch.'] },
  { id: 'standing-kickback', name: 'Standing glute kickback', muscle: 'glutes', type: 'strength', equipment: [], met: 3, steps: ['Stand facing a wall, hands on it, slight lean forward.', 'Kick one straight leg back, squeezing your glute.', 'Return slowly. Finish all reps, then switch.'] },
  { id: 'glute-bridge', name: 'Glute bridge', muscle: 'glutes', type: 'strength', equipment: [], met: 3.5, isFloorWork: true, imageId: 'Butt_Lift_Bridge', steps: ['Lie on your back with knees bent and feet flat.', 'Drive your hips up, squeezing your glutes.', 'Lower slowly.'] },
  { id: 'single-leg-glute-bridge', name: 'Single-leg glute bridge', muscle: 'glutes', type: 'strength', equipment: [], met: 4, minLevel: 'intermediate', isFloorWork: true, imageId: 'Single_Leg_Glute_Bridge', steps: ['Lie on your back, one foot flat and the other leg straight up.', 'Drive your hips up through the planted heel.', 'Lower slowly. Finish all reps, then switch.'] },
  { id: 'donkey-kick', name: 'Donkey kick', muscle: 'glutes', type: 'strength', equipment: [], met: 3, isFloorWork: true, imageId: 'Glute_Kickback', steps: ['Start on hands and knees.', 'Keeping the knee bent, push one foot up toward the ceiling.', 'Lower without arching your back, then switch.'] },
  { id: 'fire-hydrant', name: 'Fire hydrant', muscle: 'glutes', type: 'strength', equipment: [], met: 3, isFloorWork: true, steps: ['Start on hands and knees.', 'Lift one bent knee out to the side to hip height.', 'Lower slowly, then switch sides.'] },
  { id: 'goblet-squat', name: 'Goblet squat', muscle: 'legs', type: 'strength', equipment: ['dumbbell'], met: 5.5, imageId: 'Goblet_Squat', steps: ['Hold a dumbbell vertically at your chest.', 'Squat down keeping your chest up.', 'Stand back up through your heels.'] },
  { id: 'db-squat', name: 'Dumbbell squat', muscle: 'legs', type: 'strength', equipment: ['dumbbell'], met: 5.5, imageId: 'Dumbbell_Squat', steps: ['Hold dumbbells at your sides, feet shoulder-width.', 'Squat until your thighs are parallel to the floor.', 'Stand back up through your heels.'] },
  { id: 'db-sumo-squat', name: 'Dumbbell sumo squat', muscle: 'legs', type: 'strength', equipment: ['dumbbell'], met: 5, imageId: 'Plie_Dumbbell_Squat', steps: ['Stand wide with toes out, one dumbbell hanging between your legs.', 'Lower your hips straight down.', 'Squeeze your glutes to stand.'] },
  { id: 'db-lunge', name: 'Dumbbell lunge', muscle: 'legs', type: 'strength', equipment: ['dumbbell'], met: 5.5, imageId: 'Dumbbell_Lunges', steps: ['Hold dumbbells at your sides.', 'Step forward into a lunge until both knees are at 90°.', 'Push back to standing and alternate legs.'] },
  { id: 'db-reverse-lunge', name: 'Dumbbell reverse lunge', muscle: 'legs', type: 'strength', equipment: ['dumbbell'], met: 5.5, imageId: 'Dumbbell_Rear_Lunge', steps: ['Hold dumbbells at your sides.', 'Step back and lower until both knees are at about 90°.', 'Drive through the front heel to return, then alternate.'] },
  { id: 'db-split-squat', name: 'Dumbbell split squat', muscle: 'legs', type: 'strength', equipment: ['dumbbell'], met: 5.5, imageId: 'Split_Squat_with_Dumbbells', steps: ['Hold dumbbells, one foot forward and one back.', 'Lower your back knee toward the floor.', 'Push up through the front foot. Finish all reps, then switch.'] },
  { id: 'db-calf-raise', name: 'Dumbbell calf raise', muscle: 'legs', type: 'strength', equipment: ['dumbbell'], met: 3.5, imageId: 'Standing_Dumbbell_Calf_Raise', steps: ['Hold dumbbells at your sides.', 'Rise onto your toes as high as possible.', 'Lower slowly.'] },
  { id: 'db-step-up', name: 'Dumbbell step-up', muscle: 'legs', type: 'strength', equipment: ['dumbbell', 'bench'], met: 5.5, imageId: 'Dumbbell_Step_Ups', steps: ['Hold dumbbells and face a bench.', 'Step up and stand tall on the bench.', 'Step down with control and alternate legs.'] },
  { id: 'db-hip-thrust', name: 'Dumbbell hip thrust', muscle: 'glutes', type: 'strength', equipment: ['dumbbell', 'bench'], met: 4, imageId: 'Barbell_Hip_Thrust', steps: ['Upper back on a bench, dumbbell on your hips.', 'Drive your hips up until your body is straight from knees to shoulders.', 'Lower with control.'] },
  { id: 'kb-goblet-squat', name: 'Kettlebell goblet squat', muscle: 'legs', type: 'strength', equipment: ['kettlebell'], met: 5.5, imageId: 'Goblet_Squat', steps: ['Hold the kettlebell by the horns at your chest.', 'Squat down keeping your chest up and elbows inside your knees.', 'Stand back up through your heels.'] },
  { id: 'kb-single-leg-deadlift', name: 'Kettlebell single-leg deadlift', muscle: 'legs', type: 'strength', equipment: ['kettlebell'], met: 4.5, minLevel: 'intermediate', imageId: 'Kettlebell_One-Legged_Deadlift', steps: ['Hold the kettlebell in one hand and stand on the opposite leg.', 'Hinge forward, free leg extending behind you.', 'Stand back up, squeezing your glute. Switch sides.'] },
  { id: 'band-squat', name: 'Band squat', muscle: 'legs', type: 'strength', equipment: ['resistance_band'], met: 4.5, imageId: 'Squats_-_With_Bands', steps: ['Stand on the band, handles at your shoulders.', 'Squat down keeping your chest up.', 'Drive up against the band.'] },
  { id: 'band-monster-walk', name: 'Band monster walk', muscle: 'glutes', type: 'strength', equipment: ['resistance_band'], met: 3.5, imageId: 'Monster_Walk', steps: ['Loop a band around your legs just above the knees or ankles.', 'Bend your knees slightly and step sideways, keeping tension.', 'Take 10 steps each way.'] },
  { id: 'band-kickback', name: 'Band glute kickback', muscle: 'glutes', type: 'strength', equipment: ['resistance_band'], met: 3.3, imageId: 'Hip_Extension_with_Bands', steps: ['Anchor the band low in front of you and loop it around one ankle.', 'Kick the leg straight back, squeezing your glute.', 'Return slowly, then switch.'] },
  { id: 'back-squat', name: 'Barbell back squat', muscle: 'legs', type: 'strength', equipment: ['barbell'], met: 6, minLevel: 'intermediate', imageId: 'Barbell_Full_Squat', steps: ['Bar on your upper back, feet shoulder-width.', 'Brace and squat to at least parallel.', 'Drive up keeping your chest proud.'] },
  { id: 'front-squat', name: 'Barbell front squat', muscle: 'legs', type: 'strength', equipment: ['barbell'], met: 6, minLevel: 'advanced', imageId: 'Front_Barbell_Squat', steps: ['Rest the bar on the front of your shoulders, elbows high.', 'Squat down keeping your torso upright.', 'Drive up through your heels.'] },
  { id: 'romanian-deadlift', name: 'Barbell Romanian deadlift', muscle: 'legs', type: 'strength', equipment: ['barbell'], met: 6, minLevel: 'intermediate', imageId: 'Romanian_Deadlift', steps: ['Hold the bar at your thighs, soft knees.', 'Push your hips back and slide the bar down to mid-shin with a flat back.', 'Drive your hips forward to stand.'] },
  { id: 'barbell-hip-thrust', name: 'Barbell hip thrust', muscle: 'glutes', type: 'strength', equipment: ['barbell', 'bench'], met: 5, minLevel: 'intermediate', imageId: 'Barbell_Hip_Thrust', steps: ['Upper back on a bench, padded bar over your hips.', 'Drive your hips up until your body is straight from knees to shoulders.', 'Lower with control.'] },
  { id: 'leg-press', name: 'Leg press', muscle: 'legs', type: 'strength', equipment: ['gym_machines'], met: 5, imageId: 'Leg_Press', steps: ['Feet shoulder-width on the platform.', 'Lower until your knees reach about 90°.', 'Press back without locking your knees.'] },
  { id: 'leg-extension', name: 'Leg extension', muscle: 'legs', type: 'strength', equipment: ['gym_machines'], met: 4, imageId: 'Leg_Extensions', steps: ['Sit with the pad just above your ankles.', 'Straighten your legs, squeezing your thighs.', 'Lower slowly.'] },
  { id: 'leg-curl', name: 'Lying leg curl', muscle: 'legs', type: 'strength', equipment: ['gym_machines'], met: 4, imageId: 'Lying_Leg_Curls', steps: ['Lie face down with the pad above your heels.', 'Curl your heels toward your glutes.', 'Lower slowly.'] },
  { id: 'seated-leg-curl', name: 'Seated leg curl', muscle: 'legs', type: 'strength', equipment: ['gym_machines'], met: 4, imageId: 'Seated_Leg_Curl', steps: ['Sit with the pad behind your ankles and the thigh pad locked.', 'Curl your heels down and back.', 'Return slowly.'] },
  { id: 'hip-abduction-machine', name: 'Hip abduction machine', muscle: 'glutes', type: 'strength', equipment: ['gym_machines'], met: 3.5, imageId: 'Thigh_Abductor', steps: ['Sit with the pads on the outside of your knees.', 'Push your knees outward.', 'Return slowly.'] },

  // Core
  { id: 'standing-knee-to-elbow', name: 'Standing knee-to-elbow crunch', muscle: 'core', type: 'core', equipment: [], met: 4, steps: ['Stand tall, hands behind your head.', 'Lift one knee while twisting the opposite elbow down to meet it.', 'Alternate sides at a steady pace.'] },
  { id: 'standing-side-crunch', name: 'Standing side crunch', muscle: 'core', type: 'core', equipment: [], met: 3.5, steps: ['Stand tall, hands behind your head.', 'Lift one knee out to the side and bring the same elbow down to it.', 'Finish all reps, then switch sides.'] },
  { id: 'standing-wood-chop', name: 'Standing wood chop (no weight)', muscle: 'core', type: 'core', equipment: [], met: 3.5, steps: ['Clasp your hands above one shoulder.', 'Chop diagonally down across your body to the opposite knee, rotating your torso.', 'Return slowly. Finish all reps, then switch sides.'] },
  { id: 'high-plank', name: 'High plank (on hands)', muscle: 'core', type: 'core', equipment: [], met: 3.8, isTimed: true, steps: ['Hands under your shoulders, legs straight, only hands and toes on the floor.', 'Squeeze your abs and glutes so your body is a straight line.', 'Hold. Easier: hands on a wall or table.'] },
  { id: 'bear-plank', name: 'Bear plank hold', muscle: 'core', type: 'core', equipment: [], met: 4, needsBaseFitness: true, isTimed: true, steps: ['Start on hands and toes with knees bent under your hips.', 'Lift your knees 2–3 cm off the floor, back flat.', 'Hold while breathing steadily.'] },
  { id: 'plank', name: 'Plank', muscle: 'core', type: 'core', equipment: [], met: 3.8, isTimed: true, isFloorWork: true, imageId: 'Plank', steps: ['Forearms on the floor, body in a straight line.', 'Brace your abs and glutes.', 'Hold without letting your hips sag.'] },
  { id: 'side-plank', name: 'Side plank', muscle: 'core', type: 'core', equipment: [], met: 3.5, isTimed: true, isFloorWork: true, imageId: 'Side_Bridge', steps: ['Lie on your side, propped on one forearm.', 'Lift your hips so your body is straight.', 'Hold, then switch sides.'] },
  { id: 'bird-dog', name: 'Bird dog', muscle: 'core', type: 'core', equipment: [], met: 3, isFloorWork: true, steps: ['Start on hands and knees.', 'Extend one arm forward and the opposite leg back, keeping your hips level.', 'Return and alternate sides.'] },
  { id: 'dead-bug', name: 'Dead bug', muscle: 'core', type: 'core', equipment: [], met: 3, isFloorWork: true, imageId: 'Dead_Bug', steps: ['Lie on your back, arms up and knees at 90°.', 'Lower the opposite arm and leg while keeping your back flat.', 'Return and alternate.'] },
  { id: 'crunch', name: 'Crunch', muscle: 'core', type: 'core', equipment: [], met: 3, isFloorWork: true, imageId: 'Crunches', steps: ['Lie on your back, knees bent, hands lightly behind your head.', 'Curl your shoulders off the floor using your abs.', 'Lower slowly without pulling on your neck.'] },
  { id: 'reverse-crunch', name: 'Reverse crunch', muscle: 'core', type: 'core', equipment: [], met: 3.3, isFloorWork: true, imageId: 'Reverse_Crunch', steps: ['Lie on your back with knees bent at 90° above your hips.', 'Curl your hips off the floor toward your chest.', 'Lower slowly.'] },
  { id: 'heel-touch', name: 'Heel touches', muscle: 'core', type: 'core', equipment: [], met: 3, isFloorWork: true, imageId: 'Alternate_Heel_Touchers', steps: ['Lie on your back, knees bent, shoulders slightly lifted.', 'Reach side to side to tap each heel.', 'Keep your shoulders off the floor throughout.'] },
  { id: 'bicycle-crunch', name: 'Bicycle crunch', muscle: 'core', type: 'core', equipment: [], met: 3.8, isFloorWork: true, imageId: 'Air_Bike', steps: ['Lie on your back, hands behind your head.', 'Bring one elbow toward the opposite knee while extending the other leg.', 'Alternate sides in a pedaling motion.'] },
  { id: 'flutter-kick', name: 'Flutter kicks', muscle: 'core', type: 'core', equipment: [], met: 3.8, isTimed: true, isFloorWork: true, imageId: 'Flutter_Kicks', steps: ['Lie on your back, hands under your hips, legs straight and slightly raised.', 'Kick your legs up and down in small, quick movements.', 'Keep your lower back pressed down.'] },
  { id: 'leg-raise', name: 'Lying leg raise', muscle: 'core', type: 'core', equipment: [], met: 3.5, isFloorWork: true, imageId: 'Flat_Bench_Lying_Leg_Raise', steps: ['Lie flat with legs straight.', 'Raise your legs to 90° keeping your lower back down.', 'Lower slowly without touching the floor.'] },
  { id: 'russian-twist', name: 'Russian twist', muscle: 'core', type: 'core', equipment: [], met: 3.8, isFloorWork: true, imageId: 'Russian_Twist', steps: ['Sit with knees bent and lean back slightly.', 'Rotate your torso side to side (hold a dumbbell or bottle to make it harder).', 'Keep your chest lifted.'] },
  { id: 'hollow-hold', name: 'Hollow body hold', muscle: 'core', type: 'core', equipment: [], met: 3.8, isTimed: true, minLevel: 'intermediate', isFloorWork: true, steps: ['Lie on your back and press your lower back into the floor.', 'Lift your shoulders and straight legs a few centimeters, arms overhead.', 'Hold without letting your back arch.'] },
  { id: 'v-up', name: 'V-up', muscle: 'core', type: 'core', equipment: [], met: 4.5, minLevel: 'advanced', isFloorWork: true, imageId: 'Jackknife_Sit-Up', steps: ['Lie flat with arms overhead.', 'Lift your legs and torso at the same time to touch your toes.', 'Lower slowly to the start.'] },
  { id: 'db-side-bend', name: 'Dumbbell side bend', muscle: 'core', type: 'core', equipment: ['dumbbell'], met: 3, imageId: 'Dumbbell_Side_Bend', steps: ['Stand tall holding a dumbbell in one hand.', 'Bend sideways toward the weight, then use your obliques to stand up.', 'Finish all reps, then switch sides.'] },
  { id: 'kb-figure-8', name: 'Kettlebell figure 8', muscle: 'core', type: 'core', equipment: ['kettlebell'], met: 4.5, minLevel: 'intermediate', imageId: 'Kettlebell_Figure_8', steps: ['Stand wide in a half squat with a flat back.', 'Pass the kettlebell between your legs in a figure-8 pattern.', 'Keep your core tight and move smoothly.'] },
  { id: 'kb-windmill', name: 'Kettlebell windmill', muscle: 'core', type: 'core', equipment: ['kettlebell'], met: 4, minLevel: 'intermediate', imageId: 'Kettlebell_Windmill', steps: ['Press the kettlebell overhead and turn your feet away from it.', 'Hinge sideways, sliding your free hand down your leg, eyes on the bell.', 'Return to standing. Switch sides.'] },
  { id: 'band-pallof-press', name: 'Band Pallof press', muscle: 'core', type: 'core', equipment: ['resistance_band'], met: 3, steps: ['Anchor the band at chest height and stand side-on to it.', 'Press the band straight out from your chest and resist the twist.', 'Bring it back slowly. Switch sides.'] },
  { id: 'cable-crunch', name: 'Cable crunch', muscle: 'core', type: 'core', equipment: ['gym_machines'], met: 3.5, imageId: 'Cable_Crunch', steps: ['Kneel facing a high pulley, rope beside your head.', 'Crunch down by curling your ribs toward your hips.', 'Return slowly.'] },
  { id: 'hanging-knee-raise', name: 'Hanging knee raise', muscle: 'core', type: 'core', equipment: ['pull_up_bar'], met: 3.8, minLevel: 'intermediate', steps: ['Hang from the bar with straight arms.', 'Raise your knees toward your chest without swinging.', 'Lower slowly.'] },
  { id: 'hanging-leg-raise', name: 'Hanging leg raise', muscle: 'core', type: 'core', equipment: ['pull_up_bar'], met: 4, minLevel: 'advanced', imageId: 'Hanging_Leg_Raise', steps: ['Hang from the bar with straight arms.', 'Raise your knees (easier) or straight legs toward your chest.', 'Lower slowly without swinging.'] },

  // Cardio & full body
  { id: 'march-in-place', name: 'March in place', muscle: 'cardio', type: 'cardio', equipment: [], met: 3.5, isTimed: true, steps: ['Stand tall and march, lifting your knees to a comfortable height.', 'Swing your arms in rhythm.', 'Speed up or lift your knees higher to make it harder.'] },
  { id: 'step-touch', name: 'Side step-touch', muscle: 'cardio', type: 'cardio', equipment: [], met: 3.8, isTimed: true, steps: ['Step one foot to the side and tap the other foot next to it.', 'Repeat to the other side.', 'Add arm swings or reach overhead to raise your heart rate.'] },
  { id: 'step-jack', name: 'Step jacks (low-impact jumping jacks)', muscle: 'cardio', type: 'cardio', equipment: [], met: 4.5, isTimed: true, steps: ['Step one foot out to the side while raising both arms overhead.', 'Bring it back as your arms come down.', 'Alternate sides at a brisk pace — no jumping.'] },
  { id: 'shadow-boxing', name: 'Shadow boxing', muscle: 'cardio', type: 'cardio', equipment: [], met: 5.5, isTimed: true, steps: ['Stand in a staggered stance, fists by your chin.', 'Throw quick straight punches and hooks, rotating through your hips.', 'Stay light on your feet and keep breathing.'] },
  { id: 'squat-to-reach', name: 'Squat to overhead reach', muscle: 'cardio', type: 'cardio', equipment: [], met: 5, isTimed: true, steps: ['Squat down with your arms reaching forward.', 'Stand up and reach both arms overhead, rising onto your toes.', 'Repeat at a steady, brisk pace.'] },
  { id: 'brisk-walk', name: 'Brisk walk', muscle: 'cardio', type: 'cardio', equipment: [], met: 4.3, isTimed: true, steps: ['Walk at a pace where you can talk but not sing — outside, or briskly around the house.', 'Keep your posture upright and arms swinging.'] },
  { id: 'stair-climb', name: 'Stair climbing', muscle: 'cardio', type: 'cardio', equipment: [], met: 6, isTimed: true, usesFurniture: true, steps: ['Walk up a flight of stairs at a steady pace, using the rail if needed.', 'Walk down carefully.', 'Repeat for the set time.'] },
  { id: 'jumping-jack', name: 'Jumping jacks', muscle: 'cardio', type: 'cardio', equipment: [], met: 8, isTimed: true, isHighImpact: true, imageId: 'Star_Jump', steps: ['Jump your feet out while raising your arms overhead.', 'Jump back to the start.', 'Keep a steady rhythm. Low impact: step out instead of jumping.'] },
  { id: 'high-knees', name: 'High knees', muscle: 'cardio', type: 'cardio', equipment: [], met: 8, isTimed: true, isHighImpact: true, steps: ['Run in place.', 'Drive your knees to hip height.', 'Pump your arms.'] },
  { id: 'butt-kick', name: 'Butt kicks', muscle: 'cardio', type: 'cardio', equipment: [], met: 7, isTimed: true, isHighImpact: true, imageId: 'Single_Leg_Butt_Kick', steps: ['Jog in place.', 'Kick your heels up toward your glutes.', 'Stay on the balls of your feet and pump your arms.'] },
  { id: 'fast-feet', name: 'Fast feet shuffle', muscle: 'cardio', type: 'cardio', equipment: [], met: 7, isTimed: true, minLevel: 'intermediate', isHighImpact: true, steps: ['Stand in a half squat on the balls of your feet.', 'Patter your feet as fast as you can.', 'Keep your chest up and arms ready.'] },
  { id: 'mountain-climber', name: 'Mountain climbers', muscle: 'cardio', type: 'cardio', equipment: [], met: 8, needsBaseFitness: true, isTimed: true, imageId: 'Mountain_Climbers', steps: ['Start in a high plank.', 'Drive your knees toward your chest one at a time.', 'Move quickly while keeping your hips low. Easier: hands on a wall or table.'] },
  { id: 'step-back-burpee', name: 'Step-back burpee (no jump)', muscle: 'full_body', type: 'cardio', equipment: [], met: 6, needsBaseFitness: true, steps: ['Squat and place your hands on the floor.', 'Step your feet back to a plank one at a time, then step them forward.', 'Stand up and reach overhead.'] },
  { id: 'inchworm', name: 'Inchworm', muscle: 'full_body', type: 'strength', equipment: [], met: 4, needsBaseFitness: true, imageId: 'Inchworm', steps: ['Stand tall, bend forward and place your hands on the floor (bend your knees if needed).', 'Walk your hands out to a high plank.', 'Walk them back to your feet and stand up.'] },
  { id: 'bear-crawl', name: 'Bear crawl', muscle: 'full_body', type: 'cardio', equipment: [], met: 6, isTimed: true, minLevel: 'intermediate', steps: ['On hands and toes, knees hovering just off the floor.', 'Crawl forward by moving the opposite hand and foot together.', 'Crawl back. Keep your back flat and hips low.'] },
  { id: 'burpee', name: 'Burpee', muscle: 'full_body', type: 'cardio', equipment: [], met: 8, minLevel: 'intermediate', isHighImpact: true, steps: ['Squat and place your hands on the floor.', 'Jump or step your feet back to a plank, then bring them forward.', 'Stand or jump up with arms overhead.'] },
  { id: 'jump-rope', name: 'Jump rope', muscle: 'cardio', type: 'cardio', equipment: ['jump_rope'], met: 11, isTimed: true, minLevel: 'intermediate', isHighImpact: true, imageId: 'Rope_Jumping', steps: ['Hold the handles at hip height, elbows close.', 'Turn the rope with your wrists and jump just high enough to clear it.', 'Land softly on the balls of your feet.'] },
  { id: 'db-thruster', name: 'Dumbbell thruster', muscle: 'full_body', type: 'strength', equipment: ['dumbbell'], met: 7, imageId: 'Kettlebell_Thruster', steps: ['Hold dumbbells at shoulder height.', 'Squat down, then drive up and press the weights overhead.', 'Lower to the shoulders and repeat.'] },
  { id: 'kb-swing', name: 'Kettlebell swing', muscle: 'full_body', type: 'cardio', equipment: ['kettlebell'], met: 8, imageId: 'One-Arm_Kettlebell_Swings', steps: ['Hold the kettlebell with both hands between your legs.', 'Hinge and drive your hips forward to swing it to chest height.', 'Let it swing back and repeat.'] },
  { id: 'kb-thruster', name: 'Kettlebell thruster', muscle: 'full_body', type: 'strength', equipment: ['kettlebell'], met: 7, minLevel: 'intermediate', imageId: 'Kettlebell_Thruster', steps: ['Hold the kettlebell at your chest.', 'Squat, then drive up and press it overhead in one motion.', 'Lower to your chest and repeat.'] },
  { id: 'treadmill-incline', name: 'Incline treadmill walk', muscle: 'cardio', type: 'cardio', equipment: ['cardio_machine'], met: 6, isTimed: true, imageId: 'Walking_Treadmill', steps: ['Set the incline to 8–12% at 4–5 km/h.', 'Walk without holding the rails.'] },
  { id: 'rowing-machine', name: 'Rowing machine', muscle: 'cardio', type: 'cardio', equipment: ['cardio_machine'], met: 7, isTimed: true, imageId: 'Rowing_Stationary', steps: ['Push with your legs first, then lean back and pull.', 'Return arms, then body, then legs.'] },
  { id: 'stationary-bike', name: 'Stationary bike', muscle: 'cardio', type: 'cardio', equipment: ['cardio_machine'], met: 6.8, isTimed: true, imageId: 'Bicycling_Stationary', steps: ['Adjust the seat to hip height.', 'Pedal at a moderate-to-hard effort.'] },
  { id: 'elliptical', name: 'Elliptical trainer', muscle: 'cardio', type: 'cardio', equipment: ['cardio_machine'], met: 5, isTimed: true, imageId: 'Elliptical_Trainer', steps: ['Stand tall on the pedals and hold the handles.', 'Stride smoothly at a pace where talking is a little hard.'] },
  { id: 'stair-climber', name: 'Stair climber machine', muscle: 'cardio', type: 'cardio', equipment: ['cardio_machine'], met: 8, isTimed: true, minLevel: 'intermediate', imageId: 'Stairmaster', steps: ['Step at a steady pace, standing tall.', 'Use the rails only for balance, not to hold your weight.'] },

  // Mobility (warm-up / cool-down)
  { id: 'standing-warm-up', name: 'Standing warm-up flow', muscle: 'full_body', type: 'mobility', equipment: [], met: 3, isTimed: true, steps: ['March in place for 30 seconds.', 'Arm circles forward and back, 10 each.', 'Hip circles, 5 each way, then 10 easy half squats.', 'Leg swings forward and back, 8 per leg (hold a wall).'] },
  { id: 'standing-cool-down', name: 'Standing cool-down stretch', muscle: 'full_body', type: 'mobility', equipment: [], met: 2.3, isTimed: true, steps: ['Walk slowly in place for 30 seconds to bring your breathing down.', 'Quad stretch: hold one foot behind you, 20 seconds per leg (hand on a wall).', 'Calf stretch against the wall, 20 seconds per leg.', 'Chest stretch: clasp your hands behind your back and lift gently, 20 seconds.'] },
  { id: 'worlds-greatest', name: "World's greatest stretch", muscle: 'full_body', type: 'mobility', equipment: [], met: 2.5, imageId: 'Worlds_Greatest_Stretch', steps: ['Step into a deep lunge, hand inside the front foot.', 'Rotate and reach the other arm to the ceiling.', 'Return and switch sides.'] },
  { id: 'hip-circles', name: 'Hip circles', muscle: 'legs', type: 'mobility', equipment: [], met: 2.3, isTimed: true, imageId: 'Standing_Hip_Circles', steps: ['Stand with hands on your hips, feet hip-width.', 'Draw big slow circles with your hips.', 'Switch direction halfway.'] },
  { id: 'leg-swings', name: 'Leg swings', muscle: 'legs', type: 'mobility', equipment: [], met: 2.5, isTimed: true, imageId: 'Front_Leg_Raises', steps: ['Hold a wall for balance.', 'Swing one straight leg forward and back, gradually higher.', 'Switch legs.'] },
  { id: 'calf-wall-stretch', name: 'Calf stretch (wall)', muscle: 'legs', type: 'mobility', equipment: [], met: 2.3, isTimed: true, imageId: 'Calf_Stretch_Hands_Against_Wall', steps: ['Hands on a wall, one foot back with the heel down.', 'Lean in until you feel a stretch in the back calf.', 'Hold, then switch.'] },
  { id: 'cat-cow', name: 'Cat-cow stretch', muscle: 'back', type: 'mobility', equipment: [], met: 2.3, isTimed: true, isFloorWork: true, imageId: 'Cat_Stretch', steps: ['On hands and knees, round your back up.', 'Then drop your belly and lift your chest.', 'Move slowly with your breath.'] },
  { id: 'childs-pose', name: "Child's pose", muscle: 'back', type: 'mobility', equipment: [], met: 2.3, isTimed: true, isFloorWork: true, imageId: 'Childs_Pose', steps: ['Kneel and sit back on your heels.', 'Reach your arms forward and rest your forehead down.', 'Breathe slowly into your back.'] },
  { id: 'hip-flexor-stretch', name: 'Hip flexor stretch', muscle: 'legs', type: 'mobility', equipment: [], met: 2.3, isTimed: true, isFloorWork: true, imageId: 'Kneeling_Hip_Flexor', steps: ['Kneel on one knee, other foot in front.', 'Shift your hips forward until you feel a stretch.', 'Hold, then switch sides.'] },
];

export const exerciseById = (id: string): Exercise | undefined => EXERCISES.find((exercise) => exercise.id === id);

/** True when the user has every piece of equipment the exercise needs. */
export const isEquipmentAvailable = (required: Equipment[], available: Equipment[]): boolean =>
  required.every((item) => available.includes(item));

/** What the user has to train with: equipment plus a mat (floor work) and sturdy furniture at home. */
export interface TrainingSetup {
  equipment: Equipment[];
  hasMat: boolean;
  hasFurniture: boolean;
}

export const isExerciseAvailable = (exercise: Exercise, setup: TrainingSetup): boolean =>
  isEquipmentAvailable(exercise.equipment, setup.equipment) &&
  (setup.hasMat || !exercise.isFloorWork) &&
  (setup.hasFurniture || !exercise.usesFurniture);

export const equipmentSummary = ({ equipment, hasMat, hasFurniture }: TrainingSetup): string => {
  if (equipment.length > 0) return equipment.map((item) => EQUIPMENT_LABELS[item]).join(', ');
  if (!hasMat && !hasFurniture) return 'No equipment, no mat';
  return hasMat ? 'Bodyweight only' : 'Bodyweight, no mat';
};
