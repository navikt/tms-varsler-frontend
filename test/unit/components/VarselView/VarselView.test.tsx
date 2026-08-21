import type { VarselResponse } from "@src/customTypes/Varsel";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const captureException = vi.fn();

vi.mock("@nais/apm", () => ({
  captureException: (...args: unknown[]) => captureException(...args),
}));

vi.mock("@components/VarselView/NyeVarslerView/NyeVarslerView.tsx", () => ({
  NyeVarslerView: () => {
    throw new Error("Render failed");
  },
}));

import VarselView from "@components/VarselView/VarselView";

const emptyResponse: VarselResponse = {
  hasMaskedVarsel: false,
  aktive: {
    beskjeder: [],
    oppgaver: [],
  },
  inaktive: [],
};

describe("VarselView", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  it("should show the existing error alert when rendering fails", () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.spyOn(console, "warn").mockImplementation(() => undefined);

    render(<VarselView varselResponse={emptyResponse} isError={false} />);

    expect(
      screen.getByText(
        "Vi har for øyeblikket tekniske problemer. Dette kan føre til at du ikke får opp alle dine varsler. Vennligst prøv igjen senere.",
      ),
    ).toBeInTheDocument();
    expect(captureException).toHaveBeenCalledOnce();
    expect(captureException).toHaveBeenCalledWith(expect.any(Error), {
      fingerprint: "varsler-render",
    });
  });
});
