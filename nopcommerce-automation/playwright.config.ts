import { defineConfig, devices } from '@playwright/test';
import { readFileSync } from 'fs';

const env = process.env.TEST_ENV || 'stag';
const { baseURL } = JSON.parse(readFileSync(`./tests/data/env.${env}.json`, 'utf-8'));

export default defineConfig({
  testDir: './tests/specs',
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL,
    headless: false,
    viewport: null,                 // ← full screen
    launchOptions: {
      args: ['--start-maximized'],  // ← Firefox max window
      slowMo: 2000,                 // ← chờ 2 giây giữa các hành động
    },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
   // { name: 'firefox1', use: { ...devices['Desktop Firefox'] } },
    { name: 'firefox2', use: { ...devices['Desktop Firefox'] } },
  ],
});
