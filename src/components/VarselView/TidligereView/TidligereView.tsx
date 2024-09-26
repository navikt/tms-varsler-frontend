import styles from "./TidligereView.module.css";
import {VarselList} from "@components/VarseList/VarselList.tsx";
import {dynamicText} from "@language/text.ts";
import {DOCUMENT_LOCALE} from "@language/Language.ts";
import type {InaktivVarsel} from "@customTypes/Varsel.ts";
import {$filterSearch, $filterVarselType} from "@src/store/store.ts";
import {useStore} from "@nanostores/react";

type Props = {
    varsler: InaktivVarsel[],
}


const filterVarseler = (varsler: InaktivVarsel[]) => {
    const filterVarselType = useStore($filterVarselType)
    const filterSearch = useStore($filterSearch)

    const filteredByType = varsler.filter((varsel) => filterVarselType === "alle" || varsel.type === filterVarselType)

    if(filterSearch === "") {
        return filteredByType
    }

    const filteredBySearch = filteredByType.filter((varsel) => varsel.tekst.toLowerCase().includes(filterSearch))
    return filteredBySearch
}

export const TidligereView = ({varsler}: Props) => {
    const filteredList = filterVarseler(varsler)


    return <div className={styles.container}>
        {filteredList && <VarselList
            tittel={dynamicText.tidligereVarslerHeading[DOCUMENT_LOCALE](filteredList.length, varsler.length)}
            varsler={filteredList}/>}
    </div>
}