export const regSel = {
  tab         : "//a[@class='ico-register']",
  maleRadio   : '//input[@id="gender-male"]',
  firstName   : '//input[@id="FirstName"]',
  lastName    : '//input[@id="LastName"]',
  email       : '//input[@id="Email"]',
  password    : '//input[@id="Password"]',
  confirmPwd  : '//input[@id="ConfirmPassword"]',
  regBtn      : '//button[@id="register-button"]',
  continueBtn : '//a[contains(text(),"Continue")]',
} as const;

export const loginSel = {
  tab      : "//a[@class='ico-login']",
  email    : '//input[@id="Email"]',
  password : '//input[@id="Password"]',
  submitBtn: '//button[contains(@class,"login-button")]',
  logoutLnk: "//a[@class='ico-logout']",
} as const;

/* ---------- FORGOT PASS ---------- */
export const forgotSel = {
  forgotLnk : '//span[@class="forgot-password"]',
  email     : '//input[@id="Email"]',
  sendBtn   : '//button[@name="send-email" and text()="Recover"]',
  successMsg: '//div[@class="bar-notification success"]',
} as const;

/* ---------- SEARCH ---------- */
export const searchSel = {
  box        : '//div[@class="search-box store-search-box"]//input',
  button     : '//button[@class="button-1 search-box-button"]',
  suggestion : '//div[@class="ui-menu-item-wrapper"]',
  iphone128  : '//li[@class="ui-menu-item"]//span[text()="Apple iPhone 16 128GB"]',
  resultBar  : '//div[@class="search-results"]',
  itemName   : '//h2[@class="product-title"]/a',
} as const;
/* ---------- PRODUCT DETAIL ---------- */
export const detailSel = {
  imgByAlt: '//img[@alt="Picture of Apple iPhone 16 128GB"]',
  title   : '//h1[@itemprop="name"]',
} as const;
