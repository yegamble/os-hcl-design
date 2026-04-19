import { test, expect } from '@playwright/test';

const VARIANTS = ['primary', 'secondary', 'ghost', 'destructive'] as const;
const MODES = [
  { key: 'default' },
  { key: 'dark', theme: 'dark' },
  { key: 'reduced-motion', reducedMotion: 'reduce' },
  { key: 'reduced-transparency', reducedTransparency: 'reduce' },
] as const;

for (const variant of VARIANTS) {
  for (const mode of MODES) {
    test(`Button — ${variant} — ${mode.key}`, async ({ page }) => {
      const params = new URLSearchParams({
        id: `components-button--${variant}`,
        viewMode: 'story',
      });
      await page.goto(`/iframe.html?${params.toString()}`);
      if ('theme' in mode && mode.theme) {
        await page.evaluate(
          (t) => document.documentElement.setAttribute('data-theme', t),
          mode.theme,
        );
      }
      if ('reducedMotion' in mode && mode.reducedMotion) {
        await page.evaluate(
          (v) => document.documentElement.setAttribute('data-reduced-motion', v),
          mode.reducedMotion,
        );
      }
      if ('reducedTransparency' in mode && mode.reducedTransparency) {
        await page.evaluate(
          (v) => document.documentElement.setAttribute('data-reduced-transparency', v),
          mode.reducedTransparency,
        );
      }
      await page.waitForSelector('#storybook-root');
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        `button-${variant}-${mode.key}.png`,
      );
    });
  }
}
