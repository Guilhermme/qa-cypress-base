/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable cypress/no-unnecessary-waiting */

import 'cypress-localstorage-commands'
const urlMaratona = Cypress.env('URL_MARATONA')

class MaratonaPage {

  acessarMaratona () {
    cy.session('aplicação maratona', () => {
      cy.visit(urlMaratona)
    })
    cy.visit(urlMaratona)
  }

  botaoNovaTransacao () {
    cy.get('[id="transactions"] > .button').should('be.visible')
  }

  botaoTransacao (botao) {
    cy.contains(botao).click()
  }

  clicoTransacao () {
    cy.get('[id="transactions"] > .button').click()
  }

  checkBoxTema () {
    cy.get('.theme-switch-circle').click({force: true})
  }

  containerTransacoes () {
    cy.get('.container').should('be.visible')
  }

  editarTransacoes () {
    cy.get('.data-table-edit').click()
  }

  erroScreenshot () {
    cy.get('[alt="QA Finance"]').should('be.visible')
  }

  excluirTransacoes () {
    cy.get('[onclick="Transaction.remove(0)"]').click()
  }

  preenchoData () {
    const dataAtual = new Date().toISOString().slice(0, 10)

    cy.get('[id="date"]').type(dataAtual)
  }

  preenchoDescricao (desc) {
    cy.get('[id="description"]').clear().type(desc)
  }

  preenchoValor (valor) {
    cy.get('[id="amount"]').clear().type(valor)
  }

  verificoTabela () {
    cy.get('[id="data-table"]').should('be.visible')
  }

  verificoTema () {
    cy.get('input[value="night-mode"]').should('have.value', 'night-mode')
  }

  verificoTransacao (transacao) {
    cy.get('.total').contains(transacao)
  }

  visualizoCheckboxTema () {
    cy.get('[id="theme-switch"]').should('be.visible')
  }

}

export default MaratonaPage
