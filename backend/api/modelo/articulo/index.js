"use strict";

const express = require("express");
const controlador = require("./controlador.articulo");
const router = express.Router();
const VerifyToken = require("../../auths/verifyToken");

router.get("/", VerifyToken, controlador.index);
router.get("/:id", VerifyToken, controlador.retrieve);
router.post("/", controlador.create);
router.put("/:id", VerifyToken, controlador.update);
router.delete("/:id", VerifyToken, controlador.delete);

module.exports = router;
