import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

test("supports the mobile navigation, class controls, and BMI workflow by keyboard", async ({ page }) => {
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Toggle navigation" });
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Classes", exact: true })
    .click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");

  const groupButton = page.getByRole("button", { name: "Group", exact: true });
  await groupButton.focus();
  await page.keyboard.press("Enter");
  await expect(groupButton).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("heading", { name: "Group Sessions" })).toBeVisible();

  const soloButton = page.getByRole("button", { name: "Solo", exact: true });
  await soloButton.focus();
  await page.keyboard.press("Space");
  await expect(soloButton).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("heading", { name: "Solo Practice" })).toBeVisible();

  const weight = page.getByRole("spinbutton", { name: "Weight (kg):" });
  await weight.focus();
  await page.keyboard.type("75");
  const height = page.getByRole("spinbutton", { name: "Height (cm):" });
  await height.focus();
  await page.keyboard.type("180");

  const result = page.getByRole("status");
  await expect(result).toHaveText(
    "Your BMI is 23.1, which is classified as Healthy weight.",
  );
  const markerPosition = await page.locator(".bmi-chart").evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).getPropertyValue("--arrow-position")),
  );
  expect(markerPosition).toBeGreaterThan(100 / 6);
  expect(markerPosition).toBeLessThan(200 / 6);

  const fitsViewport = await page.evaluate(
    () => document.documentElement.scrollWidth <= window.innerWidth,
  );
  expect(fitsViewport).toBe(true);
});
