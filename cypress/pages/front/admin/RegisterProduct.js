class RegisterProduct {

  get fillOutName() {
    return cy.get('input[data-testid="nome"]')
  }

  get fillOutPrice() {
    return cy.get('input[data-testid="preco"]')
  }

  get fillOutDescription() {
    return cy.get('textarea[data-testid="descricao"]')
  }

  get fillOutAmount() {
    return cy.get('input[data-testid="quantity"]')
  }

  get confirmProduct() {
    return cy.get('button[type="submit"]')
  }

  registerProduct(name, price, description, amount) {
    this.fillOutName.input(name);
    this.fillOutPrice.input(price);
    this.fillOutDescription.input(description);
    this.fillOutAmount.input(amount);
    this.confirmProduct.click();
  }
}

export default new RegisterProduct();