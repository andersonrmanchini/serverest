class CadastrarUsuario {

  get preencherNome() {
    return cy.get('input[data-testid="nome"]')
  }

  get preencherEmail() {
    return cy.get('input[data-testid="email"]')
  }

  get preencherSenha() {
    return cy.get('input[data-testid="password"]')
  }

  get setarAdministrador() {
    return cy.get('input[data-testid="checkbox"]')
  }

  get submit() {
    return cy.get('button[type="submit"]')
  }

  cadastrarNovoUsuario(nome, email, senha, admin = false) {
    if (nome) this.preencherNome.type(nome);
    if (email) this.preencherEmail.type(email);
    if (senha) this.preencherSenha.type(senha);
    if (admin)
      this.setarAdministrador.check();
    this.submit.click();
  }
}

export default new CadastrarUsuario();