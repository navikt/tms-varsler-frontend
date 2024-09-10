import {ToggleGroup} from "@navikt/ds-react";
import styles from "./VisningsToggle.module.css"
import {getLanguage} from "@language/getLanguage.ts";
import {text} from "@language/text.ts";
import {aktiveVarslerUrl} from "@src/utils/client/urls.ts";
import {fetcher} from "@src/utils/client/fetcher.ts";
import useSWRImmutable from "swr/immutable";
import type {VarselResponse} from "@src/types/Varsel.ts";

const language = getLanguage()

const aktiveVarselCounterText = (varsler: VarselResponse["aktive"]) => {
    const antallVarsler = varsler?.oppgaver.length + varsler?.beskjeder.length
    return antallVarsler > 0 ? `(${antallVarsler}\)` : ""
}

export const VisningsToggle = () => {
    const {data: varselResponse, isLoading} = useSWRImmutable<VarselResponse>(aktiveVarslerUrl, fetcher)
    const antallAktiveVarsler = varselResponse && aktiveVarselCounterText(varselResponse.aktive)


    return (
        <ToggleGroup className={styles.toggleGroup} defaultValue="nye" size="medium" onChange={console.log}>
            <ToggleGroup.Item value="nye" label={text.newToggle[language] + antallAktiveVarsler}/>
            <ToggleGroup.Item value="tidligere" label={text.previousToggle[language]}/>
        </ToggleGroup>
    )
}