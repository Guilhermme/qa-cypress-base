const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')

const _ = require('lodash')

const configEnv = {
    develop: {
        env: {
            // Env Ambiente Develop
        }
    },
    staging: {
        env: {
            // Env Ambiente Staging
            URL_MARATONA: 'https://maratona-discover-devfinance.netlify.app/#',
            URL_FAKEREST: 'https://fakerestapi.azurewebsites.net'
        }
    },
    producao: {
        env: {
            // Env Ambiente Produção
        }
    }
}

const setupNodeEvents = async (on, config) => {
    await preprocessor.addCucumberPreprocessorPlugin(on, config)

    allureWriter(on, config)

    const configEnvironment = config.env.configFile || 'staging'

    _.merge(config, configEnv[configEnvironment])

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin.default(config)]
        })
    )

    return config
}

module.exports = defineConfig({
    video: false,
    projectId: 'fbhrt1',
    viewportWidth: 1920,
    viewportHeight: 1000,
    requestTimeout: 10000,
    allureLogGherkin: true,
    pageLoadTimeout: 400000,
    chromeWebSecurity: false,
    allureAttachRequests: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    env: {
    // Env Global -> Mescla com as env de ambiente

        allureLogGherkin: true,
        allureAttachRequests: true
    },
    e2e: {
        specPattern: ['**/*.feature', 'cypress/e2e/api/**/*.cy.js'],
        setupNodeEvents
    }
})
