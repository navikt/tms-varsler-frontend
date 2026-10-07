import { getAnalyticsInstance } from "@navikt/nav-dekoratoren-moduler";
import type { VarselType } from "../../customTypes/Varsel";

const APP_NAME = "tms-varsler-frontend";

const analyticsLogger = getAnalyticsInstance(APP_NAME);

type LinkNavigation = { komponent: string; lenketekst: string; destinasjon: string };

export const logLinkNavigation = async ({ komponent, lenketekst, destinasjon }: LinkNavigation) => {
  await analyticsLogger("navigere", {
    lenketekst,
    destinasjon,
    komponentId: komponent,
    lenkegruppe: "tms-varsel",
  });
};

export const logClickInaktiverButton = async (tekst: string) => {
  await analyticsLogger("knapp klikket", {
    tekst,
    variant: "secondary",
    size: "small",
    komponentId: "inaktiver-varsel",
  });
};

export const logClickInaktivVarselWithoutLink = async (type: VarselType) => {
  await analyticsLogger.custom("click-tidligere-varsel-uten-link", {
    eventData: { varselType: type },
    origin: APP_NAME,
  });
};
