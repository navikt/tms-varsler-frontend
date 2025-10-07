import styles from "../VarselView.module.css";
import { VarselList } from "../../varsel-list/VarselList.tsx";
import { text } from "@language/text.ts";
import { DOCUMENT_LOCALE } from "@language/language.ts";
import { NoVarselMessage } from "../no-varsel-message/NoVarselMessage.tsx";
import { useStore } from "@nanostores/react";
import { $aktiveBeskjeder, $aktiveOppgaver } from "@src/store/store.ts";

export const NyeVarslerView = () => {
  const oppgaver = useStore($aktiveOppgaver);
  const beskjeder = useStore($aktiveBeskjeder);

  const hasOppgaver = oppgaver.length > 0;
  const hasBeskjeder = beskjeder.length > 0;

  if (!hasOppgaver && !hasBeskjeder) {
    return <NoVarselMessage type="noAktiveVarsler" />;
  }

  return (
    <div className={styles.container}>
      {hasOppgaver && (
        <VarselList
          isInaktiveVarsler={false}
          tittel={text.filterOppgaver[DOCUMENT_LOCALE]}
          varsler={oppgaver}
        />
      )}
      {hasBeskjeder && (
        <VarselList
          isInaktiveVarsler={false}
          tittel={text.filterBeskjeder[DOCUMENT_LOCALE]}
          varsler={beskjeder}
        />
      )}
    </div>
  );
};
