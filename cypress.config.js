const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/',
    env: {
      apiBaseUrl: 'https://serverest.dev/'
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 
    supportFile: 'cypress/support/e2e.js', 
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
