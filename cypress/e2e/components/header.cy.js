import HeaderComponent from "../../pageobjects/pageelements/Header";
import OneTrustPopup from "../../pageobjects/popups/OneTrust";

describe("popup onetrust", () => {
  let header;
  let oneTrust;

  before(() => {
    header = new HeaderComponent();
    oneTrust = new OneTrustPopup();
  });

  beforeEach(() => {
    // Clear cookies
    cy.clearCookies();
    // Clear local storage
    cy.clearLocalStorage();
  });

  it("should appear a cookie-banner in the front of all", () => {
    header.cookies.setB2b();
    // there should not be a cookiebanner
    oneTrust.elements.bannerArea().should("not.exist");
    // visit the wishlist-page
    cy.visit("");
    // the cookiebanner should be visible
    oneTrust.actions.contextShouldBeVisible();
  });
  it("can accept all cookies to remove the banner", () => {
    header.cookies.setB2b();
    // visit the wishlist-page
    cy.visit("");
    // the banner should be visible
    oneTrust.actions.contextShouldBeVisible();
    // accept all cookies
    oneTrust.actions.acceptAllCookies();
    // the banner should not be visible
    oneTrust.elements.bannerArea().should("not.be.visible");
  });
  it("can reject all cookies to remove the banner", () => {
    header.cookies.setB2b();
    // visit the wishlist-page
    cy.visit("");
    // there should be a message for empty products
    oneTrust.elements.bannerArea().should("exist");
    // accept all cookies
    oneTrust.actions.rejectAllCookies();
    // the banner should not be visible
    oneTrust.elements.bannerArea().should("not.be.visible");
  });
  it("can remove the cookie-banner by setting a cookie", () => {
    header.cookies.setB2b();
    // close the cookie-banner
    oneTrust.cookies.closeAlertBox();
    // visit the wishlist-page
    cy.visit("");
    // the banner should not be visible
    oneTrust.elements.bannerArea().should("not.exist");
  });
});

describe("app B2xModal", () => {
  let header;
  let oneTrust;

  before(() => {
    header = new HeaderComponent();
    oneTrust = new OneTrustPopup();
  });

  it("should appear a popup with overlay in front of the lusini-page", () => {
    oneTrust.cookies.closeAlertBox();
    // popup should not exist
    header.elements.b2xModal().should("not.exist");
    // go to the lusini-page
    cy.visit("");
    // overlay should appear
    header.elements.overlay().should("be.visible");
    // popup should appear
    header.elements.context().should("be.visible");
  });
  it("can close the popup by choosing b2b", () => {
    oneTrust.cookies.closeAlertBox();
    // popup should not exist
    header.elements.b2xModal().should("not.exist");
    // go to the lusini-page
    cy.visit("");
    // overlay should not appear
    header.elements.overlay().should("be.visible");
    // click on the b2b-button
    header.elements.b2bButton().click();
    // popup should not appear
    header.elements.b2xModal().should("not.be.visible");
  });
  it("can close the popup by choosing b2c", () => {
    oneTrust.cookies.closeAlertBox();
    // popup should not exist
    header.elements.b2xModal().should("not.exist");
    // go to the lusini-page
    cy.visit("");
    // overlay should not appear
    header.elements.overlay().should("be.visible");
    // click on the b2b-button
    header.elements.b2cButton().click();
    // popup should not appear
    header.elements.b2xModal().should("not.be.visible");
  });
});

describe("app Header", () => {
  let header;
  let oneTrust;

  before(() => {
    header = new HeaderComponent();
    oneTrust = new OneTrustPopup();
  });

  it("contains the header context when user is in on the lusini-page", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    header.cookies.setB2b();
    // negative test
    header.elements.context().should("not.exist");
    // visit the startpage
    cy.visit("");
    // there should be the context of the header on the page
    header.elements.context().should("be.visible");
  });
  it("shows the logo", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    header.cookies.setB2b();
    // negative test
    header.elements.logo().should("not.exist");
    // visit the startpage
    cy.visit("");
    // there should be the context of the header on the page
    header.elements.logo().should("be.visible");
  });
  it("shows the searchbar", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    header.cookies.setB2b();
    // negative test
    header.elements.searchFieldCollection().should("not.exist");
    // visit the startpage
    cy.visit("");
    // there should be the context of the header on the page
    header.elements.searchFieldCollection().should("be.visible");
  });
  it("shows the customerswitch", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    header.cookies.setB2b();
    // negative test
    header.elements.customerSwitchClass().should("not.exist");
    // visit the startpage
    cy.visit("");
    // there should be visible on the page
    header.elements.customerSwitchClass().should("be.visible");
  });
  it("shows the burgermenu", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    header.cookies.setB2b();
    // negative test
    header.elements.burgermenuButton().should("not.exist");
    // visit the startpage
    cy.visit("");
    // the navigation should be visible on the page
    header.elements.burgermenuButton().should("be.visible");
  });
  it("shows the navigation", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    header.cookies.setB2b();
    // negative test
    header.elements.navigation().should("not.exist");
    // visit the startpage
    cy.visit("");
    // the navigation should be visible on the page
    header.elements.navigation().should("be.visible");
  });
  it("the heart-icon links to the wishlist", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    header.cookies.setB2b();
    // visit the startpage
    cy.visit("");
    // check if then icon links to the wishlist
    header.elements.wishlistButton().should("not.have.attr", "href");
    header.elements
      .wishlistButton()
      .click()
      .then(() => {
        cy.url().should("match", new RegExp(Cypress.config().baseUrl + "/.*/"));
      });
    //.and(".*/.*/");
  });
  it("the contact-icon links to the contactpage", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    header.cookies.setB2b();
    // visit the startpage
    cy.visit("");
    // check if then icon links to the account
    header.elements
      .contactButton()
      .should("have.attr", "href")
      .and("include", header.urls.contact);
  });
  it("the account-icon links to the account", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    header.cookies.setB2b();
    // visit the startpage
    cy.visit("");
    // check if then icon links to the account
    header.elements
      .accountButton()
      .should("have.attr", "href")
      .and("include", header.urls.account);
  });
  it("the cart-icon links to the cart", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    header.cookies.setB2b();
    // visit the startpage
    cy.visit("");
    // check if then icon links to the account
    header.elements
      .cartButton()
      .click()
      .then(() => {
        cy.url().should("match", new RegExp(Cypress.config().baseUrl + "/.*/"));
      });
  });
});
