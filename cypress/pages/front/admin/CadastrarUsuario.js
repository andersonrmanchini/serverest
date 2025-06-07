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

  registerUser(nome, email, senha, admin = false) {
    this.preencherNome.input(nome);
    this.preencherEmail.input(email);
    this.preencherSenha.input(senha);
    if (admin == true)
      this.setarAdministrador.check();
    this.submit.click();
  }
}

export default new CadastrarUsuario();