/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

// Error: We've tried to resolve your step definitions at cypress\integration, but that doesn't seem to exist. 
// As of version 2.0.0 it's required to set step_definitions in your cypress-cucumber-preprocessor configuration. 
// Look for nonGlobalStepDefinitions and add stepDefinitions right next to it. 
// It should match your cypress configuration has set for integrationFolder. We no longer rely on getting information from that file as it was unreliable and problematic across Linux/MacOS/Windows especially since the config file could have been passed as an argument to cypress.

//"cypress-cucumber-preprocessor": { "nonGlobalStepDefinitions": true, "nonGlobalStepBaseDir": "step_definitions", "commonPath": "common", "stepDefinitions": "step_definitions" }

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
  }
  on('file:preprocessor', cucumber(options))
}