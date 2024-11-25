import {defineConfig} from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";
import {rollupImportMapPlugin} from 'rollup-plugin-import-map';

if (!process.env.PUBLIC_APP_ENVIRONMENT) {
    throw new Error("PUBLIC_APP_ENVIRONMENT must be set");
}

const importmap = {
    "imports": {
        "react": "https://www.nav.no/tms-min-side-assets/react/18/esm/index.js",
        "react-dom": "https://www.nav.no/tms-min-side-assets/react-dom/18/esm/index.js"
    }
}

// https://astro.build/config
export default defineConfig({
    base: "/minside/varsler",
    redirects: {
        "/minside/tidligere-varsler": "/minside/varsler#tidligere"
    },
    build: {
        assetsPrefix: "https://cdn.nav.no/min-side/tms-varsler-frontend"
    },
    integrations: [
        react(),
        {
            name: 'importmap',
            hooks: {
                'astro:build:setup': ({vite, target}) => {
                    if (target === 'client') {
                        vite.plugins.push({
                            ...rollupImportMapPlugin(importmap),
                            enforce: 'pre',
                            apply: 'build',
                        });
                    }
                },
            },
        },
    ], i18n: {
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