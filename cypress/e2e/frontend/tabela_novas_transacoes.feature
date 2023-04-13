#language: pt

Funcionalidade: Capturar tabela novas transações

    Contexto: Acesso aplicação Maratona
        Dado que acesso aplicacao maratona discover

    Cenário: Verifico se a tabela de transação esta visível
        Dado que visualizo o container de transações
        E valido se o botão nova transação esta visível
        Então valido se a tabela transação esta visível