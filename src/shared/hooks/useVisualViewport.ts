import { useEffect, useState } from 'react';

export interface VisibleViewport {
  /** Height (px) of the part of the page the user can actually see. */
  height: number;
  /** Distance (px) from the top of the layout viewport to the visible area. */
  offsetTop: number;
  /** True while an on-screen keyboard covers part of the page. */
  isKeyboardOpen: boolean;
}

/** A keyboard takes far more than this; browser toolbars sliding in/out take less. */
const KEYBOARD_MIN_PX = 150;

const read = (): VisibleViewport => {
  const vv = typeof window !== 'undefined' ? window.visualViewport : null;
  if (!vv) return { height: typeof window !== 'undefined' ? window.innerHeight : 0, offsetTop: 0, isKeyboardOpen: false };
  // Pinch-zoom also shrinks the visual viewport; only count it as a keyboard at normal zoom.
  const isKeyboardOpen = vv.scale < 1.05 && window.innerHeight - vv.height > KEYBOARD_MIN_PX;
  return { height: vv.height, offsetTop: vv.offsetTop, isKeyboardOpen };
};

/**
 * Tracks the visible part of the page. Mobile browsers (Chrome/Firefox on Android, Safari on iOS) open the
 * keyboard over the page without shrinking `fixed`/`dvh` layouts, so anything pinned to the bottom ends up
 * hidden behind the keyboard. Size bottom-pinned UI with this instead.
 */
export const useVisualViewport = (isEnabled = true): VisibleViewport => {
  const [viewport, setViewport] = useState(read);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!isEnabled || !vv) return undefined;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setViewport(read()));
    };
    update();
    vv.addEventListener('resize', update);
    vv.addEventListener('scroll', update);
    return () => {
      cancelAnimationFrame(frame);
      vv.removeEventListener('resize', update);
      vv.removeEventListener('scroll', update);
    };
  }, [isEnabled]);

  return viewport;
};
