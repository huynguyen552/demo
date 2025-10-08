import { test, expect } from '@playwright/test';
import { DesktopPricePage } from '../../src/pages/DesktopPricePage';

test('Computers→Desktops→Drag price to 1000→Only ≤1000 shown @price', async ({ page }) => {
  const p = new DesktopPricePage(page);
  await p.gotoDesktops();
  await p.dragPriceTo1000();
  const valid = await p.verifyOnlyUnder1000();
  expect(valid).toBe(true);
});
