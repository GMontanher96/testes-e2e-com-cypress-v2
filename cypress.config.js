const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 40000,
  requestTimeout: 6000,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    setupNodeEvents(on, _config) {
      // implement node event listeners here
    },
  },
})
