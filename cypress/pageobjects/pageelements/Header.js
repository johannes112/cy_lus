export default class Header {
  constructor() {
    // Your initialization code here
    this.initialize();
  }

  initialize() {
    // Function to be executed first
    cy.log("-> handle Header");
  }

  cssPathes = {
    b2xModal: ".B2xModal",
    b2cButton: '[data-cy-handle="b2c-option"] > .content > .desktop > span',
    b2bButton: '[data-cy-handle="b2b-option"] > .content > .desktop > span',
    overlay: ".overlay",

    context: '[data-cy-ctx="app/Header"]',
    logo: ".logo",
    searchFieldCollection: '[data-cy-collection="SearchField"]',
    searchInput: '[data-cy-handle="search-input"]',
    searchIcon: '[data-cy-handle="search-icon"]',
    wishlistButton: ".wishlist",
    contactButton: ".contact",
    accountButton: ".account",
    cartButton: ".cart .icon-wrapper",
    navigation: ".Navigation",
    burgermenuButton: ".category-button",
    handleMenuCategoryItem: '[data-cy-handle="select-category-item"]',
    menuCategoryItem: ".CategoryItem",
    customerSwitchClass: ".B2XToggle",
    customerSwitchState: '[data-cy-state="show-b2x-state"]',
    customerSwitchToggle: '[data-cy-handle="b2x-toggle"]',
  };

  elements = {
    //modal
    b2xModal: () => cy.get(this.cssPathes.b2xModal),
    continueButton: () => cy.get(this.cssPathes.continueButton),
    b2cButton: () => cy.get(this.cssPathes.b2cButton),
    b2bButton: () => cy.get(this.cssPathes.b2bButton),
    overlay: () => cy.get(this.cssPathes.overlay),
    //header
    context: () => cy.get(this.cssPathes.context),
    logo: () => cy.get(this.cssPathes.logo),
    //search
    searchFieldCollection: () => cy.get(this.cssPathes.searchFieldCollection),
    searchInput: () => cy.get(this.cssPathes.searchInput),
    searchIcon: () => cy.get(this.cssPathes.searchIcon),
    //buttons
    wishlistButton: () => cy.get(this.cssPathes.wishlistButton),
    contactButton: () => cy.get(this.cssPathes.contactButton),
    accountButton: () => cy.get(this.cssPathes.accountButton),
    cartButton: () => cy.get(this.cssPathes.cartButton),
    // menu
    navigation: () => cy.get(this.cssPathes.navigation),
    burgermenuButton: () => cy.get(this.cssPathes.burgermenuButton),
    menuCategoryItem: (entry) =>
      cy.get(this.cssPathes.menuCategoryItem).eq(entry),
    menuSubCategoryItem: () => cy.get(this.cssPathes.menuSubCategoryItem),
    //b2b/b2c
    b2bButton: () => cy.get(this.cssPathes.b2bButton),
    //customer switch
    customerSwitchClass: () => cy.get(this.cssPathes.customerSwitchClass),
    customerSwitchState: () => cy.get(this.cssPathes.customerSwitchState),
    customerSwitchToggle: () => cy.get(this.cssPathes.customerSwitchToggle),
  };

  actions = {
    clickOnTheMenu: () => this.elements.burgermenuButton().click(),
    handleMenuCategoryItem: () => this.elements.menuCategoryItem(),
    clickOnTheMenuCategoryItem: (entry) =>
      this.elements.menuCategoryItem(entry).click(),
    handleMenuSubCategoryItem: () => this.elements.menuSubCategoryItem(),
    contextShouldBeVisible: () => this.elements.context().should("be.visible"),
    changeCustomerType: () => this.elements.b2bButton().click(),
    executeSearchFor: (value) => {
      this.elements.searchInput().type(value);
      this.elements.searchIcon().click();
    },
  };

  urls = {
    account: "/account/",
    wishlist: "/wishlist",
    contact: "/kontakt",
    cart: "/cart",
    search: "/search",
  };

  cookies = {
    setB2b: () => cy.setCookie("channel", "b2b"),
    setB2c: () => cy.setCookie("channel", "b2c"),
  };
}
