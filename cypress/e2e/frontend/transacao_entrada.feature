#language: pt

Funcionalidade: Nova transação apenas com valor de entrada

    Contexto: Acesso aplicação Maratona
        Dado que acesso aplicacao maratona discover

    Cenário: Verifico se a tabela de transação esta visível
        Dado que visualizo o container de transações
        E valido se o botão nova transação esta visível
        Então valido se a tabela transação esta visível
    
    Cenário: Adiciono nova transação com valor de entrada
        Dado que clico no botão nova transação
        E preencho o campo descrição "teste entrada"
        E preencho o campo valor "30"
        E preencho o campo data com a data do dia
        E clico no botão "Salvar"
        Então verifico que a transação foi inserida com o valor "30"