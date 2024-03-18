describe("template search", () => {
  it("navigates to search route when user click on the search icon", () => {
    cy.setCookie("channel", "b2b");
    cy.visit("https://dev.lusini.com:8000/");
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get('[data-cy-handle="search-input"]').type("hemd");
    cy.get('[data-cy-handle="search-icon"]').click();
    cy.url().should("include", "q=hemd");
    cy.contains("Herrenhemd").should("exist");
  });
});
