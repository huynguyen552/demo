import { test } from '@playwright/test';
import { RegisterPage } from '../../src/pages/RegisterPage';

test('Register → Login continuous in single page @register', async ({ page }) => {
  test.setTimeout(60000);
  const registerPage = new RegisterPage(page);
  await registerPage.registerLoginContinuous('Auto', 'User', '12345678');
});
