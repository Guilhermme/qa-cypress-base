#language: pt

Funcionalidade: Alterar tema

    Contexto: Acesso aplicação Maratona
        Dado que acesso aplicacao maratona discover

    Cenário: Alterar tema da applicação
        Dado que visualizo o checkbox de alterar o tema
        E clico no checkbox para alterar tema
        Então então verifico a class night-mode no html