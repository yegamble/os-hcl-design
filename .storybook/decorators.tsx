import type { Decorator } from '@storybook/react-vite';
import { useEffect } from 'react';

/**
 * Decorator that mirrors the `reducedMotion` toolbar global onto
 * `document.documentElement[data-reduced-motion]`. Our utilities in
 * `styles/utilities.css` and component-level `motion-reduce:` variants
 * consume the attribute — the UA media query doesn't trigger on
 * toolbar-only toggling, so the attribute is the preview path.
 */
export const withReducedMotion: Decorator = (Story, context) => {
  const value = context.globals.reducedMotion ?? 'no-preference';
  useEffect(() => {
    if (value === 'reduce') {
      document.documentElement.setAttribute('data-reduced-motion', 'reduce');
    } else {
      document.documentElement.removeAttribute('data-reduced-motion');
    }
  }, [value]);
  return <Story />;
};

/**
 * Decorator mirroring the `reducedTransparency` toolbar global onto
 * `document.documentElement[data-reduced-transparency]`. Glass utilities
 * swap to their solid fallback on this attribute.
 */
export const withReducedTransparency: Decorator = (Story, context) => {
  const value = context.globals.reducedTransparency ?? 'no-preference';
  useEffect(() => {
    if (value === 'reduce') {
      document.documentElement.setAttribute('data-reduced-transparency', 'reduce');
    } else {
      document.documentElement.removeAttribute('data-reduced-transparency');
    }
  }, [value]);
  return <Story />;
};
