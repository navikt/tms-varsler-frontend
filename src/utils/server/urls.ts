import {type Environment, getEnvironment} from "@utils/server/environment.ts";

type EnvBasedUrl = { [key in Environment]: string }


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




export const minSideUrl = TMS_MIN_SIDE_URL[getEnvironment()];
export const baseUrl = `${TMS_MIN_SIDE_URL[getEnvironment()]}/varsler`;
export const varslerApiurl = `${TMS_VARSEL_API[getEnvironment()]}/alle`;
export const loginUrl = `/minside/varsler/oauth2/login?redirect=${baseUrl}`;
