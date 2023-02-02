const { test, expect } = require('@playwright/test');
 

// Navigate to DelekHomes homepage
test.beforeEach(async function   ({ page }){
    await page.goto('https://qa.delekhomes.com/'); 
    //click login button
         //await page.locator('(//div[@class="MuiBox-root css-12z0wuy"])[3]').click();
         //Type in username and password
         //await page.locator('(//input[contains(@class,"MuiInputBase-input MuiOutlinedInput-input")])[1]').fill('cris@criptext.com');
         //await page.locator('[name="password"]').fill('delektest123');
         //Login
         //await page.locator('//button[text()="Login"]').click();
         //await page.locator('//div[@class="css-1ialerq"]//img[1]').click();
 });


 test.describe('Listing Tests', () => {
      test('Should see Featured Listings', async  ({page})=> {

         //click login button
         //await page.locator('(//div[@class="MuiBox-root css-12z0wuy"])[3]').click();
         //Type in username and password
         //await page.locator('(//input[contains(@class,"MuiInputBase-input MuiOutlinedInput-input")])[1]').fill('cris@criptext.com');
         //await page.locator('[name="password"]').fill('delektest123');
         //Login
         //await page.locator('//button[text()="Login"]').click();

        //Click Featured Listings Button
        await page.locator('//a[.="Featured Listings"]').click();

         //verify every piece of data in every home card
         await expect (page.locator('(//div[@class="MuiCardContent-root css-lmipfk"])[1]')).toBeVisible();
         await expect (page.locator('(//div[@class="MuiCardContent-root css-lmipfk"])[2]')).toBeVisible();
         await expect (page.locator('(//div[@class="MuiCardContent-root css-lmipfk"])[3]')).toBeVisible();
         await expect (page.locator('(//div[@class="MuiCardContent-root css-lmipfk"])[4]')).toBeVisible();
         await expect (page.locator('(//div[@class="MuiCardContent-root css-lmipfk"])[5]')).toBeVisible();
         await expect (page.locator('(//div[@class="MuiCardContent-root css-lmipfk"])[6]')).toBeVisible();
      });
      
      test.describe('Listing Tests', () => {
        test('Should open listing upon clicking on More Info', async  ({page})=> {
           
            await page.locator('button.MuiButtonBase-root.MuiButton-root').click();
        
           //Click on Listing
           await page.locator('(//a[contains(@class,"MuiButtonBase-root MuiButton-root")])[1]').click();

           //verify every piece of data of the home on the listing page
           await expect (page.locator('//h3[contains(@class,"MuiTypography-root MuiTypography-h3")]')).toBeVisible();
           await expect (page.locator('(//div[contains(@class,"MuiGrid-root MuiGrid-item")]//p)[1]')).toBeVisible();
           await expect (page.locator('(//div[contains(@class,"MuiGrid-root MuiGrid-item")])[2]')).toBeVisible();
           await expect (page.locator('(//div[contains(@class,"MuiGrid-root MuiGrid-item")]/following-sibling::div)[3]')).toBeVisible();
           await expect (page.locator('text=Garage:')).toBeVisible();
           await expect (page.locator('text=Bathrooms:')).toBeVisible();
           await expect (page.locator('text=Square Feet:')).toBeVisible(); 
           await expect (page.locator('text=Listing Date:')).toBeVisible();
           await expect (page.locator('text=Bedrooms:')).toBeVisible();
           await expect (page.locator('text=Realtor:')).toBeVisible();
        });

    });
      
 });
