import { expect, test } from "@playwright/test";
import { VarslerPage } from "./pages/varsler.page";

test.describe("Responsivt design", () => {
  test("viser forsiden på mobil viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    const varsler = new VarslerPage(page);
    await varsler.goto();

    await expect(varsler.heading).toBeVisible();
    await expect(
      varsler.varselLink("You have one unread message in your inbox"),
    ).toBeVisible({ timeout: 20_000 });
  });

  test("viser forsiden på desktop viewport", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });

    const varsler = new VarslerPage(page);
    await varsler.goto();

    await expect(varsler.heading).toBeVisible();
    await expect(
      varsler.varselLink("You have one unread message in your inbox"),
    ).toBeVisible({ timeout: 20_000 });
  });
});
