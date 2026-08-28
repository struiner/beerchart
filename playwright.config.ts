import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  retries: 0,
  use: {
    baseURL: 'http://127.0.0.1:4200',
    reducedMotion: 'reduce',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'interaction-chromium',
      testIgnore: /visual\.spec\.ts/,
      use: { browserName: 'chromium' },
    },
    {
      name: 'visual-chromium',
      testMatch: /visual\.spec\.ts/,
      snapshotPathTemplate:
        '{testDir}/{testFilePath}-snapshots/{projectName}/{platform}/{arg}{ext}',
      use: {
        browserName: 'chromium',
        viewport: { width: 1440, height: 1000 },
        deviceScaleFactor: 1,
        colorScheme: 'light',
      },
    },
  ],
  webServer: {
    command: 'npm run start:e2e',
    url: 'http://127.0.0.1:4200',
    reuseExistingServer: false,
  },
});
