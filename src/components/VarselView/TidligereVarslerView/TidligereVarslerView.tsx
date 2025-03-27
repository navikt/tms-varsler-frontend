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
import { NoVarselMessage } from "@components/VarselView/NoVarselMessage/NoVarselMessage.tsx";
import { BodyLong, Heading } from "@navikt/ds-react";

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
  if (varsler.length === 0) {
    return <NoVarselMessage type="noInaktiveVarsler" />;
  }
  const filteredList = filterVarsler(varsler);
  const noFilterResult = filteredList && filteredList.length === 0;
  if (noFilterResult) {
    return <NoVarselMessage type="noSearchResult" />;
  }

  return (
    <div className={styles.container}>
      <VarselList
        isInaktiveVarsler={true}
        tittel={dynamicText.tidligereVarslerHeading[DOCUMENT_LOCALE](
          filteredList.length,
          varsler.length,
        )}
        varsler={filteredList}
      />
      <div className={styles.usefulInformation}>
        <BodyLong>
          <Heading level="2" size="small">
            {text.usefulToKnow[DOCUMENT_LOCALE]}
          </Heading>
          <BodyLong>{text.notificationsFromLastYear[DOCUMENT_LOCALE]}</BodyLong>
        </BodyLong>
      </div>
    </div>
  );
};
