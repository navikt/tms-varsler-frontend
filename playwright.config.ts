import { defineConfig, devices } from "@playwright/test";

const PORT = 4321;
const origin = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: origin,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: [
    {
      command: "pnpm mock",
      url: "http://localhost:3000/tms-varsel-api/alle",
      reuseExistingServer: !process.env.CI,
      timeout: 60_000,
    },
    {
      command: `pnpm dev --port ${PORT}`,
      url: `${origin}/minside/varsler`,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
  ],
});
