export default class Search {
  constructor() {
    // Your initialization code here
    this.initialize();
  }

  initialize() {
    // Function to be executed first
    cy.log("-> handle Search");
  }

  cssPathes = {
    context: '[data-cy-ctx="templates/Search"]',
    //content
    contextProductList: '[data-cy-ctx="molecules/ProductList"]',
    contextProductWidget: '[data-cy-ctx="molecules/ProductWidget"]',
    contextListingFilter: '[data-cy-ctx="molecules/ListingFilter"]',
    stateShowProducts: '[data-cy-state="show-products"]',
  };
  elements = {
    context: () => cy.get(this.cssPathes.context),
    //content
    contextProductList: () => cy.get(this.cssPathes.contextProductList),
    contextProductWidget: () => cy.get(this.cssPathes.contextProductWidget),
    contextListingFilter: () =>
      cy.get(this.cssPathes.contextListingFilter, { timeout: 3000 }),
    stateShowProducts: () => cy.get(this.cssPathes.stateShowProducts),
  };

  actions = {};

  cookies = {
    setB2b: () => cy.setCookie("channel", "b2b"),
    setB2c: () => cy.setCookie("channel", "b2c"),
  };
  urls = {
    search: "/search/",
  };
}
