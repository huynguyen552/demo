import { test, expect } from '@playwright/test';
import { SearchProductPage } from '../../src/pages/SearchProductPage';

test('Search iPhone suggestion → open detail @search', async ({ page }) => {
  const searchPage = new SearchProductPage(page);
  await searchPage.searchWithSuggestion('iphone');
  const onDetail = await searchPage.verifyOnDetailPage();
  expect(onDetail).toBe(true);
});
