import styles from "./TidligereView.module.css";
import {VarselList} from "@components/VarseList/VarselList.tsx";
import {dynamicText, text} from "@language/text.ts";
import {DOCUMENT_LOCALE} from "@language/language.ts";
import type {InaktivVarsel} from "@src/customTypes/Varsel.ts";
import {$filterSearch, $filterVarselType, $inaktiveVarsler} from "@src/store/store.ts";
import {useStore} from "@nanostores/react";
import {NoVarselMessage} from "@components/VarselView/NoVarselMessage/NoVarselMessage.tsx";
import {BodyLong, Heading} from "@navikt/ds-react";



const filterVarseler = (varsler: InaktivVarsel[]) => {
    const filterVarselType = useStore($filterVarselType)
    const filterSearch = useStore($filterSearch)
    const filteredByType = varsler.filter((varsel) => filterVarselType === "alle" || varsel.type === filterVarselType)

    if (filterSearch === "") {
        return filteredByType
    }

    return filteredByType.filter((varsel) => varsel.tekst?.toLowerCase().includes(filterSearch))
}

export const TidligereVarslerView = () => {
    const varsler = useStore($inaktiveVarsler)
    if (varsler.length === 0) {
        return <NoVarselMessage type="noInaktiveVarseler"/>
    }
    const filteredList = filterVarseler(varsler);
    const noFilterResult = filteredList && filteredList.length === 0;
    if (noFilterResult) {
        return <NoVarselMessage type="noSearchResult"/>
    }

    return <div className={styles.container}>
        <VarselList
            tittel={dynamicText.tidligereVarslerHeading[DOCUMENT_LOCALE](filteredList.length, varsler.length)}
            varsler={filteredList}/>
        <div className={styles.usefulInformation}>
            <BodyLong>
                <Heading size="small">{text.usefulToKnow[DOCUMENT_LOCALE]}</Heading>
                <BodyLong>{text.notificationsFromLastYear[DOCUMENT_LOCALE]}</BodyLong>
            </BodyLong>
        </div>
    </div>
}