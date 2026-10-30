import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { findGroupByPath, NAV_GROUPS, type NavGroup, type NavGroupId } from './navItems';

/** Per-device UI memory (not in backups): the last page opened in each nav group. */
const LAST_PATHS_KEY = 'fitplan:nav';

const readLastPaths = (): Partial<Record<NavGroupId, string>> => {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(LAST_PATHS_KEY) ?? '{}');
    return typeof parsed === 'object' && parsed !== null ? (parsed as Partial<Record<NavGroupId, string>>) : {};
  } catch {
    return {};
  }
};

/**
 * The group shown in the phone bottom bar: the group of the current page, or — on pages outside every group
 * (Settings) — the group used last. `pathFor` returns where tapping a group should go.
 */
export const useNavGroup = () => {
  const { pathname } = useLocation();
  const [lastPaths, setLastPaths] = useState(readLastPaths);
  const [activeId, setActiveId] = useState<NavGroupId>(() => findGroupByPath(pathname)?.id ?? 'fitness');

  useEffect(() => {
    const group = findGroupByPath(pathname);
    if (!group) return;
    setActiveId(group.id);
    setLastPaths((current) => {
      if (current[group.id] === pathname) return current;
      const next = { ...current, [group.id]: pathname };
      try {
        localStorage.setItem(LAST_PATHS_KEY, JSON.stringify(next));
      } catch {
        // Storage unavailable: the group then opens on its first page.
      }
      return next;
    });
  }, [pathname]);

  const activeGroup = NAV_GROUPS.find((group) => group.id === activeId) ?? NAV_GROUPS[0];

  /** Tapping the group you are already in goes back to its first page; another group reopens where you left it. */
  const pathFor = (group: NavGroup): string => {
    const firstPath = group.items[0].path;
    if (group.id === activeGroup.id && findGroupByPath(pathname)) return firstPath;
    const last = lastPaths[group.id];
    return last && group.items.some((item) => item.path === last) ? last : firstPath;
  };

  return { activeGroup, pathFor };
};
