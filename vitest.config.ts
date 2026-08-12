import { getViteConfig } from "astro/config";
import type { ViteUserConfig } from "vitest/config";

// astro.config.mjs kaster hvis denne mangler, og getViteConfig laster astro-konfigen.
process.env.PUBLIC_APP_ENVIRONMENT ??= "local";

// Typen hentes fra vitest/config slik at `test` er kjent uavhengig av hvilken
// vite-kopi getViteConfig sin parametertype løses mot (unngår ts(2353)).
const config: ViteUserConfig = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["test/unit/**/*.test.{ts,tsx}"],
  },
};

export default getViteConfig(config);
