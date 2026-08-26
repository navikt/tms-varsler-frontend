import { captureException } from "@nais/apm";
import { inaktiverBeskjedApiUrl } from "@utils/urls.ts";

const postInarkiver = async (id: string): Promise<void> => {
  const requestBody = { eventId: id };

  try {
    const response = await fetch(inaktiverBeskjedApiUrl, {
      method: "POST",
      credentials: "same-origin",
      keepalive: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      captureException(new Error("Inaktivering av beskjed feilet"), {
        fingerprint: "varsel-inaktivering",
        context: { status: response.status },
      });
    }
  } catch (error) {
    captureException(error, {
      fingerprint: "varsel-inaktivering",
    });
  }
};
export default postInarkiver;
