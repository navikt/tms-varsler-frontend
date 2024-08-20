const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.intern.dev.nav.no");

export type Environment = "local" | "development" | "production"
type  EnvironmentUrl = {[key in Environment]:string}

export const getEnvironment = (): Environment => {
    if (isDevelopment) {
        return "development";
    }
    if (isProduction) {
        return "production";
    }
    return "local";
};


const API_URL: EnvironmentUrl = {
    local: "http://localhost:4321/tms-varsel-api",
    development: "https://www.ansatt.dev.nav.no/tms-varsel-api",
    production: "https://www.ansatt.nav.no/tms-varsel-api",
}


export const aktiveVarslerUrl = `${API_URL[getEnvironment()]}/aktive`