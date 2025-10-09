import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  use: {
    ...devices['Desktop Firefox'],
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [
    ['html', { open: 'never' }],
    ['line'], // log chi tiết terminal
  ],

  projects: [
    {
      name: 'firefox-group1',
      testMatch: [
        '**/register-login-onepage.spec.ts',
        '**/register-then-forgot.spec.ts',
        '**/search-iphone-detail.spec.ts',
        '**/search-iphone-fail.spec.ts',
      ],
    },
    {
      name: 'firefox-group2',
      testMatch: [
        '**/explore-desktop-sort-both.spec.ts',
        '**/filter-desktop-price-1000-drag.spec.ts',
        '**/notebook-apple-filter.spec.ts',
      ],
    },
  ],
});
