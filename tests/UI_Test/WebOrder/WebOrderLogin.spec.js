const { test, expect } = require ('@playwright/test');

test('WebOrder_Login', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');
  await page.getByLabel('Username:').fill('Tester');
  await page.getByLabel('Password:').fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx");
  await page.url().includes("/default.aspx");
  await page.getByRole('link', { name: 'Logout' }).click();
});