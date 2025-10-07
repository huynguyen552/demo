import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../src/pages/RegisterPage';
import { ForgotPasswordPage } from '../../src/pages/ForgotPasswordPage';

test('Register → Forgot password workflow @regforgot', async ({ page }) => {
  test.setTimeout(60000);
  const regPage = new RegisterPage(page);
  const email   = await regPage.registerAndReturnEmail('Auto', 'User', '12345678');

  const forgotPage = new ForgotPasswordPage(page);
  await forgotPage.requestReset(email);
  await forgotPage.openResetLinkFromEmail(email.split('@')[0]);

  const isResetForm = await forgotPage.isResetFormDisplayed();
  expect(isResetForm).toBe(true);
});
