import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Opens every page at the top. Without this the previous page's scroll position carries over, so a new page
 * starts halfway down, and Firefox for Android can leave a blank strip where its toolbar slid away.
 * Rendered before <Outlet /> so pages that scroll themselves (Bible reader) run after it.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
