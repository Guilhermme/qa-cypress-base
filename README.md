# QA-CYPRESS-BASE

Projeto desafio para automatizar cenários de API's e Front-end

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](https://)** para saber como implantar o projeto.

### 📋 Pré-requisitos

Para instalação do cypress e execução será necessário:

* Node.JS
* Editor de código-fonte [vscode]

## 📌 Configurações de ambiente

As variaveis de ambiente ficam configuradas no arquivo **cypress.config.js** que contem dois ambientes **develop** e **staging**

Para selecionar o ambiente altere na função **setupNodeEvents** o valor da variável **configEnvironment = config.env.configFile || 'alterar-valor'**

### 🔧 Instalação

Com o projeto Desafio já clonado então faça.

Instale as dependências via terminal:

```
npm i
```

Execute o comando para instalação do cypress e exibição da interface:

```
npm run cy:open
```

## ⚙️ Executando os testes

Comando para executar os testes de front-end em headless:

```
npm run cy:front
```

Comando para executar os testes de back-end em headless:

```
npm run cy:api
```

Comando para executar um arquivo de teste específico em headless:

```
npm run cy:feature **/NAMEFILE.test.js
```

## ⚙️ Executando os testes com Alurre Reports

O comando **./report.sh** junto com algum comando de execução personalizado **cy:front**, executa os testes gerando um report:

```
./report.sh cy:front
```

Após executar os testes via report, para exibir as metricas digite:

```
npm run report:show
```

## 📦 Execução de um Artifact gerado no CI/CID-Pipelines de testes que falharam

* Necessário ter a lib **allure-commandline** instalada, digite via terminal:

```
npm install -g allure-commandline --save-dev
```

* Acesse o Git **[QA-BASE-CYPRESS](https://)** menu CI/CID -> Pipelines
* Acesse o Job que falhou, no lado direito em Job artifacts clique em download
* Extraia o arquivo baixado, acesse a pasta [cypress/allure-results] abra um terminal e digite:

```
allure serve.
```

## ✒️ Autores

Este projeto é gerenciado pela equipe de qualidade [Guilherme Lima] 🚀