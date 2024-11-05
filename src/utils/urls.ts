const environment= import.meta.env.PUBLIC_APP_ENVIRONMENT;
type EnvBasedUrl = { [key in typeof environment]: string }

const TMS_MIN_SIDE_URL : EnvBasedUrl = {
    local: "http://localhost:4321/minside",
    dev: "https://www.ansatt.dev.nav.no/minside",
    prod: "https://www.ansatt.nav.no/minside",
};

const API_INTERNAL_INGRESS: EnvBasedUrl = {
    local: "http://localhost:3000/tms-varsel-api",
    dev: "http://tms-varsel-api/tms-varsel-api",
    prod: "http://tms-varsel-api/tms-varsel-api",
};

const API_URL : EnvBasedUrl = {
    local: "http://localhost:3000/tms-varsel-api",
    dev: "https://www.ansatt.dev.nav.no/tms-varsel-api/tms-varsel-api",
    prod: "https://www.nav.no/tms-varsel-api/tms-varsel-api",
};




export const minSideUrl = TMS_MIN_SIDE_URL[environment];
export const baseUrl = `${TMS_MIN_SIDE_URL[environment]}/varsler`;
export const apiInternIngress = `${API_INTERNAL_INGRESS[environment]}/alle`;
export const inaktiverBeskjedApiUrl = `${API_URL[environment]}/beskjed/inaktiver`;
export const loginUrl = `/minside/varsler/oauth2/login?redirect=${baseUrl}`;
