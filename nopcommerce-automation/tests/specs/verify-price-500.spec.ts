import { test, expect } from '@playwright/test';
import { DesktopPricePage } from '../../src/pages/DesktopPricePage';

test('Computers → Desktops → Verify price 500.00 exists @price', async ({ page }) => {
  const price = new DesktopPricePage(page);
  await price.gotoDesktops();
  const found = await price.verifyPrice500Visible();
  expect(found).toBe(true);
});
