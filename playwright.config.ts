import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config for visual regression + keyboard + a11y-regression tests.
 *
 * Tests run against a built Storybook served via http-server (deterministic).
 * Baselines are macOS-only for Phase 1 — tests/visual/README.md documents how
 * to regenerate on a different OS.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:6006',
    trace: 'off',
  },
  expect: {
    toHaveScreenshot: {
      threshold: 0.2,
      maxDiffPixels: 100,
    },
  },
  webServer: {
    command: 'pnpm exec http-server storybook-static -p 6006 --silent',
    port: 6006,
    timeout: 30_000,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } },
    },
  ],
});
