import HeaderComponent from "../../pageobjects/pageelements/Header";
import OneTrustPopup from "../../pageobjects/popups/OneTrust";
import CartPage from "../../pageobjects/CartPage";

describe("template cart", () => {
  let header;
  let oneTrust;
  let cart;

  before(() => {
    header = new HeaderComponent();
    oneTrust = new OneTrustPopup();
    cart = new CartPage();
  });
  it("contains the cart-context when user is in on the cart-page", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // negative test
    cart.elements.context().should("not.exist");
    // visit the accountpage
    cy.visit(cart.urls.cart);
    // there should be the cart-context
    cart.elements.context().should("exist");
  });
  it("shows an info of an empty-cart when i go to the cart", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // negative test
    cart.elements.stateEmptyCart().should("not.exist");
    // visit the cartpage
    cy.visit(cart.urls.cart);
    // there should be hint for the empty cart
    cart.elements.stateEmptyCart().should("exist");
  });
  it("navigates to cart-url when user click to the cart-icon", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit the startpage
    cy.visit("");
    // click on the cart-icon
    cart.elements
      .cartIcon()
      .click()
      .then(() => {
        // check if the url contains the wishlist-url
        cy.url().should("include", cart.urls.cart);
      });
  });
});
