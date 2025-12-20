/// <reference types="cypress" />
import UsuariosService from "../../support/services/UsuariosService";

describe("Usuários: Testes de API", () => {
  // Função auxiliar para gerar massa de dados (Factory)
  const gerarMassaDados = () => ({
    nome: `user_${Cypress._.random(10000, 99999)}`,
    email: `user_${Date.now()}@qabrazil.com`,
    password: "password123",
    administrador: "true",
  });

  it("Adicionar um novo usuário", () => {
    const usuario = gerarMassaDados();

    UsuariosService.cadastrar(usuario).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
      expect(response.body._id).to.not.be.undefined;
    });
  });

  // Contexto para testes que precisam de um usuário pré-existente
  context("Operações em usuário existente", () => {
    let id;
    let usuarioAtual;

    beforeEach(() => {
      usuarioAtual = gerarMassaDados();
      
      // Cria um usuário novo antes de cada teste deste bloco
      UsuariosService.cadastrar(usuarioAtual).then((response) => {
        id = response.body._id;
      });
    });

    it("Encontrar um usuário por seu ID", () => {
      UsuariosService.buscar(id).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.nome).to.eq(usuarioAtual.nome);
        expect(response.body.email).to.eq(usuarioAtual.email);
        expect(response.body.password).to.eq(usuarioAtual.password);
        expect(response.body._id).to.eq(id);
      });
    });

    it("Atualizar um usuário existente", () => {
      usuarioAtual.password = "password456"; // Atualizando a senha

      UsuariosService.alterar(id, usuarioAtual).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("Registro alterado com sucesso");
      });
    });

    it("Excluir um usuário existente", () => {
      UsuariosService.deletar(id).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("Registro excluído com sucesso");
      });

      // Validação extra: garantir que não existe mais
      UsuariosService.buscar(id).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq("Usuário não encontrado");
      });
    });
  });
});
