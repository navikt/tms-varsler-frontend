import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  base: "/minside/varsler",
  build: {
    assetsPrefix: "https://cdn.nav.no/min-side/tms-varsler-frontend"
  },
  integrations: [react()],
  i18n: {
    defaultLocale: "nb",
    locales: ["nb", "nn", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});