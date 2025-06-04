const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://front.serverest.dev', // URL base da aplicação
    env: {
      apiBaseUrl: 'http://serverest.dev/', // URL da sua API
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Para encontrar arquivos de teste E2E
    supportFile: 'cypress/support/e2e.js', // Arquivo de suporte E2E
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
