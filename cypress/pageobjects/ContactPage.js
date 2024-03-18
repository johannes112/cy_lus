export default class Contact {
  constructor() {
    // Your initialization code here
    this.initialize();
  }

  initialize() {
    // Function to be executed first
    cy.log("-> handle Contact");
  }

  cssPathes = {
    context: '[data-cy-ctx="templates/Service"]',
    //content
    contextFormBuilder: '[data-cy-ctx="organisms/FormBuilder"]',
    contactIcon: ".contact",
  };
  elements = {
    context: () => cy.get(this.cssPathes.context),
    //content
    contextFormBuilder: () => cy.get(this.cssPathes.contextFormBuilder),
    contactIcon: () => cy.get(this.cssPathes.contactIcon),
  };

  actions = {
    // contextShouldBeVisible: () => this.elements.context().should("be.visible"),
    // contextFormBuilderShouldBeVisible: () =>
    //   this.elements.contextFormBuilder().should("be.visible"),
  };

  cookies = {
    setB2b: () => cy.setCookie("channel", "b2b"),
    setB2c: () => cy.setCookie("channel", "b2c"),
  };
  urls = {
    contact: "/helpandservice/kontakt/",
  };
}
