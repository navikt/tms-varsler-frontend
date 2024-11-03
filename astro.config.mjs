import {defineConfig} from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";
const getEnvironment = ()  => {
    if (process.env.NAIS_CLUSTER_NAME === "prod-gcp") {
        return "production";
    } else if (process.env.NAIS_CLUSTER_NAME === "dev-gcp") {
        return "development";
    } else {
        return "local";
    }
};

// https://astro.build/config
export default defineConfig({
    base: "/minside/varsler",
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
    },
    vite: {
        define: {
            "import.meta.env.PUBLIC_ENVIRONMENT": JSON.stringify(getEnvironment()),
        },
    }
});