import { gerarUsuario } from "../constants/gerarUsuario.js";
import LoginPage from "../pages/auth/loginPage.js";
import { gerarProduto } from "../constants/gerarProduto.js";
import FrontPage from "../pages/front/admin/FrontPage.js";
import CadastrarProduto from "../pages/front/admin/CadastrarProduto.js";


// ***********************************************
// cypress/support/command.js
// ***********************************************

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

Cypress.Commands.add("loginAsAdmin", (admin = true) => {
  const usuarioAdmin = gerarUsuario();
  
  LoginPage.visit();
  LoginPage.registrarLogin(
    usuarioAdmin.nome,
    usuarioAdmin.email,
    usuarioAdmin.senha,
    admin
  );

  return cy.wrap(usuarioAdmin);
});

Cypress.Commands.add("cadastrarProduto", (admin = true) => { 
  FrontPage.clicarEmCadastrarProduto();
  CadastrarProduto.cadastrarNovoProduto(
    gerarProduto.nome,
    gerarProduto.preco,
    gerarProduto.descricao,
    gerarProduto.quantidade
  );
});

Cypress.Commands.add(
  "apiGet",
  (uri, failOnStatusCode = false) => {
    const url = `${Cypress.env("API_BASE")}${uri}`;
   
    return cy.request({
      method: "GET",
      url: url,
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
  (uri, bodyRequest, failOnStatusCode = false) => {
    const url = `${Cypress.env("API_BASE")}${uri}`;
    
    return cy.request({
      method: "POST",
      url: url,
      body: bodyRequest,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      failOnStatusCode: failOnStatusCode,
    });
  }
);

Cypress.Commands.add("apiPut", (uri, bodyRequest, failOnStatusCode = false) => {
  const url = `${Cypress.env("API_BASE")}${uri}`;

  return cy.request({
    method: "PUT",
    url: url,
    body: bodyRequest,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    failOnStatusCode: failOnStatusCode,
  });
});

Cypress.Commands.add("apiDelete", (uri, failOnStatusCode = false) => {
  const url = `${Cypress.env("API_BASE")}${uri}`;

  return cy.request({
    method: "DELETE",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    failOnStatusCode: failOnStatusCode,
  });
});