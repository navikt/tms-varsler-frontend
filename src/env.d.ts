/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
    interface Locals {
        token: string;
    }
}

interface ImportMetaEnv {
    PUBLIC_ENVIRONMENT: "local" | "dev" | "prod";
}


interface ImportMeta {
    readonly env: ImportMetaEnv;
}