import styles from './NoVarselMessage.module.css';
import {BodyShort, Heading} from "@navikt/ds-react";
import {$showTidligere} from "@src/store/store.ts";
import {useStore} from "@nanostores/react";
import {DOCUMENT_LOCALE} from "@language/language.ts";
import {text} from "@language/text.ts";

export const NoVarselMessage = () => {
    const isTidligereView = useStore($showTidligere)
    const title = isTidligereView ? text.noInaktiveVarselerTitle[DOCUMENT_LOCALE] : text.noInaktiveVarselerTitle[DOCUMENT_LOCALE]
    const description = isTidligereView ? text.noInaktiveVarselerDescription[DOCUMENT_LOCALE] : text.noInaktiveVarselerDescription[DOCUMENT_LOCALE]

    return (
        <div className={styles.noVarselMessage}>
            <Heading  className={styles.title} size={"small"} level={"2"}>{title}</Heading>
            <BodyShort className={styles.description}>{description}</BodyShort>
        </div>
    );
};