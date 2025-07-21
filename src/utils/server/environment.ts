export const environment = import.meta.env.PUBLIC_APP_ENVIRONMENT;
export const getDecoratorEnvironment = () => (environment ? "prod" : "dev");
