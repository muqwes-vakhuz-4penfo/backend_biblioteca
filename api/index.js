const express = require("express");
const autorRoutes = require("../src/rutas/rutaAutor");
const libroRoutes = require("../src/rutas/rutaLibro");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/autores", autorRoutes);
app.use("/api/libros", libroRoutes);

export default app;
