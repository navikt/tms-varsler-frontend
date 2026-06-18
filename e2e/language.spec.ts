import { expect, test } from "@playwright/test";
import { VarslerPage } from "./pages/varsler.page";

test.describe("Språkstøtte", () => {
  test("viser engelsk innhold på /en", async ({ page }) => {
    const varsler = new VarslerPage(page, "en");
    await varsler.goto();

    await expect(varsler.heading).toHaveText("Notifications");
    await expect(
      page.getByText(
        "Here you can find new and previous notifications from Nav",
        { exact: false },
      ),
    ).toBeVisible();
  });

  test("viser nynorsk innhold på /nn", async ({ page }) => {
    const varsler = new VarslerPage(page, "nn");
    await varsler.goto();

    await expect(varsler.heading).toHaveText("Varslar");
  });
});
