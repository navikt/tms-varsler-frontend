import styles from './NoVarselMessage.module.css';
import {BodyShort, Heading} from "@navikt/ds-react";
import {DOCUMENT_LOCALE} from "@language/language.ts";
import {text} from "@language/text.ts";
import Error from "@components/error/Error.tsx";
import {useStore} from "@nanostores/react";
import {$isError} from "@src/store/store.ts";

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
    const isError = useStore($isError);

    return (
        <div className={styles.noVarselMessage}>
            {isError && <Error />}
            <Heading className={styles.title} size={"small"} level={"2"}>{title}</Heading>
            <BodyShort className={styles.description}>{description}</BodyShort>
        </div>
    );
};