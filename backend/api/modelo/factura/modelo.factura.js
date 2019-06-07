"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModeloFactura = new Schema({
  fecha: Date,
  numeroFactura: Number,
  pedido: {
    type: Schema.Types.ObjectId,
    ref: "Pedido"
  },
  descuento: Number,
  totalFactura: Number
});

module.exports = mongoose.model("Factura", ModeloFactura);
