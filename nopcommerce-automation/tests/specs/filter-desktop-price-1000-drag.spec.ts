import { test, expect } from '@playwright/test';
import { DesktopPricePage } from '../../src/pages/DesktopPricePage';

test('Computers→Desktops→Drag 100 %→10 % →Only ≤1000 shown @price', async ({ page }) => {
    test.setTimeout(60000);
  const p = new DesktopPricePage(page);
  await p.gotoDesktops();
  await p.scrollToSlider();
  await p.dragRightHandleTo1000();
  const valid = await p.verifyPricesMax1000();
  expect(valid).toBe(true);
});
