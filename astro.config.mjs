import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

if (!process.env.PUBLIC_APP_ENVIRONMENT) {
  throw new Error("PUBLIC_APP_ENVIRONMENT must be set");
}

// https://astro.build/config
export default defineConfig({
  base: "/minside/varsler",
  // Astro 7 changed the default HTML compressor to 'jsx', which strips spaces
  // between inline elements. Pin to HTML-aware compression to keep rendered
  // output identical to Astro 5 (no whitespace regressions in Norwegian copy).
  compressHTML: true,
  redirects: {
    "/minside/tidligere-varsler": "/minside/varsler#tidligere",
  },
  build: {
    assetsPrefix: "https://cdn.nav.no/min-side/tms-varsler-frontend",
  },
  vite: {
    build: {
      sourcemap: true,
    },
  },
  integrations: [react()],
  logger: {
    entrypoint: "@navikt/astro-logger",
  },
  i18n: {
    defaultLocale: "nb",
    locales: ["nn", "en", "nb"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
