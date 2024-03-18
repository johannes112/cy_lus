export default class Account {
  constructor() {
    // Your initialization code here
    this.initialize();
  }

  initialize() {
    // Function to be executed first
    cy.log("-> handle Account");
  }

  cssPathes = {
    context: '[data-cy-ctx="molecules/account/AccountLoginForm"]',
    //content
    stateEmptyCart: '[data-cy-state="show-empty-cart"]',
    accountIcon: ".account",
  };
  elements = {
    context: () => cy.get(this.cssPathes.context),
    //content
    stateEmptyCart: () => cy.get(this.cssPathes.stateEmptyCart),
    accountIcon: () => cy.get(this.cssPathes.accountIcon),
  };

  actions = {};

  cookies = {
    setB2b: () => cy.setCookie("channel", "b2b"),
    setB2c: () => cy.setCookie("channel", "b2c"),
  };
  urls = {
    account: "/account/",
    accountLogin: "/account/login/",
  };
}
