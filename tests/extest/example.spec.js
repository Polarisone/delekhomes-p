// @ts-check
const { test, expect } = require('@playwright/test');

//runs before every test
test.beforeEach(async ({ page }) => {
  await page.goto('https://instagram.com');
});

//test suite
test.describe('Login', () => {

  //Test Case
  test('Should not login with incorrect password', async ({ page }) => {
      // Create 1st todo.
    await page.locator('.new-todo').fill('TODO_ITEMS[0]');
    await page.locator('.new-todo').press('Enter');

    // Make sure the list only has one todo item.
    await expect(page.getByTestId('.view label')).toHaveText([
     // TODO_ITEMS[0]
    ]);

    // Create 2nd todo.
   // await newTodo.fill(TODO_ITEMS[1]);
  //  await newTodo.press('Enter');

    // Make sure the list now has two todo items.
   // await expect(page.getByTestId('todo-title')).toHaveText([
     // TODO_ITEMS[0],
    //  TODO_ITEMS[1]
   // ]);
  });
});
