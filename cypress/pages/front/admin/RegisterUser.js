class RegisterUser {

  get fillOutName() {
    return cy.get('input[data-testid="nome"]')
  }

  get fillOutEmail() {
    return cy.get('input[data-testid="email"]')
  }

  get fillOutPassword() {
    return cy.get('input[data-testid="password"]')
  }

  get checkAdmin() {
    return cy.get('input[data-testid="checkbox"]')
  }

  get confirmUser() {
    return cy.get('button[type="submit"]')
  }

  registerUser(name, email, password, admin = false) {
    this.fillOutName.input(name);
    this.fillOutEmail.input(email);
    this.fillOutPassword.input(password);
    if (admin == true)
      this.checkAdmin.check();
    this.confirmUser.click();
  }
}

export default new RegisterUser();