import { NavLink } from 'react-router-dom';
import { ThemeToggleButton } from '../shared/components/ThemeToggle';
import { Logo } from './Logo';
import { NAV_GROUPS, SETTINGS_ITEM, type NavItem } from './navItems';

const SidebarLink = ({ path, label, icon: Icon }: NavItem) => (
  <NavLink
    to={path}
    end={path === '/'}
    className={({ isActive }) =>
      `group relative flex items-center gap-3 rounded-lg px-3 py-[5px] text-sm font-medium transition-colors ${
        isActive ? 'bg-brand-50 text-brand-700 dark:text-brand-300' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`
    }
  >
    {({ isActive }) => (
      <>
        {isActive && <span className="absolute inset-y-1.5 left-0 w-1 rounded-full bg-brand-500" aria-hidden="true" />}
        <Icon size={18} className={isActive ? '' : 'text-brand-600 dark:text-brand-400'} />
        {label}
      </>
    )}
  </NavLink>
);

const SettingsIcon = SETTINGS_ITEM.icon;

/** Desktop sidebar (Settings is the gear next to the theme button): every group with its pages, each group in its own accent color. */
export const Sidebar = () => (
  <aside className="no-print sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-slate-200 bg-surface bg-gradient-to-b from-pink-50/80 via-transparent to-violet-50/80 px-3 py-5 md:flex dark:from-pink-500/5 dark:to-violet-500/5">
    <div className="flex items-center justify-between gap-2 px-2">
      <Logo />
      <div className="flex items-center">
        <NavLink
          to={SETTINGS_ITEM.path}
          aria-label={SETTINGS_ITEM.label}
          title={SETTINGS_ITEM.label}
          className={({ isActive }) =>
            `inline-flex h-8 w-8 items-center justify-center rounded-lg ${
              isActive ? 'bg-brand-50 text-brand-700 dark:text-brand-300' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
            }`
          }
        >
          <SettingsIcon size={18} />
        </NavLink>
        <ThemeToggleButton />
      </div>
    </div>
    <nav className="mt-5 flex flex-1 flex-col gap-3 overflow-y-auto pr-1">
      {NAV_GROUPS.map((group) => {
        const GroupIcon = group.icon;
        return (
          <div key={group.id} data-accent={group.id} className="flex flex-col gap-0.5">
            <p className="flex items-center gap-2 px-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              <span className="bg-accent-gradient flex h-5 w-5 items-center justify-center rounded-md text-white" aria-hidden="true">
                <GroupIcon size={12} />
              </span>
              {group.label}
            </p>
            {group.items.map((item) => (
              <SidebarLink key={item.path} {...item} />
            ))}
          </div>
        );
      })}
    </nav>
  </aside>
);
