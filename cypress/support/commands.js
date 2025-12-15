// ***********************************************
// cypress/support/command.js
// ***********************************************

// Cria um e-mail fake
Cypress.Commands.add("geradorEmail", () => {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 8);

  return cy.wrap(`user_${timestamp}_${randomString}@example.com`);
});

// Gera uma string qualquer
Cypress.Commands.add("geradorString", (length = 10) => {
  return cy.wrap(
    Math.random()
      .toString(36)
      .substring(2, 2 + length)
  );
});

// Gera um decimal qualquer entre 50 e 150
Cypress.Commands.add("GeradorNumeroDecimal", () => {
  const scaledNumber = Math.random() * 150 + 50;
  return parseFloat(scaledNumber.toFixed(2));
  
});

Cypress.Commands.add(
  "apiGet",
  (url, parameters = null, failOnStatusCode = false) => {
    return cy.request({
      method: "GET",
      url: Cypress.env("apiBaseUrl") + url,
      qs: parameters,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      failOnStatusCode: failOnStatusCode,
    });
  }
);

Cypress.Commands.add(
  "apiPost",
  (url, bodyRequest, failOnStatusCode = false) => {
    return cy.request({
      method: "POST",
      url: Cypress.env("apiBaseUrl") + url,
      body: bodyRequest,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      failOnStatusCode: failOnStatusCode,
    });
  }
);

Cypress.Commands.add("apiPut", (url, bodyRequest, failOnStatusCode = false) => {
  return cy.request({
    method: "PUT",
    url: Cypress.env("apiBaseUrl") + url,
    body: bodyRequest,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    failOnStatusCode: failOnStatusCode,
  });
});

Cypress.Commands.add("apiDelete", (url, failOnStatusCode = false) => {
  return cy.request({
    method: "DELETE",
    url: Cypress.env("apiBaseUrl") + url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    failOnStatusCode: failOnStatusCode,
  });
});