/* eslint-disable cypress/no-unnecessary-waiting */
import 'cypress-wait-until'

Cypress.Commands.add('waitP', () => {
  cy.waitUntil(() => cy.window().then(win => !win.document.querySelector('.icon')), {
    timeout: 15000
  })
})
