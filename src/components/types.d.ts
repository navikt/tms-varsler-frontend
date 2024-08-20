export type Varsel ={
    eventId: string;
    varselId: string;
    forstBehandlet: string;
    tidspunkt: string;
    isMasked: boolean;
    spraakkode: string;
    tekst: string;
    link: string;
    eksternVarslingSendt: boolean;
    eksternVarslingKanaler: string[];
}

export type InAktivVarsel = Varsel & {
    type: "beskjed" | "oppgave" | "innboks"
}

export type InAktiveVarsler = InAktivVarsel[]

export type AktiveVarsler = {
    beskjeder: Varsel[],
    oppgaver: Varsel[],
    innbokser: Varsel[],
}