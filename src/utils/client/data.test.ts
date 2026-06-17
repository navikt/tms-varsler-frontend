import { describe, expect, it } from "vitest";
import { VarselType, type Varsel } from "@src/customTypes/Varsel.ts";
import { formatData, sortVarselList } from "./data";

const makeVarsel = (forstBehandlet: string): Varsel => ({
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
});

describe("formatData", () => {
  it("should format a date as DD.MM.YYYY kl. HH.mm", () => {
    expect(formatData("2024-03-15T08:53")).toBe("15.03.2024 kl. 08.53");
  });

  it("should zero-pad day, month, hour and minute", () => {
    expect(formatData("2024-01-05T07:04")).toBe("05.01.2024 kl. 07.04");
  });
});

describe("sortVarselList", () => {
  it("should sort the most recently received notification first", () => {
    const eldst = makeVarsel("2024-01-01T10:00:00.000Z");
    const nyest = makeVarsel("2024-03-01T10:00:00.000Z");
    const midt = makeVarsel("2024-02-01T10:00:00.000Z");

    const sorted = sortVarselList([eldst, nyest, midt]);

    expect(sorted.map((v) => v.forstBehandlet)).toEqual([
      nyest.forstBehandlet,
      midt.forstBehandlet,
      eldst.forstBehandlet,
    ]);
  });
});
