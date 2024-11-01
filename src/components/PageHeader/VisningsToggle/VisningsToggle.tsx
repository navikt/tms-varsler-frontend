import {ToggleGroup} from "@navikt/ds-react";
import styles from "./VisningsToggle.module.css"
import {text} from "@language/text.ts";
import type {VarselResponse} from "@src/customTypes/Varsel.ts";
import {setViewToNye, setViewToTidligere} from "@src/utils/client/viewUrl.ts";
import {useStore} from "@nanostores/react";
import {$aktiveBeskjeder, $aktiveOppgaver, $showTidligere} from "@src/store/store.ts";
import {DOCUMENT_LOCALE} from "@language/language.ts";

const mapToSetViewFunction = (view: string) => view === "nye" ? setViewToNye() : setViewToTidligere();

export const VisningsToggle = () => {
    const beskjeder = useStore($aktiveBeskjeder)
    const oppgaver = useStore($aktiveOppgaver)
    const isTidligereView: boolean = useStore($showTidligere)


    const varselCount = oppgaver.length + beskjeder.length
    const varselCountText = varselCount > 0 ? `(${varselCount})` : ""
    const defaultToggle = isTidligereView ? "tidligere" : "nye"

    return (
        <ToggleGroup defaultValue={defaultToggle} className={styles.toggleGroup} size="medium" onChange={mapToSetViewFunction}>
            <ToggleGroup.Item  value="nye"
                              label={text.newToggle[DOCUMENT_LOCALE] + varselCountText}/>
            <ToggleGroup.Item  value="tidligere"
                              label={text.previousToggle[DOCUMENT_LOCALE]}/>
        </ToggleGroup>
    )
}