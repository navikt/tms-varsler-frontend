import { describe, expect, it } from "vitest";
import { VarselType, type Varsel } from "@src/customTypes/Varsel.ts";
import sortVarsler from "./sortVarsler";

const makeVarsel = (
  forstBehandlet: string,
  overrides: Partial<Varsel> = {},
): Varsel => ({
  eventId: forstBehandlet,
  forstBehandlet,
  isMasked: false,
  spraakkode: "nb",
  tekst: "Et varsel",
  link: "https://nav.no/varsel",
  eksternVarslingSendt: false,
  eksternVarslingKanaler: [],
  isInaktiverbar: false,
  type: VarselType.BESKJED,
  ...overrides,
});

describe("sortVarsler", () => {
  it("should sort the most recently received notification first", () => {
    const eldst = makeVarsel("2024-01-01T10:00:00.000Z");
    const nyest = makeVarsel("2024-03-01T10:00:00.000Z");
    const midt = makeVarsel("2024-02-01T10:00:00.000Z");

    const sorted = sortVarsler([eldst, nyest, midt]);

    expect(sorted.map((v) => v.forstBehandlet)).toEqual([
      nyest.forstBehandlet,
      midt.forstBehandlet,
      eldst.forstBehandlet,
    ]);
  });

  it("should keep a single notification unchanged", () => {
    const varsel = makeVarsel("2024-01-01T10:00:00.000Z");

    expect(sortVarsler([varsel])).toEqual([varsel]);
  });

  it("should return an empty array when there are no notifications", () => {
    expect(sortVarsler([])).toEqual([]);
  });
});
