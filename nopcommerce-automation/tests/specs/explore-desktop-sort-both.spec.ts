import { test, expect } from '@playwright/test';
import { DesktopCategoryPage } from '../../src/pages/DesktopCategoryPage';

test('Computers → Desktops → Sort Price Low-High & High-Low @cate', async ({ page }) => {
  const desk = new DesktopCategoryPage(page);

  await desk.gotoDesktops();

  console.log('[TEST] Sort Low → High');
  await desk.sortByPriceLowToHigh();
  const countLow = await desk.itemCount();
  expect(countLow).toBeGreaterThan(0);

  console.log('[TEST] Sort High → Low');
  await desk.sortByPriceHighToLow();
  const countHigh = await desk.itemCount();
  expect(countHigh).toBeGreaterThan(0);
});
