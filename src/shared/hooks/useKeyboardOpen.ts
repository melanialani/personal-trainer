import { useEffect, useState } from 'react';

/** Input types that do not bring up a text keyboard. */
const NON_TEXT_INPUTS = new Set(['checkbox', 'radio', 'button', 'submit', 'reset', 'range', 'color', 'file', 'image']);

/** A keyboard takes far more than this; browser toolbars sliding in/out take less. */
const KEYBOARD_MIN_PX = 150;

const isTextField = (el: Element | null): boolean => {
  if (!(el instanceof HTMLElement)) return false;
  if (el instanceof HTMLTextAreaElement || el.isContentEditable) return true;
  return el instanceof HTMLInputElement && !NON_TEXT_INPUTS.has(el.type);
};

/** Tallest window height seen per screen width (so rotating the phone starts a fresh baseline). */
const fullHeights = new Map<number, number>();

const readIsKeyboardOpen = (): boolean => {
  if (!window.matchMedia('(pointer: coarse)').matches || !isTextField(document.activeElement)) return false;
  const vv = window.visualViewport;
  const width = window.innerWidth;
  const full = Math.max(fullHeights.get(width) ?? 0, window.innerHeight);
  fullHeights.set(width, full);
  // Chrome/Safari: the keyboard covers the page and only the visual viewport shrinks.
  const isVisualShrunk = !!vv && vv.scale < 1.05 && window.innerHeight - vv.height > KEYBOARD_MIN_PX;
  // Firefox on Android: the whole window shrinks.
  const isWindowShrunk = full - window.innerHeight > KEYBOARD_MIN_PX;
  return isVisualShrunk || isWindowShrunk;
};

/**
 * True while a phone keyboard is open over a focused text field, so bottom-pinned bars (bottom nav, sticky
 * save bars) can step aside instead of covering the field. Both a focused field and a shrunk screen are
 * required: an autofocused field without a keyboard must not hide the navigation.
 */
export const useKeyboardOpen = (): boolean => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: coarse)').matches) return undefined;
    fullHeights.set(window.innerWidth, Math.max(fullHeights.get(window.innerWidth) ?? 0, window.innerHeight));
    let frame = 0;
    // focusout fires before the next field's focusin, and the keyboard animates in: read a frame later.
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setIsOpen(readIsKeyboardOpen()));
    };
    const vv = window.visualViewport;
    document.addEventListener('focusin', update);
    document.addEventListener('focusout', update);
    window.addEventListener('resize', update);
    vv?.addEventListener('resize', update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('focusin', update);
      document.removeEventListener('focusout', update);
      window.removeEventListener('resize', update);
      vv?.removeEventListener('resize', update);
    };
  }, []);

  return isOpen;
};
