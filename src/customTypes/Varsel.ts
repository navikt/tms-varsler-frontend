export type VarselType = "oppgave" | "beskjed"

export type Varsel ={
    eventId: string;
    forstBehandlet: string;
    isMasked: boolean;
    spraakkode: string;
    tekst: string;
    link: string;
    eksternVarslingSendt: boolean;
    eksternVarslingKanaler: string[];
    isInaktiverbar: boolean;
}

export type InaktivVarsel = Varsel & {
    type: VarselType
}

export type AktiveVarsler = {
    beskjeder: Varsel[]
    oppgaver: Varsel[]
}

export type InaktiveVarsler = InaktivVarsel[]

export type VarselResponse = {
    hasMaskedVarsel: boolean
    aktive: AktiveVarsler
    inaktive: InaktiveVarsler
}