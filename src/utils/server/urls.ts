import {type Environment, getEnvironment} from "./environment.ts";

type  EnvironmentUrls = {[key in Environment]:string}

const BASE_URL: EnvironmentUrls = {
    local: "http://localhost:4321/minside/varsler",
    development: "https://www.ansatt.dev.nav.no/minside/varsler",
    production: "https://www.ansatt.nav.no/minside/varsler",
}


export const baseUrl = BASE_URL[getEnvironment()]