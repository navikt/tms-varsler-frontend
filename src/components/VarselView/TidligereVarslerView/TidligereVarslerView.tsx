import styles from "./TidligereView.module.css";
import { VarselList } from "@components/VarseList/VarselList.tsx";
import { dynamicText, text } from "@language/text.ts";
import { DOCUMENT_LOCALE } from "@language/language.ts";
import type { Varsel } from "@src/customTypes/Varsel.ts";
import {
  $filterSearch,
  $filterVarselType,
  $inaktiveVarsler,
} from "@src/store/store.ts";
import { useStore } from "@nanostores/react";
import { BodyLong, BodyShort, Heading, List } from "@navikt/ds-react";

const filterVarsler = (varsler: Varsel[]) => {
  const filterVarselType = useStore($filterVarselType);
  const filterSearch = useStore($filterSearch);
  const filteredByType = varsler.filter(
    (varsel) => filterVarselType === "alle" || varsel.type === filterVarselType,
  );

  if (filterSearch === "") {
    return filteredByType;
  }

  return filteredByType.filter((varsel) =>
    varsel.tekst?.toLowerCase().includes(filterSearch),
  );
};

export const TidligereVarslerView = () => {
  const varsler = useStore($inaktiveVarsler);
  const filteredList = filterVarsler(varsler);

  const noTdiligereVarsler = varsler.length === 0;
  const noFilterResult = filteredList && filteredList.length === 0;
  const listIsEmpty = noTdiligereVarsler || noFilterResult;

  const headingText = noTdiligereVarsler
    ? text.noInaktiveVarslerTitle[DOCUMENT_LOCALE]
    : noFilterResult
      ? text.noSearchResultTitle[DOCUMENT_LOCALE]
      : dynamicText.tidligereVarslerHeading[DOCUMENT_LOCALE](
          filteredList.length,
          varsler.length,
        );

  const emptyListDescription = noTdiligereVarsler
    ? text.noInaktiveVarslerDescription[DOCUMENT_LOCALE]
    : text.noSearchResultDescription[DOCUMENT_LOCALE];

  return (
    <div className={styles.container}>
      <Heading
        aria-live="polite"
        className={styles.tidligereVarselListHeading}
        size={"small"}
        level={"2"}
      >
        {headingText}
      </Heading>
      {listIsEmpty ? (
        <List>
          <List.Item>{emptyListDescription}</List.Item>
          <List.Item>
            {text.notificationsFromLastYear[DOCUMENT_LOCALE]}
          </List.Item>
        </List>
      ) : (
        <div>
          <VarselList isInaktiveVarsler={true} varsler={filteredList} />
          <div className={styles.usefulInformation}>
            <BodyLong>
              <Heading level="2" size="small">
                {text.usefulToKnow[DOCUMENT_LOCALE]}
              </Heading>
              <BodyLong>
                {text.notificationsFromLastYear[DOCUMENT_LOCALE]}
              </BodyLong>
            </BodyLong>
          </div>
        </div>
      )}
    </div>
  );
};
