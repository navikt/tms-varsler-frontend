import {atom, type PreinitializedWritableAtom} from 'nanostores';
import type {ToggleOptions} from "@components/PageHeader/Filter/Filter.tsx";
import type {InaktiveVarsler, InaktivVarsel, Varsel, VarselResponse} from "@src/customTypes/Varsel.ts";

export const TIDLIGERE_HASH = "#tidligere"
export const $showTidligere: PreinitializedWritableAtom<boolean> = atom(window.location.hash === TIDLIGERE_HASH);

export const $filterSearch: PreinitializedWritableAtom<string> = atom("");
export const $filterVarselType: PreinitializedWritableAtom<ToggleOptions> = atom("alle");
export const setFilterSearch = (search: string) => {
    $filterSearch.set(search)
}

export const $aktiveBeskjeder: PreinitializedWritableAtom<Varsel[]> = atom([]);
export const $aktiveOppgaver: PreinitializedWritableAtom<Varsel[]> = atom([]);
export const $inaktiveVarsler: PreinitializedWritableAtom<InaktiveVarsler> = atom([]);

export const $isError: PreinitializedWritableAtom<boolean> = atom(false);
export const setError = () => {
    $isError.set(true)
}


const setAktiveBeskjeder = (beskjeder: Varsel[]) => {
    $aktiveBeskjeder.set(beskjeder)
}
const setAktiveOppgaver = (oppgaver: Varsel[]) => {
    $aktiveOppgaver.set(oppgaver)
}
const setInaktiveVarsler = (varsler: InaktiveVarsler) => {
    $inaktiveVarsler.set(varsler)
}

const $hasInitializedVarseler: PreinitializedWritableAtom<boolean> = atom(false);
export const initVarsler = (varselResponse : VarselResponse) => {
    if(!$hasInitializedVarseler.get()) {
        setInaktiveVarsler(varselResponse.inaktive)
        setAktiveBeskjeder(varselResponse.aktive.beskjeder)
        setAktiveOppgaver(varselResponse.aktive.oppgaver)
        $hasInitializedVarseler.set(true)
    }
}

export const inaktiverBeskjed = (id: string) => {
    const inaktive = $inaktiveVarsler.get()
    const aktive = $aktiveBeskjeder.get()
    const varselToInaktiver = aktive.find((v: Varsel) => v.id === id)

    if (varselToInaktiver) {
        const varselToInactivate: InaktivVarsel = {...varselToInaktiver, isInaktiverbar:false, type: "beskjed"}
        setInaktiveVarsler([...inaktive, varselToInactivate])
        setAktiveBeskjeder(aktive.filter((v: Varsel) => v.id !== id))
    }
}
