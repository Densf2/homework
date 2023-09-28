import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    viewportHeight: 900,
    viewportWidth: 1400,
    // baseUrl: 'https://www.cypress.io',
    retries: {
      openMode: 2,
      runMode: 2
    },
    // specPattern: 'cypress/e2e/myTests/*.cy.js',
    setupNodeEvents(on, config) {
      const newUrl = config.env.urlFromCli || 'https://www.guru99.com'
      config.baseUrl = newUrl
      return config
    },
  },
});
