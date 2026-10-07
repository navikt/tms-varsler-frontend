import { VarselType } from "@src/customTypes/Varsel.ts";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { custom, logger, getAnalyticsInstance } = vi.hoisted(() => {
  const custom = vi.fn();
  const logger = Object.assign(vi.fn(), { custom });
  return { custom, logger, getAnalyticsInstance: vi.fn(() => logger) };
});

vi.mock("@navikt/nav-dekoratoren-moduler", () => ({ getAnalyticsInstance }));

import {
  logClickInaktiverButton,
  logClickInaktivVarselWithoutLink,
  logLinkNavigation,
} from "@utils/client/analytics.ts";

describe("analytics", () => {
  beforeEach(() => {
    custom.mockClear();
    logger.mockClear();
  });

  it("should create the logger with the app name as origin", () => {
    expect(getAnalyticsInstance).toHaveBeenCalledWith("tms-varsler-frontend");
  });

  it("should log link navigation as a typed navigere event", async () => {
    await logLinkNavigation({
      komponent: "aktiv-beskjed",
      lenketekst: "beskjed",
      destinasjon: "https://nav.no/varsel/1",
    });

    expect(logger).toHaveBeenCalledExactlyOnceWith("navigere", {
      lenketekst: "beskjed",
      destinasjon: "https://nav.no/varsel/1",
      komponentId: "aktiv-beskjed",
      lenkegruppe: "tms-varsel",
    });
    expect(custom).not.toHaveBeenCalled();
  });

  it("should log the inaktiver button click as a typed knapp klikket event", async () => {
    await logClickInaktiverButton("Merk som lest");

    expect(logger).toHaveBeenCalledExactlyOnceWith("knapp klikket", {
      tekst: "Merk som lest",
      variant: "secondary",
      size: "small",
      komponentId: "inaktiver-varsel",
    });
    expect(custom).not.toHaveBeenCalled();
  });

  it("should log an inactive notification without link through logger.custom", async () => {
    await logClickInaktivVarselWithoutLink(VarselType.BESKJED);

    expect(custom).toHaveBeenCalledExactlyOnceWith("click-tidligere-varsel-uten-link", {
      eventData: { varselType: VarselType.BESKJED },
      origin: "tms-varsler-frontend",
    });
    expect(logger).not.toHaveBeenCalled();
  });
});
