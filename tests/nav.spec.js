import { test, expect } from "@playwright/test";

test.describe("venue navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should navigate to venues page", async ({ page }) => {
    await expect(page.locator("#venue-container a").first()).toBeVisible();
    await page.locator("#venue-container a").first().click();

    await expect(page).toHaveURL(/.*\/venue\//);
    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
