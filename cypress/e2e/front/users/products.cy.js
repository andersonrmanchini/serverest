/// <reference types="cypress" />

import LoginPage from '../../../pages/auth/CriarAcesso.js'
import FrontPage from '../../../pages/front/users/FrontPage.js'

context('Produtos', () => {

  beforeEach(() => {
    LoginPage.visit();
    
    LoginPage.registrarLogin(
      cy.geradorString(10), 
      cy.geradorEmail(),
      cy.geradorString(6))
  })

  describe('Adicionar um produto na lista', () => {
    it('Deve adicionar um produto na lista com sucesso', () => {
      FrontPage
        .pesquisarProduto('Produto')
        .submeterPesquisa()
        .adicionarNaLista()

      cy.contains('Produto').should('be.visible')
    })
  })
})