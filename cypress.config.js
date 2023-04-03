const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  experimentalStudio: true,
  setLoadTimeout: 5000,
  "chromeWebSecurity": false,
  "env": {
    "LANGUAGE": "pt-BR",
    "LANG": "pt_BR.UTF-8"
  },
});
