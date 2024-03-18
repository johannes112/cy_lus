export default class Wishlist {
  constructor() {
    // Your initialization code here
    this.initialize();
  }

  initialize() {
    // Function to be executed first
    cy.log("-> handle Wishlist");
  }

  cssPathes = {
    context: ".WishlistItems",
    contextProductWidget: '[data-cy-ctx="molecules/ProductWidgetSeries"]',
    //content
    stateEmptyWishlist: '[data-cy-state="show-empty-Wishlist"]',
    collectionEmptyWishlist: '[data-cy-collection="EmptyWishlist"]',
    wishlistIcon: ".heart-icon-wrapper",
    snippetNoProducts: "[data-em-snippetname='wishlist_no_products']",
    handleWishlistToggle: '[data-cy-handle="wishlist-toggle"]',
    handleMobileWishlistToggle:
      '[data-cy-handle="desktop-mobile-wishlist-toggle"',
    linkRemoveFromWishlist: ".desktop-heart > span > span",
    stateWishlistRemoveInfo: '[data-cy-state="show-wishlist-remove-info"]',
  };
  elements = {
    context: () => cy.get(this.cssPathes.context),
    contextProductWidget: () => cy.get(this.cssPathes.contextProductWidget),
    //content
    stateEmptyWishlist: () => cy.get(this.cssPathes.stateEmptyWishlist),
    collectionEmptyWishlist: () =>
      cy.get(this.cssPathes.collectionEmptyWishlist),
    wishlistIcon: () => cy.get(this.cssPathes.wishlistIcon),
    snippetNoProducts: () => cy.get(this.cssPathes.snippetNoProducts),
    handleWishlistToggle: () => cy.get(this.cssPathes.handleWishlistToggle),
    handleMobileWishlistToggle: () =>
      cy.get(this.cssPathes.handleMobileWishlistToggle),
    linkRemoveFromWishlist: () => cy.get(this.cssPathes.linkRemoveFromWishlist),
    stateWishlistRemoveInfo: () =>
      cy.get(this.cssPathes.stateWishlistRemoveInfo),
  };

  actions = {};

  cookies = {
    setB2b: () => cy.setCookie("channel", "b2b"),
    setB2c: () => cy.setCookie("channel", "b2c"),
  };
  urls = {
    wishlist: "/wishlist/",
  };
}
