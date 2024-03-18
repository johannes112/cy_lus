import HeaderComponent from "../../pageobjects/pageelements/Header";
import OneTrustPopup from "../../pageobjects/popups/OneTrust";
import AccountPage from "../../pageobjects/AccountPage";

describe("template account", () => {
  let header;
  let oneTrust;
  let account;
  before(() => {
    header = new HeaderComponent();
    oneTrust = new OneTrustPopup();
    account = new AccountPage();
  });
  it("contains the account-context when user is in on the account-page", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit the accountpage
    // TO USE THIS: start cypress with the url as parameter
    // npx cypress open --config baseUrl=https://dev.lusini.com:8000
    cy.visit(account.urls.accountLogin);
    // there should be a product in the wishlist
    account.elements.context().should("exist");
  });
  it("contains a loginmask when user is on the account-page", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit the wishlist
    cy.visit(account.urls.accountLogin);
    // there should be a product in the wishlist
    account.elements.context().should("exist");
  });
  it("navigates to account-url when user click to the account-icon", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit the startpage
    cy.visit("/");
    // click on the heart-icon
    cy.url().should("not.include", account.urls.account);
    account.elements.accountIcon().click();
    // check if the url contains the wishlist-url
    cy.url().should("include", account.urls.account);
  });
});
