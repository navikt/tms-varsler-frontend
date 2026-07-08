import { DOCUMENT_LOCALE } from "@language/language.ts";
import { text } from "@language/text.ts";
import { Alert, BodyLong } from "@navikt/ds-react";
import styles from "./Error.module.css";

const ErrorAlert = () => {
  return (
    <Alert className={styles.error} variant="error">
      <BodyLong>{text.errorHeading[DOCUMENT_LOCALE]}</BodyLong>
    </Alert>
  );
};

export default ErrorAlert;
