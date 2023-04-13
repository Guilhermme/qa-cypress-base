// import 'cypress-localstorage-commands'
import MaratonaPage from '../pageobjects/maratona_page'
import { Given } from '@badeball/cypress-cucumber-preprocessor'

const maratonaPage = new MaratonaPage()

Given('que acesso aplicacao maratona discover', () => {
  maratonaPage.acessarMaratona()
})

Given('clico no botão {string}', (botao) => {
  maratonaPage.botaoTransacao(botao)
})

Given('valido se o botão nova transação esta visível', () => {
  maratonaPage.botaoNovaTransacao()
})

Given('que clico no botão nova transação', () => {
  maratonaPage.clicoTransacao()
})

Given('clico no checkbox para alterar tema', () => {
  maratonaPage.checkBoxTema()
})

Given('que visualizo o container de transações', () => {
  maratonaPage.containerTransacoes()
})

Given('clico no botão editar transação', () => {
  maratonaPage.editarTransacoes()
})

Given('simulo a captura de um elemento não existente', () => {
  maratonaPage.erroScreenshot()
})

Given('clico no botão excluir transação', () => {
  maratonaPage.excluirTransacoes()
})

Given('preencho o campo data com a data do dia', () => {
  maratonaPage.preenchoData()
})

Given('preencho o campo descrição {string}', (desc) => {
  maratonaPage.preenchoDescricao(desc)
})

Given('preencho o campo valor {string}', (valor) => {
  maratonaPage.preenchoValor(valor)
})

Given('valido se a tabela transação esta visível', () => {
  maratonaPage.verificoTabela()
})

Given('então verifico a class night-mode no html', () => {
  maratonaPage.verificoTema()
})

Given('verifico que a transação foi inserida com o valor {string}', (transacao) => {
  maratonaPage.verificoTransacao(transacao)
})

Given('que visualizo o checkbox de alterar o tema', () => {
  maratonaPage.visualizoCheckboxTema()
})
