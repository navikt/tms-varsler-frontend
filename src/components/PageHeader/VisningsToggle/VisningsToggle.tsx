import {ToggleGroup} from "@navikt/ds-react";
import styles from "./VisningsToggle.module.css"
import {getLanguage} from "../../../language/getLanguage.ts";
import {text} from "@language/text.ts";

export const VisningsToggle = () => {
    const language = getLanguage()

    return (
        <ToggleGroup className={styles.toggleGroup} defaultValue="nye" size="medium" onChange={console.log} >
            <ToggleGroup.Item value="nye" label={text.newToggle[language]} />
            <ToggleGroup.Item value="tidligere" label={text.previousToggle[language]} />
        </ToggleGroup>)
}