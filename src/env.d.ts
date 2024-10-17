/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
    interface Locals {
        token: string;
    }
}

interface ImportMetaEnv {
    readonly TMS_APP_BASE_URL: string;
    readonly TMS_MIN_SIDE_URL: string;
    readonly TMS_VARSLER_API_URL: string;
}


interface ImportMeta {
    readonly env: ImportMetaEnv;
}