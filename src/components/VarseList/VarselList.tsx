import {VarselCard} from "@components/VarselCard/VarselCard.tsx";
import { type Varsel} from "@src/types/Varsel.ts";

interface Props {
    tittel: string;
    varsler: Varsel[]
}


export const VarselList = ({varsler, tittel}: Props) =>
    <div>
        <h2>{tittel}</h2>
        <ul>
            {varsler && varsler.map((v) => (
                <li key={v.varselId}>
                    <VarselCard {...v}/>
                </li>
            ))
            }
        </ul>
    </div>