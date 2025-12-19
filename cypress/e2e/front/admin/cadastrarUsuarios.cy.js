/// <reference types="cypress" />

import { gerarUsuario } from "../../../constants/Usuario.js";
import LoginPage from "../../../pages/auth/CriarAcesso.js";
import FrontPage from "../../../pages/front/admin/FrontPage.js";
import CadastrarUsuario from "../../../pages/front/admin/CadastrarUsuario.js";

context("Users", () => {
  beforeEach(() => {
    const nome = `user_${Cypress._.random(10000, 99999)}`;
    const email = `user_${Date.now()}@qabrazil.com`;

    LoginPage.visit();
    LoginPage.registrarLogin(nome, email, "password123", true);

    cy.contains("Cadastro realizado com sucesso").should("be.visible");
    cy.contains(`Bem Vindo ${nome}`).should("be.visible");
  });

  describe("Testes para cadastro de usuários", () => {
    it("Deve cadastrar um usuário com sucesso", () => {
      FrontPage.clicarEmCadastrarUsuario();
      cy.contains("Cadastro de usuários").should("be.visible");

      CadastrarUsuario.cadastrarNovoUsuario(
        gerarUsuario.nome, 
        gerarUsuario.email, 
        gerarUsuario.senha, 
        true);

      cy.contains(gerarUsuario.nome).should("be.visible");
      cy.contains(gerarUsuario.email).should("be.visible");
      cy.contains(gerarUsuario.senha).should("be.visible");
    });

    it("Deve informar falta de email ao tentar cadastrar um usuário", () => {
      FrontPage.clicarEmCadastrarUsuario();
      cy.contains("Cadastro de usuários").should("be.visible");

      CadastrarUsuario.cadastrarNovoUsuario(
        gerarUsuario.nome, 
        "", 
        gerarUsuario.senha, 
        true);

      cy.contains("Email é obrigatório").should("be.visible");
    });
  });
});
