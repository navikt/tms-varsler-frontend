import {text} from "@language/text.ts";
import {BodyLong, Link} from "@navikt/ds-react";
import {type Varsel} from "@src/customTypes/Varsel.ts";
import styles from "./VarselCard.module.css"
import {ClipboardIcon} from '@navikt/aksel-icons';
import {DOCUMENT_LOCALE} from "@language/Language.ts";


const constructMetaData = (eksternVarslingKanaler: Varsel["eksternVarslingKanaler"], forstBehandlet: Varsel["forstBehandlet"]) => {
    return (
        <div className={styles.metadata}>
            <span className={styles.date}> {`${forstBehandlet}`} </span>
            {eksternVarslingKanaler.length > 0 ? <span className={styles.varselKanaler}>
                {`• Varslet på ${eksternVarslingKanaler.join(" " + text.and[DOCUMENT_LOCALE] + " ")}`}
            </span> : ""}

        </div>
    )
}


export const VarselCard = ({
                               forstBehandlet,
                               spraakkode,
                               tekst,
                               link,
                               eksternVarslingKanaler,
                           }: Varsel) => {


    return (
        (
            <div lang={spraakkode} className={styles.container}>
                <div className={styles.varselIcon}><ClipboardIcon width="20px" height="20px"/></div>
                <div>
                    <div>
                        {link ? <Link href={link}> <BodyLong weight="semibold">{tekst}</BodyLong></Link> :
                            <BodyLong weight="semibold">{tekst}</BodyLong>}
                    </div>
                    {constructMetaData(eksternVarslingKanaler, forstBehandlet)}
                </div>
            </div>
        ))
}