export type Varsel ={
    varselId: string;
    forstBehandlet: string;
    isMasked: boolean;
    spraakkode: string;
    tekst: string;
    link: string;
    eksternVarslingSendt: boolean;
    eksternVarslingKanaler: string[];
    erArkiverbar: boolean;
}

export type VarselResponse = {
    aktive: {
        oppgaver: Varsel[]
        beskjeder: Varsel[]
    }
    inaktive: Varsel[]
}