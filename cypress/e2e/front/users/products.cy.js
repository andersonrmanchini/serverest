/// <reference types="cypress" />

import LoginPage from "../../../pages/auth/loginPage.js";
import FrontPage from "../../../pages/front/users/FrontPage.js";

context("Produtos", () => {
  beforeEach(() => {
    cy.loginAsAdmin();
    cy.cadastrarProduto();
    LoginPage.logout();
    cy.loginAsAdmin(false);
    cy.contains("Serverest Store", { timeout: 10000 })
      .should('be.visible');
  });

  describe("Procurando por um produto na lista", () => {
    it("Procurar um produto na lista com sucesso", () => {
      const produto = "testing_product_";
      FrontPage.preencherNomeDoProduto(produto);
      FrontPage.pesquisarProduto();
      FrontPage.adicionarNaLista();

      cy.contains(produto).should("be.visible");
    });
  });
});
