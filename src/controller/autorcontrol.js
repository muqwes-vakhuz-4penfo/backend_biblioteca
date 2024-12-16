const Autor = require("../modelos/autor");
const datos = require("../datos/datos.json");

exports.listarAutores = (req, res) => {
  const autores = Autor.listarTodos(datos.autores);
  res.json(autores);
};
