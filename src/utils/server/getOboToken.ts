import { requestOboToken } from "@navikt/oasis";

const isLocal = import.meta.env.PUBLIC_ENVIRONMENT === "local";
const audience = `${process.env.NAIS_CLUSTER_NAME}:min-side:tms-varsel-api`;

export const getOboToken = async (token: string): Promise<string> => {
    const oboResult = await requestOboToken(token, audience);

    if (isLocal) {
        return "Fake token";
    }

    if (!oboResult.ok) {
        console.error("Error getting access token: " + oboResult.error);
        throw new Error("Request oboToken for tms-varsel-api failed ");
    }

    return oboResult.token;
};