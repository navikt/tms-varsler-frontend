import { VarselCard } from "./varsel-card/VarselCard.tsx";
import { type Varsel } from "../../custom-types/Varsel.ts";
import { Heading } from "@navikt/ds-react";
import styles from "./VarselList.module.css";
import { sortVarselList } from "@utils/client/data.ts";

interface Props {
  tittel: string;
  varsler: Varsel[];
  isInaktiveVarsler: boolean;
}

export const VarselList = ({
  varsler,
  tittel,
  isInaktiveVarsler = false,
}: Props) => {
  return (
    <div>
      <Heading className={styles.heading} size="xsmall" level="2">
        {tittel}
      </Heading>
      <ul className={styles.list}>
        {varsler &&
          sortVarselList(varsler).map((v) => (
            <li key={v.eventId}>
              <VarselCard varsel={v} isInaktiv={isInaktiveVarsler} />
            </li>
          ))}
      </ul>
    </div>
  );
};
