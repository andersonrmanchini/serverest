/// <reference types="cypress" />

import LoginPage from "../../../pages/auth/CriarAcesso.js";
import FrontPage from "../../../pages/front/users/FrontPage.js";

context("Produtos", () => {
  beforeEach(() => {
    LoginPage.visit();

    LoginPage.registrarLogin(
      `user_${Cypress._.random(10000, 99999)}`,
      `user_${Date.now()}@qabrazil.com`,
      "password123",
      true
    );
  });

  describe("Adicionar um produto na lista", () => {
    it("Deve adicionar um produto na lista com sucesso", () => {
      FrontPage.pesquisarProduto("Produto")
        .submeterPesquisa()
        .adicionarNaLista();

      cy.contains("Produto").should("be.visible");
    });
  });
});
