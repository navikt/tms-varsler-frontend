import {ChatElipsisIcon, ClipboardIcon} from "@navikt/aksel-icons";
import {VarselType} from "@src/customTypes/Varsel.ts";


export const VarselCardIcon = ({varselType}: { varselType: VarselType }) =>
    varselType === VarselType.OPPGAVE ?
        <ClipboardIcon aria-hidden={true} width="20px" height="20px"/> :
        <ChatElipsisIcon aria-hidden={true} width="20px" height="20px"/>
