class Autor {
  constructor(id, nombre, nacionalidad) {
    this.id = id;
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
  }

  static listarTodos(autores) {
    return autores;
  }
}

module.exports = Autor;
