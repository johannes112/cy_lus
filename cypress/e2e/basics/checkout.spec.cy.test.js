describe("template checkout", () => {
  it("goes to the checkout as a guest and make an order by prepayment", () => {
    // Mocking the necessary Cypress commands
    const cy = {
      setCookie: jest.fn(),
      visit: jest.fn(),
      get: jest.fn().mockReturnThis(),
      click: jest.fn().mockReturnThis(),
      type: jest.fn().mockReturnThis(),
      last: jest.fn().mockReturnThis(),
      should: jest.fn().mockReturnThis(),
    };

    // Set up any necessary test data or environment

    // Call the function or code under test
    cy.setCookie("channel", "b2b");
    cy.visit("/pdp/125039/");
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get('[data-cy-handle="add-to-cart-btn"]').click();
    cy.get('[data-cy-handle="go-to-checkout-btn"]').click();
    cy.get('[data-cy-state="show-cart-summary-btn"]').click();
    cy.get('[data-cy-handle="guest-btn"]').click();
    cy.get('[data-cy-handle="email-input"]').type("cypress@test.de");
    cy.get('[data-cy-handle="register-btn"]').click();
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
    cy.get('[data-cy-handle="submit-btn"]').click();
    cy.get(".CheckRadio").last().click();
    cy.get('[data-cy-handle="submit-btn"]').click();
    cy.get('[data-cy-handle="submit-order"]').click();
    cy.get('[data-cy-ctx="template/checkout/Success"]').should("exist");

    // Assert the expected outcome
    expect(cy.setCookie).toHaveBeenCalledWith("channel", "b2b");
    expect(cy.visit).toHaveBeenCalledWith("/pdp/125039/");
    expect(cy.get).toHaveBeenCalledWith("#onetrust-accept-btn-handler");
    expect(cy.click).toHaveBeenCalledTimes(15);
    expect(cy.type).toHaveBeenCalledTimes(8);
    expect(cy.last).toHaveBeenCalledTimes(2);
    expect(cy.should).toHaveBeenCalledWith("exist");
  });
});
