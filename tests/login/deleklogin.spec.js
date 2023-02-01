const { test, expect } = require('@playwright/test');




// Navigate to DelekHomes homepage
test.beforeEach(async function  ({ page }){
    await page.goto('https://qa.delekhomes.com/'); 
 });



 test.describe('Login Tests', () => {
    test.only('Should be able to login using the credentials', async  ({page})=> {
    
//click login button
     await page.locator('(//div[@class="MuiBox-root css-12z0wuy"])[3]').click();
     //Type in username and password
     await page.locator('(//input[contains(@class,"MuiInputBase-input MuiOutlinedInput-input")])[1]').fill('gmtechla@gmail.com');
     await page.locator('[name="password"]').fill('GoodMorning2030*');
     //Login
     await page.locator('//button[text()="Login"]').click();
     await page.locator('//div[@class="css-1ialerq"]//img[1]').click();

     //Confirm login with Dashboard Button
     await expect(page.locator('//a[contains(text(),"Dashboard")]')).toBeVisible();

    });
});