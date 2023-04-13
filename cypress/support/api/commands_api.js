/* eslint-disable cypress/no-unnecessary-waiting */
import 'cypress-wait-until'
import 'cypress-localstorage-commands'

Cypress.Commands.add('Authors_Delete', () => {
  cy.request({
    'method': 'DELETE',
    'url': `${Cypress.env('URL_FAKEREST')}/api/v1/Authors/1`,
    failOnStatusCode: false,
    'headers': {
      'content-type': 'application/json'
    },
    'timeout': 60000
  })
    .then((res) => {
      expect(res.status).to.equal(200)
    })
})
