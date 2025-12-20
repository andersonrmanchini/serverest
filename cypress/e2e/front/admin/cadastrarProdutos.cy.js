/// <reference types="cypress" />

import { gerarProduto } from "../../../constants/gerarProduto.js";
import FrontPage from "../../../pages/front/admin/FrontPage.js";
import CadastrarProduto from "../../../pages/front/admin/CadastrarProduto.js";

context("Produtos", () => {
  beforeEach(() => {
    cy.loginAsAdmin();
  });

  describe("Cadastrar um produto", () => {
    it("Registrar um novo produto com sucesso", () => {
      FrontPage.clicarEmCadastrarProduto();

      CadastrarProduto.cadastrarNovoProduto(
        gerarProduto.nome,
        gerarProduto.preco,
        gerarProduto.descricao,
        gerarProduto.quantidade
      );

      cy.contains(gerarProduto.nome).should("be.visible");
      cy.contains(gerarProduto.preco).should("be.visible");
      cy.contains(gerarProduto.descricao).should("be.visible");
      cy.contains(gerarProduto.quantidade).should("be.visible");
    });

    it("Informar a obgatoriedade do campo de nome do produto", () => {
      FrontPage.clicarEmCadastrarProduto();

      CadastrarProduto.cadastrarNovoProduto(
        "",
        gerarProduto.preco,
        gerarProduto.descricao,
        gerarProduto.quantidade
      );

      cy.contains("Nome é obrigatório").should("be.visible");
    });
  });
});
