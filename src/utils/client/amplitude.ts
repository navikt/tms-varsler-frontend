import { init, track } from "@amplitude/analytics-browser";
import type {VarselType} from "@src/customTypes/Varsel.ts";


const APP_NAME = "tms-varsler-frontend";

export const logLinkNavigation = (komponent: string, destinasjon ?: string ) => {
    track("navigere", { app: APP_NAME, komponent: komponent});
}

export const logClickInaktiverButton = () => {
    track("click-inaktiver-button", { app: APP_NAME});
}

export const logClickInaktivVarselWithoutLink = (type: VarselType) => {
    track("click-tidligere-varsel-uten-link", { app: APP_NAME, varselType: type });
}


export const initAmplitude = () => {
    init("default", undefined, {
        useBatch: true,
        serverUrl: "https://amplitude.nav.no/collect-auto",
        ingestionMetadata: {
            sourceName: window.location.toString(),
        },
    });
};