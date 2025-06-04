/// <reference types="cypress" />

import LoginPage from '../../../pages/auth/LoginPage.js'
import FrontPage from '../../../pages/front/users/FrontPage.js'

context('Products', () => {

  beforeEach(() => {
    LoginPage.visit('/login')
    
    LoginPage.registerLogin(
      cy.generateRandomStringSimple(10), 
      cy.generateRandomEmailSimple(),
      cy.generateRandomStringSimple(6))
  })

  describe('Carrying a product to the basket', () => {
    it('add a product to the basket', () => {
      FrontPage
        .typingProduct('Produto')
        .clickSearchButton()
        .addProductAtList()

      cy.contains('Produto').should('be.visible')
    })
  })
})