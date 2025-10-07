import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { pickUser } from './userPool';

type MyFixtures = {
  homePage: HomePage;
  registerPage: RegisterPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});

export { expect } from '@playwright/test';
