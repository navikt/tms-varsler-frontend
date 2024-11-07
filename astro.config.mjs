import {defineConfig} from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";

if(!process.env.PUBLIC_APP_ENVIRONMENT) {
    throw new Error("PUBLIC_APP_ENVIRONMENT must be set");
}

// https://astro.build/config
export default defineConfig({
    base: "/minside/varsler",
    redirects:{
        "/minside/tidligere-varsler": "/minside/varsler#tidligere"
    },
    build: {
        assetsPrefix: "https://cdn.nav.no/min-side/tms-varsler-frontend"
    },
    integrations: [react()],
    i18n: {
        defaultLocale: "nb",
        locales: ["nn", "en", "nb"],
        routing: {
            prefixDefaultLocale: false
        },
    },
    output: "server",
    adapter: node({
        mode: "standalone"
    }),
    experimental: {
        serverIslands: true
    }
});