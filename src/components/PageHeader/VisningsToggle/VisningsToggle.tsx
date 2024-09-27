import {ToggleGroup} from "@navikt/ds-react";
import styles from "./VisningsToggle.module.css"
import {text} from "@language/text.ts";
import {aktiveVarslerUrl} from "@src/utils/client/urls.ts";
import {fetcher} from "@src/utils/client/fetcher.ts";
import useSWRImmutable from "swr/immutable";
import type {VarselResponse} from "@src/customTypes/Varsel.ts";
import {setViewToNye, setViewToTidligere} from "@src/utils/client/viewUrl.ts";
import {useStore} from "@nanostores/react";
import {$showTidligere} from "@src/store/store.ts";
import {DOCUMENT_LOCALE} from "@language/language.ts";


const aktiveVarselCounterText = (varsler: VarselResponse["aktive"]) => {
    const antallVarsler = varsler?.oppgaver.length + varsler?.beskjeder.length
    return antallVarsler > 0 ? `(${antallVarsler}\)` : ""
}


export const VisningsToggle = () => {
    const {data: varselResponse} = useSWRImmutable<VarselResponse>(aktiveVarslerUrl, fetcher)

    const antallAktiveVarsler = varselResponse ? aktiveVarselCounterText(varselResponse.aktive) : ""
    const isTidligereView: boolean = useStore($showTidligere)

    const defaultToggle = isTidligereView ? "tidligere" : "nye"



    return (
        <ToggleGroup defaultValue={defaultToggle} className={styles.toggleGroup} size="medium" onChange={console.log}>
            <ToggleGroup.Item onClick={() => setViewToNye()} value="nye"
                              label={text.newToggle[DOCUMENT_LOCALE] + antallAktiveVarsler}/>
            <ToggleGroup.Item onClick={() => setViewToTidligere()} value="tidligere"
                              label={text.previousToggle[DOCUMENT_LOCALE]}/>
        </ToggleGroup>
    )
}