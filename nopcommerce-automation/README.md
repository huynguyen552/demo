# NopCommerce-Automation (Playwright)

End-to-end test suite for [NopCommerce demo site](https://demo.nopcommerce.com) using **Playwright** + **TypeScript**.

---

## 🧪 Test Coverage (7 scenarios – Firefox only)

| # | Spec file | Flow | Status |
|---|-----------|------|--------|
| 1 | `register-login-onepage.spec.ts` | Register → Login → Logout (1 flow) | ✅ |
| 2 | `register-then-forgot.spec.ts` | Register → Forgot Password → Yopmail | ✅ |
| 3 | `search-iphone-detail.spec.ts` | Search iPhone → Suggestion → Detail page | ✅ |
| 4 | `search-iphone-fail.spec.ts` | **FAIL test** – verify video/screenshot | ✅ |
| 5 | `explore-desktop-sort-both.spec.ts` | Computers → Desktops → Sort Price (both ways) | ✅ |
| 6 | `filter-desktop-price-1000-drag.spec.ts` | Drag price slider 100 % → 10 % → ≤ 1000 | ✅ |
| 7 | `notebook-apple-filter.spec.ts` | Computers → Notebooks → Filter Apple → Verify MacBook | ✅ |

> **All tests run on Firefox only** – no Chromium required.

---

## ⚙️ Tech Stack
- **Playwright** 1.4x
- **TypeScript**
- **Node.js** ≥ 18
- **Jenkins** (local) – nightly 23:00 cron

---

## 🚀 Quick Start

### 1. Install
```bash
npm ci
npx playwright install firefox   # single browser

---



## ▶️ Run commands

### Run all
```bash
npx playwright test --headed
TEST_ENV=stag npx playwright test --headed

# hoặc
npx playwright test --project=firefox-local --headed
run every test
TEST_ENV=stag npx playwright test explore-desktop-sort-both.spec.ts --headed
TEST_ENV=stag npx playwright test filter-desktop-price-1000-drag.spec.ts --headed
TEST_ENV=stag npx playwright test forgot-password.spec.ts --headed
TEST_ENV=stag npx playwright test register-login-onepage.spec.ts --headed
TEST_ENV=stag npx playwright test register-then-forgot.spec.ts --headed
TEST_ENV=stag npx playwright test search-iphone-detail.spec.ts --headed
TEST_ENV=stag npx playwright test search-iphone-suggestion.spec.ts --headed

Report
npx playwright show-report

