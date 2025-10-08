import { BasePage } from './BasePage';
import { desktopSel } from '../selectors/nopCommerceSelectors';

export class DesktopCategoryPage extends BasePage {
  async gotoDesktops() {
    console.log('[DESK] 1. Go homepage');
    await this.page.goto('https://demo.nopcommerce.com');
    await this.page.waitForLoadState('networkidle');

    console.log('[DESK] 2. Click Computers');
    await this.page.click(desktopSel.topMenu);

    console.log('[DESK] 3. Click Desktops');
    await this.page.click(desktopSel.desktopsSub);
    await this.page.waitForLoadState('networkidle');
  }

  async sortByPriceLowToHigh() {
    console.log('[DESK] 4. Sort Price: Low to High');
    await this.page.selectOption(desktopSel.sortDropdown, '10');
    await this.page.waitForLoadState('networkidle');
  }

  async sortByPriceHighToLow() {
    console.log('[DESK] 5. Sort Price: High to Low');
    await this.page.selectOption(desktopSel.sortDropdown, '11');
    await this.page.waitForLoadState('networkidle');
  }

  async itemCount() {
    return await this.page.locator(desktopSel.itemName).count();
  }
}
