import { Link, NavLink } from 'react-router-dom';
import { ThemeToggleButton } from '../shared/components/ThemeToggle';
import { NAV_GROUPS, SETTINGS_ITEM, type NavGroup } from './navItems';

interface MobileHeaderProps {
  activeGroup: NavGroup;
  pathFor: (group: NavGroup) => string;
}

const SettingsIcon = SETTINGS_ITEM.icon;

/** Phone top bar: switch between groups (each in its own color); the bottom bar shows the active group's pages. */
export const MobileHeader = ({ activeGroup, pathFor }: MobileHeaderProps) => (
  // Fixed (not sticky) and solid (no backdrop-filter): Firefox for Android painted the sticky, blurred version as an
  // empty strip when its toolbar slid away. AppLayout pads <main> by the header height on phones.
  <header className="no-print fixed inset-x-0 top-0 z-30 flex h-14 items-center gap-2 border-b border-slate-200 bg-surface px-3 md:hidden">
    <span className="bg-rainbow absolute inset-x-0 bottom-0 h-0.5" aria-hidden="true" />
    <nav aria-label="Sections" className="flex min-w-0 flex-1 gap-1 rounded-xl bg-slate-100 p-1">
      {NAV_GROUPS.map((group) => {
        const isActive = group.id === activeGroup.id;
        const Icon = group.icon;
        return (
          <Link
            key={group.id}
            to={pathFor(group)}
            data-accent={group.id}
            aria-current={isActive ? 'true' : undefined}
            aria-label={group.label}
            title={group.label}
            className={`flex min-w-0 items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-semibold transition-all ${
              isActive ? 'bg-accent-strong flex-[3.5] text-white shadow-md shadow-brand-700/30' : 'flex-1 text-brand-600 dark:text-brand-400'
            }`}
          >
            <Icon size={16} className="shrink-0" />
            {/* Only the active group shows its name, so five groups fit on a 360px phone. */}
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
);
