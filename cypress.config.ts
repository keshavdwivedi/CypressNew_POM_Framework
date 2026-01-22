const { defineConfig } = require("cypress");
import cypressMochawesomeReporter from 'cypress-mochawesome-reporter/plugin'

// export default defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
//   e2e: {
//     setupNodeEvents(on, config) {
//     require('cypress-mochawesome-reporter/plugin')(on);
//     },
//       env:{
//       "webURL":"https://magento.softwaretestingboard.com/"
//     },
//     baseUrl:"https://magento.softwaretestingboard.com/",
//     watchForFileChanges:false,
//     defaultCommandTimeout: 7000,
//     video:false
//     // "screenshotsFolder": "./cypress/e2e/src/screenshots",
//     //  "videosFolder": "./cypress/e2e/src/videos",
//     //specPattern:"cypress/e2e/**/*.spec.js",
//   },
// });

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochareports',
    charts: true,
    overwrite: true,
    html: true,
    json: true
  },
  e2e: {
    // Point to your app's base URL when running tests against a dev server
    baseUrl: 'https://automationexercise.com/',

    video:false, //true for video recording

    defaultCommandTimeout: 10000, // Set to 10 seconds
    pageLoadTimeout: 120000, // Set to 2 minutes
    
    // Where your spec files live
    specPattern: 'cypress/e2e/**/*.cy.spec.ts',

    // Support file path
    supportFile: 'cypress/support/e2e.ts',

    //disable or enable autorun of spec files
    watchForFileChanges:false,

    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    viewportHeight: 1080,
    viewportWidth: 1920,

    // Node event handlers (optional) — use this to register preprocessors, modify config, etc.
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      cypressMochawesomeReporter(on)
      // Example: return config unchanged
      return config
    }
  }
})
