import { test, expect} from '@playwright/test';

test('Interacting with reviews', async ({page}) => {
    await page.goto("http://localhost:3000");

    await page.click ('text=England');

    await expect (page.locator('.reviews_reviewExample__qS2k5')).toBeVisible();

});


test('should open nav menu and follow links', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const nav = page.locator('nav');
    await expect(nav).toHaveClass(/hide/);
    await page.click('button');
    await expect(nav).toHaveClass(/show/);
    await page.click('text=Meet The Founders 👥');
    await expect(page).toHaveURL('http://localhost:3000/founders');
    await page.goBack();
    await expect(nav).toHaveClass(/hide/);
    await page.click('button');
    await expect(nav).toHaveClass(/show/);
    await page.click('text=Book Consultation 📝');
    await expect(page).toHaveURL('http://localhost:3000/consultation');
  });