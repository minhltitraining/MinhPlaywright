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

  test("Delete user", async () => {
    await page.getByRole("link", { name: "Admin" }).click();
    await page.locator("xpath=//div[text()='minhadmin1']/parent::div/parent::div/div[6]/div/button[1]").click();
    await page.getByRole('button', { name: ' Yes, Delete' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('minhadmin1');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.locator("xpath=//div[@class='oxd-toast-container oxd-toast-container--bottom']")).toBeVisible();
  });


  test.afterAll(async () => {
    await page.locator("xpath=//span[@class='oxd-userdropdown-tab']").click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
  });


});
