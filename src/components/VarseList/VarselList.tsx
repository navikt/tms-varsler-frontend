import {type Varsel, VarselCard} from "@components/VarselCard/VarselCard.tsx";


interface Props {
    tittel: string;
    varsler: Varsel[]
}


export const VarselList = ({varsler, tittel}: Props) =>
    <div>
        <h2>{tittel}</h2>
        <ul>
            {varsler && varsler.map((v) => (
                <li key={v.eventId}>
                    <VarselCard {...v}/>
                </li>
            ))
            }
        </ul>
    </div>