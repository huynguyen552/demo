import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private registerLink = 'a.ico-register';
  private loginLink    = 'a.ico-login';

  async goto() {
    await this.page.goto('/');
  }
  async clickRegister() {
    await this.page.click(this.registerLink);
  }
  async clickLogin() {
    await this.page.click(this.loginLink);
  }
}
