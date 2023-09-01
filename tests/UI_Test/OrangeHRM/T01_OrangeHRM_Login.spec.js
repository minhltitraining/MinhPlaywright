const { test, expect } = require('@playwright/test');

test('OrangeHRM_Login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  await page.locator("xpath=//span[@class='oxd-userdropdown-tab']").click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});