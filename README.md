# FitPlan — Personal Trainer & Meal Planner

Live: https://melanialani.github.io/personal-trainer/

Set a goal (lose, maintain or gain weight) and get daily calorie & macro targets, a 7-day meal plan, a weekly
workout program, a food diary with calorie lookup, and weight tracking. Everything is stored in your browser —
export/import a JSON backup from **Data & Backup**.

```bash
npm install
npm run dev     # http://localhost:4007/personal-trainer/
npm run build
```

Deployment: GitHub Actions publishes to GitHub Pages on every push to `main`
(repo Settings → Pages → Source: **GitHub Actions**).

Food data: built-in values are approximations from TKPI and USDA FoodData Central; packaged products come from
[Open Food Facts](https://world.openfoodfacts.org) (ODbL). This app gives general guidance, not medical advice.
