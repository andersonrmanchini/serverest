const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "shjmm3",
  e2e: {
    baseUrl: Cypress.env('BASE_URL'),
    env: {
      apiBaseUrl: Cypress.env('API_URL'),
    },
    defaultCommandTimeout: 8000,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    reporter: 'junit', 
    reporterOptions: {
      mochaFile: 'cypress/results/output.xml',
      toConsole: true,
    }
  },
});
