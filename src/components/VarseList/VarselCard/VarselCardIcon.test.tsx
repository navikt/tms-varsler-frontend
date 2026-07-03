import { VarselType } from "@src/customTypes/Varsel.ts";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { VarselCardIcon } from "./VarselCardIcon";

describe("VarselCardIcon", () => {
  it("should render a decorative (aria-hidden) icon for an oppgave", () => {
    const { container } = render(<VarselCardIcon varselType={VarselType.OPPGAVE} />);

    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("should render a decorative (aria-hidden) icon for a beskjed", () => {
    const { container } = render(<VarselCardIcon varselType={VarselType.BESKJED} />);

    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("should render a different icon for beskjed than for oppgave", () => {
    const { container: oppgave } = render(<VarselCardIcon varselType={VarselType.OPPGAVE} />);
    const { container: beskjed } = render(<VarselCardIcon varselType={VarselType.BESKJED} />);

    expect(oppgave.querySelector("svg")?.innerHTML).not.toEqual(beskjed.querySelector("svg")?.innerHTML);
  });
});
