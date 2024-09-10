import {Chips, Search} from "@navikt/ds-react";
import {text} from "@language/text.ts";

const language = "nb"
const toggleOptions = [text.filterAlle[language], text.filterOppgaver[language], text.filterBeskjeder[language]]


export const VarselFilter  = ({}) => {
    return (
        <div>
            <Search hideLabel={false} label="Søk alle NAV sine sider" variant="simple"/>
            <Chips>
                {toggleOptions.map((label, id) => (
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