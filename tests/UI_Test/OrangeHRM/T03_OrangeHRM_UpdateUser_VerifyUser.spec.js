const { test, expect } = require("@playwright/test");

test.describe("OrangeHRM", () => {
  let page;
  let newAdminUsername = "minhadmin";
  let newAdminPassword = "a123456";

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
  });

  test("Change Admin to ESS", async () => {
    await page.getByRole("link", { name: "Admin" }).click();
    await page.locator("xpath=//div[text()='minhadmin']/parent::div/parent::div/div[6]/div/button[2]").click();
    await page.locator('form i').first().click();
    await page.getByText('ESS').click();
    await page.locator('form i').nth(1).click();
    await page.getByText('Disabled').click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('minhadmin1');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(3000);
    await expect(page.locator("xpath=//div[text()='minhadmin1']")).toBeVisible();
    await expect(page.locator("xpath=//div[text()='minhadmin1']/parent::div/following-sibling::div/div[text()='ESS']")).toBeVisible();
    await expect(page.locator("xpath=//div[text()='minhadmin1']/parent::div/parent::div/div[5]/div[text()='Disabled']")).toBeVisible();
  });


  test.afterAll(async () => {
    await page.locator("xpath=//span[@class='oxd-userdropdown-tab']").click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
  });


});
