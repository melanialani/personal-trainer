# Backlog — planned (not built yet)

Agreed with the owner on 2026-11-14. Still under discussion: do not build until confirmed.
Content language follows CLAUDE.md (UI in English, health content in Indonesian).

## 1. Fasting (IF) log — new page
- Timer: Start fast / Start eating, live elapsed time, target preset 12:12, 14:10, 16:8, 18:6, 20:4, custom.
- History: start/end per session, duration, target hit or not; editable when a tap was forgotten.
- Weekly summary: average fast length, days on target, streak.
- Safety notices: repeated fasts ≥ 20 h (OMAD pattern) → suggest 16:8 / 14:10; link to period tracker when a period is late.
- Optional per session: "binge / very hungry" flag to review patterns.
- Data: new `fasting` field in `AppData` with a default in `normalizeData`.

## 2. Weekly weight averages — Weight Log
- Already there: 7-day moving average line, "4-week trend" kg/week tile vs planned rate, >1 kg/week and trend-up notices.
- Add a "Weekly averages" card: per week average weight, change vs previous week, number of weigh-ins.
- Note in the UI: the first 1–2 weeks are mostly water/glycogen.
- No new data (computed from `weights`).

## 3. Period tracker — new page
- Log period start (and optional end / flow); calendar view with period days, predicted days and fertile window (optional).
- "Day X of cycle / X days since last period".
- Predict next period from the average of the last cycles (up to 6; default 28 days until 2 cycles are logged).
- Auto stats: average cycle length, shortest/longest, period length, variation.
- Flags: late > 7 days vs prediction, cycle < 21 or > 35 days, large variation, no period ≥ 3 months → see a doctor
  (sources must be official, e.g. ACOG / Kemenkes — cite in the data file).
- Optional: overlay period days on the weight chart (water retention before a period).
- Data: new `periods` field in `AppData` with a default in `normalizeData`.

## 4. Session content to publish (everything discussed on 2026-11-14)
Already live (PR #5): psyllium entry, protein milk & meal replacement guide, psyllium + smoothie foods.

Still to add:
- Psyllium extras: spoon-to-gram table (whole husk vs powder), nutrition per 5 g (kcal by US vs EU labelling, protein ≈ 0),
  satiety (until next meal, ~3–4 h, modest), best timing (15–30 min before lunch/dinner, not right before bed).
- Slimming herbal capsules (Flamora, SULEM): meaning of BPOM "TR"; per-ingredient table (bitter orange, mulberry leaf,
  jati belanda, green tea, ginger, kemuning, meniran, bangle) — claim, evidence, side effects; which are OK long term and
  why / which are not; appetite claims; hormones / period / libido / mood table; false claims (spot reduction, detox,
  water loss); sibutramine adulteration and how to check cekbpom.pom.go.id; who should not take them.
- Late period: causes table (pregnancy first, energy deficit, stress/sleep, herbal products, normal variation, PCOS/thyroid),
  what to do, when to see a doctor.
- Weight loss phases: water vs fat math (7,700 kcal/kg), week 1–2 water/glycogen, week 3+ fat 0.5–1 kg/wk, plateau,
  weekly-average weighing, menstrual water retention, diet breaks.
- IF: window comparison table (12:12 … OMAD), early vs late window, consistency, recommended long-term pattern,
  OMAD myths (autophagy / antioxidant, emotion) vs evidence, OMAD risks.
- Water before meals: 500 ml 15–30 min before, binge-urge routine, hyponatremia warning, daily total.
- Drinks and fat loss: helpful vs useless/risky table (detox/slimming teas, lemon water, apple cider vinegar, juice).

## Open questions (to discuss)
- Where the diet/nutrition content lives: Medicine page care guides, or a new "Diet & nutrition guide" page.
- Herbal slimming products: add as Medicine entries (one per product or per ingredient)?
- Period tracker scope: fertile window yes/no; symptoms/mood log yes/no; private by default on shared devices?
- Fasting + period: show fasting warnings around a late period?
- Ship all at once or feature by feature; all go live directly after the build passes.
