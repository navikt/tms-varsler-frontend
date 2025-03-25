export const dynamicText = {
  tidligereVarslerHeading: {
    nb: (occurredCount: number, totalCount: number) =>
      `Viser ${occurredCount} av ${totalCount} tidligere varsler`,
    en: (occurredCount: number, totalCount: number) =>
      `Showing ${occurredCount} of ${totalCount} previous notifications`,
    nn: (occurredCount: number, totalCount: number) =>
      `Viser ${occurredCount} av ${totalCount} tidlegare varsel`,
  },
  notificationChannel: (kanaler: string[], locale: "nb" | "nn" | "en") => {
    const transaltedChannels = kanaler.map((kanal) =>
      kanal === "SMS" ? text.SMS[locale] : text.EPOST[locale],
    );

    return {
      nb: `Varslet via ${transaltedChannels.join(" og ")}`,
      en: `Notified via ${transaltedChannels.join(" and ")}`,
      nn: `Varsla via ${transaltedChannels.join(" og ")}`,
    };
  },
};

export const text = {
  hovedoverskrift: {
    nb: "Varsler",
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
  noAktiveVarslerTitle: {
    nb: "Ingen nye varsler",
    nn: "Ingen nye varsel",
    en: "No new notifications",
  },
  noAktiveVarslerDescription: {
    nb: "Vi varsler deg når noe skjer",
    nn: "Vi varslar deg når noko skjer",
    en: "We will notify you when something happens",
  },
  noInaktiveVarslerTitle: {
    nb: "Ingen tidligere varsler",
    nn: "Ingen tidlegare varsel",
    en: "No previous notifications",
  },
  noInaktiveVarslerDescription: {
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
    nb: "Henter dine varsler ...",
    nn: "Hentar varslane dine ...",
    en: "Loading your notifications ...",
  },
  searchLabel: {
    nb: "Søk i dine tidligere varsler",
    nn: "Søk i dine tidlegare varsel",
    en: "Search in your previous notifications",
  },
  SMS: {
    nb: "SMS",
    nn: "SMS",
    en: "SMS",
  },
  EPOST: {
    nb: "e-post",
    nn: "e-post",
    en: "e-mail",
  },
  markAsRead: {
    nb: "Merk som lest",
    nn: "Merk som lese",
    en: "Mark as read",
  },
  insufficientLoggingLevelAlert: {
    nb: "Du har logget inn med Min ID. For å se innholdet i alle dine varsler ",
    nn: "Du har logga inn med Min ID. For å sjå innhaldet i alle dine varsel ",
    en: "You have logged in with Min ID. To see the content of all your notifications ",
  },
  insufficientLoggingLevelAlertLink: {
    nb: " logg inn med BankID, Buypass eller Commfides.",
    nn: " logg inn med BankID, Buypass eller Commfides.",
    en: " log in with BankID, Buypass or Commfides.",
  },
  maskedVarselText: {
    nb: "Du har fått en melding, logg inn med høyere sikkerhetsnivå for å se meldingen.",
    nn: "Du har fått ei melding, logg inn med høgare sikkerheitsnivå for å sjå meldinga.",
    en: "You have received a message, log in with a higher security level to see the message.",
  },
  usefulToKnow: {
    nb: "Nyttig å vite",
    nn: "Nyttig å vite",
    en: "Useful to know",
  },
  notificationsFromLastYear: {
    nb: "Her viser vi tidligere varsler kun fra det siste året.",
    nn: "Her viser vi tidlegare varsel kun frå det siste året.",
    en: "Here we only show previous notifications from the last year.",
  },
} as const;
