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
    await expect(page).toHaveTitle('Today – Todoist');
  });
});
