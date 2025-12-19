class FrontPage {

  get cadastrarUsuario() {
    return cy.get('a[data-testid="cadastrarUsuarios"]')
  }

  get cadastrarProduto() {
    return cy.get('a[data-testid="cadastrarProdutos"]')
  }

  clicarEmCadastrarUsuario() {
    cy.log(this.cadastrarUsuario)
    this.cadastrarUsuario.click()
  }

  clicarEmCadastrarProduto() {
    this.cadastrarProduto.click()
  }
}

export default new FrontPage();