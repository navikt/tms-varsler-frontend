# tms-varsler-frontend

Frontenden for visning av varsler på nav.no.

Url dev: https://www.ansatt.dev.nav.no/minside/varsler

Url prod: https://www.nav.no/minside/varsler

# Kom i gang

1. Installer dependencies med `pnpm install`
2. Start hono mockserver med `pnpm mock`
3. Med mockserver kjørende i egen terminal, start appen lokalt ved å kjøre `pnpm dev` i et nytt terminalvindu
4. Appen nås på http://localhost:4321/minside/varsler

# Testing

Enhets- og komponenttester kjøres med [Vitest](https://vitest.dev/) (jsdom + Testing Library), og e2e-tester med [Playwright](https://playwright.dev/) (inkl. tilgjengelighetssjekk med axe).

| Kommando | Beskrivelse |
| --- | --- |
| `pnpm test` | Kjører enhets- og komponenttester én gang |
| `pnpm test:watch` | Kjører Vitest i watch-modus |
| `pnpm test:coverage` | Kjører enhetstestene med dekningsrapport |
| `pnpm test:e2e` | Kjører Playwright-e2e-testene |

Enhets- og komponenttester ligger ved siden av koden de tester (`src/**/*.test.{ts,tsx}`). E2e-testene ligger i `e2e/`.

Playwright starter mockserveren og appen automatisk via `webServer` i `playwright.config.ts`. Første gang må nettleseren installeres: `pnpm exec playwright install chromium`.

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen [#minside-varsler](https://nav-it.slack.com/archives/CR61BPH7G).
