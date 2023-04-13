/* eslint-disable handle-callback-err */
require('cypress-xpath')
import 'cypress-wait-until'
import 'parse-multipart-data'
import '@4tw/cypress-drag-drop'
import 'cypress-intercept-formdata'
import '@shelex/cypress-allure-plugin'
import 'cypress-localstorage-commands'

import './api/commands_api'

afterEach(() => {
  const date = new Date()
  const options = {year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'}
  cy.allure().attachment('timestamp', `${date.toISOString()}`, 'text/plain')
  cy.allure().attachment('pt-br', `${date.toLocaleTimeString('pt-br', options)}`, 'text/plain')
})
