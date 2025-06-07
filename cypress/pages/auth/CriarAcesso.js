class CriarAcesso {
  get preencherNome() {
    return cy.get('input[data-testid="cadastrar"]');
  }
  
  get preencherEmail() {
    return cy.get('input[data-testid="email"]');
  }

  get preencherSenha() {
    return cy.get('input[data-testid="senha"]');
  }

  get logarAplicacao() {
    return cy.get('button[type="submit"]');
  }

  get setarAdministrador() {
    return cy.get('input[data-testid="checkbox"]');
  }

  get errorMessage() {
    return cy.get('.error-message');
  }

  visit() {
    cy.visit('/');
  }

  login(email, senha) {
    this.preencherEmail.type(email);
    this.preencherSenha.type(senha);
    this.logarAplicacao.click();
  }

  registrarLogin(nome, email, senha, admin = false) {
    this.preencherNome.type(nome);
    this.preencherEmail.type(email);
    this.preencherSenha.type(senha);
    if (admin == true)
      this.setarAdministrador.check();
    this.logarAplicacao.click();
  }
}

export default new CriarAcesso();