import HeaderComponent from "../../pageobjects/pageelements/Header";
import OneTrustPopup from "../../pageobjects/popups/OneTrust";
import SearchPage from "../../pageobjects/SearchPage";

describe("searchpage", () => {
  let header;
  let oneTrust;
  let search;
  before(() => {
    header = new HeaderComponent();
    oneTrust = new OneTrustPopup();
    search = new SearchPage();
  });
  it("navigates to searchpage when clicking the search-icon-button", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();

    cy.visit("");

    cy.url().should("not.include", header.urls.search);
    header.elements.searchIcon().click();
    cy.url().should("include", header.urls.search);
  });
  it("contains the content of the searchpage", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    search.elements.context().should("not.exist");
    cy.visit(search.urls.search);
    search.elements.context().should("exist");
  });
  it("contains listing-filter", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    search.elements.contextListingFilter().should("not.exist");
    cy.visit(search.urls.search);
    search.elements.contextListingFilter().should("exist");
  });
  it("contains a product-list", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    search.elements.contextProductList().should("not.exist");
    cy.visit(search.urls.search);
    search.elements.contextProductList().should("exist");
  });
  it("contains a product-widget", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    search.elements.contextProductWidget().should("not.exist");
    cy.visit(search.urls.search);
    search.elements.contextProductWidget().should("exist");
  });
  it("has the state to show products", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    search.elements.stateShowProducts().should("not.exist");
    cy.visit(search.urls.search);
    search.elements.stateShowProducts().should("exist");
  });
});
