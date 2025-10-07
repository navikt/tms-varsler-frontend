import { dynamicText, text } from "@language/text.ts";
import { BodyLong, Button, Link } from "@navikt/ds-react";
import { type Varsel } from "@src/custom-types/Varsel.ts";
import { formatData } from "@utils/client/data.ts";
import styles from "./VarselCard.module.css";
import { DOCUMENT_LOCALE } from "@language/language.ts";
import { inaktiverBeskjed } from "@src/store/store.ts";
import postInarkiver from "./postInaktiver.ts";
import {
  logClickInaktiverButton,
  logClickInaktivVarselWithoutLink,
  logLinkNavigation,
} from "@utils/client/analytics.ts";
import { VarselCardIcon } from "./VarselCardIcon.tsx";

const constructMetaData = (
  eksternVarslingKanaler: Varsel["eksternVarslingKanaler"],
  forstBehandlet: Varsel["forstBehandlet"],
) => {
  return (
    <div className={styles.metadata}>
      <span className={styles.date}> {`${formatData(forstBehandlet)}`} </span>
      {eksternVarslingKanaler.length > 0 ? (
        <span className={styles.varselKanaler}>
          {
            dynamicText.notificationChannel(
              eksternVarslingKanaler,
              DOCUMENT_LOCALE,
            )[DOCUMENT_LOCALE]
          }
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

const handleInaktiverVarsel = (id: string, isInaktiverbar: boolean) => {
  if (isInaktiverbar) {
    postInarkiver(id);
    inaktiverBeskjed(id);
  }
};

export const VarselCard = ({
  varsel,
  isInaktiv,
}: {
  varsel: Varsel;
  isInaktiv: boolean;
}) => {
  const varselText = varsel.isMasked
    ? text.maskedVarselText[DOCUMENT_LOCALE]
    : varsel.tekst;

  return (
    <div
      onClick={() =>
        isInaktiv &&
        !varsel.link &&
        logClickInaktivVarselWithoutLink(varsel.type)
      }
      lang={varsel.spraakkode}
      className={styles.container}
    >
      <div className={styles.varselIcon}>
        <VarselCardIcon varselType={varsel.type} />
      </div>
      <div>
        <div>
          {varsel.link ? (
            <Link
              onClick={() => {
                handleInaktiverVarsel(varsel.eventId, varsel.isInaktiverbar);
                logLinkNavigation(
                  `${isInaktiv ? "inaktiv" : "aktiv"}-${varsel.type}`,
                );
              }}
              href={varsel.link}
            >
              {" "}
              <BodyLong weight="semibold">{varsel.tekst}</BodyLong>
            </Link>
          ) : (
            <BodyLong weight="semibold">{varselText}</BodyLong>
          )}
        </div>
        {constructMetaData(
          varsel.eksternVarslingKanaler,
          varsel.forstBehandlet,
        )}
        {varsel.isInaktiverbar && !varsel.link ? (
          <Button
            onClick={() => {
              handleInaktiverVarsel(varsel.eventId, varsel.isInaktiverbar);
              logClickInaktiverButton();
            }}
            size="small"
            variant="secondary"
          >
            {text.markAsRead[DOCUMENT_LOCALE]}
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
