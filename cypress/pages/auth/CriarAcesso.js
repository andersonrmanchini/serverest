class CriarAcesso {
  get cicarEmCadastrar() {
    return cy.get('a[data-testid="cadastrar"]');
  }

  get preencherNome() {
    return cy.get('input[data-testid="nome"]');
  }

  get preencherEmail() {
    return cy.get('input[data-testid="email"]');
  }

  get preencherSenha() {
    return cy.get('input[data-testid="password"]');
  }

  get logarAplicacao() {
    return cy.get('button[type="submit"]');
  }

  get setarAdministrador() {
    return cy.get('input[data-testid="checkbox"]');
  }

  get errorMessage() {
    return cy.get(".error-message");
  }

  visit() {
    cy.visit("/");
  }

  login(email, senha) {
    this.preencherEmail.type(email);
    this.preencherSenha.type(senha);
    this.logarAplicacao.click();
  }

  registrarLogin(nome, email, senha, admin = false) {
    this.cicarEmCadastrar.click();
    cy.url().should("include", "/cadastrarusuarios");

    this.preencherNome.type(nome);
    this.preencherEmail.type(email);
    this.preencherSenha.type(senha);
    if (admin == true) this.setarAdministrador.check();
    this.logarAplicacao.click();
  }
}

export default new CriarAcesso();
