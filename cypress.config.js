const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "shjmm3",
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      baseUrl: process.env.BASE_URL,
      apiBaseUrl: process.env.API_URL,
    },
    defaultCommandTimeout: 8000,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",

    setupNodeEvents(on, config) {
        config.env = {
        ...config.env,
        ...process.env,
      }
    },

    reporter: 'junit', 
    reporterOptions: {
      mochaFile: 'cypress/results/output.xml',
      toConsole: true,
    }
  },
});
