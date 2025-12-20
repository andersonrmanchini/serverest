class UsuariosService {
  static get ENDPOINT() {
    return "/usuarios";
  }

  static cadastrar(usuario) {
    return cy.apiPost(this.ENDPOINT, usuario);
  }

  static buscar(id) {
    return cy.apiGet(`${this.ENDPOINT}/${id}`);
  }

  static alterar(id, usuario) {
    return cy.apiPut(`${this.ENDPOINT}/${id}`, usuario);
  }

  static deletar(id) {
    return cy.apiDelete(`${this.ENDPOINT}/${id}`);
  }
}

export default UsuariosService;