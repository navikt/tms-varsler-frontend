/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  PUBLIC_APP_ENVIRONMENT: "local" | "dev" | "prod";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
