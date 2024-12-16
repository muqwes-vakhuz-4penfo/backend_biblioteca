const express = require("express");
const router = express.Router();
const autorController = require("../controller/autorcontrol");

router.get("/", autorController.listarAutores);

module.exports = router;
