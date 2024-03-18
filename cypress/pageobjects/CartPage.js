export default class Cart {
  constructor() {
    // Your initialization code here
    this.initialize();
  }

  initialize() {
    // Function to be executed first
    cy.log("-> handle Cart");
  }

  cssPathes = {
    context: '[data-cy-ctx="templates/Cart"]',
    //content
    stateEmptyCart: '[data-cy-state="show-empty-cart"]',
    cartIcon: ".cart",
  };
  elements = {
    context: () => cy.get(this.cssPathes.context),
    //content
    stateEmptyCart: () => cy.get(this.cssPathes.stateEmptyCart),
    cartIcon: () => cy.get(this.cssPathes.cartIcon),
  };

  actions = {};

  cookies = {
    setB2b: () => cy.setCookie("channel", "b2b"),
    setB2c: () => cy.setCookie("channel", "b2c"),
  };
  urls = {
    cart: "/cart/",
  };
}
