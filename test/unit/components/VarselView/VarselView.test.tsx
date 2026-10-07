import type { VarselResponse } from "@src/customTypes/Varsel.ts";
import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const logLinkNavigation = vi.fn();

vi.mock("@utils/client/analytics.ts", () => ({
  logLinkNavigation: (...args: unknown[]) => logLinkNavigation(...args),
}));

vi.mock("@components/VarselView/NyeVarslerView/NyeVarslerView.tsx", () => ({ NyeVarslerView: () => null }));
vi.mock("@components/VarselView/TidligereVarslerView/TidligereVarslerView.tsx", () => ({
  TidligereVarslerView: () => null,
}));

import VarselView from "@components/VarselView/VarselView.tsx";

const maskedResponse: VarselResponse = {
  hasMaskedVarsel: true,
  aktive: { beskjeder: [], oppgaver: [] },
  inaktive: [],
};

describe("VarselView", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should log the step-up login link with its href as destinasjon when clicked", () => {
    render(<VarselView varselResponse={maskedResponse} isError={false} />);

    const link = screen.getByRole("link", { name: /logg inn med BankID/ });
    fireEvent.click(link);

    expect(logLinkNavigation).toHaveBeenCalledExactlyOnceWith({
      komponent: "step-up-login",
      lenketekst: "logg inn med BankID, Buypass eller Commfides.",
      destinasjon: link.getAttribute("href"),
    });
  });

  it("should not render the step-up login link without masked varsler", () => {
    render(<VarselView varselResponse={{ ...maskedResponse, hasMaskedVarsel: false }} isError={false} />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
