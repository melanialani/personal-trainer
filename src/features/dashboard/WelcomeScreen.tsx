import { Dumbbell, NotebookPen, Scale, Search, ShieldCheck, UtensilsCrossed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../shared/components/Button';
import { useLoadSampleData } from '../../shared/hooks/useLoadSampleData';

const FEATURES = [
  { icon: NotebookPen, title: 'Food diary', text: 'Log meals with calories and macros against your personal target.' },
  { icon: Search, title: 'Calorie lookup', text: '330+ foods (mostly Indonesian: rawon, cireng, sempol…), plus packaged products online.' },
  { icon: UtensilsCrossed, title: 'Meal planner', text: '7-day menus scaled to your calories, diet and halal preference.' },
  { icon: Dumbbell, title: 'Workout planner', text: 'Weekly programs for home or gym, with how-to for every exercise.' },
  { icon: Scale, title: 'Weight tracking', text: 'Trend line, goal progress and projected goal date.' },
  { icon: ShieldCheck, title: 'Private by design', text: 'No account. Data stays in your browser — export & import anytime.' },
];

export const WelcomeScreen = () => {
  const navigate = useNavigate();
  const loadSampleData = useLoadSampleData();
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-emerald-800 px-6 py-10 text-white shadow-sm sm:px-10">
        <p className="text-sm font-medium text-white/80">Your personal trainer & meal planner</p>
        <h1 className="mt-2 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">Lose, maintain or build — with a plan that fits you.</h1>
        <p className="mt-3 max-w-xl text-white/90">
          Set your goal once and get daily calorie targets, a meal plan and a workout program. Track progress in seconds every day.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => navigate('/profile')} className="bg-white !text-brand-700 hover:bg-emerald-50">
            Get started
          </Button>
          <Button variant="ghost" onClick={loadSampleData} className="!text-white ring-1 ring-white/40 hover:bg-white/10">
            Explore with sample data
          </Button>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-slate-200/80 bg-surface p-5 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:text-brand-400">
              <Icon size={20} />
            </span>
            <p className="mt-3 font-semibold text-slate-900">{title}</p>
            <p className="mt-1 text-sm text-slate-500">{text}</p>
          </div>
        ))}
      </section>
      <p className="text-center text-xs text-slate-400">
        FitPlan gives general guidance, not medical advice. Check with a doctor before big changes to diet or exercise.
      </p>
    </div>
  );
};
