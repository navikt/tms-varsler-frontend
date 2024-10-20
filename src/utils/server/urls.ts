type Environment = "local" | "dev" | "prod";
type EnvBasedUrl = { [key in Environment]: string }

const isDevelopment = process.env.NAIS_CLUSTER_NAME === "dev-gcp";
export const isLocal = process.env.NODE_ENV === "development";

const getEnvironment = ():Environment => {
    if (isLocal) {
        return "local";
    }
    if (isDevelopment) {
        return "dev";
    }
    return "prod";
}

const TMS_MIN_SIDE_URL : EnvBasedUrl = {
    local: "http://localhost:4321/minside",
    dev: "https://www.ansatt.dev.nav.no/minside",
    prod: "https://www.ansatt.dev.nav.no/minside",
};

const TMS_VARSEL_API : EnvBasedUrl = {
    local: "http://localhost:3000/tms-varsel-api",
    dev: "http://tms-varsel-api",
    prod: "http://tms-varsel-api",
};




export const minSideUrl = TMS_MIN_SIDE_URL[getEnvironment()];
export const baseUrl = `${TMS_MIN_SIDE_URL[getEnvironment()]}/varsler-ny`;
export const varslerApiurl = `${TMS_VARSEL_API[getEnvironment()]}/alle`;
export const loginUrl = `/minside/varsler-ny/oauth2/login?redirect=${baseUrl}`;
