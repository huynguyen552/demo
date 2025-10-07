import { BasePage } from './BasePage';
import { regSel, loginSel } from '../selectors/nopCommerceSelectors';

export class RegisterPage extends BasePage {
  private genEmail() { return `auto${Date.now()}@yopmail.com`; }

  /* ---------- 1 lượt Register → Login → Logout ---------- */
  async registerLoginContinuous(first: string, last: string, pwd: string) {
    console.log('[REG] 1. Go homepage');
    await this.page.goto('https://demo.nopcommerce.com');

    console.log('[REG] 2. Open register form');
    await this.page.click(regSel.tab);

    console.log('[REG] 3. Fill credentials');
    await this.page.check(regSel.maleRadio);
    await this.page.fill(regSel.firstName, first);
    await this.page.fill(regSel.lastName, last);
    const email = this.genEmail();
    await this.page.fill(regSel.email, email);
    await this.page.fill(regSel.password, pwd);
    await this.page.fill(regSel.confirmPwd, pwd);

    console.log('[REG] 4. Submit register');
    await this.page.click(regSel.regBtn);
    await this.page.waitForLoadState('networkidle');

    console.log('[REG] 5. Click Continue');
    await this.page.locator(regSel.continueBtn).waitFor({ state: 'visible', timeout: 15000 });
    await this.page.click(regSel.continueBtn, { force: true });

    console.log('[LOGIN] 6. Open login form');
    await this.page.click(loginSel.logoutLnk);
    await this.scrollToBottom();          // scroll sau click
    await this.page.click(loginSel.tab);
    console.log('[LOGIN] 7. Fill login');
    await this.page.fill(loginSel.email, email);
    await this.page.fill(loginSel.password, pwd);

    console.log('[LOGIN] 8. Submit login');
    await this.page.click(loginSel.submitBtn);
    await this.page.waitForSelector(loginSel.logoutLnk, { state: 'visible' });

    console.log('[LOGOUT] 9. Click logout');
    await this.page.click(loginSel.logoutLnk);

    await this.page.waitForSelector(loginSel.tab, { state: 'visible' });
    await this.scrollToBottom();
    console.log(`[DONE] Registered, logged-in & logged-out with ${email}`);
    return email;
  }

  async registerAndReturnEmail(first: string, last: string, pwd: string) {
    return await this.registerLoginContinuous(first, last, pwd);
  }
}
