import { requestOboToken } from "@navikt/oasis";
import type { APIContext } from "astro";

const isLocal = import.meta.env.PUBLIC_APP_ENVIRONMENT === "local";
const audience = `${process.env.NAIS_CLUSTER_NAME}:min-side:tms-varsel-api`;

export const getOboToken = async (
  token: string,
  logger: APIContext["logger"],
): Promise<string> => {
  const oboResult = await requestOboToken(token, audience);

  if (isLocal) {
    return "Fake token";
  }

  if (!oboResult.ok) {
    logger.error("Error getting access token: " + oboResult.error);
    throw new Error("Request oboToken for tms-varsel-api failed ");
  }

  return oboResult.token;
};
