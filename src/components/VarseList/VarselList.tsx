import {VarselCard} from "@components/VarselCard/VarselCard.tsx";
import {type Varsel} from "@src/types/Varsel.ts";
import {Heading} from "@navikt/ds-react";
import styles from "./VarselList.module.css"

interface Props {
    tittel: string;
    varsler: Varsel[]
}

export const VarselList = ({varsler, tittel, }: Props) => {

    return (<div>
        <Heading className={styles.heading} size="xsmall" level="2">{tittel}</Heading>
        <ul className={styles.list}>
            {varsler && varsler.map((v) => (
                <li key={v.id}>
                    <VarselCard {...v}/>
                </li>
            ))
            }
        </ul>
    </div>)

}