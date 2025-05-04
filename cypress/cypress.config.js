const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com",
    setupNodeEvents(on, config) {
      return config
    },
    specPattern: "cypress/e2e/tests/**/*.cy.js",
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }
});
