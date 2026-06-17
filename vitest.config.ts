/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

// astro.config.mjs kaster hvis denne mangler, og getViteConfig laster astro-konfigen.
process.env.PUBLIC_APP_ENVIRONMENT ??= "local";

export default getViteConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
