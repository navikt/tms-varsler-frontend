import { expect, test } from "@playwright/test";
import { VarslerPage } from "./pages/varsler.page";

test.describe("Varsler-forsiden", () => {
  test("viser hovedoverskrift", async ({ page }) => {
    const varsler = new VarslerPage(page);
    await varsler.goto();

    await expect(varsler.heading).toHaveText("Varsler");
  });

  test("viser brødsmulesti til Min side", async ({ page }) => {
    const varsler = new VarslerPage(page);
    await varsler.goto();

    await expect(varsler.breadcrumb.getByRole("link", { name: "Min side" })).toBeVisible();
  });

  test("viser ingressteksten", async ({ page }) => {
    const varsler = new VarslerPage(page);
    await varsler.goto();

    await expect(
      page.getByText("Her finner du nye og tidligere varsler fra Nav", {
        exact: false,
      }),
    ).toBeVisible();
  });

  test("viser nye varsler fra api-et", async ({ page }) => {
    const varsler = new VarslerPage(page);
    await varsler.goto();

    await expect(varsler.varselLink("You have one unread message in your inbox")).toBeVisible({ timeout: 20_000 });
  });

  test("viser sikkerhetsnivå-varsel når bruker har maskerte varsler", async ({ page }) => {
    const varsler = new VarslerPage(page);
    await varsler.goto();

    await expect(page.getByText("Du har logget inn med Min ID", { exact: false })).toBeVisible({ timeout: 20_000 });
  });
});

test.describe("Tidligere varsler", () => {
  test("bytter til tidligere-visning og viser søkefelt", async ({ page }) => {
    const varsler = new VarslerPage(page);
    await varsler.goto();

    await varsler.showTidligere();

    await expect(varsler.searchField()).toBeVisible();
  });

  test("viser tidligere varsler fra api-et", async ({ page }) => {
    const varsler = new VarslerPage(page);
    await varsler.goto();

    await varsler.showTidligere();

    await expect(varsler.varselLink(/Svar fra veilederen din i innboksen/)).toBeVisible({ timeout: 20_000 });
  });
});
