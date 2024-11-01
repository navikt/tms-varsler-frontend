import styles from "@components/VarselView/VarselView.module.css";
import {VarselList} from "@components/VarseList/VarselList.tsx";
import {text} from "@language/text.ts";
import {DOCUMENT_LOCALE} from "@language/language.ts";
import type {Varsel} from "@src/customTypes/Varsel.ts";
import {NoVarselMessage} from "@components/VarselView/NoVarselMessage/NoVarselMessage.tsx";
import {useStore} from "@nanostores/react";
import {$aktiveBeskjeder, $aktiveOppgaver} from "@src/store/store.ts";



export const NyeVarslerView = () => {
    const oppgaver = useStore($aktiveOppgaver)
    const beskjeder = useStore($aktiveBeskjeder)

    const hasOppgaver = oppgaver.length > 0
    const hasBeskjeder = beskjeder.length > 0

    if(!hasOppgaver && !hasBeskjeder) {
        return <NoVarselMessage type="noAktiveVarseler"/>
    }

    return <div className={styles.container}>
        {hasOppgaver && <VarselList tittel={text.filterOppgaver[DOCUMENT_LOCALE]} varsler={oppgaver}/>}
        {hasBeskjeder && <VarselList tittel={text.filterBeskjeder[DOCUMENT_LOCALE]} varsler={beskjeder}/>}
    </div>
}