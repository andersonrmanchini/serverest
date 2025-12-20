/// <reference types="cypress" />

import { gerarUsuario } from "../../../constants/gerarUsuario.js";
import FrontPage from "../../../pages/front/admin/FrontPage.js";
import CadastrarUsuario from "../../../pages/front/admin/CadastrarUsuario.js";

context("Usuários", () => {
  beforeEach(() => {
    cy.loginAsAdmin();
  });

  describe("Cadastrar um usuário", () => {
    it("Cadastrar um usuário com sucesso", () => {
      const novoUsuario = gerarUsuario(); // Gera um novo usuário para o teste
      FrontPage.clicarEmCadastrarUsuario();
      cy.contains("Cadastro de usuários").should("be.visible");

      CadastrarUsuario.cadastrarNovoUsuario(
        novoUsuario.nome, 
        novoUsuario.email, 
        novoUsuario.senha, 
        true);

      cy.contains(novoUsuario.nome).should("be.visible");
      cy.contains(novoUsuario.email).should("be.visible");
    });

    it("Informar a obgatoriedade do campo de email", () => {
      FrontPage.clicarEmCadastrarUsuario();
      cy.contains("Cadastro de usuários").should("be.visible");

      CadastrarUsuario.cadastrarNovoUsuario(
        "Nome para teste sem email", 
        "", 
        "senha", 
        true);

      cy.contains("Email é obrigatório").should("be.visible");
    });
  });
});
