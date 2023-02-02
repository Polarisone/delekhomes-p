const { test, expect } = require('@playwright/test');
 
 
 // Navigate to DelekHomes homepage
 test.beforeEach(async function   ({ page }){
    await page.goto('https://qa.delekhomes.com/'); 
 });


 test.describe('HomePage Tests', () => {
      test('Should see homes for sale', async  ({page})=> {

        //Search Homes for Sale
        await page.locator('(//label[text()="Search"]/following::input)[1]').click();

         //verify every piece of data in every home card
         await page.locator('(//label[text()="Search"]/following::input)[1]').fill('Sale');
      });

      
 });