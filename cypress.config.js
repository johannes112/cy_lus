const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.lusini.com:8000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
