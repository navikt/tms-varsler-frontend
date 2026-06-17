import "@testing-library/jest-dom/vitest";

// DOCUMENT_LOCALE leses fra <html lang> når language.ts importeres.
// jsdom har tom lang som standard, så vi setter nb for komponenttestene.
document.documentElement.lang = "nb";
