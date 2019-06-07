"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModeloArticulo = new Schema(
  {
    codigoArticulo: String,
    denominacionArticulo: String,
    preciosCompraArticulo: Number,
    precioVentaArticulo: Number,
    stockActual: Number,
    esInsumo: {
      type: Boolean
      //default: true
    },
    estaActivo: {
      type: Boolean,
      default: true
    },
    unidadDeMedida: String,
    rubro: String
  },
  {
    id: false,
    toObject: {
      virtuals: true,
      getters: true
    },
    toJSON: {
      virtuals: true,
      getters: true,
      setters: false
    },
    timestamps: true
  }
);

ModeloArticulo.pre("find", function() {
  this.where({ estaActivo: { $ne: false } });
});

module.exports = mongoose.model("Articulos", ModeloArticulo);
