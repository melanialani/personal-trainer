import { NavLink } from 'react-router-dom';
import type { NavGroup } from './navItems';

interface BottomNavProps {
  group: NavGroup;
  /** Hidden while the phone keyboard is open, so it never covers the field being typed in. */
  isHidden: boolean;
}

/** Phone bottom navigation: pages of the active group only. */
export const BottomNav = ({ group, isHidden }: BottomNavProps) => {
  const items = group.items.filter((item) => !item.isSidebarOnly);

  return (
    <nav
      aria-label={group.label}
      className={`no-print fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-surface pb-[env(safe-area-inset-bottom)] md:hidden ${isHidden ? 'hidden' : ''}`}
    >
      <div className="grid" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
        {items.map(({ path, shortLabel, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 py-1.5 text-[11px] font-semibold ${isActive ? 'text-brand-700 dark:text-brand-300' : 'text-slate-500'}`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`flex h-6 w-12 items-center justify-center rounded-full transition-colors ${isActive ? 'bg-brand-100 dark:bg-brand-500/20' : ''}`}
                >
                  <Icon size={20} />
                </span>
                {shortLabel}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
