import {Language, type Locale} from './Language';

export function getLanguage(): Locale {
    const pathSegments = window.location.pathname.split('/');
    const local = pathSegments[3];

    if(local in Language){
        return local as Locale;
    }
    return  "nb"; // Default language
}