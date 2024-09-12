import {Chips, Search} from "@navikt/ds-react";
import {text} from "@language/text.ts";
import {$showTidligere} from "@src/store/store.ts";
import {useStore} from '@nanostores/react';
import {DOCUMENT_LOCALE} from "@language/Language.ts";

const toggleOptions = [text.filterAlle[DOCUMENT_LOCALE], text.filterOppgaver[DOCUMENT_LOCALE], text.filterBeskjeder[DOCUMENT_LOCALE]]
export const VarselFilter = ({}) => {

    const isTidligereView: boolean = useStore($showTidligere)

    if (!isTidligereView) {
        return null
    }

    return (
        <div>
            <Search hideLabel={false} label="Søk alle NAV sine sider" variant="simple"/>
            <Chips>
                {toggleOptions.map((label) => (
                    <Chips.Toggle
                        checkmark={false}
                        key={label}
                    >
                        {label}
                    </Chips.Toggle>
                ))}
            </Chips>
        </div>

    )
}