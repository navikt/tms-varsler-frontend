import styles from './NoVarselMessage.module.css';
import {BodyShort, Heading} from "@navikt/ds-react";
import {DOCUMENT_LOCALE} from "@language/language.ts";
import {text} from "@language/text.ts";

const contentMapper = {
    "noInaktiveVarseler": {
        title: text.noInaktiveVarselerTitle[DOCUMENT_LOCALE],
        description: text.noInaktiveVarselerDescription[DOCUMENT_LOCALE]
    },
    "noAktiveVarseler": {
        title: text.noAktiveVarselerTitle[DOCUMENT_LOCALE],
        description: text.noAktiveVarselerDescription[DOCUMENT_LOCALE]
    },
    "noSearchResult": {
        title: text.noSearchResultTitle[DOCUMENT_LOCALE],
        description: text.noSearchResultDescription[DOCUMENT_LOCALE]
    }
} as const


export const NoVarselMessage = ({type}: { type: keyof typeof contentMapper }) => {
    const title = contentMapper[type].title;
    const description = contentMapper[type].description;

    return (
        <div className={styles.noVarselMessage}>
            <Heading className={styles.title} size={"small"} level={"2"}>{title}</Heading>
            <BodyShort className={styles.description}>{description}</BodyShort>
        </div>
    );
};