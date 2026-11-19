export const isLocal = import.meta.env.DEV;
export const isProduction = process.env.NAIS_CLUSTER_NAME === "prod-gcp";
export const getDecoratorEnvironment = () => (isProduction ? "prod" : "dev");
