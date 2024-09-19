export type Varsel ={
    id: string;
    forstBehandlet: string;
    isMasked: boolean;
    spraakkode: string;
    tekst: string;
    link: string;
    eksternVarslingSendt: boolean;
    eksternVarslingKanaler: string[];
    erArkiverbar: boolean;
}

export type VarselType = "oppgave" | "beskjed"

export type InaktivVarsel = Varsel & {
    type: VarselType
}

export type VarselResponse = {
    aktive: {
        oppgaver: Varsel[]
        beskjeder: Varsel[]
    }
    inaktive: InaktivVarsel[]
}