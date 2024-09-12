import {atom, type PreinitializedWritableAtom} from 'nanostores';

export const TIDLIGERE_HASH = "#tidligere"
export const $showTidligere: PreinitializedWritableAtom<boolean>   = atom(window.location.hash === TIDLIGERE_HASH);
