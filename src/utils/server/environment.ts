const isDevelopment = process.env.NAIS_CLUSTER_NAME === "dev-gcp";
export const isLocal = process.env.NODE_ENV === "development";

export type Environment = "local" | "development" | "production"


export const getEnvironment = (): Environment => {
    if (isDevelopment) {
        return "development";
    }

    if (isLocal) {
        return "local";
    }

    return "production";
};