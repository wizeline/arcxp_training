import { Page, Locator} from 'playwright/test';

class WellcomePage {
    readonly page: Page;
    readonly loginButton: Locator;

constructor(page: Page)
{
    this.page = page;
    this.loginButton = page.getByRole('link', { name: 'Log in' });
}

}
export { WellcomePage };