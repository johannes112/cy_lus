import HeaderComponent from "../../pageobjects/pageelements/Header";
import OneTrustPopup from "../../pageobjects/popups/OneTrust";

describe("template pdp", () => {
  it("navigates to pdp url when user click to an image", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.visit("https://dev.lusini.com:8000/");
    cy.get(".ImgBox > img").first().click();

    cy.url().should("include", "/pdp/");
  });

  it("on the productpage there should be a breadcrumb with the name of the product", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.get(".Breadcrumbs").should("not.exist");

    cy.visit("https://dev.lusini.com:8000/pdp/103885/");

    cy.get(".Breadcrumbs")
      .invoke("text")
      .then((text) => {
        cy.log("text: ", text);
        expect(text).to.contain("Basic");
      });
  });

  it("on the productpage there should be the context of a pdp", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.get('[data-cy-ctx="templates/PDP"]').should("not.exist");

    cy.visit("https://dev.lusini.com:8000/pdp/103885/");

    cy.get('[data-cy-ctx="templates/PDP"]').should("exist");
  });

  it("on the pdp there should be an mainimage", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.get(".main-image-container").should("not.exist");

    cy.visit("https://dev.lusini.com:8000/pdp/103885/");

    cy.get(".main-image-container").should("exist");
  });
  it("on the pdp there should be a thumbnail", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.get(".thumbnail-list").should("not.exist");

    cy.visit("https://dev.lusini.com:8000/pdp/103885/");

    cy.get(".thumbnail-list").should("exist");
  });

  it("on the pdp there should be a box with informations of the product", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.get(".InformationBox").should("not.exist");

    cy.visit("https://dev.lusini.com:8000/pdp/103885/");

    // InfoBox is there
    cy.get(".InformationBox").should("exist");
    // infos of the product are there
    cy.get(".product-info").should("exist");
  });

  it("on the pdp there should be a buy box", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.get('[data-cy-collection="BuyBox"]').should("not.exist");

    cy.visit("https://dev.lusini.com:8000/pdp/103885/");

    cy.get('[data-cy-collection="BuyBox"]').should("exist");
  });

  it("within the buybox i can increase the pieces of order amount of the products", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.get('[data-cy-collection="BuyBox"]').should("not.exist");

    cy.visit("https://dev.lusini.com:8000/pdp/103885/");

    // increase the amount of the product
    cy.get('[data-cy-handle="increase-amount"]').click();
    // check if the amount of the product is increased
    cy.get('input[data-cy-handle="amount"]')
      .invoke("val")
      .then((text) => {
        const amount = parseInt(text.trim()); // Parse text as an integer
        expect(amount).to.be.greaterThan(1); // Assert that the amount is greater than 1
      });
  });

  it("within the buybox i can't decrease the pieces of order amount lower than 1", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.get('[data-cy-collection="BuyBox"]').should("not.exist");

    cy.visit("https://dev.lusini.com:8000/pdp/103885/");

    // increase the amount of the product
    cy.get('[data-cy-handle="decrease-amount"]').click();
    // check if the amount of the product is increased
    cy.get('input[data-cy-handle="amount"]')
      .invoke("val")
      .then((text) => {
        const amount = parseInt(text.trim()); // Parse text as an integer
        expect(amount).to.be.equal(1); // Assert that the amount is greater than 1
      });
  });

  it("within the buybox i can push a product into the cart", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.get('[data-cy-collection="BuyBox"]').should("not.exist");

    cy.visit("https://dev.lusini.com:8000/pdp/103885/");

    // increase the amount of the product
    cy.get('[data-cy-handle="add-to-cart-btn"]').click();
    // check if the amount of the product is increased
    cy.get('[data-cy-ctx="partials/FlyoutCart"]').should("exist");
    cy.get('[data-cy-state="show-latest-item"]').should("exist");
  });

  it("I can go back to the product by clicking the overlay", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.get('[data-cy-ctx="templates/PDP"]').should("not.exist");

    cy.visit("https://dev.lusini.com:8000/pdp/103885/");

    // increase the amount of the product
    cy.get('[data-cy-handle="add-to-cart-btn"]').click();
    cy.get('[data-cy-ctx="partials/FlyoutCart"]').should("exist");
    cy.get('[data-cy-handle="overlay-ref-click"]').click();
    cy.get('[data-cy-handle="main-image-click"]')
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  });

  it("I can open the lightbox by clicking the image", () => {
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    cy.get('[data-cy-ctx="templates/PDP"]').should("not.exist");

    cy.visit("https://dev.lusini.com:8000/pdp/103885/");
    cy.get('[data-cy-handle="main-image-click"]').click();

    cy.get('[data-cy-collection="GalleryLightbox"]').should("exist");
  });
});
