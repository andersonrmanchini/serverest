/// <reference types="cypress" />

import LoginPage from "../../../pages/auth/CriarAcesso.js";
import FrontPage from "../../../pages/front/admin/FrontPage.js";
import CadastrarProduto from "../../../pages/front/admin/CadastrarProduto.js";

context("Produtos", () => {
  beforeEach(() => {
    const nome = `user_${Cypress._.random(10000, 99999)}`;
    const email = `user_${Date.now()}@qabrazil.com`;

    LoginPage.visit();

    LoginPage.registrarLogin(nome, email, "password123", true);

    cy.contains("Cadastro realizado com sucesso").should("be.visible");
    cy.contains(`Bem Vindo ${nome}`).should("be.visible");
  });

  describe("Testes para cadastro de produtos", () => {
    it("Deve registrar um novo produto com sucesso", () => {
      FrontPage.cadastrarProduto();

      const prd = {
        nome: cy.geradorString(10),
        preco: cy.geradorNumeroDecimal(),
        descricao: cy.geradorString(100),
        quantidade: Math.random * 150 + 50,
      };

      CadastrarProduto.cadastrarProduto(
        prd.nome,
        prd.preco,
        prd.descricao,
        prd.quantidade
      );

      cy.contains(prd.nome).should("be.visible");
      cy.contains(prd.preco).should("be.visible");
      cy.contains(prd.descricao).should("be.visible");
      cy.contains(prd.quantidade).should("be.visible");
    });

    it("Deve mostrar mensagem ao tentar cadastrar produto sem nome", () => {
      FrontPage.cadastrarProduto();

      const prd = {
        nome: "",
        preco: cy.geradorNumeroDecimal(),
        descricao: cy.geradorString(100),
        quantidade: Math.random * 150 + 50,
      };

      CadastrarProduto.cadastrarProduto(
        prd.nome,
        prd.preco,
        prd.descricao,
        prd.quantidade
      );

      cy.contains("Nome é obrigatório").should("be.visible");
    });
  });
});
