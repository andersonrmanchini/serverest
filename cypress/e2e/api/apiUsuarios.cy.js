/// <reference types="cypress" />

describe("Usuários: Testes de API", () => {
  const bodyRequest = {
    nome: `user_${Cypress._.random(10000, 99999)}`,
    email: `user_${Date.now()}@qabrazil.com`,
    password: "password123",
    administrador: "true",
  };

  var id = "";

  beforeEach(() => {});

  it("Deve ser capaz de adicionar um novo usuário", () => {
    cy.apiPost("usuarios", bodyRequest).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");

      id = response.body._id;
      expect(id).to.not.be.null;
      expect(id).to.not.be.undefined;

      cy.log(`ID do usuário criado: ${id}`);
      cy.log(`Nome do usuário criado: ${bodyRequest.nome}`);
      cy.log(`Email do usuário criado: ${bodyRequest.email}`);
    });
  });

  it("Deve ser capaz de encontrar um usuário por seu ID", () => {
    cy.apiGet(`usuarios/${id}`).then((response) => {
      const responseBody = response.body;
      const { nome, email, password, administrador } = bodyRequest;

      expect(response.status).to.eq(200);
      expect(responseBody.nome).to.eq(nome);
      expect(responseBody.email).to.eq(email);
      expect(responseBody.password).to.eq(password);
      expect(responseBody.administrador).to.eq(administrador);
      expect(responseBody._id).to.eq(id);
    });
  });

  it("Deve ser capaz de atualizar um usuário existente", () => {
    bodyRequest.password = "password456"; // Atualizando a senha

    cy.apiPut(`usuarios/${id}`, bodyRequest).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Registro alterado com sucesso");
    });
  });

  it("Deve ser capaz de excluir um usuário existente", () => {
    cy.apiDelete(`usuarios/${id}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Registro excluído com sucesso");
    });

    // Para ter certeza que o usuário foi excluído
    cy.apiGet(`usuarios/${id}`).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("Usuário não encontrado");
    });
  });
});
