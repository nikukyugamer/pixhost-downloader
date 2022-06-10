const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'uitg61',
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  viewportWidth: 1500,
  viewportHeight: 1500,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://pixhost.to/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
