import {type Environment, getEnvironment} from "./environment.ts";

type  EnvironmentUrls = { [key in Environment]: string }

const BASE_URL: EnvironmentUrls = {
    local: "http://localhost:4321/minside/varsler-ny",
    development: "https://www.ansatt.dev.nav.no/minside/varsler-ny",
    production: "https://www.nav.no/minside/varsler-ny",
}

const Min_SIDE_URL: EnvironmentUrls = {
    local: "http://localhost:4321/minside",
    development: "https://www.ansatt.dev.nav.no/minside",
    production: "https://www.nav.no/minside",
}

export const loginUrl = () => `/minside/varsler-ny/oauth2/login?redirect=${BASE_URL[getEnvironment()]}}`;
export const baseUrl = BASE_URL[getEnvironment()]
export const minSideUrl = Min_SIDE_URL[getEnvironment()]
