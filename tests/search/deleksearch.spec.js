const { test, expect } = require('@playwright/test');


// Navigate to DelekHomes homepage
test.beforeEach(async function   ({ page }){
    await page.goto('https://qa.delekhomes.com/'); 
    /*//click login button
         await page.locator('(//div[@class="MuiBox-root css-12z0wuy"])[3]').click();
         //Type in username and password
         await page.locator('(//input[contains(@class,"MuiInputBase-input MuiOutlinedInput-input")])[1]').fill('cris@criptext.com');
         await page.locator('[name="password"]').fill('delektest123');
         //Login
         await page.locator('//button[text()="Login"]').click();
         await page.locator('//div[@class="css-1ialerq"]//img[1]').click();*/
 });

 test.describe('Search Tests', () => {
    test('Should be able to search by keyword', async  ({page})=> {
        //Click search Button
        await page.locator('(//label[text()="Search"]/following::input)[1]').click();
       
        //Type in your desired Keyword
        await page.locator('(//label[text()="Search"]/following::input)[1]').fill('House');
    });

    test('Search: Should be able to search by City', async  ({page})=> {
        await page.locator('//label[text()="City"]/following::input').click();

        await page.locator('//label[text()="City"]/following::input').fill('Las Vegas');
    });

    test('Search: Should be able to search by State', async  ({page})=> {
        await page.locator('(//div[contains(@class,"MuiSelect-select MuiSelect-outlined")])[2]').click();
        
        //Open State Dropdown
        await expect(page.locator('//ul[contains(@class,"MuiList-root MuiList-padding")]')).toBeVisible();

       //Select State
       await expect(page.locator('//li[@data-value="FL"]')).toBeVisible();

       await page.locator('//li[@data-value="FL"]').click();

       //Click Search Button
       await page.locator('//div[contains(@class,"MuiGrid-root MuiGrid-item")]//button[1]').click();


       //Assert Result
       await expect (page.locator('(//div[contains(@class,"MuiGrid-root MuiGrid-container")])[3]')).toBeVisible();

    });

    test('Search: Should be able to search by Bedrooms', async  ({page})=> {

        //Click Bedrooms Btn
        await page.locator('(//div[contains(@class,"MuiSelect-select MuiSelect-outlined")])[1]').click();


        //Open Bedroom qty dropdown
        await expect(page.locator('//ul[contains(@class,"MuiList-root MuiList-padding")]')).toBeVisible();


        //Select QTY
        await page.locator('li[data-value="2"]').click();

        //Start Search
        await page.locator('//button[text()="Start Search"]').click();

    
         //Assert Result
         await expect(page.locator('(//div[@class="MuiBox-root css-79elbk"]/following-sibling::div)[1]')).toBeVisible();     
   }); 


test.only('Search: Should be able to search by Price', async ({ page }) => {
  // Enter the target amount in the search bar
   await page.goto('https://qa.delekhomes.com/featured-listings?price=500000-800000')

   // Click the search button
   //await page.locator('//button[text()="Start Search"]').click();

   //Assert Result
    await expect(page.locator('(//div[@class="MuiBox-root css-79elbk"]/following-sibling::div)[1]')).toBeVisible();
    });
});
