import type {InaktiveVarsler, InaktivVarsel, Varsel} from "@src/customTypes/Varsel.ts";
import dayjs from "dayjs";

const sortVarsler = (varsler: InaktiveVarsler | Varsel[]) =>
    varsler.sort((a: Varsel | InaktivVarsel, b: Varsel | InaktivVarsel) => dayjs(b.forstBehandlet).valueOf() - dayjs(a.forstBehandlet).valueOf());

export default sortVarsler;