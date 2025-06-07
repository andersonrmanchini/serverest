class CadastrarProduto {

  get preencherNome() {
    return cy.get('input[data-testid="nome"]')
  }

  get preencherPreco() {
    return cy.get('input[data-testid="preco"]')
  }

  get preencherDescricao() {
    return cy.get('textarea[data-testid="descricao"]')
  }

  get preencherQuantidade() {
    return cy.get('input[data-testid="quantity"]')
  }

  get submit() {
    return cy.get('button[type="submit"]')
  }

  cadastrarProduto(nome, preco, descricao, quantidade) {
    this.preencherNome.input(nome);
    this.preencherPreco.input(preco);
    this.preencherDescricao.input(descricao);
    this.preencherQuantidade.input(quantidade);
    this.submit.click();
  }
}

export default new CadastrarProduto();