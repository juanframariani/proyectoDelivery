"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModeloTipoUsuario = new Schema({
  codigo: Number,
  tipoUsuario: String
});

module.exports = mongoose.model("TipoUsuario", ModeloTipoUsuario);
