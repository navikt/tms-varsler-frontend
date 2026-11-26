import { requestOboToken } from "@navikt/oasis";
import type { AstroRuntimeLogger } from "astro";
import { isLocal } from "./environment";

const audience = `${process.env.NAIS_CLUSTER_NAME}:min-side:tms-varsel-api`;

export const getOboToken = async (token: string, logger: AstroRuntimeLogger): Promise<string> => {
  const oboResult = await requestOboToken(token, audience);

  if (isLocal) {
    return "Fake token";
  }

  if (!oboResult.ok) {
    logger.error(`Error getting access token: ${oboResult.error}`);
    throw new Error("Request oboToken for tms-varsel-api failed ");
  }

  return oboResult.token;
};
