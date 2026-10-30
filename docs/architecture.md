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
| `/medicine` | `features/medicine` | Medicine guide: search + filters (symptom, group, ingredient, form, meal timing, availability, children, pregnancy), detail modal with dose/interactions, care guides |
| `/bible` | `features/bible` | Bible reader (AYT · WEB-C · BSB), version switch keeps the verse, highlights in 5 colors, comments, notes list |
| `/prayers` | `features/prayers` | Catholic prayers in Indonesian, searchable, by category |
| `/rosary` | `features/rosary` | Rosary: today's mysteries by weekday, how to pray, painting + Bible link per mystery |
| `/profile` | `features/profile` | Body stats, goal, diet & training preferences, live targets preview |
| `/settings` | `features/settings` | Export / import (merge or replace), appearance (theme), sample data, delete all |

## Navigation
- `layout/navItems.ts` groups pages: Fitness, Food & Health, Spiritual Guide (≤ 4 pages each). Settings is outside
  the groups (gear icon in the phone header, last link in the sidebar).
- Phone: the header holds the group switcher; the bottom bar shows only the active group's pages (no "More" menu).
  `layout/useNavGroup.ts` remembers the last page per group in localStorage `fitplan:nav` (per device, not in
  backups); tapping the current group goes back to its first page. Desktop: the sidebar lists every group.

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
- Progression (`lib/trainingProgress.ts`): each level has stages — beginner: Foundation → Building → Consolidating,
  intermediate: Base → Progressing, advanced: Performance. The stage is derived from `workoutLog` (only entries since
  `workout.levelSince`), week by week (Monday start): a week counts when it has ≥ 2 workouts (beginner) / ≥ 3 and fewer
  than half rated "Too hard" (`effort`). Beginners move on after 3 / 3 / 4 counted weeks, intermediates after 6 / 8;
  the last stage then suggests the next level (user confirms; `levelSince` resets). Two empty weeks step back one stage.
- Deconditioned beginners (sedentary job, BMI 30+ or age 60+) start at Foundation, others at Building. Low impact
  (no `isHighImpact` moves) for BMI 35+, age 60+, or deconditioned beginners before Consolidating.
- Days/minutes come from `recommendSchedule` (per stage: 3×20, 3×30, 3×40, 4×45, 4×50, 5×60; weight loss adds a walk
  finisher for beginners, +1 day and +15 min otherwise; sedentary max 4 days; age 60+ or BMI 35+ max 3 days). Users can
  override via "Customize" (`workout.isCustomSchedule`). `assessTrainingForProfile` returns the values actually used.
- Sets/reps/rest by stage and goal (Foundation: 2 × 8–10, 20s holds, 75s rest). Beginners get a standing warm-up and
  cool-down; moves flagged `needsBaseFitness` (push-up, lunges, plank variations) wait until Consolidating.
- Split by days/week (full body → upper/lower → push/pull/legs). Exercise count by session length.
- Equipment is a multi-select list plus `hasMat` (floor work) and `hasFurniture` (chair/table/stairs); an exercise is
  used only if everything it needs is available (`isExerciseAvailable`). "Nothing at all" = standing / wall moves only.
  `minLevel` hides harder moves from lower levels.
- Plans store `stageId` and `isLowImpact`; `planOutdatedReason` prompts an update when the stage changes.
- Exercise photos (start/finish) are hot-linked from free-exercise-db (public domain, `imageId` in `data/exercises.ts`);
  the video button opens a YouTube search.

## Medicine guide
- Data: `data/medicines.ts` (medicines, filter label maps, Indonesian symptom keywords for search) and `data/careGuides.ts`.
  Content is Indonesian; UI labels are English. Filtering/search logic lives in `lib/medicines.ts`.
- Each medicine has adult and child doses, meal timing, interactions, warnings and red flags. Static, read-only:
  nothing is stored in `fitplan:data`.

## Theme (light / dark)
- `shared/hooks/useTheme.ts` stores `light | dark | system` in localStorage key `fitplan:theme` (per device, not in
  backups) and toggles the `dark` class on `<html>`. An inline script in `index.html` applies it before first paint.
- `index.css` defines semantic tokens (`page`, `surface`, `raised`, `brand-ink`, macro `*-ink`) and, under `.dark`,
  remaps the slate scale and light tints. So `bg-surface` (not `bg-white`) for cards/inputs, and colored text needs a
  `dark:` shade (e.g. `text-brand-700 dark:text-brand-400`). JS/chart colors use CSS variables from `shared/theme.ts`.
- Text must meet WCAG AA (4.5:1) in both themes.

## Food data
Food names and serving labels are Indonesian; ids are stable English slugs (searchable). Categories stay English (UI).

## Backup format
`{ "app": "fitplan", "exportedAt": ISO, "data": AppData }`

## Spiritual guide (Catholic)
- Bible texts: `public/bible/<version>/<BOOK>.json` (`{ "chapter": [[verse, text], ...] }`), fetched per book on demand
  by `lib/bible.ts` (`loadBook`, cached). Built from eBible.org VPL files by `scripts/build-bible.mjs`, which also
  writes `data/bibleChapters.ts`. Versions (`data/bibleBooks.ts`): AYT (Indonesian, CC BY-NC-SA, 66 books),
  WEB-C (English, public domain, 73 books, Catholic order), BSB (English, public domain, 66 books).
- The official Catholic Indonesian text (TB + Deuterokanonika, LAI) is copyrighted, so it is not bundled; the reader
  links each chapter to imankatolik.or.id instead (`tbChapterUrl`). Greek Esther / Daniel use the ids EST / DAN, so a
  position survives a version switch (verse numbers can differ in those books).
- Book ids are eBible codes (`JOH`, `1CO`, …). Highlights/comments live in `AppData.bible.notes`, keyed
  `BOOK.chapter.verse` — the same key in every version. A comment sits on the first verse of the selection
  (`commentEndVerse` = last verse). Reading position (`versionId`, `bookId`, `chapter`, `verse`) is saved after
  scrolling stops; `#/bible?ref=LUK.1.26` opens a passage.
- Highlight colors are CSS tokens `--color-hl-*` (light tints under dark text; deep shades under light text in dark
  mode), so highlights stay readable after switching theme.
- Prayers (`data/prayers.ts`) and rosary (`data/rosary.ts`) are Indonesian; search ignores case/accents
  (`lib/prayers.ts`). Rosary paintings are public-domain works from Wikimedia Commons, stored in `public/rosary/`.
- Not included on purpose: Puji Syukur / Madah Bakti hymn lyrics (copyrighted).
