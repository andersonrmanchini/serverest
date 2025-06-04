class FrontPage {

  get registerUsers() {
    return cy.get('button[data-testid="cadastrarUsuarios"]')
  }

  get registerProducts() {
    return cy.get('button[data-testid="cadastrarProdutos"]')
  }

  registerUser() {
    this.registerUsers.click()
  }

  registerProduct() {
    this.registerProducts.click()
  }
}

export default new FrontPage();