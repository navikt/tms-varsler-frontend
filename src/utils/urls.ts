const environment = import.meta.env.PUBLIC_APP_ENVIRONMENT;
type EnvBasedUrl = { [key in typeof environment]: string }

const NAV_NO_URL = {
    local: 'https://www.nav.no',
    dev: 'https://www.ansatt.dev.nav.no',
    prod: 'https://www.nav.no',
};

const MIN_SIDE_URL: EnvBasedUrl = {
    local: "http://localhost:4321/minside",
    dev: "https://www.ansatt.dev.nav.no/minside",
    prod: "https://www.nav.no/minside",
};

const APP_BASE_URL: EnvBasedUrl = {
    local: "http://localhost:4321",
    dev: "https://www.ansatt.dev.nav.no/minside/varsler",
    prod: "https://www.nav.no/minside/varsler",
};


const API_INTERNAL_INGRESS: EnvBasedUrl = {
    local: "http://localhost:3000/tms-varsel-api",
    dev: "http://tms-varsel-api/tms-varsel-api",
    prod: "http://tms-varsel-api/tms-varsel-api",
};

const API_URL: EnvBasedUrl = {
    local: "http://localhost:3000/tms-varsel-api",
    dev: "https://www.ansatt.dev.nav.no/tms-varsel-api",
    prod: "https://www.ansatt.nav.no/tms-varsel-api",
};

const ERROR_REPORTING_URL = {
    local:
        'https://www.intern.dev.nav.no/person/kontakt-oss/nb/tilbakemeldinger/feil-og-mangler',
    dev:
        'https://www.ansatt.dev.nav.no/person/kontakt-oss/nb/tilbakemeldinger/feil-og-mangler',
    prod:
        'https://www.nav.no/person/kontakt-oss/nb/tilbakemeldinger/feil-og-mangler',
};


export const minSideUrl = MIN_SIDE_URL[environment];
export const appBaseUrl = APP_BASE_URL[environment];
export const baseUrl = `${MIN_SIDE_URL[environment]}/varsler`;
export const apiInternIngress = `${API_INTERNAL_INGRESS[environment]}/alle`;
export const inaktiverBeskjedApiUrl = `${API_URL[environment]}/beskjed/inaktiver`;
export const loginUrl = `/minside/varsler/oauth2/login?redirect=${baseUrl}`;
export const loginStepUpUrl = `${appBaseUrl}/oauth2/login?level=Level4&redirect_uri=${appBaseUrl}`;
export const errorReportingUrl = ERROR_REPORTING_URL[environment];
export const navNoUrl = NAV_NO_URL[environment];
