import HeaderComponent from "../../pageobjects/pageelements/Header";
import OneTrustPopup from "a../../pageobjects/popups/OneTrust";

describe("template search", () => {
  it("navigates to search route when user click on the search icon", () => {
    cy.setCookie("channel", "b2b");
    const header = new HeaderComponent();
    const oneTrust = new OneTrustPopup();
    cy.visit("https://dev.lusini.com:8000/");
    cy.clearCookies();
    oneTrust.actions.executeActionWithVisibilityCheck("acceptAllCookies");
    // cy.get("#onetrust-accept-btn-handler").click();
    header.actions.executeSearchFor("hemd");
    cy.url().should("include", "q=hemd");
    cy.contains("Herrenhemd").should("exist");
  });
});
