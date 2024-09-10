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
    arkiverOnClick: boolean;
}

export type VarselResponse = {
    aktive: {
        oppgaver: Varsel[]
        beskjeder: Varsel[]
    }
    inaktive: Varsel[]
}