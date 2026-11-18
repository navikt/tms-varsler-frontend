# tms-varsler-frontend

Astro 7 SSR app that shows a person's new and earlier notifications ("varsler") on Min side (`nav.no/minside/varsler`), in nb, nn and en. React 18, Aksel 8 (`--ax-*` tokens), TypeScript 5, pnpm 10, Node 24.15 or newer.

## Commands

- Install: `pnpm install`. The `@navikt` packages need a GitHub token with `read:packages` in `~/.npmrc`; if install fails on auth, stop and ask.
- Dev: `pnpm run dev`, served at `http://localhost:4321/minside/varsler`. `@navikt/astro-mocks` answers the backend calls inside it: each entry in `src/mocks/varsler.json` is a route at the origin root, and its `path` must equal the path of the `local` URL in `src/utils/urls.ts` that calls it. Run other Astro commands as `pnpm run astro <command>`: `astro.config.mjs` throws unless `PUBLIC_APP_ENVIRONMENT` is set, and the scripts set it.
- Before you say a change is done: `pnpm run verify` (`astro check`, then Vitest). Vitest only runs `test/unit/**/*.test.{ts,tsx}`: put unit tests there, in the folder that mirrors the source file's, and import from `src/` through the aliases the tests use (`@src/*`, `@components/*`, `@utils/*`, `@language/*`).
- When a page, visible text or `src/mocks/varsler.json` changed: `pnpm run test:e2e`. The Playwright specs in `test/integration` assert on visible text, the mock data and accessibility (axe). Playwright starts the dev server itself, or reuses one already running on port 4321. Needs `pnpm exec playwright install chromium` once. No workflow runs these tests on a pull request.
- The husky pre-commit hook runs a full build and then `biome check --write .` on the whole repo, which rewrites `image: {{ image }}` in `nais/*/nais.yaml` and reformats YAML under `.github/`, leaving them modified but unstaged. Stage files by name, never with `git add -A` or `git commit -a`, and after a commit restore the files you did not edit. Never run `pnpm run lint` (the same command).

## Rules

- Use the `astro` skill before editing `.astro`, `.tsx`, `.ts` or `.css` files. If `/astro` or `/commit` is missing, tell the developer to trust this folder in Copilot CLI and start a new session.
- Ask first before changing authentication (`src/middleware.ts`, `@navikt/astro-auth`), TokenX token exchange and its local bypass (`src/utils/server/getOboToken.ts`, `Astro.locals.token`), `PUBLIC_APP_ENVIRONMENT` handling (`src/utils/server/environment.ts`, the package scripts), `astro.config.mjs`, `nais/` or `.github/workflows/` (a push to `main` runs `deploy-main.yaml`, which deploys to prod), or anything that logs personal data, and before adding a dependency or a server-side call to a new backend.
- React is 18, not the 19 the `astro` skill assumes: use no React 19 API (`use`, `useActionState`, `ref` as a plain prop) and do not upgrade React as part of another task.
- `src/store/store.ts` reads `window` and `src/language/language.ts` reads `document` when imported: a component that imports either, directly or through a child, only works with `client:only="react"`. With `client:load`, `client:visible` or no directive, server rendering throws, and `pnpm run verify` does not catch it.
- `src/utils/urls.ts` keys each URL by `PUBLIC_APP_ENVIRONMENT` (`local`, `dev`, `prod`), which is inlined at build time. A URL that browser code reads goes there with all three keys; never import `astro:env/server` in that file, because islands import it.
- The nb page is `src/pages/index.astro`; `/nn` and `/en` are served by `src/pages/[locals]/index.astro`. A new page needs a file in both folders, each rendering one shared component from `src/components/`.
