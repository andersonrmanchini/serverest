// ***********************************************
// cypress/support/command.js
// ***********************************************

// Cria um e-mail fake
Cypress.Commands.add('geradorEmail', () => {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 8);

  return `user_${timestamp}_${randomString}@example.com`;
})

// Gera uma string qualquer
Cypress.Commands.add('geradorString', (length = 10) => {
  return Math.random().toString(36).substring(2, 2 + length);
})

// Gera um decimal qualquer entre 50 e 150
Cypress.Commands.add('GeradorNumeroDecimal', () => {
  const scaledNumber = (Math.random() * 150) + 50;
  return parseFloat(scaledNumber.toFixed(2));
})

Cypress.Commands.add('api', (method, url, body) => {
  return cy.request({
    method: method,
    url: $Cypress.env('apiBaseUrl') + url,
    body: body,
    failOnStatusCode: false 
  });
});

Cypress.Commands.add('apiGet', (url, parameters) => {
  return cy.request({
    method: 'GET',
    url: url,
    qs: parameters
  });
});

Cypress.Commands.add('apiPost', (url, body) => {
  return cy.request({
    method: 'POST',
    url: url,
    body: body
  });
});

Cypress.Commands.add('apiPut', (url, body) => {
  return cy.request({
    method: 'PUT',
    url: url,
    body: body
  });
});

Cypress.Commands.add('apiDelete', (url) => {
  return cy.request({
    method: 'DELETE',
    url: url
  });
});