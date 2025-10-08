import { test, expect } from '@playwright/test';
import { DesktopPricePage } from '../../src/pages/DesktopPricePage';

test('Computers → Desktops → Drag price to 1000 & verify ≤ 1000 @price', async ({ page }) => {
  test.setTimeout(60000);
  const price = new DesktopPricePage(page);
  await price.gotoDesktops();
  await price.setMaxPriceTo1000();
  const valid = await price.verifyPricesMax1000();
  expect(valid).toBe(true);
});
