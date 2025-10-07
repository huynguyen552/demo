import { BasePage } from './BasePage';
import { forgotSel, loginSel } from '../selectors/nopCommerceSelectors';

export class ForgotPasswordPage extends BasePage {
  /* ---------- yêu cầu gửi mail reset ---------- */
  async requestReset(email: string) {
    console.log('[FORGOT] 1. Go homepage');
    await this.page.goto('https://demo.nopcommerce.com');

    console.log('[FORGOT] 2. Open login page');
    await this.page.click(loginSel.tab);          // dùng chung loginSel

    console.log('[FORGOT] 3. Click forgot-password link');
    await this.page.click(forgotSel.forgotLnk);   // dùng forgotSel

    console.log('[FORGOT] 4. Fill email & submit');
    await this.page.fill(forgotSel.email, email);
    await this.page.click(forgotSel.sendBtn);
    await this.page.waitForSelector(forgotSel.successMsg, { state: 'visible' });
    console.log('[FORGOT] 5. Sent reset mail');
  }

  /* ---------- mở link từ yopmail ---------- */
  async openResetLinkFromEmail(yopmailUser: string) {
    console.log('[FORGOT] 6. Go yopmail');
    await this.page.goto(`https://yopmail.com?login=${yopmailUser}`); // bỏ space

    console.log('[FORGOT] 7. Refresh inbox');
    await this.page.click('//button[@id="refresh"]');

    console.log('[FORGOT] 8. Click reset link inside iframe');
    await this.page.frameLocator('//iframe[@id="ifmail"]')
                 .locator('//a[contains(@href,"passwordrecovery")]')
                 .click({ timeout: 30000 });
  }

  /* ---------- kiểm tra đã vào form đặt lại pass ---------- */
  async isResetFormDisplayed() {
    const visible = await this.page.locator('//input[@id="NewPassword"]').isVisible();
    console.log(`[FORGOT] 9. Reset form displayed = ${visible}`);
    return visible;
  }
}
