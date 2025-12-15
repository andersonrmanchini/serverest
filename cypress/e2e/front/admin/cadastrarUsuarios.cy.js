/// <reference types="cypress" />

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
      FrontPage.cadastrarUsuario();

      const usuario = {
        nome: cy.geradorString(10),
        email: cy.geradorEmail(),
        senha: cy.geradorString(6),
        admin: true,
      };

      CadastrarUsuario.cadastrarUsuario(
        usuario.nome,
        usuario.email,
        usuario.senha,
        usuario.admin
      );

      cy.contains(user.name).should("be.visible");
      cy.contains(user.email).should("be.visible");
      cy.contains(user.password).should("be.visible");
    });

    it("Deve informar falta de email ao tentar cadastrar um usuário", () => {
      FrontPage.cadastrarUsuario();

      const usuario = {
        nome: cy.geradorString(10),
        email: "",
        senha: cy.geradorString(6),
        admin: true,
      };

      CadastrarUsuario.cadastrarUsuario(
        usuario.nome,
        usuario.email,
        usuario.senha,
        usuario.admin
      );

      cy.contains("Email não pode ficar em branco").should("be.visible");
    });
  });
});
