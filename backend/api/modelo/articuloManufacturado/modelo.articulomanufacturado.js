"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModeloArticuloManufacturado = new Schema({
  denominacion: String,
  tiempoEnCocina: Number,
  ingredientes: {
    type: Schema.Types.ObjectId,
    ref: "Ingrediente"
  },
  precioVenta: Number,
  rubro: {
    type: Schema.Types.ObjectId,
    ref: "Rubro"
  },
  estaActivo: Boolean
});

ModeloArticuloManufacturado.pre("find", function() {
  this.where({ estaActivo: { $ne: false } });
});

module.exports = mongoose.model(
  "ArticuloManufacturado",
  ModeloArticuloManufacturado
);
