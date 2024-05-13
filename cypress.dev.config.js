const { defineConfig } = require("cypress");
// npx cypress open --config-file cypress.dev.config.js

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://lusini.dev",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    local: false,
  },
});
