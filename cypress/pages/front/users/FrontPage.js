class FrontPage {

  get adicionarNaLista() {
    return cy.get('button[data-testid="adicionarNaLista"]')
  }

  get pesquisarProduto() {
    return cy.get('input[data-testid="pesquisar"]')
  }

  get submeterPesquisa() {
    return cy.get('button[data-testid="botaoPesquisar"]')
  }

  adicionarNaLista() {
    this.adicionarNaLista.click()
  }

  pesquisarProduto (produto) {
    this.pesquisarProduto.type(produto)
  }

  submeterPesquisa () {
    this.submeterPesquisa.click()
  }
}

export default new FrontPage();