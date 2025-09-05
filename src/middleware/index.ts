import { getToken, validateToken } from "@navikt/oasis";
import { defineMiddleware } from "astro/middleware";
import { loginUrl } from "@utils/urls.ts";
const isLocal = import.meta.env.DEV;
import logger from "@src/utils/server/logger";

export const onRequest = defineMiddleware(async (context, next) => {
  const token = getToken(context.request.headers);
  if (isLocal) {
    return next();
  }

  if (context.request.url.includes("/internal")) {
    return next();
  }

  if (!token) {
    logger.error("Token not found");
    return context.redirect(loginUrl);
  }

  const validation = await validateToken(token);
  if (!validation.ok) {
    logger.error("Validation failed!");
    return context.redirect(loginUrl);
  }

  context.locals.token = token;
  return next();
});
