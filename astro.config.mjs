import node from "@astrojs/node";
import react from "@astrojs/react";
import mockServer from "@navikt/astro-mocks";
import { defineConfig, envField } from "astro/config";
import varsler from "./src/mocks/varsler.json" with { type: "json" };

// https://astro.build/config
export default defineConfig({
  base: "/minside/varsler",
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
  integrations: [react(), mockServer({ mocks: varsler })],
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
  env: {
    schema: {
      NAV_NO_URL: envField.string({
        context: "server",
        access: "secret",
        default: "http://localhost:4321",
      }),
      VARSEL_API_URL: envField.string({
        context: "server",
        access: "secret",
        default: "http://localhost:4321/tms-varsel-api",
      }),
      ERROR_REPORTING_URL: envField.string({
        context: "server",
        access: "secret",
        default: "https://www.intern.dev.nav.no/person/kontakt-oss/nb/tilbakemeldinger/feil-og-mangler",
      }),
    },
  },
});
