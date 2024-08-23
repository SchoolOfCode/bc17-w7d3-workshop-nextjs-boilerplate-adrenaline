import { test, expect} from '@playwright/test';

test('Interacting with reviews', async ({page}) => {
    await page.goto("http://localhost:3000");

    await page.click ('text=England');

    await expect (page.locator('.reviews_reviewExample__qS2k5')).toBeVisible();

});