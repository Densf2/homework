import { defineConfig } from "cypress";
import fs from "fs-extra";

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    viewportHeight: 900,
    viewportWidth: 1400,
    defaultCommandTimeout: 4000,
    // baseUrl: 'https://www.cypress.io',
    retries: {
      openMode: 1,
      runMode: 1
    },
    // specPattern: 'cypress/e2e/myTests/*.cy.js',
    setupNodeEvents(on, config) {
      on('task', {log(message) {console.log(message); return null }})
      on('task', {saveUrl(url) {fs.writeFileSync('url.json', JSON.stringify(url)); return null }})
      const newUrl = config.env.urlFromCli || 'https://www.guru99.com'
      config.baseUrl = newUrl

      on("before:browser:launch", (browser, launchOptions) => {
        console.log(launchOptions.args);
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });
   
      return config
    },
  },
});
