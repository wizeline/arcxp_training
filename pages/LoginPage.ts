import { Page, Locator} from 'playwright/test';
const { WelcomePage } = require('../pages/WelcomePage');

class LoginPage {
    page: Page;
    user: Locator;
    password: Locator;
    loginButton: Locator;

    constructor(page){
        this.page = page;
        this.user = page.locator('#element-0');
        this.password = page.locator('#element-3');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }
    
    async login(userName: string, password: string): Promise<void>{
        const welcomePage = new WelcomePage(this.page);
        await welcomePage.loginButton.click();
        await this.user.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    
    }
    export { LoginPage };