import {Alert, BodyLong} from "@navikt/ds-react";
import {text} from "@language/text.ts";
import {DOCUMENT_LOCALE} from "@language/language.ts";
import {useStore} from "@nanostores/react";
import {$isError} from "@src/store/store.ts";
import styles from "./Error.module.css";


const Error = () => {
    const isError = useStore($isError);
    if(!isError) return null;

    return (
        <Alert className={styles.error} variant="error">
            <BodyLong>{text.errorHeading[DOCUMENT_LOCALE]}</BodyLong>
        </Alert>
    )
}

export default Error;