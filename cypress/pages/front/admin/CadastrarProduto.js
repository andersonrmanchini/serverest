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

  cadastrarNovoProduto(nome, preco, descricao, quantidade) {
    if (nome) this.preencherNome.type(nome);
    if (preco) this.preencherPreco.type(preco);
    if (descricao) this.preencherDescricao.type(descricao);
    if (quantidade) this.preencherQuantidade.type(quantidade);
    this.submit.click();
  }
}

export default new CadastrarProduto();