const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      "cpf": "01348288442",
      "senha": "6515",
      "provedor": "tim"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  experimentalStudio: true,
  "pageLoadTimeout": 10000


});
