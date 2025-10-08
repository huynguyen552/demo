import { test, expect } from '@playwright/test';
import { NotebookFilterPage } from '../../src/pages/NotebookFilterPage';

test('Computers → Notebooks → Filter Apple → Verify MacBook Pro @nb', async ({ page }) => {
  const nb = new NotebookFilterPage(page);
  await nb.gotoNotebooks();
  await nb.filterApple();
  const isVisible = await nb.verifyAppleMacBookPro();
  expect(isVisible).toBe(true);
});
