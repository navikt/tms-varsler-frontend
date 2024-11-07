const environment = import.meta.env.PUBLIC_APP_ENVIRONMENT;
type EnvBasedUrl = { [key in typeof environment]: string }

const NAV_NO_URL = {
    local: 'http://localhost:4321',
    dev: 'https://www.ansatt.dev.nav.no',
    prod: 'https://www.nav.no',
};

const API_INTERNAL_INGRESS: EnvBasedUrl = {
    local: "http://localhost:3000/tms-varsel-api",
    dev: "http://tms-varsel-api/tms-varsel-api",
    prod: "http://tms-varsel-api/tms-varsel-api",
};


const ERROR_REPORTING_URL = {
    local:
        'https://www.intern.dev.nav.no/person/kontakt-oss/nb/tilbakemeldinger/feil-og-mangler',
    dev:
        'https://www.ansatt.dev.nav.no/person/kontakt-oss/nb/tilbakemeldinger/feil-og-mangler',
    prod:
        'https://www.nav.no/person/kontakt-oss/nb/tilbakemeldinger/feil-og-mangler',
};

export const navNoUrl = NAV_NO_URL[environment];
export const minSideUrl = `${navNoUrl}/minside`;
export const appBaseUrl = `${minSideUrl}/varsler`;

export const inaktiverBeskjedApiUrl = `${NAV_NO_URL[environment]}/tms-varsel-api/beskjed/inaktiver`;
export const loginStepUpUrl = `${appBaseUrl}/oauth2/login?level=Level4&redirect=${appBaseUrl}`;


export const apiInternIngress = `${API_INTERNAL_INGRESS[environment]}/alle`;
export const loginUrl = `/minside/varsler/oauth2/login?redirect=${appBaseUrl}`;
export const errorReportingUrl = ERROR_REPORTING_URL[environment];
