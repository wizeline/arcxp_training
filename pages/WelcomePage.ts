import { Page, Locator} from 'playwright/test';

class WelcomePage {
    readonly page: Page;
    readonly loginButton: Locator;

constructor(page: Page)
{
    this.page = page;
    this.loginButton = page.getByRole('link', { name: 'Log in' });
}

}
export { WelcomePage };