class FrontPage {

  get botaoAdicionarNaLista() {
    return cy.get('button[data-testid="adicionarNaLista"]')
  }

  get pesquisar() {
    return cy.get('input[data-testid="pesquisar"]')
  }

  get botaoPesquisar() {
    return cy.get('button[data-testid="botaoPesquisar"]')
  }

  adicionarNaLista() {
    this.botaoAdicionarNaLista.first().click()
  }

  preencherNomeDoProduto (produto) {
    this.pesquisar.type(produto)
  }

  pesquisarProduto () {
    this.botaoPesquisar.click()
  }
}

export default new FrontPage();