import { BasePage } from './BasePage';
import { searchSel } from '../selectors/nopCommerceSelectors';

export class SearchProductPage extends BasePage {
  /* ---------- enter keyword & click suggestion ---------- */
  async searchWithSuggestion(keyword: string) {
    console.log(`[SEARCH] 1. Type keyword: ${keyword}`);
    await this.page.goto('https://demo.nopcommerce.com');
    await this.page.fill(searchSel.box, keyword);

    console.log('[SEARCH] 2. Wait & click iPhone 128GB suggestion');
    await this.page.locator(searchSel.iphone128).waitFor({ state: 'visible', timeout: 10000 });
    await this.page.locator(searchSel.iphone128).click();
  }

  /* ---------- verify ---------- */
  async verifyOnDetailPage() {
    console.log('[SEARCH] 3. Verify detail page loaded');
    const img = this.page.locator('//img[@alt="Picture of Apple iPhone 16 128GB"]');
    await img.waitFor({ state: 'visible', timeout: 15000 });
    console.log('[SEARCH] 4. iPhone 16 128GB detail displayed');
    return true; // pass luôn
  }
}
