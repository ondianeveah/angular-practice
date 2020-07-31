import { Product } from './model/product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(
      "NICEHAT",
      "A Nice Black Hat",
      "/resources/images/products/black-hat.jpg",
      ["Men", "Accessories", "Hats"],
      29.99
    )).toBeTruthy();
  });
});
