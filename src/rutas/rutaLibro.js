const express = require("express");
const router = express.Router();
const libroController = require("../controller/librocontrol");

router.get("/", libroController.listarLibros);
router.get("/disponibles", libroController.listarLibrosDisponibles);
router.get("/nodisponibles", libroController.listarLibrosNoDisponibles);

module.exports = router;
