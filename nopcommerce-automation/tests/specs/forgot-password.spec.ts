import { test, expect } from '@playwright/test';
import { ForgotPasswordPage } from '../../src/pages/ForgotPasswordPage';

const EXISTING_EMAIL = 'auto1759847454120@yopmail.com';

test('@forgot Forgot password workflow', async ({ page }) => {
  const forgotPage = new ForgotPasswordPage(page);

  await forgotPage.requestReset(EXISTING_EMAIL);
  await forgotPage.openResetLinkFromEmail(EXISTING_EMAIL.split('@')[0]);
  const isResetForm = await forgotPage.isResetFormDisplayed();
  expect(isResetForm).toBe(true);
});
