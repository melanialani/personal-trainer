import { useCallback, useMemo } from 'react';
import { useAppData } from '../../store/AppDataContext';
import type { Child } from '../../types';

/** Children list plus the child currently selected on the parenting pages. */
export const useChildren = () => {
  const { data, update } = useAppData();
  const { children, activeChildId } = data.parenting;
  const activeChild = useMemo(() => children.find((c) => c.id === activeChildId) ?? children[0] ?? null, [children, activeChildId]);

  const setActiveChild = useCallback(
    (id: string) => update((current) => ({ ...current, parenting: { ...current.parenting, activeChildId: id } })),
    [update],
  );

  const saveChild = useCallback(
    (child: Child) =>
      update((current) => {
        const list = current.parenting.children;
        const exists = list.some((c) => c.id === child.id);
        return {
          ...current,
          parenting: {
            children: exists ? list.map((c) => (c.id === child.id ? child : c)) : [...list, child],
            activeChildId: exists ? current.parenting.activeChildId : child.id,
          },
        };
      }),
    [update],
  );

  /** Applies a change to one child (looked up fresh, so quick successive edits don't overwrite each other). */
  const updateChild = useCallback(
    (id: string, change: (child: Child) => Child) =>
      update((current) => ({
        ...current,
        parenting: { ...current.parenting, children: current.parenting.children.map((c) => (c.id === id ? change(c) : c)) },
      })),
    [update],
  );

  const removeChild = useCallback(
    (id: string) =>
      update((current) => ({
        ...current,
        parenting: {
          children: current.parenting.children.filter((c) => c.id !== id),
          activeChildId: current.parenting.activeChildId === id ? '' : current.parenting.activeChildId,
        },
      })),
    [update],
  );

  return { children, activeChild, setActiveChild, saveChild, updateChild, removeChild };
};
