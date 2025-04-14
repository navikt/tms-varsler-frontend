import { inaktiverBeskjedApiUrl } from "@utils/urls.ts";
import pino from "pino-http";

const postInarkiver = (id: string) => {
  const requestBody = { eventId: id };
  const logger = pino().logger;
  fetch(inaktiverBeskjedApiUrl, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (!response.ok) {
        logger.error(
          "Inaktivering av beskjed feilet med status: " + response.status,
        );
      }
    })
    .catch(() => logger.error("Inaktivering av beskjed feilet"));
};
export default postInarkiver;
