const environment= import.meta.env.PUBLIC_APP_ENVIRONMENT;
type EnvBasedUrl = { [key in typeof environment]: string }

const TMS_MIN_SIDE_URL : EnvBasedUrl = {
    local: "http://localhost:4321/minside",
    dev: "https://www.ansatt.dev.nav.no/minside",
    prod: "https://www.ansatt.nav.no/minside",
};

const TMS_VARSEL_API : EnvBasedUrl = {
    local: "http://localhost:3000/tms-varsel-api",
    dev: "http://tms-varsel-api/tms-varsel-api",
    prod: "http://tms-varsel-api/tms-varsel-api",
};




export const minSideUrl = TMS_MIN_SIDE_URL[environment];
export const baseUrl = `${TMS_MIN_SIDE_URL[environment]}/varsler`;
export const varslerApiurl = `${TMS_VARSEL_API[environment]}/alle`;
export const inaktiverBeskjedApiUrl = `${TMS_VARSEL_API[environment]}/beskjed/inaktiver`;
export const loginUrl = `/minside/varsler/oauth2/login?redirect=${baseUrl}`;
