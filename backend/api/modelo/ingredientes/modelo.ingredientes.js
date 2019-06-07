"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModeloIngredientes = new Schema({
  articulo: { type: Schema.Types.ObjectId, ref: "Articulo" },
  cantidad: Number
});

module.exports = mongoose.model("Ingredientes", ModeloIngredientes);
