import styles from "./TidligereView.module.css";
import {VarselList} from "@components/VarseList/VarselList.tsx";
import {dynamicText} from "@language/text.ts";
import {DOCUMENT_LOCALE} from "@language/Language.ts";
import type {Varsel} from "@src/types/Varsel.ts";

type Props = {
    varsler: Varsel[],
}

export const TidligereView = ({varsler}: Props) => {
    const filteredList = varsler

    return <div className={styles.container}>
        {varsler && <VarselList
            tittel={dynamicText.tidligereVarslerHeading[DOCUMENT_LOCALE](filteredList.length, filteredList.length)}
            varsler={varsler}/>}
    </div>
}