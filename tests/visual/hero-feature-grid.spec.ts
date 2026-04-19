import { test, expect } from '@playwright/test';

const MODES = [
  { key: 'default' },
  { key: 'dark', theme: 'dark' },
  { key: 'reduced-motion', reducedMotion: 'reduce' },
  { key: 'reduced-transparency', reducedTransparency: 'reduce' },
] as const;

for (const mode of MODES) {
  test(`Hero Feature Grid — default — ${mode.key}`, async ({ page }) => {
    const params = new URLSearchParams({
      id: 'patterns-hero-feature-grid--default',
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
    await expect(page).toHaveScreenshot(`hero-feature-grid-${mode.key}.png`, { fullPage: true });
  });
}
