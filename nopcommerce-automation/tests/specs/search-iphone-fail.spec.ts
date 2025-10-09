import { test, expect } from '@playwright/test';
import { SearchProductPage } from '../../src/pages/SearchProductPage';

test('Search iPhone via suggestion @search', async ({ page }) => {
  const searchPage = new SearchProductPage(page);
  await searchPage.searchWithSuggestion('iphone');
  const hasItems = await searchPage.hasResults();
  expect(hasItems).toBe(true);
  const firstName = await searchPage.firstResultName();
  expect(firstName).toContain('iPhone');
});
