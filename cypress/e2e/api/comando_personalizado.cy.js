describe('Faça um comando de chamada rest personalizado no arquivo cypress/support/commands.js e utilize este comando criado em seu aquivo de teste', () => {

  it('GET Authors', () => {
    cy.Authors_Delete()
  })

})
