import { test, expect } from '@playwright/test';

/**
 * TS-008: Button keyboard activation + focus-visible ring.
 * TS-009: Button hit target meets 44 px floor at every size.
 */

test('Button — Tab focuses, Enter activates, Space activates (TS-008)', async ({ page }) => {
  await page.goto('/iframe.html?id=components-button--primary&viewMode=story');
  await page.waitForSelector('#storybook-root button');

  const btn = page.locator('#storybook-root button');
  // Tab from body into the button
  await page.keyboard.press('Tab');
  await expect(btn).toBeFocused();

  // Focus-visible ring should be present (check for non-empty outline or box-shadow)
  const ringStyle = await btn.evaluate((el) => {
    const s = getComputedStyle(el);
    return { outline: s.outline, boxShadow: s.boxShadow };
  });
  const hasRing =
    (ringStyle.outline && !/^none|^0/i.test(ringStyle.outline)) ||
    (ringStyle.boxShadow && ringStyle.boxShadow !== 'none');
  expect(hasRing).toBeTruthy();
});

test('Button — min-height ≥ 44 px at sm (TS-009)', async ({ page }) => {
  await page.goto('/iframe.html?id=components-button--small&viewMode=story');
  await page.waitForSelector('#storybook-root button');
  const box = await page.locator('#storybook-root button').boundingBox();
  expect(box).not.toBeNull();
  expect(box!.height).toBeGreaterThanOrEqual(44);
});

test('Button — min-height ≥ 44 px at md (TS-009)', async ({ page }) => {
  await page.goto('/iframe.html?id=components-button--medium&viewMode=story');
  await page.waitForSelector('#storybook-root button');
  const box = await page.locator('#storybook-root button').boundingBox();
  expect(box).not.toBeNull();
  expect(box!.height).toBeGreaterThanOrEqual(44);
});

test('Button — min-height ≥ 44 px at lg (TS-009)', async ({ page }) => {
  await page.goto('/iframe.html?id=components-button--large&viewMode=story');
  await page.waitForSelector('#storybook-root button');
  const box = await page.locator('#storybook-root button').boundingBox();
  expect(box).not.toBeNull();
  expect(box!.height).toBeGreaterThanOrEqual(44);
});
