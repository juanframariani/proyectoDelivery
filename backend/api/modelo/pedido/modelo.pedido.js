"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModeloPedido = new Schema({
  fecha: Date,
  numeroPedido: Number,
  estadoPedido: {
    type: Schema.Types.ObjectId,
    ref: "EstadoPedido"
  },
  horaEstimadaFin: Number,
  tipoEnvio: {
    type: Schema.Types.ObjectId,
    ref: "TipoEnvio"
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: "Usuario"
  },
  articuloManufacturado: [
    { type: Schema.Types.ObjectId, ref: "ArticuloManufacturado" }
  ],
  articulos: [{ type: Schema.Types.ObjectId, ref: "EstadoPedido" }],
  subtotal: Number
});

module.exports = mongoose.model("Pedido", ModeloPedido);
