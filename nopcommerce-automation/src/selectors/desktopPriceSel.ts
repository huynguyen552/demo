export const desktopPriceSel = {
  topMenu      : '//ul[@class="top-menu notmobile"]//a[contains(text(),"Computers")]',
  desktopsSub  : '//ul[@class="sublist first-level"]//a[contains(text(),"Desktops")]',
  sliderWrap   : '//div[@id="price-range-slider"]',
  sliderRight  : '//div[@id="price-range-slider"]/span[2]',
  // Chọn từng sản phẩm thay vì chỉ grid container
  productCards : '//div[@class="item-grid"]//div[contains(@class,"product-item")]',
  // relative XPath để lấy giá bên trong mỗi sản phẩm
  priceXPath   : './/span[contains(@class,"price actual-price")]',
} as const;
