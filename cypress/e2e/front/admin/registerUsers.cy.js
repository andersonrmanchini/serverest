/// <reference types="cypress" />

import LoginPage from '../../../pages/auth/LoginPage.js';
import FrontPage from '../../../pages/front/admin/FrontPage.js';
import RegisterUsers from '../../../pages/front/admin/RegisterUser.js';

context('Users Front Tests', () => {

  beforeEach(() => {
    LoginPage.visit('/login');

    LoginPage.registerLogin(
      cy.generateRandomStringSimple(10), 
      cy.generateRandomEmailSimple(),
      cy.generateRandomStringSimple(6),
      true);

      cy.contains('Bem Vindo').should('be.visible');
  })

  describe('Register User Tests', () => {
    it('should register an user with success', () => {
      FrontPage.registerUser();

      const user = {
        name: cy.generateRandomStringSimple(10),
        email: cy.generateRandomEmailSimple(),
        password: cy.generateRandomStringSimple(6),
        admin: true
      };

      RegisterUsers.registerUser(
        user.name, user.email, user.password, user.admin);

      cy.contains(user.name).should('be.visible');
      cy.contains(user.email).should('be.visible');
      cy.contains(user.password).should('be.visible');
    })

    it(`shouldn't register an user without a typed email`, () => {
      FrontPage.registerUser();

      const user = {
        name: cy.generateRandomStringSimple(10),
        email: '',
        password: cy.generateRandomStringSimple(6),
        admin: true
      };

      RegisterUsers.registerUser(
        user.name, user.email, user.password, user.admin);

      cy.contains('Email não pode ficar em branco').should('be.visible');
    })
  })
})