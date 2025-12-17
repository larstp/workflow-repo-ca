import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("The user can log in", async ({ page }) => {
    await page.goto("/login");
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("Wrong password shows error", async ({ page }) => {
    await page.goto("/login");
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("ohboyilikeerrors");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
