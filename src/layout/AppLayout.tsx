import { AlertCircle, Dumbbell, Ellipsis } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Notice } from '../shared/components/Notice';
import { useAppData } from '../store/AppDataContext';
import { NAV_ITEMS } from './navItems';

const Logo = () => (
  <div className="flex items-center gap-2.5">
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
      <Dumbbell size={18} />
    </span>
    <div className="leading-tight">
      <p className="text-sm font-bold text-slate-900">FitPlan</p>
      <p className="text-[11px] text-slate-500">Trainer & meal planner</p>
    </div>
  </div>
);

export const AppLayout = () => {
  const { data, hasStorageError } = useAppData();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const secondaryItems = NAV_ITEMS.filter((item) => !item.isPrimaryOnMobile);
  const isSecondaryActive = secondaryItems.some((item) => item.path === location.pathname);

  return (
    <div className="min-h-dvh md:flex">
      {/* Desktop sidebar */}
      <aside className="no-print sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-r border-slate-200 bg-white px-3 py-5 md:flex">
        <div className="px-2">
          <Logo />
        </div>
        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
        {data.profile && (
          <div className="rounded-xl bg-slate-50 px-3 py-2.5 text-xs text-slate-500">
            Signed in locally as <span className="font-semibold text-slate-700">{data.profile.name}</span>
            <br />
            Data stays in this browser.
          </div>
        )}
      </aside>

      {/* Mobile top bar */}
      <header className="no-print sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur md:hidden">
        <Logo />
      </header>

      <main className="min-w-0 flex-1 px-4 pb-28 pt-5 sm:px-6 md:pb-10 lg:px-10 lg:pt-8">
        <div className="mx-auto max-w-6xl">
          {hasStorageError && (
            <Notice tone="danger" icon={<AlertCircle size={16} />} className="mb-4">
              Could not save to browser storage (storage may be full or disabled). Export a backup to avoid losing data.
            </Notice>
          )}
          <Outlet />
        </div>
      </main>

      {/* Mobile bottom navigation */}
      <nav className="no-print fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
        {isMoreOpen && (
          <div className="absolute inset-x-3 bottom-full mb-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
            {secondaryItems.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsMoreOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700'}`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </div>
        )}
        <div className="grid grid-cols-5">
          {NAV_ITEMS.filter((item) => item.isPrimaryOnMobile).map(({ path, shortLabel, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => setIsMoreOpen(false)}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium ${isActive ? 'text-brand-600' : 'text-slate-500'}`
              }
            >
              <Icon size={20} />
              {shortLabel}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => setIsMoreOpen((open) => !open)}
            className={`flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium ${isMoreOpen || isSecondaryActive ? 'text-brand-600' : 'text-slate-500'}`}
          >
            <Ellipsis size={20} />
            More
          </button>
        </div>
      </nav>
    </div>
  );
};
