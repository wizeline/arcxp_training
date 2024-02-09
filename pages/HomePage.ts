import { Page, Locator} from 'playwright';

class HomePage {
    page: Page;
    container: Locator;

constructor(page: Page)
{
    this.page = page;
    this.container = page.locator("#todoist_app");
}
}
export { HomePage };