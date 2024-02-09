import { Page, Locator} from 'playwright/test';
const { WellcomePage } = require('../pages/WellcomePage');

class LoginPage {
    page: Page;
    user: Locator;
    password: Locator;
    loginButton: Locator;

    constructor(page){
        this.page = page;
        this.user = page.getByPlaceholder('Enter your email...');
        this.password = page.getByPlaceholder('Enter your password...');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }
    
    async login(userName: string, password: string): Promise<void>{
        const wellcomePage = new WellcomePage(this.page);
        await wellcomePage.loginButton.click();
        await this.user.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    
    }
    export { LoginPage };