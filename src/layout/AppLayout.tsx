import { AlertCircle, Dumbbell } from 'lucide-react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Notice } from '../shared/components/Notice';
import { ThemeToggleButton } from '../shared/components/ThemeToggle';
import { useAppData } from '../store/AppDataContext';
import { NAV_GROUPS, SETTINGS_ITEM, type NavItem } from './navItems';
import { useNavGroup } from './useNavGroup';

const LogoMark = () => (
  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
    <Dumbbell size={18} />
  </span>
);

const Logo = () => (
  <div className="flex items-center gap-2.5">
    <LogoMark />
    <div className="leading-tight">
      <p className="text-sm font-bold text-slate-900">FitPlan</p>
      <p className="text-[11px] text-slate-500">Trainer, meals & faith</p>
    </div>
  </div>
);

const SidebarLink = ({ path, label, icon: Icon }: NavItem) => (
  <NavLink
    to={path}
    end={path === '/'}
    className={({ isActive }) =>
      `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        isActive ? 'bg-brand-50 text-brand-700 dark:text-brand-300' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`
    }
  >
    <Icon size={18} />
    {label}
  </NavLink>
);

const SettingsIcon = SETTINGS_ITEM.icon;

export const AppLayout = () => {
  const { data, hasStorageError } = useAppData();
  const { activeGroup, pathFor } = useNavGroup();
  const barItems = activeGroup.items.filter((item) => !item.isSidebarOnly);

  return (
    <div className="min-h-dvh md:flex">
      {/* Desktop sidebar: every group with its pages */}
      <aside className="no-print sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-r border-slate-200 bg-surface px-3 py-5 md:flex">
        <div className="flex items-center justify-between gap-2 px-2">
          <Logo />
          <ThemeToggleButton />
        </div>
        <nav className="mt-6 flex flex-1 flex-col gap-4 overflow-y-auto">
          {NAV_GROUPS.map((group) => (
            <div key={group.id} className="flex flex-col gap-1">
              <p className="px-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">{group.label}</p>
              {group.items.map((item) => (
                <SidebarLink key={item.path} {...item} />
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-1 border-t border-slate-100 pt-3">
            <SidebarLink {...SETTINGS_ITEM} />
          </div>
        </nav>
        {data.profile && (
          <div className="mt-3 rounded-xl bg-slate-50 px-3 py-2.5 text-xs text-slate-500">
            Signed in locally as <span className="font-semibold text-slate-700">{data.profile.name}</span>
            <br />
            Data stays in this browser.
          </div>
        )}
      </aside>

      {/* Mobile top bar: switch between groups; the bottom bar shows the active group's pages */}
      <header className="no-print sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-slate-200 bg-surface/90 px-3 backdrop-blur md:hidden">
        <nav aria-label="Sections" className="flex min-w-0 flex-1 gap-1 rounded-xl bg-slate-100 p-1">
          {NAV_GROUPS.map((group) => {
            const isActive = group.id === activeGroup.id;
            const Icon = group.icon;
            return (
              <Link
                key={group.id}
                to={pathFor(group)}
                aria-current={isActive ? 'true' : undefined}
                aria-label={group.label}
                title={group.label}
                className={`flex min-w-0 items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-semibold transition-colors ${
                  isActive ? 'flex-[2.5] bg-raised text-brand-700 shadow-sm dark:text-brand-300' : 'flex-1 text-slate-500'
                }`}
              >
                <Icon size={16} className="shrink-0" />
                {/* Only the active group shows its name, so four groups fit on a 360px phone. */}
                {isActive && <span className="truncate">{group.shortLabel}</span>}
              </Link>
            );
          })}
        </nav>
        <NavLink
          to={SETTINGS_ITEM.path}
          aria-label={SETTINGS_ITEM.label}
          title={SETTINGS_ITEM.label}
          className={({ isActive }) =>
            `inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
              isActive ? 'bg-brand-50 text-brand-700 dark:text-brand-300' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
            }`
          }
        >
          <SettingsIcon size={18} />
        </NavLink>
        <ThemeToggleButton />
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

      {/* Mobile bottom navigation: pages of the active group only */}
      <nav
        aria-label={activeGroup.label}
        className="no-print fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-surface pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <div className="grid" style={{ gridTemplateColumns: `repeat(${barItems.length}, minmax(0, 1fr))` }}>
          {barItems.map(({ path, shortLabel, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium ${isActive ? 'text-brand-700 dark:text-brand-400' : 'text-slate-500'}`
              }
            >
              <Icon size={20} />
              {shortLabel}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};
