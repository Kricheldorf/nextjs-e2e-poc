import { expect } from "@playwright/test";
import { Given, When, Then } from "./fixtures";

Given('I am on the homepage', async ({ page }) => {
    await page.goto('/');
});

When('I click on the {string} link', async ({ page }, linkText: string) => {
    await page.click(`text=${linkText}`);
});

Then('I should see the {string} page', async ({ page }, pageTitle: string) => {
    await expect(page).toHaveURL(`/${pageTitle.toLowerCase()}`);
    await expect(page.locator("h1")).toContainText(pageTitle);
});


