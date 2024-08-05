import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Movies" })
    .click();
  await expect(page.getByRole("heading", { name: "Movies" })).toBeVisible();
});
