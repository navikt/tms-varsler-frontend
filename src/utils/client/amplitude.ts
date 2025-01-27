import {logAmplitudeEvent} from '@navikt/nav-dekoratoren-moduler';
import type {VarselType} from "@src/customTypes/Varsel.ts";


const APP_NAME = "tms-varsler-frontend";

export const logLinkNavigation = (komponent: string, destinasjon ?: string) => {
    logAmplitudeEvent({eventData: {komponent: komponent}, eventName: "click-tidligere-varsel-uten-link", origin: APP_NAME});
}

export const logClickInaktiverButton = () => {
    logAmplitudeEvent({ eventName: "click-inaktiver-button", origin: APP_NAME});

}

export const logClickInaktivVarselWithoutLink = (type: VarselType) => {
    logAmplitudeEvent({eventData: {varselType: type}, eventName: "click-tidligere-varsel-uten-link", origin: APP_NAME});
}
