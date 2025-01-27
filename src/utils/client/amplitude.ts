import {logAmplitudeEvent} from '@navikt/nav-dekoratoren-moduler';
import type {VarselType} from "@src/customTypes/Varsel.ts";
import {track} from "@amplitude/analytics-browser";


const APP_NAME = "tms-varsler-frontend";

export const logLinkNavigation = (komponent: string, destinasjon ?: string) => {
    track("navigere", {app: APP_NAME, komponent: komponent});
    logAmplitudeEvent({eventData: {komponent: komponent}, eventName: "click-tidligere-varsel-uten-link", origin: APP_NAME});
}

export const logClickInaktiverButton = () => {
    track("click-inaktiver-button", {app: APP_NAME});
    logAmplitudeEvent({ eventName: "click-inaktiver-button", origin: APP_NAME});

}

export const logClickInaktivVarselWithoutLink = (type: VarselType) => {

    track("click-tidligere-varsel-uten-link", {app: APP_NAME, varselType: type});
}
export const logClickInaktivVarselWithoutLink2 = (type: VarselType) => {
    logAmplitudeEvent({eventData: {varselType: type}, eventName: "click-tidligere-varsel-uten-link", origin: APP_NAME});
}
