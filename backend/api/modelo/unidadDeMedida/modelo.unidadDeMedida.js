"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModeloUnidadDeMedida = new Schema({
  unidadDeMedida: String
});

module.exports = mongoose.model("UnidadDeMedida", ModeloUnidadDeMedida);
