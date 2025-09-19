import { getAnalyticsInstance } from "@navikt/nav-dekoratoren-moduler";
import type { VarselType } from "../../customTypes/Varsel";

const APP_NAME = "tms-varsler-frontend";

const analyticsLogger = getAnalyticsInstance("tms-microfrontend-template-ssr");

export const logLinkNavigation = async (
  komponent: string,
  destinasjon?: string,
) => {
  await analyticsLogger("navigere", {
    komponent: komponent,
    kategori: "tms-varsel",
    origin: APP_NAME,
  });
};

export const logClickInaktiverButton = async () => {
  await analyticsLogger("click-inaktiver-button", { origin: APP_NAME });
};

export const logClickInaktivVarselWithoutLink = async (type: VarselType) => {
  await analyticsLogger("click-tidligere-varsel-uten-link", {
    eventData: { varselType: type },
    origin: APP_NAME,
  });
};
