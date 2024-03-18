import HeaderComponent from "../../pageobjects/pageelements/Header";
import OneTrustPopup from "../../pageobjects/popups/OneTrust";
import Wishlist from "../../pageobjects/WishlistPage";

describe("template wishlist", () => {
  let header;
  let oneTrust;
  let wishlist;

  before(() => {
    header = new HeaderComponent();
    oneTrust = new OneTrustPopup();
    wishlist = new Wishlist();
  });

  it("contains the wishlist context when user is in on the wishlist-page", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit the wishlist
    wishlist.elements.context().should("not.exist");
    cy.visit(wishlist.urls.wishlist);
    // there should be a product in the wishlist
    wishlist.elements.context().should("exist");
  });
  it("navigates to wishlist-url when user click to the heart-image", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit the startpage
    cy.visit("");
    // click on the heart-icon
    cy.url().should("not.include", wishlist.urls.wishlist);
    // check if then icon links to the wishlist
    wishlist.elements.wishlistIcon().should("have.attr", "href", "/wishlist/");
  });

  it("should be empty by default", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // there should be a message for empty products
    wishlist.elements.snippetNoProducts().should("not.exist");
    // visit the wishlist-page
    cy.visit(wishlist.urls.wishlist);
    // there should be a message for empty products
    wishlist.elements.collectionEmptyWishlist().should("exist");
  });

  it("should be an item in the wishlist if I pressed the icon on a pdp", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit a pdp
    cy.visit("/pdp/103885/");
    // click on the wishlist-toogle-icon
    cy.get('[data-cy-handle="wishlist-toggle"]').click();
    // visit the wishlist
    cy.visit(wishlist.urls.wishlist);
    // there should be a product in the wishlist
    wishlist.elements.contextProductWidget().should("exist");
  });

  it("can remove a product from the wishlist by clicking the link", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit a pdp
    cy.visit("https://dev.lusini.com:8000/pdp/103885/");
    // click on the wishlist-toogle-icon
    cy.get('[data-cy-handle="wishlist-toggle"]').click();
    // wishlist.context should not exist
    wishlist.elements.contextProductWidget().should("not.exist");
    // visit the wishlist
    cy.visit(wishlist.urls.wishlist);
    // there should be a product in the wishlist
    wishlist.elements.contextProductWidget().should("exist");
    // click on the remove-link
    wishlist.elements.linkRemoveFromWishlist().click();
    // there should be no product in the wishlist
    wishlist.elements.contextProductWidget().should("not.exist");
  });

  it("appears a popup which informs about the removing of a product from the wishlist by clicking the link", () => {
    header.cookies.setB2b();
    oneTrust.cookies.closeAlertBox();
    // visit a pdp
    cy.visit("/pdp/103885/");
    // click on the wishlist-toogle-icon
    cy.get('[data-cy-handle="wishlist-toggle"]').click();
    // visit the wishlist
    cy.visit(wishlist.urls.wishlist);
    // there should be a product in the wishlist
    wishlist.elements.contextProductWidget().should("exist");
    // click on the remove-link
    wishlist.elements.handleMobileWishlistToggle().click();
    // there should be a popup
    wishlist.elements.stateWishlistRemoveInfo().should("exist");
  });
});
