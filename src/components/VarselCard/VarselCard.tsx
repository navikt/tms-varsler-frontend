import {text} from "@language/text.ts";
import {BodyLong, Link} from "@navikt/ds-react";
import { type Varsel} from "@src/types/Varsel.ts";


export const VarselCard = ({
                               forstBehandlet,
                               spraakkode,
                               tekst,
                               link,
                               eksternVarslingKanaler,
                           }: Varsel) => {
    return (
        (
            <div lang={spraakkode}>
                {link ? <Link href={link}>{tekst}</Link> : <BodyLong>{tekst}</BodyLong>}
                <div>
                    <span>
                        {forstBehandlet}
                    </span>
                    {
                        (eksternVarslingKanaler.length > 0) && (
                            <span>
                                {eksternVarslingKanaler.join(`${text.and} `)}
                            </span>
                        )
                    }
                </div>
            </div>
        ))
}