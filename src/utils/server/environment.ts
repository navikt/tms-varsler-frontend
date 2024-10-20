export type Environment = "local" | "dev" | "prod";
const isDevelopment = process.env.NAIS_CLUSTER_NAME === "dev-gcp";
export const isLocal = process.env.NODE_ENV === "development";

export const getEnvironment = ():Environment => {
    if (isLocal) {
        return "local";
    }
    if (isDevelopment) {
        return "dev";
    }
    return "prod";
}