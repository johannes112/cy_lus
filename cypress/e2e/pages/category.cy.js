import HeaderComponent from "../../pageobjects/pageelements/Header";
import OneTrustPopup from "../../pageobjects/popups/OneTrust";
import CategoryPage from "../../pageobjects/CategoryPage";

describe("template category", () => {
  let header;
  let oneTrust;
  let category;
  before(() => {
    header = new HeaderComponent();
    oneTrust = new OneTrustPopup();
    category = new CategoryPage();
  });
  it("navigates to category url when user click in the menu to a category", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.visit("");
    header.actions.clickOnTheMenu();
    // click in the popover-menu to a category
    header.actions.clickOnTheMenuCategoryItem(1);
    // click in the popover-menu to a subcategory
    header.actions.clickOnTheMenuCategoryItem(16);
    cy.url().should("include", category.urls.category);
  });

  it("navigates to subcategory url when user click in the menu to a subcategory", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.visit("");
    header.actions.clickOnTheMenu();
    cy.url().should("not.match", /\/category\/.*\/.*\//);
    // click in the popover-menu to a category
    header.actions.clickOnTheMenuCategoryItem(1);
    // click in the popover-menu to a subcategory
    header.actions.clickOnTheMenuCategoryItem(22);

    cy.url().should("match", /\/category\/.*\/.*\//);
  });

  it("on the categorypage there should be a breadcrumb with two elements", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    category.elements.breadcrumbs().should("not.exist");

    cy.visit(category.urls.categoryBesteck);

    category.elements.breadcrumbs().children().should("have.length", 2);
  });
  it("on the categorypage there should be the context of category", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    category.elements.context().should("not.exist");
    cy.visit(category.urls.categoryBesteck);
    category.elements.context().should("exist");
  });

  it("on the categorypage there should be a listing of products", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    category.elements.stateListing().should("not.exist");

    cy.visit(category.urls.categoryBesteck);

    category.elements.stateListing().should("exist");
  });
  it("on the categorypage there should be a listing of categories", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    category.elements.stateShowCategories().should("not.exist");
    cy.visit(category.urls.categoryBesteck);
    category.elements.stateShowCategories().should("exist");
  });
  it("on the categorypage there should be a headline of the category with subline", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    category.elements.subline().should("not.exist");

    cy.visit(category.urls.categoryBesteck);

    category.elements.subline().should("exist");
  });
  it.only("in the end of the listing there should be a pagination", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();

    category.elements.contextPagination().should("not.exist");

    cy.visit(category.urls.categoryBesteck);

    category.elements.contextPagination().should("exist");
  });
});

// navigates to category route when user click in the menu to a category
