import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
        on: Cypress.PluginEvents,
        config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
          "file:preprocessor",
          createBundler({
            plugins: [createEsbuildPlugin(config)],
          })
      );
      return config;
    },
    fixturesFolder: false,
    baseUrl: 'http://localhost:3000'
  },
});