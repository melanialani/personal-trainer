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
| `/children` | `features/parenting` | Children list (add/edit/delete), per-child summary: stage, vaccines due, vitamin A / deworming, growth status |
| `/development` | `features/parenting` | Stage picker 0–18 years: CDC milestones checklist (ticked per child), red flags, parenting guide (focus, daily life, tips, do & don't + why, sleep/screen/food) |
| `/immunization` | `features/parenting` | IDAI 2024 vaccine schedule 0–18 years with per-dose status and dates; vitamin K, vitamin A rounds, deworming, iron, vitamin D, routine checks |
| `/growth` | `features/parenting` | Measurements log, WHO chart with SD curves, z-score + Permenkes 2/2020 category, normal ranges table by age/sex |
| `/bible` | `features/bible` | Bible reader (AYT · WEB-C · BSB), version switch keeps the verse, highlights in 5 colors, comments, notes list |
| `/prayers` | `features/prayers` | Catholic prayers in Indonesian, searchable, by category |
| `/rosary` | `features/rosary` | Rosary: today's mysteries by weekday, how to pray, painting + Bible link per mystery |
| `/profile` | `features/profile` | Body stats, goal, diet & training preferences, live targets preview |
| `/settings` | `features/settings` | Export / import (merge or replace), appearance (theme), sample data, delete all |

## Navigation
- `layout/navItems.ts` groups pages: Fitness, Food & Health, Parenting, Spiritual Guide (≤ 4 pages each). Settings is outside
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

## Parenting
- Data: `AppData.parenting` = `{ children: Child[], activeChildId }`. A child holds `measurements`, `vaccines`
  (dose id → date given; repeat doses use `<vaccineId>-repeat-<date>`), `supplements` (log entries) and `milestones`
  (milestone id → date ticked). Ids in `data/vaccines.ts`, `data/childSupplements.ts` and `data/milestones.ts` are stored
  in user data: never rename them. All parenting pages work without a child (reference mode).
- Ages are completed calendar months (`completedMonths` in `lib/date.ts`); schedule logic lives in `lib/child.ts`
  (dose status: done / upcoming / due / late / missed (hard age limit, e.g. rotavirus) / optional (conditional vaccines
  such as JE); vitamin A rounds in February and August; deworming every 6 months).
- Growth: `data/growthStandards.ts` holds WHO LMS parameters per month (0–60 months: WHO Child Growth Standards 2006;
  61–228 months: WHO Growth Reference 2007; weight-for-age only to 120 months). Generated by `scripts/build-growth.py`
  from the official WHO xlsx tables — never hand-edit. `lib/growth.ts` interpolates L/M/S, computes z-scores (with the
  WHO ±3 SD restriction for weight and BMI) and classifies with Permenkes RI 2/2020 categories.
- Sources: vaccines = IDAI 2024 schedule (Sari Pediatri 2025;26(5)); vitamin A = Kemenkes; deworming = Permenkes
  15/2017; iron = IDAI 2011 recommendation; vitamin D = IDAI 2016; milestones = CDC "Learn the Signs. Act Early."
  (2022) and archived CDC Positive Parenting Tips (6–17 years). Content is Indonesian; UI labels English.

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
  (`lib/prayers.ts`). Rosary paintings are public-domain works (via Wikimedia Commons or the Web Gallery of Art), stored as WebP in `public/rosary/<mystery id>.webp`; credits live in `data/rosary.ts`.
- Not included on purpose: Puji Syukur / Madah Bakti hymn lyrics (copyrighted).
