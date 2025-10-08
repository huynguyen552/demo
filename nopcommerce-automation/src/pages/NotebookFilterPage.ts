import { BasePage } from './BasePage';
import { notebookFilterSel } from '../selectors/notebookFilterSel';

export class NotebookFilterPage extends BasePage {
  async gotoNotebooks() {
    console.log('[NB] 1. Homepage');
    await this.page.goto('https://demo.nopcommerce.com');
    await this.page.click(notebookFilterSel.topMenu);
    console.log('[NB] 2. Click Notebooks');
    await this.page.click(notebookFilterSel.notebooksSub);
    await this.page.waitForLoadState('networkidle');
  }

  async filterApple() {
    console.log('[NB] 3. Check Apple manufacturer');
    await this.page.check(notebookFilterSel.appleChk);
    await this.page.waitForLoadState('networkidle');
  }

  async verifyAppleMacBookPro() {
    console.log('[NB] 4. Verify Apple MacBook Pro visible');
    await this.page.locator(notebookFilterSel.productCard).waitFor({ state: 'visible' });
    return await this.page.locator(notebookFilterSel.productCard).isVisible();
  }
}
