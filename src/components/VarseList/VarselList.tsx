import { VarselCard } from "@components/VarseList/VarselCard/VarselCard.tsx";
import type { Varsel } from "@src/customTypes/Varsel.ts";
import { sortVarselList } from "@utils/client/data.ts";
import styles from "./VarselList.module.css";

interface Props {
  varsler: Varsel[];
  isInaktiveVarsler: boolean;
}

export const VarselList = ({ varsler, isInaktiveVarsler }: Props) => {
  return (
    <ul className={styles.list}>
      {varsler &&
        sortVarselList(varsler).map((v) => (
          <li key={v.eventId}>
            <VarselCard varsel={v} isInaktiv={isInaktiveVarsler} />
          </li>
        ))}
    </ul>
  );
};
