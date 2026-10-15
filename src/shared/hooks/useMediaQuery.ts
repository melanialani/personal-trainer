import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [isMatch, setIsMatch] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setIsMatch(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, [query]);

  return isMatch;
};

/** Matches Tailwind's `lg` breakpoint, where pages switch to a two-column layout. */
export const useIsDesktop = (): boolean => useMediaQuery('(min-width: 1024px)');
