"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModeloRubro = new Schema({
  rubro: String,
  estaActivo: {
    type: Boolean,
    default: true
  }
});

ModeloRubro.pre("find", function() {
  this.where({ estaActivo: { $ne: false } });
});

module.exports = mongoose.model("Rubro", ModeloRubro);
