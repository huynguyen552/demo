import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  constructor(protected page: Page) {}

  async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async waitVisible(locator: string, timeout = 10000): Promise<Locator> {
    const element = this.page.locator(locator);
    await element.waitFor({ state: 'visible', timeout });
    return element;
  }
}
