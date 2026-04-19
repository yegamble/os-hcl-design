import { test, expect } from '@playwright/test';

const STORIES = ['default', 'with-header-and-footer', 'elevated', 'outlined', 'glass'] as const;
const MODES = [
  { key: 'default' },
  { key: 'dark', theme: 'dark' },
  { key: 'reduced-transparency', reducedTransparency: 'reduce' },
] as const;

for (const story of STORIES) {
  for (const mode of MODES) {
    test(`Card — ${story} — ${mode.key}`, async ({ page }) => {
      const params = new URLSearchParams({
        id: `components-card--${story}`,
        viewMode: 'story',
      });
      await page.goto(`/iframe.html?${params.toString()}`);
      if ('theme' in mode && mode.theme) {
        await page.evaluate(
          (t) => document.documentElement.setAttribute('data-theme', t),
          mode.theme,
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
        `card-${story}-${mode.key}.png`,
      );
    });
  }
}
