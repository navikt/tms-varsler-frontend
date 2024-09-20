import styles from './NoVarselMessage.module.css';
import {KattBjellehat} from "@svg/KattBjellehat.tsx";
import {BodyShort, Heading} from "@navikt/ds-react";
import {$showTidligere} from "@src/store/store.ts";
import {useStore} from "@nanostores/react";
import {DOCUMENT_LOCALE} from "@language/Language.ts";
import {text} from "@language/text.ts";

export const NoVarselMessage = () => {
    const isTidligereView = useStore($showTidligere)
    const title = isTidligereView ? text.noInaktiveVarselerMessageTitle[DOCUMENT_LOCALE] : text.noAktiveVarselerMessageTitle[DOCUMENT_LOCALE]

    return (
        <div className={styles.noVarselMessage}>
            <KattBjellehat/>
            <Heading  className={styles.title} size={"small"} level={"2"}>{title}</Heading>
            {!isTidligereView && <BodyShort className={styles.text}>{text.noAktiveVarselerMessageText[DOCUMENT_LOCALE]}</BodyShort>}
        </div>
    );
};