class Libro {
  constructor(id, titulo, autor, disponible = true) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = disponible;
  }

  static listarTodos(libros) {
    return libros;
  }

  static listarDisponibles(libros) {
    return libros.filter((libro) => libro.disponible);
  }

  static listarNoDisponibles(libros) {
    return libros.filter((libro) => !libro.disponible);
  }
}

module.exports = Libro;
