export const dynamicText = {
    tidligereVarslerHeading: {
        nb: (occurredCount: number, totalCount: number) => `Viser ${occurredCount} av ${totalCount} tidligere varsler`,
        en: (occurredCount: number, totalCount: number) => `Showing ${occurredCount} of ${totalCount} previous notifications`,
        nn: (occurredCount: number, totalCount: number) => `Viser ${occurredCount} av ${totalCount} tidlegare varsel`,
    },
    notificationChannel: (kanaler: string[]) => ({
        nb: `Varslet via ${kanaler.join(" og ")}`,
        en: `Notified via ${kanaler.join(" and ")}`,
        nn: `Varsla via ${kanaler.join(" og ")}`,
    }),
}

export const text = {
    hovedoverskrift: {
        nb: "Varseler",
        en: "Notifications",
        nn: "Varslar",
    },
    newToggle: {
        nb: "Nye ",
        en: "New ",
        nn: "Nye ",
    },
    previousToggle: {
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
        nb: "Vi har for øyeblikket tekniske problemer. Dette kan føre til at du ikke får opp alle dine varsler. Vennligst prøv igjen senere.",
        en: "We are currently experiencing technical issues. This may prevent you from seeing all your notifications. Please try again later.",
        nn: "Vi har for øyeblikket tekniske problem. Dette kan føre til at du ikkje får opp alle dine varsel. Ver venleg og prøv igjen seinare.",
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
    noAktiveVarselerTitle: {
        nb: "Ingen nye varsler",
        nn: "Ingen nye varsel",
        en: "No new notifications",
    },
    noAktiveVarselerDescription: {
        nb: "Vi varsler deg når noe skjer",
        nn: "Vi varslar deg når noko skjer",
        en: "We will notify you when something happens",
    },
    noInaktiveVarselerTitle: {
        nb: "Ingen tidligere varsler",
        nn: "Ingen tidlegare varsel",
        en: "No previous notifications",
    },
    noInaktiveVarselerDescription: {
        nb: "Når du har gjort en oppgave eller lest en beskjed havner de her.",
        nn: "Når du har gjort en oppgåve eller lest en beskjed havnar dei her.",
        en: "When you have completed a task or read a message, it will appear here.",
    },
    noSearchResultTitle: {
        nb: "Ingen resultater",
        nn: "Ingen resultat",
        en: "No results",
    },
    noSearchResultDescription: {
        nb: "Sjekk om du har skrevet feil eller prøv med et annet søkeord",
        nn: "Sjekk om du har skrive feil eller prøv med eit anna søkeord",
        en: "Check if you have written incorrectly or try another search term",
    },
    loadingMessage: {
        nb: "Henter innhold ...",
        nn: "Hentar innhald ...",
        en: "Loading content ...",
    },
    searchLabel: {
        nb: "Søk i dine tidligere varsler",
        nn: "Søk i dine tidlegare varsel",
        en: "Search in your previous notifications",
    },
    sms: {
        nb: "SMS",
        nn: "SMS",
        en: "SMS",
    },
    epost: {
        nb: "e-post",
        nn: "e-post",
        en: "e-mail",
    }
} as const;