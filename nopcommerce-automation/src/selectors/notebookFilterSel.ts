export const notebookFilterSel = {
  topMenu     : '//ul[@class="top-menu notmobile"]//a[contains(text(),"Computers")]',
  notebooksSub: '//ul[@class="sublist first-level"]//a[contains(text(),"Notebooks")]',
  appleChk    : '//label[contains(text(),"Apple")]/preceding-sibling::input[@type="checkbox"]',
  productCard : '//div[@data-productid="4"]//h2[@class="product-title"]/a[text()="Apple MacBook Pro"]',
} as const;
