# 🧪 Cypress API & E2E Test Automation Framework

-----

Bem-vindo ao framework de automação de testes construído com **Cypress**, focado em cobrir tanto testes de **API** quanto de **End-to-End (E2E)**. Este projeto utiliza o poder do Cypress para interagir com APIs via `cy.request()` e simular interações de usuário em aplicações web.

-----

## 🚀 Começando

Siga estas instruções para configurar e executar os testes localmente.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão LTS recomendada) e o [npm](https://www.npmjs.com/) (que vem com o Node.js) instalados em sua máquina.

### Instalação

1.  **Clone este repositório:**

    ```bash
    git clone https://github.com/andersonrmanchini/serverest.git
    cd serverest
    ```

    (Ajuste o link do repositório conforme o seu projeto no GitHub.)

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

-----

## ⚙️ Configuração

O arquivo `cypress.config.js` é o coração da configuração do Cypress. Nele, você pode definir URLs base, variáveis de ambiente e outras configurações globais.

### URLs Base

Este projeto utiliza variáveis de ambiente para gerenciar as URLs da aplicação (E2E) e da API, permitindo fácil alternância entre ambientes (desenvolvimento, staging, produção).

  * **URL da Aplicação (E2E):** `baseUrl` no `cypress.config.js`
  * **URL da API:** `Cypress.env('apiBaseUrl')` definida no `cypress.config.js`

**Exemplo de `cypress.config.js`:**

```javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // URL da sua aplicação web para testes E2E
    env: {
      apiBaseUrl: 'http://localhost:8080/api', // URL da sua API
    },
    setupNodeEvents(on, config) {
      // Implementar node event listeners aqui
    },
  },
});
```

### Variáveis de Ambiente Sensíveis

Para informações sensíveis (como chaves de API, tokens de acesso), é **altamente recomendado** usar variáveis de ambiente do sistema operacional ou um arquivo `.env` (que deve ser ignorado pelo Git). O Cypress pode acessá-las via `Cypress.env('NOME_DA_VARIAVEL')`.

-----

## 📝 Estrutura do Projeto

A estrutura de pastas foi organizada para facilitar a manutenção e a escalabilidade:

```
serverest/
├── cypress/
│   ├── e2e/
│   │   ├── api/          # Contém os testes de API (ex: users.cy.js, products.cy.js)
│   │   └── ui/           # Contém os testes E2E de interface (ex: login.cy.js, dashboard.cy.js)
│   ├── fixtures/         # Dados de teste estáticos (JSON, CSV, etc.)
│   ├── support/
│   │   ├── commands.js   # Comandos personalizados para API (apiGet, apiPost, etc.) e UI
│   │   └── e2e.js        # Arquivo de suporte global (importa commands.js)
│   └── cypress.config.js # Configurações principais do Cypress
├── node_modules/         # Dependências do projeto
├── package.json          # Metadados do projeto e scripts npm
├── package-lock.json     # Gerado pelo npm, trava as versões das dependências
└── README.md             # Este arquivo
```

-----

## ▶️ Como Executar os Testes

Você pode executar os testes no modo interativo (abrir a UI do Cypress) ou no modo headless (via linha de comando).

### Modo Interativo (Cypress Test Runner)

Para abrir a interface do Cypress e selecionar os testes manualmente:

```bash
npx cypress open
```

### Modo Headless (Via Linha de Comando)

Útil para integração contínua (CI) e execução rápida de todos os testes ou de um subconjunto específico.

  * **Executar todos os testes:**
    ```bash
    npx cypress run
    ```
  * **Executar apenas testes de API:**
    ```bash
    npx cypress run --spec "cypress/e2e/api/*.cy.js"
    ```
  * **Executar apenas testes E2E de UI:**
    ```bash
    npx cypress run --spec "cypress/e2e/ui/*.cy.js"
    ```
  * **Executar um arquivo de teste específico:**
    ```bash
    npx cypress run --spec "cypress/e2e/api/users.cy.js"
    ```
  * **Executar em um ambiente específico (sobrescrevendo variáveis de ambiente):**
    ```bash
    npx cypress run --env baseUrl=https://staging.minhaapp.com.br,apiBaseUrl=https://api.staging.minhaapi.com.br
    ```

-----

## ✍️ Escrevendo Testes

### Testes de API

Os testes de API são realizados utilizando comandos personalizados definidos em `cypress/support/commands.js` (e.g., `cy.apiGet`, `cy.apiPost`), que abstraem a chamada `cy.request()`.

**Exemplo (`cypress/e2e/api/users.cy.js`):**

```javascript
describe('User API Tests', () => {
  it('should create a new user', () => {
    const newUser = { name: 'Test User', email: 'test@example.com' };
    cy.apiPost('/users', newUser)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.name).to.eq(newUser.name);
      });
  });
});
```

### Testes E2E (UI)

Os testes E2E simulam a interação do usuário com a interface da aplicação.

**Exemplo (`cypress/e2e/ui/login.cy.js`):**

```javascript
describe('Login Feature', () => {
  it('should allow a user to log in successfully', () => {
    cy.visit('/login');
    cy.get('#username').type('validUser');
    cy.get('#password').type('validPassword');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });
});
```

-----

## 🤝 Contribuindo

Contribuições são bem-vindas\! Se você deseja contribuir para este projeto, por favor, siga estas diretrizes:

1.  Faça um fork do repositório.
2.  Crie uma nova branch para sua feature (`git checkout -b feature/minha-nova-feature`).
3.  Faça suas alterações e adicione testes, se aplicável.
4.  Certifique-se de que todos os testes existentes continuam passando.
5.  Envie suas alterações (`git push origin feature/minha-nova-feature`).
6.  Abra um Pull Request, descrevendo suas mudanças.

-----

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.

-----

## 📞 Contato

Para dúvidas ou sugestões, entre em contato com [Seu Nome/Time] via [Seu Email ou link para contato].

-----
