import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../src/pages/RegisterPage';
import { ForgotPasswordPage } from '../../src/pages/ForgotPasswordPage';

test('Register → Forgot → Re-login with old password @regrel', async ({ page }) => {
  test.setTimeout(90000);

  /* 1. Register & logout */
  const regPage = new RegisterPage(page);
  const email = await regPage.registerAndReturnEmail('Auto', 'User', '12345678');

  /* 2. Forgot password (request + open reset link) */
  const forgotPage = new ForgotPasswordPage(page);
  await forgotPage.requestReset(email);
  await forgotPage.openResetLinkFromEmail(email.split('@')[0]);

  /* 3. Không đổi pass: đóng tab reset, về login và đăng nhập lại bằng pass cũ */
  await forgotPage.loginAfterReset(email, '12345678'); // dùng pass cũ

  /* 4. Kiểm tra đã đăng nhập thành công */
  const isLoggedIn = await page.locator('//a[@class="ico-logout"]').isVisible();
  expect(isLoggedIn).toBe(true);
});
