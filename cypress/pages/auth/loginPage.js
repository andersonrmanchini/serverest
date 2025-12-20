class LoginPage {
  get clicarEmCadastrar() {
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

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  get setarAdministrador() {
    return cy.get('input[data-testid="checkbox"]');
  }

  get logoutButton() {
    return cy.get('button[data-testid="logout"]');
  }

  get errorMessage() {
    return cy.get(".error-message");
  }

  visit() {
    cy.visit(Cypress.env("BASE_URL") || "/");
  }

  logout() {
    this.logoutButton.click();
  }

  login(email, senha) {
    this.preencherEmail.type(email);
    this.preencherSenha.type(senha);
    this.loginButton.click();
  }

  registrarLogin(nome, email, senha, admin = false) {
    this.clicarEmCadastrar.click();
    cy.url().should("include", "/cadastrarusuarios");

    this.preencherNome.type(nome);
    this.preencherEmail.type(email);
    this.preencherSenha.type(senha);
    if (admin == true) this.setarAdministrador.check();
    this.loginButton.click();
  }
}

export default new LoginPage();
