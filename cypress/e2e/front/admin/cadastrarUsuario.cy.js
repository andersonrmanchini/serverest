/// <reference types="cypress" />

import LoginPage from '../../../pages/auth/CriarAcesso.js';
import FrontPage from '../../../pages/front/admin/FrontPage.js';
import CadastrarUsuario from '../../../pages/front/admin/CadastrarUsuario.js';

context('Users', () => {

  beforeEach(() => {
    LoginPage.visit();

    LoginPage.registrarLogin(
      cy.geradorString(10), 
      cy.geradorEmail(),
      cy.geradorString(6),
      true);

      cy.contains('Bem Vindo').should('be.visible');
  })

  describe('Testes para cadastro de usuários', () => {
    it('Deve cadastrar um usuário com sucesso', () => {
      FrontPage.cadastrarUsuario();

      const usuario = {
        nome: cy.geradorString(10),
        email: cy.geradorEmail(),
        senha: cy.geradorString(6),
        admin: true
      };

      CadastrarUsuario.cadastrarUsuario(
        usuario.nome, usuario.email, usuario.senha, usuario.admin);

      cy.contains(user.name).should('be.visible');
      cy.contains(user.email).should('be.visible');
      cy.contains(user.password).should('be.visible');
    })

    it('Deve informar falta de email ao tentar cadastrar um usuário', () => {
      FrontPage.cadastrarUsuario();

      const usuario = {
        nome: cy.geradorString(10),
        email: '',
        senha: cy.geradorString(6),
        admin: true
      };

      CadastrarUsuario.cadastrarUsuario(
        usuario.nome, usuario.email, usuario.senha, usuario.admin);

      cy.contains('Email não pode ficar em branco').should('be.visible');
    })
  })
})