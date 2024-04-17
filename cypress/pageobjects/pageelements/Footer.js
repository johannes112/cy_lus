export default class Footer {
  constructor() {
    // Your initialization code here
    this.initialize();
  }

  initialize() {
    // Function to be executed first
    cy.log("-> handle Header");
  }

  cssPathes = {
    context: '[data-cy-ctx="app/Footer"]',
    bestShopClass: ".BestShop",
    paymentIconClass: ".payment-icon",
    newsletterState: '[data-cy-state="newsletter-visible"]',
    contentClass: ".Content .content",
    listClass: ".lists.desktop",
    listEntryLink: ".lists.desktop > div> ul > li > a",
    advantagesClass: ".advantages",
    socialClass: ".Social .social",
    socialIconLinks: ".social > .icons > a",
    infoLinks: ".info-contact > a",
    orderInfoClass: ".info-contact",
    trustedBadge: ".Trusted > .icons-wrapper > div",
    copyrightClass: ".Copyright",
    bottomLineClass: ".BottomLine",
    countrySwitcherHandle: '[data-cy-handle="country-switcher"]',
    countrySwitcherDropdown: ".country-dropdown",
  };

  elements = {
    context: () => cy.get(this.cssPathes.context),
    //content
    bestShop: () => cy.get(this.cssPathes.bestShopClass),
    paymentIcon: () => cy.get(this.cssPathes.paymentIconClass),
    newsletterState: () => cy.get(this.cssPathes.newsletterState),
    content: () => cy.get(this.cssPathes.contentClass),
    listClass: () => cy.get(this.cssPathes.listClass),
    listEntryLink: () => cy.get(this.cssPathes.listEntryLink),
    advantages: () => cy.get(this.cssPathes.advantagesClass),
    social: () => cy.get(this.cssPathes.socialClass),
    socialIconLinks: () => cy.get(this.cssPathes.socialIconLinks),
    orderInfo: () => cy.get(this.cssPathes.orderInfoClass),
    trustedBadge: () => cy.get(this.cssPathes.trustedBadge),
    copyright: () => cy.get(this.cssPathes.copyrightClass),
    bottomLine: () => cy.get(this.cssPathes.bottomLineClass),
    countrySwitcher: () => cy.get(this.cssPathes.countrySwitcherHandle),
    countrySwitcherDropdown: () =>
      cy.get(this.cssPathes.countrySwitcherDropdown),
    infoPointLabels: () => cy.get(".lists.desktop > div> ul > li > a"),
    socialIcons: () => cy.get(".social > .icons"),
    infoLinks: () => cy.get(".info-contact > a"),

    linkedNumbers: () => cy.get(".info-contact > a"),
    countrySwitcher: () => cy.get('[data-cy-handle="country-switcher"]'),
    trustedBadge: () => cy.get(".Trusted > .icons-wrapper > div"),
    //copyRight
    copyRightLabels: () => cy.get(".Copyright > div > div > div > a"),
    bottomLineInfoText: () => cy.get('[data-cy-handle="b2x-toggle"]'),
  };

  actions = {
    contextShouldBeVisible: () => this.elements.context().should("be.visible"),

    changeCustomerType: () => this.elements.b2bButton().click(),
    executeSearchFor: (value) => {
      this.elements.searchField().type(value);
      this.elements.searchIcon().click();
    },
  };

  cookies = {
    setB2b: () => cy.setCookie("channel", "b2b"),
    setB2c: () => cy.setCookie("channel", "b2c"),
  };
}
