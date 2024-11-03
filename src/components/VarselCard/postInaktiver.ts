import {inaktiverBeskjedApiUrl} from "@utils/urls.ts";

const postInarkiver = (id: string) => {
    const requestBody = {eventId: id}

    fetch(inaktiverBeskjedApiUrl, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    }).catch((error) => console.error('Kall for å inaktivere beskjed feilt'));

}

export default postInarkiver;
