import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { VarslerPage } from "./pages/varsler.page";

// Axe scopes til #maincontent slik at vi tester appens eget innhold og
// ikke den delte dekoratøren (header/footer), som er utenfor vår kontroll.
test.describe("Tilgjengelighet (a11y)", () => {
  test("forsiden har ingen WCAG-brudd", async ({ page }) => {
    const varsler = new VarslerPage(page);
    await varsler.goto();
    await expect(varsler.varselLink("You have one unread message in your inbox")).toBeVisible({ timeout: 20_000 });

    const results = await new AxeBuilder({ page })
      .include("#maincontent")
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test("404-siden har ingen WCAG-brudd", async ({ page }) => {
    await page.goto("/minside/varsler/finnes/ikke");
    await expect(page.locator("#maincontent").getByRole("heading", { level: 1 })).toBeVisible();

    const results = await new AxeBuilder({ page })
      .include("#maincontent")
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
});
