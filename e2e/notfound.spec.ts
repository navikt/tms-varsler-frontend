import { expect, test } from "@playwright/test";

// Catch-all-ruten [locals] fanger ett-segments-stier, så en ukjent side
// må ha flere segmenter for å treffe 404-siden.
const UNKNOWN_PATH = "/minside/varsler/finnes/ikke";

test.describe("404-siden", () => {
  test("viser feiloverskrift for en ukjent side", async ({ page }) => {
    await page.goto(UNKNOWN_PATH);

    await expect(page.locator("#maincontent").getByRole("heading", { level: 1 })).toHaveText(
      "Beklager, vi fant ikke siden",
    );
  });

  test("viser lenker tilbake til Min side og dine varsler", async ({ page }) => {
    await page.goto(UNKNOWN_PATH);
    const main = page.locator("#maincontent");

    await expect(main.getByRole("link", { name: "Gå til Min side" })).toBeVisible();
    await expect(main.getByRole("button", { name: /Gå til dine varsler/ })).toBeVisible();
  });
});
