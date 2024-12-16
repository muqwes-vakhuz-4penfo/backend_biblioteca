const Libro = require("../modelos/libros");
const datos = require("../datos/datos.json");

exports.listarLibros = (req, res) => {
  const libros = Libro.listarTodos(datos.libros);
  res.json(libros);
};

exports.listarLibrosDisponibles = (req, res) => {
  const librosDisponibles = Libro.listarDisponibles(datos.libros);
  res.json(librosDisponibles);
};

exports.listarLibrosNoDisponibles = (req, res) => {
  const librosNoDisponibles = Libro.listarNoDisponibles(datos.libros);
  res.json(librosNoDisponibles);
};
