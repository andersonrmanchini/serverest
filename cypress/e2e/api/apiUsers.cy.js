/// <reference types="cypress" />

describe('Users API Tests', () => {

  beforeEach(() => {
    const user = {
      "nome": cy.generateRandomStringSimple(10),
      "email": cy.generateRandomEmailSimple(),
      "password": cy.generateRandomStringSimple(6),
      "administrador": "true"
    };

    var _id = '';
  });

  it('should be able to add a new user', () => {
    cy.apiPost(`${Cypress.env('apiBaseUrl')}/usuarios`, this.user)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      });
    this._id = response.body._id;
  });

  it('should be able to find an user by ID', () => {
    cy.apiGet(`${Cypress.env('apiBaseUrl')}/usuarios/${this._id}`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.nome).to.eq(user.nome);
        expect(response.body.email).to.eq(user.email);
        expect(response.body.password).to.eq(user.password);
        expect(response.body.administrador).to.eq(user.administrador);
        expect(response.body._id).to.eq(this._id);
      });
  });

  it('should be able to update an existing user', () => {
    user.nome = cy.generateRandomStringSimple(10);

    cy.apiPut(`${Cypress.env('apiBaseUrl')}/usuarios/${this._id}`, this.user)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Registro alterado com sucesso');
      });
  });

  it(`${Cypress.env('apiBaseUrl')}/usuarios/${this._id}`, () => {
    cy.apiDelete(`/pet/${this._id}`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Registro excluído com sucesso');
      });

    // Make sure the user has been deleted
    cy.apiGet(`/pet/${this._id}`)
      .then((response) => {
        expect(response.status).to.eq(400); // Eu sugeriria 404 aqui
        expect(response.body.message).to.eq('Usuário não encontrado');
      });
  });
});