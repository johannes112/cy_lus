import HeaderComponent from "../../pageobjects/pageelements/Header";
import OneTrustPopup from "../../pageobjects/popups/OneTrust";
import ContactPage from "../../pageobjects/ContactPage";

describe("template contact", () => {
  let header;
  let oneTrust;
  let contact;

  before(() => {
    header = new HeaderComponent();
    oneTrust = new OneTrustPopup();
    contact = new ContactPage();
  });
  it("contains the contactcontext when user is in on the contact-page", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit the contactpage
    cy.visit("https://dev.lusini.com:8000" + contact.urls.contact);
    // there should be the contact-context
    contact.elements.context().should("be.visible");
  });
  it("contains a contactform when user is contact-page", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit the contactpage
    cy.visit("https://dev.lusini.com:8000" + contact.urls.contact);
    // there should be the contact-context
    contact.elements.contextFormBuilder().should("exist");
  });
  it("navigates to contact-url when user click to the contact-icon", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit the startpage
    cy.visit("https://dev.lusini.com:8000/");
    cy.url().should("not.include", contact.urls.contact);
    // click on the contact-icon
    contact.elements.contactIcon().click();
    // check if the url contains the wishlist-url
    cy.url().should("include", contact.urls.contact);
  });
});
