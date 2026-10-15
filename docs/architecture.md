# Architecture notes

## Features (routes)
| Route | Folder | What it does |
| --- | --- | --- |
| `/` | `features/dashboard` | Welcome screen (no profile) or daily overview: calories ring, today's workout, weight, 7-day calories, water, today's menu |
| `/diary` | `features/diary` | Food log per meal and date, copy from previous day, water, exercise summary |
| `/lookup` | `features/lookup` | Calorie lookup: built-in DB, Open Food Facts search/barcode, custom foods, "time to burn it off" |
| `/meal-plan` | `features/meal-plan` | 7-day plan generated from `data/mealTemplates.ts`, swap meal, log to diary, shopping list |
| `/workouts` | `features/workouts` | Weekly plan from `lib/workoutGenerator.ts`, activity log + chart, exercise library |
| `/weight` | `features/weight` | Weigh-ins, 7-day moving average chart, trend, goal progress |
| `/profile` | `features/profile` | Body stats, goal, diet & training preferences, live targets preview |
| `/settings` | `features/settings` | Export / import (merge or replace), sample data, delete all |

## Calculations (`src/lib/calc.ts`)
- BMR: Mifflin-St Jeor. TDEE = BMR × activity factor (1.2 – 1.9).
- Lose: deficit = weekly rate × 7700 / 7, capped at 25% of TDEE. Gain: surplus capped at 500 kcal.
- Floor: 1200 kcal (female) / 1500 kcal (male).
- Protein g/kg by macro preset (1.6 / 2.0 / 1.8); fat as share of kcal (30% / 25% / 40%); carbs = remainder.
- BMI uses Asia-Pacific cut-offs (23 overweight, 25 obese).
- Exercise calories: MET × kg × hours.

## Meal planner
Templates are scaled per meal (breakfast 25%, lunch 35%, dinner 30%, snack 10% of target), portions rounded to ¼
serving and clamped 0.5×–2.5×. Diet filtering uses food `tags` (meat, pork, poultry, seafood, egg, dairy, alcohol)
plus the user's excluded keywords.

## Workout planner
- Days/week and minutes/session come from `recommendSchedule` (level → 3/4/5 days × 30/45/60 min; weight loss +1 day
  and +15 min; sedentary max 4 days; age 60+ or BMI 35+ max 3 days). Users can override via "Customize"
  (`workout.isCustomSchedule`). `resolveWorkoutPreferences` returns the values actually used.
- Split by days/week (full body → upper/lower → push/pull/legs). Exercise count by session length; sets/reps by goal
  and level. Weight-loss plans add a finisher (treadmill / jump rope / brisk walk depending on equipment).
- Equipment is a multi-select list; an exercise is used only if every item in its `equipment` is owned.
  Beginners skip harder moves (`NOT_FOR_BEGINNERS`).
- Exercise photos (start/finish) are hot-linked from free-exercise-db (public domain, `imageId` in `data/exercises.ts`);
  the video button opens a YouTube search.

## Food data
Food names and serving labels are Indonesian; ids are stable English slugs (searchable). Categories stay English (UI).

## Backup format
`{ "app": "fitplan", "exportedAt": ISO, "data": AppData }`
