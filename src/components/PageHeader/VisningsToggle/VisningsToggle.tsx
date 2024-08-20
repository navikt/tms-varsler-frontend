import {ToggleGroup} from "@navikt/ds-react";
import styles from "./VisningsToggle.module.css"
import {getLanguage} from "@language/getLanguage.ts";
import {text} from "@language/text.ts";
import {aktiveVarslerUrl} from "@src/utils/client/urls.ts";
import type {AktiveVarsler} from "@components/types";
import {fetcher} from "@src/utils/client/fetcher.ts";
import useSWRImmutable from "swr/immutable";

const language = getLanguage()
const tellAntallAktiveVarsler = (varsler: AktiveVarsler) => {
    return varsler.beskjeder.length + varsler.beskjeder.length + varsler.innbokser.length
}


export const VisningsToggle = () => {
    const {data   , isLoading}= useSWRImmutable<AktiveVarsler>(aktiveVarslerUrl, fetcher)
    const antallAktiveVarsler = data ? `(${tellAntallAktiveVarsler(data)})` : ""

    console.log(data)

    return (
        <ToggleGroup className={styles.toggleGroup} defaultValue="nye" size="medium" onChange={console.log} >
            <ToggleGroup.Item value="nye" label={text.newToggle[language]+antallAktiveVarsler} />
            <ToggleGroup.Item value="tidligere" label={text.previousToggle[language]} />
        </ToggleGroup>)
}