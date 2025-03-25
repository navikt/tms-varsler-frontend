import { inaktiverBeskjedApiUrl } from "@utils/urls.ts";

const postInarkiver = (id: string) => {
  const requestBody = { eventId: id };

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
        console.error(
          "Inaktivering av beskjed feilet med status: " + response.status,
        );
      }
    })
    .catch(() => console.error("Inaktivering av beskjed feilet"));
};
export default postInarkiver;
