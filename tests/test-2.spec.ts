import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:4173/");
  await page.getByRole("main").getByRole("link", { name: "Movies" }).click();
  await expect(page.getByRole("heading", { name: "Movies" })).toBeVisible();

  await page.getByRole("link", { name: "Books" }).click();
  await expect(page.getByRole("heading", { name: "Books" })).toBeVisible();

  await page.getByRole("link", { name: "Characters" }).click();
  await expect(page.getByRole("heading", { name: "Characters" })).toBeVisible();

  await page.goto("http://localhost:4173/characters");
  await page.getByRole("link", { name: "Spells" }).click();
  await expect(page.getByRole("heading", { name: "Spell" })).toBeVisible();

  await page.getByRole("link", { name: "Potions" }).click();
  await expect(page.getByRole("heading", { name: "potions" })).toBeVisible();
});
