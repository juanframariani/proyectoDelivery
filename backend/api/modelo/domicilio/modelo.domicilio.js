"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModeloDomicilio = new Schema(
  {
    calle: {
      type: String
    },
    numero: {
      type: int
    },
    localidad: {
      type: String
    },
    departamento: {
      type: String
    }
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

module.exports = mongoose.model("Domicilio", ModeloDomicilio);
