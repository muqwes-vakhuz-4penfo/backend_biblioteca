const express = require("express");
const autorRoutes = require("./src/rutas/rutaAutor");
const libroRoutes = require("./src/rutas/rutaLibro");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/autores", autorRoutes);
app.use("/libros", libroRoutes);

const routes = [
  {
    Endpoint: "/autores",
    Method: "GET",
    Description: "Listar todos los autores",
  },
  {
    Endpoint: "/libros",
    Method: "GET",
    Description: "Listar todos los libros",
  },
  {
    Endpoint: "/libros/disponibles",
    Method: "GET",
    Description: "Listar libros disponibles",
  },
  {
    Endpoint: "/libros/nodisponibles",
    Method: "GET",
    Description: "Listar libros no disponibles",
  },
];

app.listen(PORT, () => {
  console.log("\n=== API Biblioteca ===");
  console.log(`🚀 Servidor corriendo en : http://localhost:${PORT}`);
  console.log("\n=== Rutas disponibles ===");
  console.table(
    routes.map((route) => ({
      ...route,
      Endpoint: `http://localhost:${PORT}${route.Endpoint}`,
    }))
  );
});
