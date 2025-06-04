// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// It fakes an email account
Cypress.Commands.add('generateRandomEmailSimple', () => {
  const timestamp = new Date().getTime(); // Obtém o timestamp atual
  const randomString = Math.random().toString(36).substring(2, 8); // Gera uma string aleatória curta

  return `user_${timestamp}_${randomString}@example.com`;
})

Cypress.Commands.add('generateRandomStringSimple', (length) => {
  return Math.random().toString(36).substring(2, 2 + length);
})

Cypress.Commands.add('generateRandomDecimalNumber', () => {
  const scaledNumber = (Math.random() * 150) + 50;
  return parseFloat(scaledNumber.toFixed(2));
})

Cypress.Commands.add('api', (method, url, body) => {
  return cy.request({
    method: method,
    url: url,
    body: body,
    failOnStatusCode: false // Permite que o Cypress não falhe em status code 4xx ou 5xx, permitindo assertivas sobre eles
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