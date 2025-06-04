class FrontPage {

  get addListButton() {
    return cy.get('button[data-testid="adicionarNaLista"]')
  }

  get typeProduct() {
    return cy.get('input[data-testid="pesquisar"]')
  }

  get searchProduct() {
    return cy.get('button[data-testid="botaoPesquisar"]')
  }

  addProductAtList() {
    this.addListButton.click()
  }

  typingProduct (product) {
    this.typeProduct.type(product)
  }

  clickSearchButton () {
    this.searchProduct.click()
  }
}

export default new FrontPage();