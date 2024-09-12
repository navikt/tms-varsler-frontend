import {$showTidligere, TIDLIGERE_HASH} from "@src/store/store.ts";


export const setViewToTidligere = () => {
    window.location.hash = TIDLIGERE_HASH;
    $showTidligere.set(true)
}

export const setViewToNye = () => {
    history.replaceState(null, "", window.location.pathname);
    $showTidligere.set(false)
}