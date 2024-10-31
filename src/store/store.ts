import {atom, type PreinitializedWritableAtom} from 'nanostores';
import type {ToggleOptions} from "@components/PageHeader/Filter/Filter.tsx";
import type {AktiveVarsler, InaktiveVarsler, InaktivVarsel, Varsel} from "@src/customTypes/Varsel.ts";
import sortVarsler from "@src/utils/client/sortVarsler.ts";

export const TIDLIGERE_HASH = "#tidligere"
export const $showTidligere: PreinitializedWritableAtom<boolean> = atom(window.location.hash === TIDLIGERE_HASH);

export const $filterSearch: PreinitializedWritableAtom<string> = atom("");
export const $filterVarselType: PreinitializedWritableAtom<ToggleOptions> = atom("alle");
export const setFilterSearch = (search: string) => {
    $filterSearch.set(search)
}

export const $aktiveVarsler: PreinitializedWritableAtom<AktiveVarsler> = atom({beskjeder: [], oppgaver: []});
export const $inaktiveVarsler: PreinitializedWritableAtom<InaktiveVarsler> = atom([]);

export const $isError: PreinitializedWritableAtom<boolean> = atom(false);
export const setError = () => {
    $isError.set(true)
}


export const setAktiveVarsler = (varsler: AktiveVarsler) => {
    $aktiveVarsler.set({beskjeder: sortVarsler(varsler.beskjeder), oppgaver: sortVarsler(varsler.oppgaver)})
}
export const setInaktiveVarsler = (inaktiveVarsler: InaktiveVarsler) => {
    $inaktiveVarsler.set(sortVarsler(inaktiveVarsler) as InaktiveVarsler)
}

export const arkiverVarsel = (id: string) => {
    const inaktive = $inaktiveVarsler.get()
    const aktive = $aktiveVarsler.get()
    const varselToArkiver = aktive.beskjeder.find((v: Varsel) => v.id === id)
    if (varselToArkiver) {
        const inaktivVarsel: InaktivVarsel = {...varselToArkiver, type: "beskjed"}
        setInaktiveVarsler([...inaktive, inaktivVarsel])
        setAktiveVarsler({beskjeder: aktive.beskjeder.filter((v: Varsel) => v.id !== id), oppgaver: aktive.oppgaver})
    }
}
