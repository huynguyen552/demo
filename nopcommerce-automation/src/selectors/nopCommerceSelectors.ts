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
