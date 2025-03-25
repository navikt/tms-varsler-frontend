/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    token: string;
  }
}

interface ImportMetaEnv {
  PUBLIC_APP_ENVIRONMENT: "local" | "dev" | "prod";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
