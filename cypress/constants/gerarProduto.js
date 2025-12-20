/// <reference types="cypress" />

export const gerarProduto = {

    nome: "testing_product_" + Cypress._.random(1000, 9999),
    preco: Cypress._.random(50, 150),
    descricao: "testing_product_description_" + Date.now(),
    quantidade: Cypress._.random(5, 75),
};