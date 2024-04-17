import FooterComponent from "../../pageobjects/pageelements/Footer";
import OneTrustPopup from "../../pageobjects/popups/OneTrust";

describe("app Footer", () => {
  let footer;
  let oneTrust;

  before(() => {
    footer = new FooterComponent();
    oneTrust = new OneTrustPopup();
  });

  beforeEach(() => {
    // Clear cookies
    cy.clearCookies();
    // Clear local storage
    cy.clearLocalStorage();
  });

  it("contains the footer context when user is in on the lusini-page", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.context().should("not.exist");
    // visit the startpage
    cy.visit("");
    // there should be the context of the footer on the page
    footer.elements.context().should("be.visible");
  });
  it("shows the advertisment for the best Shop", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.bestShop().should("not.exist");
    // visit the startpage
    cy.visit("");
    // there should be the context of the footer on the page
    footer.elements.bestShop().should("be.visible");
  });
  it("shows the different payments", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.paymentIcon().should("not.exist");
    // visit the startpage
    cy.visit("");
    // there should be the context of the footer on the page
    footer.elements
      .paymentIcon()
      .should("be.visible")
      .should("have.length.gt", 1);
  });
  it("shows the banner for newsletter registration", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.newsletterState().should("not.exist");
    // visit the startpage
    cy.visit("");
    // the newsletter-bannwe should be visible on the page
    footer.elements.newsletterState().should("be.visible");
  });
  it("shows the footer-content", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.content().should("not.exist");
    // visit the startpage
    cy.visit("");
    // the footer-content should be visible on the page
    footer.elements.content().should("be.visible");
  });
  it("shows the lists", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.listClass().should("not.exist");
    // visit the startpage
    cy.visit("");
    // the navigation should be visible on the page
    footer.elements.listClass().should("be.visible");
  });
  it("shows the list of advantages", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.advantages().should("not.exist");
    // visit the startpage
    cy.visit("");
    // the navigation should be visible on the page
    footer.elements.advantages().should("be.visible");
  });
  it("shows the content of social-links", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.social().should("not.exist");
    // visit the startpage
    cy.visit("");
    // the navigation should be visible on the page
    footer.elements.social().should("be.visible");
  });
  it("shows the content of social-contact", () => {
    // .Social .social
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.orderInfo().should("not.exist");
    // visit the startpage
    cy.visit("");
    // the navigation should be visible on the page
    footer.elements.orderInfo().should("be.visible");
  });
  it("shows the trusted content", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.trustedBadge().should("not.exist");
    // visit the startpage
    cy.visit("");
    // the trust-Badge should be visible on the page
    footer.elements.trustedBadge().should("be.visible");
  });
  it("shows the content of copyright", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.copyright().should("not.exist");
    // visit the startpage
    cy.visit("");
    // the copyright should be visible on the page
    footer.elements.copyright().should("be.visible");
  });
  it("shows the content of the BottomLine", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // negative test
    footer.elements.bottomLine().should("not.exist");
    // visit the startpage
    cy.visit("");
    // the navigation should be visible on the page
    footer.elements.bottomLine().should("be.visible");
  });
  // check links amd buttons
  it("links the entries of the lists to a internal url", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // visit the startpage
    cy.visit("");
    // check all links to be internal links (no https, no www, no .)
    footer.elements.listEntryLink().should("have.attr", "href");
    footer.elements.listEntryLink().each(($link) => {
      const href = $link.attr("href");
      cy.wrap(href).should("not.include", "https://");
      cy.wrap(href).should("not.include", "www");
      cy.wrap(href).should("not.include", ".");
    });
  });
  it("links the entries of the social-icons to a valid url", () => {
    // .social > .icons > a
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // visit the startpage
    cy.visit("");
    // check if then icon links are a valid url
    footer.elements.socialIconLinks().should("have.attr", "href");
    footer.elements.socialIconLinks().each(($link) => {
      const href = $link.attr("href");
      expect(href).to.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/);
    });
  });
  it("links contact infos to a number or an url", () => {
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // visit the startpage
    cy.visit("");
    // check if then info-labels links to a tel or url
    footer.elements.infoLinks().should("have.attr", "href");
    footer.elements.infoLinks().each(($link) => {
      const href = $link.attr("href");
      expect(href).to.match(/^tel:|mailto:|https?:\/\/[^\s/$.?#].[^\s]*$/);
    });
  });
  it("can switch to an other country-shop by using the country-switcher", () => {
    // data-cy-handle="country-switcher"
    // if oneTrust would be active on dev environment it would be closed
    oneTrust.cookies.closeAlertBox();
    // close the B2xModal
    footer.cookies.setB2b();
    // visit the startpage
    cy.visit("");
    // check if then icon links to the account
    footer.elements.countrySwitcher().click();
    footer.elements.countrySwitcherDropdown().should("be.visible");

    cy.get("[data-cy-handle='country-switcher']").first().click();
    cy.url().should("include", "lusini.com");

    // cy.get("[data-cy-handle='country-switcher']").each(($link) => {
    //   cy.wrap($link).should("have.attr", "href").and("include", "/");
    // });
    // footer.elements
    //   .countrySwitcherDropdown()
    //   .first()
    //footer.elements.countrySwitcherDropdown().first().click();
  });
  // how to log all attributes of this element?
});
