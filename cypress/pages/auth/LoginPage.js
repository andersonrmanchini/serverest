class LoginPage {
  get nameInput() {
    return cy.get('input[data-testid="cadastrar"]');
  }
  
  get emailInput() {
    return cy.get('input[data-testid="email"]');
  }

  get passwordInput() {
    return cy.get('input[data-testid="senha"]');
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  get adminCheckbox() {
    return cy.get('input[data-testid="checkbox"]');
  }

  get errorMessage() {
    return cy.get('.error-message');
  }

  visit() {
    cy.visit('/login');
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  registerLogin(name, email, password, admin = false) {
    this.nameInput.type(name);
    this.emailInput.type(email);
    this.passwordInput.type(password);
    if (admin == true)
      this.adminCheckbox.check();
    this.loginButton.click();
  }
}

export default new LoginPage();