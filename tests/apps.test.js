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


  test('Form success test', async ({ page }) => {

    await page.goto('http://localhost:3000/consultation');
  
    await page.getByLabel('Full Name').click();
    await page.getByLabel('Full Name').fill('Peppa Pig');
  
    await page.getByLabel('Postcode').click();
    await page.getByLabel('Postcode').fill('PE666PA');
  
    await page.getByLabel('House/Flat Number and Street').click();
    await page.getByLabel('House/Flat Number and Street').fill('7 Piglet Drive');
  
    await page.getByLabel('City').click();
    await page.getByLabel('City').fill('Piggy Town');
  
    await page.getByLabel('Phone number').click();
    await page.getByLabel('Phone number').fill('66666666666');
  
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('email@email.com');
  
    await page.getByRole('button', { name: 'Request Design Consultation' }).click();
  
    await page.locator('div').filter({ hasText: 'Form submitted successfully!' }).nth(1).click();
    
    await page.getByRole('link', { name: 'Return to the Homepage' }).click();
  });