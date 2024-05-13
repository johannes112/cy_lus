const { defineConfig } = require("cypress");
// npx cypress open --config-file cypress.config.js
// OR
// npx cypress open --config baseUrl=
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.lusini.com:8000",
  },
  env: {
    local: true,
  },
});
