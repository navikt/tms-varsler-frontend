import type {Locale} from "@language/Language.ts";

type Text = {
    [key: string]: {
        [lang in Locale]: string;
    };
};

export const text: Text = {
    hovedoverskrift: {
        nb: "Varseler",
        en: "Notifications",
        nn: "Varslar",
    },
    newToggle:{
        nb: "Nye ",
        en: "New ",
        nn: "Nye ",
    },
    previousToggle:{
        nb: "Tidligere",
        en: "Previous",
        nn: "Tidlegare",
    },
    emptyKitten: {
        nb: "En svart katt som gjemmer seg bak ett papirark",
        en: "A black cat hiding behind a piece of paper",
        nn: "En svart katt som gjemmer seg bak ett papirark",
    },
    noNewNotifications: {
        nb: "Ingen nye varsler",
        en: "No new notifications",
        nn: "Ingen nye varsel",
    },
    noNewNotificationsIngress: {
        nb: "Vi varsler deg når noe skjer",
        en: "We will notify you when something happens",
        nn: "Vi varslar deg når noko skjer",
    },
    loading: {
        nb: "Henter innhold ...",
        en: "Loading content ...",
        nn: "Hentar innhald ...",
    },
    errorHeading: {
        nb: "Oisann, noe gikk galt!",
        en: "Oups, something went wrong!",
        nn: "Oisann, noko gjekk gale",
    },
    errorText: {
        nb: "Vi fant dessverre ikke det du lette etter",
        en: "We couldn't find the content you were looking for",
        nn: "Vi fann dessverre ikkje det du leita etter",
    },
    errorHelp: {
        nb: "Prøv igjen senere eller gå til ",
        en: "Try again later or go to ",
        nn: "Prøv igjen seinare eller gå til ",
    },
    errorKitten: {
        nb: "En svart katt som har forsøkt å hoppe inn i en boks med hodet først men satt seg fast slik at bare føttene og halen stikker opp",
        en: "A black cat that has attempted to jump into a box head first but the box was too smal so that her feet ant tail is up in the air",
        nn: "En svart katt som har forsøkt å hoppe inn i en boks med hodet først men satt seg fast slik at bare føttene og halen stikker opp",
    },
    minSide: {
        nb: "Min side",
        en: "My Page",
        nn: "Mi side",
    },
    and: {
        nb: "og",
        nn: "og",
        en: "and",
    },
    filterAlle: {
        nb: "Alle",
        nn: "Alle",
        en: "All",
    },
    filterOppgaver: {
        nb: "Oppgaver",
        nn: "Oppgåver",
        en: "Tasks",
    },
    filterBeskjeder: {
        nb: "Beskjeder",
        nn: "Beskjedar",
        en: "Messages",
    },
};