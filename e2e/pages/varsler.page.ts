import { expect, type Locator, type Page } from "@playwright/test";

type Locale = "nb" | "en" | "nn";

const BASE_PATH = "/minside/varsler";

// nb er standardspråk uten prefiks; en og nn har språkprefiks i URL-en.
const pathForLocale = (locale: Locale): string =>
  locale === "nb" ? BASE_PATH : `${BASE_PATH}/${locale}`;

export class VarslerPage {
  readonly main: Locator;
  readonly heading: Locator;
  readonly breadcrumb: Locator;

  constructor(
    private readonly page: Page,
    private readonly locale: Locale = "nb",
  ) {
    // Selektorene scopes til appens eget innhold, ikke dekoratøren.
    this.main = page.locator("#maincontent");
    this.heading = this.main.getByRole("heading", { level: 1 });
    this.breadcrumb = this.main.getByRole("navigation", { name: "Du er her" });
  }

  async goto(): Promise<void> {
    await this.page.goto(pathForLocale(this.locale));
    await expect(this.heading).toBeVisible();
  }

  varselLink(name: string | RegExp): Locator {
    return this.main.getByRole("link", { name }).first();
  }

  async showTidligere(): Promise<void> {
    await this.main
      .getByRole("radio", { name: /tidligere|previous|tidlegare/i })
      .click();
  }

  searchField(): Locator {
    return this.main.getByRole("searchbox", {
      name: /Søk i dine|Search in your/i,
    });
  }
}
