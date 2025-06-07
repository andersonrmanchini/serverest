/// <reference types="cypress" />

describe('Usuários: Testes de API', (id) => {
  var body, _id;
  
  beforeEach(() => {
    body = {
      nome: cy.geradorString(10),
      email: cy.geradorEmail(),
      password: cy.geradorString(6),
      administrador: "true"
    };

    _id = '';
  });

  it('Deve ser capaz de adicionar um novo usuário', () => {
    
    cy.apiPost('/usuarios', body)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq('Cadastro realizado com sucesso');

        id = response.body._id;
      });
  });

  it('Deve ser capaz de encontrar um usuário por seu ID', () => {
    cy.apiGet(`/usuarios/${Cypress.env('_id')}`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.nome).to.eq(user.nome);
        expect(response.body.email).to.eq(user.email);
        expect(response.body.password).to.eq(user.password);
        expect(response.body.administrador).to.eq(user.administrador);
        expect(response.body._id).to.eq(this._id);
      });
  });

  it('Deve ser capaz de atualizar um usuário existente', () => {
    body.password = cy.geradorString(6);

    cy.apiPut(`/usuarios/${Cypress.env('_id')}`, body)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Registro alterado com sucesso');
      });
  });

  it('Deve ser capaz de excluir um usuário existente', () => {
    cy.apiDelete(`/usuarios/${Cypress.env('_id')}`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Registro excluído com sucesso');
      });

    // Para ter certeza que o usuário foi excluído
    cy.apiGet(`/usuarios/${Cypress.env('_id')}`)
      .then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq('Usuário não encontrado');
      });
  });
});