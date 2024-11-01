import {dynamicText, text} from "@language/text.ts";
import {BodyLong, Button, Link} from "@navikt/ds-react";
import {type Varsel} from "@src/customTypes/Varsel.ts";
import {formatData} from "@utils/client/data.ts";
import styles from "./VarselCard.module.css"
import {ClipboardIcon} from '@navikt/aksel-icons';
import {DOCUMENT_LOCALE} from "@language/language.ts";
import {arkiverVarsel} from "@src/store/store.ts";


const constructMetaData = (eksternVarslingKanaler: Varsel["eksternVarslingKanaler"], forstBehandlet: Varsel["forstBehandlet"]) => {
    return (
        <div className={styles.metadata}>
            <span className={styles.date}> {`${formatData(forstBehandlet)}`} </span>
            {eksternVarslingKanaler.length > 0 ? <span className={styles.varselKanaler}>
                {dynamicText.notificationChannel(eksternVarslingKanaler)[DOCUMENT_LOCALE]}
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
                               isArkiverbar,
                               id
                           }: Varsel) => {


    return (
        (
            <div lang={spraakkode} className={styles.container}>
                <div className={styles.varselIcon}><ClipboardIcon width="20px" height="20px"/></div>
                <div>
                    <div>
                        {link ? <Link onClick={() => isArkiverbar && arkiverVarsel(id)} href={link}> <BodyLong weight="semibold">{tekst}</BodyLong></Link> :
                            <BodyLong weight="semibold">{tekst}</BodyLong>}
                    </div>
                    {constructMetaData(eksternVarslingKanaler, forstBehandlet)}
                    {isArkiverbar && !link ?
                        <Button onClick={() => arkiverVarsel(id)} size="small" variant="secondary">{text.markAsRead[DOCUMENT_LOCALE]}</Button> : ""}
                </div>
            </div>
        ))
}