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

  test("Add Admin User", async () => {
    await page.getByRole("link", { name: "Admin" }).click();
    await page.locator("//button[normalize-space()='Add']").click();
    await page.getByText("-- Select --").first().click();
    await page.getByRole("option", { name: "Admin" }).click();
    await page.getByPlaceholder("Type for hints...").click();
    await page.getByPlaceholder("Type for hints...").fill("a");
    await page.getByRole("option", { name: "Odis Adalwin" }).click();
    await page.getByText("-- Select --").click();
    await page.getByText("Enabled").click();
    await page.getByRole("textbox").nth(2).click();
    await page.getByRole("textbox").nth(2).fill("minhadmin");
    await page.getByRole("textbox").nth(3).click();
    await page.getByRole("textbox").nth(3).fill("a123456");
    await page.getByRole("textbox").nth(4).click();
    await page.getByRole("textbox").nth(4).fill("a123456");
    await page.getByRole("button", { name: "Save" }).click();
    await page.waitForTimeout(3000);
    await expect(page.locator("xpath=//div[text()='minhadmin']")).toBeVisible();
    await expect(page.locator("xpath=//div[text()='minhadmin']/parent::div/following-sibling::div/div[text()='Admin']")).toBeVisible();
  });


  test.afterAll(async () => {
    await page.locator("xpath=//span[@class='oxd-userdropdown-tab']").click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
  });


});
