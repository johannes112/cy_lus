import HeaderComponent from "../../pageobjects/pageelements/Header";
import OneTrustPopup from "../../pageobjects/popups/OneTrust";
import SearchPage from "../../pageobjects/SearchPage";
import testdata from "../../fixtures/testdata.json";

const SEARCH_ROUTE = "search/#q=";

describe("test the functionality of search", () => {
  let header;
  let oneTrust;
  let search;

  before(() => {
    header = new HeaderComponent();
    oneTrust = new OneTrustPopup();
    search = new SearchPage();
  });

  it.only("navigates to the right search route when user search by name and click on the search icon", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.visit("");

    header.elements.searchInput().type(testdata.article.name);
    header.elements.searchIcon().click();
    cy.url().should(
      "include",
      SEARCH_ROUTE + testdata.article.name.replace(/ /g, "%20")
    );
    cy.contains(testdata.article.name).should("exist");
  });
  it("navigates to the right search route when user search by testdatanumber and hits enter", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.visit("");

    header.elements.searchInput().type(testdata.testdataNumber + "{enter}");
    cy.url().should("include", testdata.url);
    cy.contains(testdata.name).should("exist");
  });
  it("navigates to the right search route when user search by testdatanumber with prefix 'i' and hits enter", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.visit("");

    header.elements
      .searchInput()
      .type("i" + testdata.testdataNumber + "{enter}");
    cy.url().should("include", testdata.url);
    cy.contains(testdata.name).should("exist");
  });
});
