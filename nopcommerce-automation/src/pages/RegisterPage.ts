import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  /* ---------- selectors ---------- */
  private registerTab   = `//a[@class='ico-register']`;
  private maleRadio     = '//input[@id="gender-male"]';
  private firstNameInp  = '//input[@id="FirstName"]';
  private lastNameInp   = '//input[@id="LastName"]';
  private emailInp      = '//input[@id="Email"]';
  private pwdInp        = '//input[@id="Password"]';
  private confirmPwdInp = '//input[@id="ConfirmPassword"]';
  private regBtn        = '//button[@id="register-button"]';
  private continueBtn   = '//a[contains(text(),"Continue")]';

  private loginTab      = `//a[@class='ico-login']`;
  private loginEmailInp = '//input[@id="Email"]';
  private loginPwdInp   = '//input[@id="Password"]';
  private loginBtn      = '//button[contains(@class,"login-button")]';
  private logoutLnk     = `//a[@class='ico-logout']`;

  /* ---------- helpers ---------- */
  private genEmail() { return `auto${Date.now()}@yopmail.com`; }

  /* ---------- 1 lượt từ Register → Login ---------- */
  async registerLoginContinuous(first: string, last: string, pwd: string) {
    /* ---- REGISTER ---- */
    await this.page.goto('https://demo.nopcommerce.com');
    await this.page.click(this.registerTab);

    await this.page.check(this.maleRadio);
    await this.page.fill(this.firstNameInp, first);
    await this.page.fill(this.lastNameInp, last);

    const email = this.genEmail();
    await this.page.fill(this.emailInp, email);
    await this.page.fill(this.pwdInp, pwd);
    await this.page.fill(this.confirmPwdInp, pwd);
    await this.page.click(this.regBtn);
    await this.page.waitForLoadState('networkidle');

    // chờ Continue thực sự hiện & clickable
    await this.page.locator(this.continueBtn).waitFor({ state: 'visible', timeout: 15000 });
    await this.page.click(this.continueBtn, { force: true });

    /* ---- LOGIN luôn ---- */
    await this.page.click(this.loginTab);
    await this.page.fill(this.loginEmailInp, email);
    await this.page.fill(this.loginPwdInp, pwd);
    await this.page.click(this.loginBtn);
    await this.page.waitForSelector(this.logoutLnk, { state: 'visible' });

    console.log(`[DONE] Registered & logged-in with ${genEmail}`);
  }
}
