describe('Faça um find all com o método GET no path /api/v1/Authors e valide o resultado retornado', () => {

  it('GET Authors', () => {
    cy.request({
      'method': 'GET',
      'url': `${Cypress.env('URL_FAKEREST')}/api/v1/Authors`,
      failOnStatusCode: false,
      'headers': {
        'content-type': 'application/json'
      },
      'timeout': 60000
    })
      .then((res) => {
        expect(res.status).to.equal(200)
        expect(res.body[0].id).to.equal(1)
        expect(res.body[0].idBook).to.equal(1)
        expect(res.body[0].firstName).to.equal('First Name 1')
        expect(res.body[0].lastName).to.equal('Last Name 1')
      })
  })

})
