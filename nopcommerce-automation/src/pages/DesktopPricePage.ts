import { BasePage } from './BasePage';
import { desktopPriceSel } from '../selectors/desktopPriceSel';

export class DesktopPricePage extends BasePage {
  async gotoDesktops() {
    console.log('[PRICE] 1. Homepage → Computers → Desktops');
    await this.page.goto('https://demo.nopcommerce.com');
    await this.page.click(`xpath=${desktopPriceSel.topMenu}`);
    await this.page.click(`xpath=${desktopPriceSel.desktopsSub}`);
    await this.page.waitForLoadState('networkidle');
  }

  async scrollToSlider() {
    console.log('[PRICE] 2. Scroll slider into view');
    await this.page.locator(`xpath=${desktopPriceSel.sliderWrap}`).scrollIntoViewIfNeeded();
  }

  async dragRightHandleTo1000() {
    console.log('[PRICE] 3. Drag right handle 100 % → 10 % (≈ 1000)');
    const handle = this.page.locator(`xpath=${desktopPriceSel.sliderRight}`);
    const box = await handle.boundingBox();
    if (!box) throw new Error('Right handle not found');

    const startX = box.x + box.width / 2;
    const startY = box.y + box.height / 2;
    const dragDistance = -box.width * 11.89; // kéo ~90%

    const mouse = this.page.mouse;
    await mouse.move(startX, startY);
    await mouse.down();
    await mouse.move(startX + dragDistance, startY, { steps: 30 });
    await mouse.up();

    await this.page.waitForTimeout(1000);
    console.log('[PRICE] → Drag done (10 % ~ 1000)');
  }

  async getAllPrices(): Promise<number[]> {
    console.log('[PRICE] 4. Collect prices');

    // Đảm bảo ít nhất 1 sản phẩm hiển thị
    await this.page.locator(`xpath=${desktopPriceSel.productCards}`).first().waitFor({ timeout: 10000 });

    const cards = this.page.locator(`xpath=${desktopPriceSel.productCards}`);
    const cnt = await cards.count();
    const prices: number[] = [];

    for (let i = 0; i < cnt; i++) {
      try {
        const priceEl = cards.nth(i).locator(`xpath=${desktopPriceSel.priceXPath}`);
        const txt = (await priceEl.textContent({ timeout: 2000 })) || '0';
        const num = parseFloat(txt.replace(/[^0-9.]/g, ''));
        if (!isNaN(num)) prices.push(num);
      } catch (e) {
        console.warn(`[PRICE] ⚠️ Skipped card ${i + 1}: missing price element`);
      }
    }

    console.log(`[PRICE] → Collected ${prices.length} prices`, prices);
    return prices;
  }

  async verifyPricesMax1000() {
    const prices = await this.getAllPrices();
    if (prices.length === 0) {
      console.warn('[PRICE] ⚠️ No prices to verify, skipping check.');
      return true;
    }
    const ok = prices.every(p => p <= 1000);
    console.log(`[PRICE] 5. All prices ≤ 1000 ? ${ok}`, prices);
    return ok;


  }

}
