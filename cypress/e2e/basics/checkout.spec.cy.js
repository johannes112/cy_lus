describe("template checkout", () => {
  it("goes to the checkout as a guest and make an order by prepayment", () => {
    cy.setCookie("channel", "b2b");
    // open the url of a productpage
    cy.visit("https://dev.lusini.com:8000/pdp/125039/");

    // accept the cookie banner
    cy.get("#onetrust-accept-btn-handler").click();

    // Productpage
    // put an article in to the cart
    cy.get('[data-cy-handle="add-to-cart-btn"]').click();

    // Sidebar
    // go to the cart
    cy.get('[data-cy-handle="go-to-checkout-btn"]').click();

    // Cart
    // click to go the checkout
    cy.get('[data-cy-state="show-cart-summary-btn"]').click();

    // Checkout
    // click on the button to order as a guest
    cy.get('[data-cy-ctx="molecules/account/CheckoutLoginForm"]').should(
      "be.visible",
      {
        timeout: 5000,
      }
    );
    cy.get('[data-cy-handle="guest-btn"]').click();

    // Checkout - Guestlogin
    // insert the email address
    cy.get('[data-cy-ctx="templates/checkout/Guest"]').should("be.visible", {
      timeout: 5000,
    });
    cy.get('[data-cy-handle="email-input"]').type("cypress@test.de");
    // click on the button to go to the adress form
    cy.get('[data-cy-handle="register-btn"]').click();

    // Checkout - Adressform
    // fill in data into the adress form
    cy.get('[data-cy-ctx="molecules/account/MainAddressForm"]').should(
      "be.visible",
      {
        timeout: 5000,
      }
    );
    cy.get('[data-cy-handle="salutationId-input"]').last().click();
    cy.get('[data-cy-handle="firstName-input"]').type("Cypress");
    cy.get('[data-cy-handle="lastName-input"]').type("Test");
    cy.get('[data-cy-handle="company-input"]').type("Cypress Test");
    cy.get('[data-cy-handle="vat-id-input"]').type("000000");
    cy.get('[data-cy-handle="zipcode-input"]').type("12345");
    cy.get('[data-cy-handle="city-input"]').type("Cypress City");
    cy.get('[data-cy-handle="street-input"]').type("Cypress Street");
    cy.get('[data-cy-handle="houseNumber-input"]').type("0");
    cy.get('[data-cy-handle="phoneNumber-input"]').type("0123456789");
    // click on the button to go to the payment method
    cy.get('[data-cy-handle="submit-btn"]').click();

    // Checkout - Payment
    // choose the payment method
    cy.get('[data-cy-ctx="templates/checkout/Payment"]').should("be.visible", {
      timeout: 5000,
    });
    cy.get(".CheckRadio").last().click();
    // continue to the overview
    cy.get(".paymentItem-headline", { timeout: 3000 }).should("exist");
    cy.get('[data-cy-handle="submit-btn"]').click();

    // Checkout - Overview
    // make the order
    // cy.get('[data-cy-handle="submit-order"]').click();
    // check if the order was successful
    // cy.get('[data-cy-ctx="template/checkout/Success"]').should("exist");
    // cy.get(".zl-pag", { timeout: 5000 }).should("exist");
  });
});
