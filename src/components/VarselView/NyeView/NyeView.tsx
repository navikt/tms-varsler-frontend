import styles from "@components/VarselView/VarselView.module.css";
import {VarselList} from "@components/VarseList/VarselList.tsx";
import {text} from "@language/text.ts";
import {DOCUMENT_LOCALE} from "@language/language.ts";
import type {Varsel} from "@src/customTypes/Varsel.ts";

type Props = {
    oppgaver: Varsel[],
    beskjeder: Varsel[],
}

export const NyeView = ({oppgaver, beskjeder}: Props) => {

    return <div className={styles.container}>
        {oppgaver && <VarselList tittel={text.filterOppgaver[DOCUMENT_LOCALE]} varsler={oppgaver}/>}
        {beskjeder.length > 0 && <VarselList tittel={text.filterBeskjeder[DOCUMENT_LOCALE]} varsler={beskjeder}/>}
    </div>
}