describe('Faça um cadastro com método POST no path /api/v1/Authors', () => {

  it('POST Authors', () => {
    cy.request({
      'method': 'POST',
      'url': `${Cypress.env('URL_FAKEREST')}/api/v1/Authors`,
      failOnStatusCode: false,
      'headers': {
        'content-type': 'application/json'
      },
      'body': {
        'id': 1,
        'idBook': 1,
        'firstName': 'teste-api',
        'lastName': 'post-authors'
      },
      'timeout': 60000
    })
      .then((res) => {
        expect(res.status).to.equal(200)
        expect(res.body.id).to.equal(1)
        expect(res.body.idBook).to.equal(1)
        expect(res.body.firstName).to.equal('teste-api')
        expect(res.body.lastName).to.equal('post-authors')
      })
  })

})
