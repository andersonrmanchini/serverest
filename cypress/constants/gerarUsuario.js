/// <reference types="cypress" />

export const gerarUsuario = () => {
    return {
        nome: `testing_user_${Cypress._.random(1000, 9999)}`,
        email: `testing_user_${Date.now()}@qabrazil.com`,
        senha: "Password123!",
    };
};