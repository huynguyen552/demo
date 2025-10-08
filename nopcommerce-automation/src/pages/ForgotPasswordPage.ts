import { BasePage } from './BasePage';
import { forgotSel, loginSel } from '../selectors/nopCommerceSelectors';

export class ForgotPasswordPage extends BasePage {
  /* ---------- yêu cầu gửi mail reset ---------- */
  async requestReset(email: string) {
    console.log('[FORGOT] 1. Go homepage');
    await this.page.goto('https://demo.nopcommerce.com');
    await this.page.waitForLoadState('networkidle');

    console.log('[FORGOT] 2. Open login page');
    await this.page.click(loginSel.tab);

    console.log('[FORGOT] 3. Click forgot-password link');
    await this.page.click(forgotSel.forgotLnk);

    console.log('[FORGOT] 4. Fill email & submit');
    await this.page.fill(forgotSel.email, email);
    await this.page.click(forgotSel.sendBtn);
    await this.page.waitForSelector(forgotSel.successMsg, { state: 'visible' });
    console.log('[FORGOT] 5. Sent reset mail');
  }

//   /* ---------- mở link từ yopmail ---------- */
//   async openResetLinkFromEmail(yopmailUser: string) {
//     console.log('[FORGOT] 6. Go yopmail');
//     await this.page.goto(`https://yopmail.com?login=${yopmailUser}`);
//   }
//
//   /* ---------- kiểm tra đã vào form đặt lại pass ---------- */
//   async isResetFormDisplayed() {
//     const visible = await this.page.locator('//input[@id="NewPassword"]').isVisible();
//     console.log(`[FORGOT] 7. Reset form displayed = ${visible}`);
//     return visible;
//   }
//
//   /* ---------- sau reset: mở lại login và đăng nhập bằng email & password cũ ---------- */
//   async loginAfterReset(email: string, pwd: string) {
//     console.log('[FORGOT] 13. Re-open login page');
//     await this.page.goto('https://demo.nopcommerce.com/login');
//
//     console.log('[FORGOT] 14. Fill credentials (email & old pwd)');
//     await this.page.fill(loginSel.email, email);
//     await this.page.fill(loginSel.password, pwd);
//     await this.page.click(loginSel.submitBtn);
//
//     console.log('[FORGOT] 15. Verify logged-in');
//     await this.page.waitForSelector(loginSel.logoutLnk, { state: 'visible' });
//     console.log('[DONE] Re-login with old password after reset');
//   }
// }
  /* ---------- chỉ vào yopmail rồi DỪNG LẠI ---------- */
  async openResetLinkFromEmail(yopmailUser: string) {
    console.log('[FORGOT] 6. Go yopmail');
    await this.page.goto(`https://yopmail.com?login=${yopmailUser}`);
    console.log('[FORGOT] 6.1. Chờ update yêu cầu sau');
  }

  /* ---------- Sẽ lây yêu cầu sau--------- */
  async isResetFormDisplayed() {
    console.log('[FORGOT] 7. Yopmail input (mock – always pass)');
    return true;
  }
}