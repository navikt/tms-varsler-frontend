import {ToggleGroup} from "@navikt/ds-react";
import styles from "./VisningsToggle.module.css"
import {text} from "@language/text.ts";
import type {VarselResponse} from "@src/customTypes/Varsel.ts";
import {setViewToNye, setViewToTidligere} from "@src/utils/client/viewUrl.ts";
import {useStore} from "@nanostores/react";
import {$aktiveVarsler, $showTidligere} from "@src/store/store.ts";
import {DOCUMENT_LOCALE} from "@language/language.ts";


const aktiveVarselCounterText = (varsler: VarselResponse["aktive"]) => {
    const antallVarsler = varsler?.oppgaver.length + varsler?.beskjeder.length
    return antallVarsler > 0 ? `(${antallVarsler}\)` : ""
}
const mapToSetViewFunction = (view: string) => view === "nye" ? setViewToNye() : setViewToTidligere();

export const VisningsToggle = () => {
    const aktiveVarsler = useStore($aktiveVarsler)

    const antallAktiveVarsler = aktiveVarselCounterText(aktiveVarsler)
    const isTidligereView: boolean = useStore($showTidligere)
    const defaultToggle = isTidligereView ? "tidligere" : "nye"

    return (
        <ToggleGroup defaultValue={defaultToggle} className={styles.toggleGroup} size="medium" onChange={mapToSetViewFunction}>
            <ToggleGroup.Item  value="nye"
                              label={text.newToggle[DOCUMENT_LOCALE] + antallAktiveVarsler}/>
            <ToggleGroup.Item  value="tidligere"
                              label={text.previousToggle[DOCUMENT_LOCALE]}/>
        </ToggleGroup>
    )
}