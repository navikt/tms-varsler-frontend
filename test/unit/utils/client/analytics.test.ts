import { VarselType } from "@src/customTypes/Varsel.ts";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { custom, getAnalyticsInstance } = vi.hoisted(() => {
  const custom = vi.fn();
  const logger = Object.assign(vi.fn(), { custom });
  return { custom, getAnalyticsInstance: vi.fn(() => logger) };
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
  });

  it("should create the logger with the existing origin", () => {
    expect(getAnalyticsInstance).toHaveBeenCalledWith("tms-microfrontend-template-ssr");
  });

  it("should log link navigation through logger.custom", async () => {
    await logLinkNavigation("aktiv-beskjed");

    expect(custom).toHaveBeenCalledExactlyOnceWith("navigere", {
      komponent: "aktiv-beskjed",
      kategori: "tms-varsel",
      origin: "tms-varsler-frontend",
    });
  });

  it("should log the inaktiver button click through logger.custom", async () => {
    await logClickInaktiverButton();

    expect(custom).toHaveBeenCalledExactlyOnceWith("click-inaktiver-button", {
      origin: "tms-varsler-frontend",
    });
  });

  it("should log an inactive notification without link through logger.custom", async () => {
    await logClickInaktivVarselWithoutLink(VarselType.BESKJED);

    expect(custom).toHaveBeenCalledExactlyOnceWith("click-tidligere-varsel-uten-link", {
      eventData: { varselType: VarselType.BESKJED },
      origin: "tms-varsler-frontend",
    });
  });
});
