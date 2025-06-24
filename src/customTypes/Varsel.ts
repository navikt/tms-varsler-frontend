export enum VarselType {
  OPPGAVE = "oppgave",
  BESKJED = "beskjed"
}
export type Varsel = {
  eventId: string;
  forstBehandlet: string;
  isMasked: boolean;
  spraakkode: string;
  tekst: string;
  link: string;
  eksternVarslingSendt: boolean;
  eksternVarslingKanaler: string[];
  isInaktiverbar: boolean;
  type: VarselType;
};

export type AktiveVarsler = {
  beskjeder: Varsel[];
  oppgaver: Varsel[];
};

export type InaktiveVarsler = Varsel[];

export type VarselResponse = {
  hasMaskedVarsel: boolean;
  aktive: AktiveVarsler;
  inaktive: InaktiveVarsler;
};
