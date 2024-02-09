const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const data = require('../data/loginData.json');

test.beforeEach(async ({ page }) => {
  await page.goto("https://todoist.com/");
});

data.login_credential.forEach((credentials: { username: string, password: string, title: string }) => {
  test(`Test Case: ${credentials.title}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.login(credentials.username, credentials.password);
    await expect(homePage.container).toBeVisible();
  });

  test('Test Case: Invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(credentials.username, 'Test@!"#!"#123');
    await expect(page.getByText('Wrong email or password.')).toBeVisible();
  });

  test('Test Case: Unsuccessful login / E-mail Missing', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.login('', 'Test@!"#!"#123');
    await expect(page.getByText('Please enter a valid email address.')).toBeVisible();
  });

  test('Test Case: Unsuccessful login / Password Missing', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(credentials.username, '');
    await expect(page.getByText('Passwords must be at least 8 characters long.')).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
  
});
