import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../src/pages/RegisterPage';
import { ForgotPasswordPage } from '../../src/pages/ForgotPasswordPage';

test('Register → Forgot password workflow @regforgot', async ({ page }) => {
  test.setTimeout(90000); // 90 s cho cả 2 flow

  /* 1. Register & logout */
  const regPage = new RegisterPage(page);
  const email = await regPage.registerAndReturnEmail('Auto', 'User', '12345678');

  /* 2. Forgot password trên cùng page / context */
  const forgotPage = new ForgotPasswordPage(page);
  await forgotPage.requestReset(email);
  await forgotPage.openResetLinkFromEmail(email.split('@')[0]);

  const isResetForm = await forgotPage.isResetFormDisplayed();
  expect(isResetForm).toBe(true);
});