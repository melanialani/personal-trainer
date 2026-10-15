# FitPlan — Personal Trainer & Meal Planner

Static SPA deployed to GitHub Pages: https://melanialani.github.io/personal-trainer/

## Stack & commands
- Vite 6 + React 18 + TypeScript (strict) + Tailwind v4 + Recharts + lucide-react.
- `npm run dev` → http://localhost:4007/personal-trainer/ (port 4007 is fixed, `strictPort`).
- `npm run build` (runs `tsc --noEmit` first) · `npm run typecheck`.
- Deploy: push to `main` → `.github/workflows/deploy.yml` builds and publishes `dist/` to Pages.

## Rules
- No backend. All data lives in `localStorage` key `fitplan:data` as one `AppData` object (`src/types.ts`).
  Any new field must get a default in `normalizeData` (`src/lib/storage.ts`) so old backups/imports keep working.
- Routing uses `HashRouter` (Pages has no SPA fallback). Vite `base` is `/personal-trainer/`.
- Read/write data only through `useAppData()` (`update`, `upsert`, `remove`) in `src/store/AppDataContext.tsx`.
- Deletes and destructive actions go through `useConfirmDelete()` / `useConfirm()`; never `window.confirm()`.
- Modals use `shared/components/Modal` (no outside-click / Escape close).
- Reuse shared components in `src/shared/components` and food UI in `src/features/foods` (FoodPicker, FoodRow, ServingForm, AddFoodModal).
- Generic helpers: `lib/math` (round, clamp, sum, average), `lib/format` (display strings, pluralize), `lib/date`; shared hooks in `src/shared/hooks` (`useProfile`, `useBodyWeightKg`, …); JS/chart colors in `src/shared/theme.ts`. Check these before writing a helper.
- Calculations live in `src/lib` (calc, mealPlanGenerator, workoutGenerator) — keep UI files free of formulas.
- Static datasets live in `src/data` (foods, meal templates, exercises, activities). Meal templates must only reference existing food ids.
- Online food search uses Open Food Facts (`src/lib/openFoodFacts.ts`); search only on submit (rate limit ~10 req/min).
- UI text and code in English, except food names and serving labels in `src/data/foods.ts` / meal template titles (Indonesian, by request).

More detail: `docs/architecture.md`.
