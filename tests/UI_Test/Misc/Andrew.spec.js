const { test, expect } = require("@playwright/test");

test('test', async ({ page }) => {
    let yuri = "Yuri";
    let found = false;
    let pageNum = 2;
    let nameList;
  await page.goto('https://datatables.net/examples/data_sources/server_side');
  
  while(!found){
    page.waitForTimeout(2000);
    nameList = await(page.locator("//table[@id='example']/tbody/tr/td[1]").allTextContents());
    console.log(nameList);
    for(const name of nameList){
        if(name === yuri){
            page.getByRole('cell', { name: 'Yuri' }).click();
            found = true;
            break;
        }
      }
      console.log(pageNum);
      if(!found && page.getByRole('link', { name: pageNum + 1 }).isVisible()){
        await page.getByRole('link', { name: pageNum++ }).click();
        page.waitForTimeout(4000);
      }
  }
});