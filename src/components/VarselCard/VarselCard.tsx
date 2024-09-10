import {text} from "@language/text.ts";
import {BodyLong, Link} from "@navikt/ds-react";

export interface Varsel {
    forstBehandlet: string,
    eventId: string,
    tekst: string,
    link: string,
    isMasked: boolean,
    eksternVarslingSendt: false,
    eksternVarslingKanaler: string[],
    arkiverOnClick: boolean,
    varselType: "beskjed" | "oppgave"
}

export const VarselCard = ({
                           forstBehandlet,
                           tekst,
                           link,
                           eksternVarslingSendt,
                           eksternVarslingKanaler,
                           arkiverOnClick,
                           varselType,
                       }: Varsel) => {
    return (
        (
            <div>
                {link ? <Link href={link}>{tekst}</Link> : <BodyLong>{tekst}</BodyLong>}
                <div>
                    <span>
                        {forstBehandlet}
                    </span>
                    {
                        eksternVarslingSendt && (eksternVarslingKanaler.length > 0) && (
                            <span>
                                {eksternVarslingKanaler.join(`${text.and} `)}
                            </span>
                        )
                    }
                </div>
            </div>
        ))
}