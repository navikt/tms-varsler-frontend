import { VarselList } from "@components/VarseList/VarselList.tsx";
import { DOCUMENT_LOCALE } from "@language/language.ts";
import { text } from "@language/text.ts";
import { useStore } from "@nanostores/react";
import { BodyShort, Heading } from "@navikt/ds-react";
import { $aktiveBeskjeder, $aktiveOppgaver } from "@src/store/store.ts";
import styles from "./NyeVarslerView.module.css";

export const NyeVarslerView = () => {
  const oppgaver = useStore($aktiveOppgaver);
  const beskjeder = useStore($aktiveBeskjeder);

  const hasOppgaver = oppgaver.length > 0;
  const hasBeskjeder = beskjeder.length > 0;

  return (
    <div>
      {!hasOppgaver && !hasBeskjeder ? (
        <div>
          <Heading className={styles.nyeVarselListHeading} size={"small"} level={"2"}>
            {text.noAktiveVarslerTitle[DOCUMENT_LOCALE]}
          </Heading>
          <BodyShort className={styles.tomListeBeskrivelse}>
            {text.noAktiveVarslerDescription[DOCUMENT_LOCALE]}
          </BodyShort>
        </div>
      ) : (
        <>
          {hasOppgaver && (
            <div>
              <Heading className={styles.nyeVarselListHeading} size="xsmall" level="2">
                {text.filterOppgaver[DOCUMENT_LOCALE]}
              </Heading>
              <VarselList isInaktiveVarsler={false} varsler={oppgaver} />
            </div>
          )}

          {hasBeskjeder && (
            <div>
              <Heading className={styles.nyeVarselListHeading} size="xsmall" level="2">
                {text.filterBeskjeder[DOCUMENT_LOCALE]}
              </Heading>
              <VarselList isInaktiveVarsler={false} varsler={beskjeder} />
            </div>
          )}
        </>
      )}
    </div>
  );
};
