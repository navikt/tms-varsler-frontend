export enum Language {
    en = "English",
    nb = "Norsk bokmål",
    nn = "Norsk nynorsk",
}

export type Locale = keyof typeof Language
