import { type Varsel, VarselType } from "@src/customTypes/Varsel.ts";
import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const logLinkNavigation = vi.fn();
const logClickInaktiverButton = vi.fn();
const logClickInaktivVarselWithoutLink = vi.fn();
const postInaktiver = vi.fn();

vi.mock("@utils/client/analytics.ts", () => ({
  logLinkNavigation: (...args: unknown[]) => logLinkNavigation(...args),
  logClickInaktiverButton: (...args: unknown[]) => logClickInaktiverButton(...args),
  logClickInaktivVarselWithoutLink: (...args: unknown[]) => logClickInaktivVarselWithoutLink(...args),
}));

vi.mock("@components/VarseList/VarselCard/postInaktiver.ts", () => ({
  default: (...args: unknown[]) => postInaktiver(...args),
}));

import { VarselCard } from "./VarselCard";

const baseVarsel: Varsel = {
  eventId: "1",
  forstBehandlet: "2024-03-15T08:53",
  isMasked: false,
  spraakkode: "nb",
  tekst: "Du har fått en ny beskjed",
  link: "https://nav.no/varsel/1",
  eksternVarslingSendt: false,
  eksternVarslingKanaler: [],
  isInaktiverbar: false,
  type: VarselType.BESKJED,
};

describe("VarselCard", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render the notification text as a link to the varsel", () => {
    render(<VarselCard varsel={baseVarsel} isInaktiv={false} />);

    const link = screen.getByRole("link", { name: baseVarsel.tekst });
    expect(link).toHaveAttribute("href", baseVarsel.link);
  });

  it("should render the received date formatted as DD.MM.YYYY kl. HH.mm", () => {
    render(<VarselCard varsel={baseVarsel} isInaktiv={false} />);

    expect(screen.getByText(/15\.03\.2024 kl\. 08\.53/)).toBeInTheDocument();
  });

  it("should render an external channel label when channels are present", () => {
    render(<VarselCard varsel={{ ...baseVarsel, eksternVarslingKanaler: ["SMS"] }} isInaktiv={false} />);

    expect(screen.getByText("Varslet via SMS")).toBeInTheDocument();
  });

  it("should render the masked text when masked and without a link", () => {
    render(<VarselCard varsel={{ ...baseVarsel, isMasked: true, link: "" }} isInaktiv={false} />);

    expect(screen.getByText(/logg inn med høyere sikkerhetsnivå/)).toBeInTheDocument();
  });

  it("should log link navigation when the link is clicked", () => {
    render(<VarselCard varsel={baseVarsel} isInaktiv={false} />);

    fireEvent.click(screen.getByRole("link", { name: baseVarsel.tekst }));

    expect(logLinkNavigation).toHaveBeenCalledWith("aktiv-beskjed");
  });

  it("should render a 'Merk som lest' button when inaktiverbar without a link", () => {
    render(<VarselCard varsel={{ ...baseVarsel, isInaktiverbar: true, link: "" }} isInaktiv={false} />);

    expect(screen.getByRole("button", { name: "Merk som lest" })).toBeInTheDocument();
  });

  it("should inaktivere and log when the button is clicked", () => {
    render(<VarselCard varsel={{ ...baseVarsel, isInaktiverbar: true, link: "" }} isInaktiv={false} />);

    fireEvent.click(screen.getByRole("button", { name: "Merk som lest" }));

    expect(postInaktiver).toHaveBeenCalledWith(baseVarsel.eventId);
    expect(logClickInaktiverButton).toHaveBeenCalled();
  });

  it("should not render a button when the varsel has a link", () => {
    render(<VarselCard varsel={{ ...baseVarsel, isInaktiverbar: true }} isInaktiv={false} />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
