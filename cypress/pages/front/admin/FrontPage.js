class FrontPage {

  get cadastrarUsuario() {
    return cy.get('button[data-testid="cadastrarUsuarios"]')
  }

  get cadastrarProduto() {
    return cy.get('button[data-testid="cadastrarProdutos"]')
  }

  cadastrarUsuario() {
    this.cadastrarUsuario.click()
  }

  cadastrarProduto() {
    this.cadastrarProduto.click()
  }
}

export default new FrontPage();