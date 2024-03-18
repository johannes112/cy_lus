export default class Category {
  constructor() {
    // Your initialization code here
    this.initialize();
  }

  initialize() {
    // Function to be executed first
    cy.log("-> handle Category");
  }

  cssPathes = {
    context: '[data-cy-ctx="templates/Category"]',
    breadcrumbs: ".Breadcrumbs",
    stateListing: '[data-cy-state="listing"]',
    stateShowCategories: '[data-cy-state="show-categories"]',
    subline: "div > small",
    contextPagination: '[data-cy-ctx="molecules/Pagination"]',
  };
  elements = {
    context: () => cy.get(this.cssPathes.context),
    //content
    breadcrumbs: () => cy.get(this.cssPathes.breadcrumbs),
    stateListing: () => cy.get(this.cssPathes.stateListing),
    stateShowCategories: () => cy.get(this.cssPathes.stateShowCategories),
    subline: () => cy.get(this.cssPathes.subline),
    contextPagination: () => cy.get(this.cssPathes.contextPagination),
  };

  actions = {};

  cookies = {
    setB2b: () => cy.setCookie("channel", "b2b"),
    setB2c: () => cy.setCookie("channel", "b2c"),
  };
  urls = {
    category: "/category/",
    subcategory: "/category/.*/.*/",
    categoryBesteck: "/category/besteck/",
  };
}
