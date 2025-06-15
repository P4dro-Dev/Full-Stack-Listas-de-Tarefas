# Sistema ToDoList com Node.js, Express e MySQL

Este projeto é um sistema simples de Lista de Tarefas (ToDoList) desenvolvido para gerenciamento de atividades diárias. Ele permite aos usuários cadastrar, listar, marcar como concluídas e remover tarefas. O projeto é dividido em um frontend interativo e um backend robusto, com toda a persistência de dados gerenciada por um banco de dados MySQL.

## Descrição Geral

O objetivo principal desta atividade prática é construir uma ferramenta que permita aos usuários:
* **Cadastrar novas tarefas:** Adicionar itens à lista de atividades.
* **Listar todas as tarefas:** Visualizar de forma organizada todas as tarefas existentes.
* **Marcar tarefas como concluídas:** Alterar o status de uma tarefa de pendente para concluída, ou vice-versa.
* **Remover tarefas:** Excluir tarefas que não são mais necessárias.

O projeto é modularizado, com o back-end implementado em Node.js e Express, e os dados persistidos no MySQL. O front-end é construído com HTML5, CSS3 e JavaScript puro, garantindo uma interface simples e funcional.

## Funcionalidades Obrigatórias

As seguintes funcionalidades essenciais foram implementadas:
1.  [cite_start]**Cadastro de Tarefas;** 
2.  [cite_start]**Listagem de Tarefas;** 
3.  [cite_start]**Marcar como Concluída;** 
4.  [cite_start]**Remoção de Tarefa;** 
5.  [cite_start]**Persistência dos Dados no MySQL.** 

## Tecnologias Utilizadas

### Frontend
* [cite_start]**Linguagem:** JavaScript 
* **Framework:** Não utilizado (implementação em JavaScript puro, conforme opção da avaliação).
* [cite_start]**Tecnologias Base:** HTML5, CSS3 
* [cite_start]**Bibliotecas Recomendadas (para requisições HTTP):** A comunicação com o backend é feita usando a API `fetch` nativa do navegador, que atende ao propósito de requisições HTTP de forma similar ao Axios.

### Backend
* [cite_start]**Linguagem:** JavaScript 
* [cite_start]**Plataforma:** Node.js 
* [cite_start]**Framework:** Express.js 
* [cite_start]**ORM/Query Builder (Opcional):** Não utilizado para manter a simplicidade; a interação com o banco de dados é direta via `mysql2/promise`. 
* **Outras Bibliotecas:**
    * [cite_start]`mysql2`: Driver para conexão e interação com o MySQL. 
    * [cite_start]`cors`: Middleware para habilitar requisições de origem cruzada (Cross-Origin Resource Sharing). 
    * [cite_start]`dotenv`: Para carregar variáveis de ambiente sensíveis (como credenciais do banco de dados) de um arquivo `.env`. 
    * `body-parser`: (Integrado no Express.js 4.16.0+ via `express.json()`). [cite_start]Utilizado para analisar o corpo das requisições HTTP em formato JSON. 
    * [cite_start]`nodemon`: Ferramenta para reiniciar automaticamente o servidor Node.js durante o desenvolvimento. 

### Banco de Dados
* [cite_start]**SGBD:** MySQL 
* [cite_start]**Ferramentas Sugeridas (para gerenciamento):** MySQL Workbench, DBeaver, phpMyAdmin, etc. 

## Modelagem do Banco de Dados

[cite_start]O banco de dados utiliza uma única tabela para armazenar as tarefas: `tarefas`. 

| Campo        | Tipo          | Restrição                          |
|--------------|---------------|------------------------------------|
| `id`         | `INT`         | [cite_start]`PRIMARY KEY`, `AUTO_INCREMENT`    |
| `descricao`  | `VARCHAR(255)`| [cite_start]`NOT NULL`                         |
| `status`     | `BOOLEAN`     | [cite_start]`DEFAULT FALSE` (`FALSE` = pendente) |
| `data_criacao`| `DATETIME`    | [cite_start]`DEFAULT CURRENT_TIMESTAMP`        |


## API - Endpoints da Aplicação

[cite_start]O backend expõe os seguintes endpoints RESTful para gerenciar as tarefas: 

* [cite_start]`POST /tarefas`: Cadastrar uma nova tarefa. 
* [cite_start]`GET /tarefas`: Listar todas as tarefas. 
* [cite_start]`PUT /tarefas/:id`: Alterar o status de uma tarefa (marcar como concluída/pendente). 
* [cite_start]`DELETE /tarefas/:id`: Remover uma tarefa. 

## Estrutura Sugerida do Projeto

[cite_start]O projeto segue uma estrutura de pastas organizada para facilitar a manutenção e o entendimento:
