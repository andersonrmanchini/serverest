/// <reference types="cypress" />

import LoginPage from '../../../pages/auth/LoginPage.js';
import FrontPage from '../../../pages/front/admin/FrontPage.js';
import RegisterProduct from '../../../pages/front/admin/RegisterProduct.js';

context('Products Front Tests', () => {

  beforeEach(() => {
    LoginPage.visit('/login')

    LoginPage.registerLogin(
      cy.generateRandomStringSimple(10), 
      cy.generateRandomEmailSimple(),
      cy.generateRandomStringSimple(6),
      true);

      cy.contains('Bem Vindo').should('be.visible');
  })

  describe('Register Products Tests', () => {
    it('should register a new product with success', () => {
      FrontPage.registerUser();

      const prd = {
        name: cy.generateRandomStringSimple(10),
        price: cy.generateRandomDecimalNumber(),
        description: cy.generateRandomStringSimple(100),
        amount: (Math.random * 150) + 50,
      };

      RegisterProduct.registerProduct(
        prd.name, prd.price, prd.description, prd.amount);

      cy.contains(prd.name).should('be.visible');
      cy.contains(prd.price).should('be.visible');
      cy.contains(prd.description).should('be.visible');
      cy.contains(prd.amount).should('be.visible');
    })

    it(`should'n register an user without a typed name`, () => {
      FrontPage.registerUser();

      const prd = {
        name: '',
        price: cy.generateRandomDecimalNumber(),
        description: cy.generateRandomStringSimple(100),
        amount: (Math.random * 150) + 50,
      };

      RegisterProduct.registerProduct(
        prd.name, prd.price, prd.description, prd.amount);

      cy.contains('Nome é obrigatório').should('be.visible');
    })
  })
})