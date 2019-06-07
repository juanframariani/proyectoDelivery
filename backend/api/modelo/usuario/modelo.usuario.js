"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PWDDEFECTO = "admin";
const bcrypt = require("bcryptjs");

const ModeloUsuario = new Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    apellido: {
      type: String
    },
    telefono: {
      type: String
    },
    email: {
      type: String
    },
    nombreUsuario: {
      type: String,
      required: true
    },
    contrasenia: {
      type: String,
      required: true
    },
    // departamento: {
    //   type: String,
    //   required: false
    // },
    localidad: {
      type: String,
      required: false
    },
    calle: {
      type: String,
      required: false
    },
    numero: {
      type: String,
      required: false
    },
    tipoUsuario: {
      codigo: Number,
      tipo: String
    },
    estaActivo: {
      type: Boolean,
      default: true
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

ModeloUsuario.pre("find", function() {
  this.where({ estaActivo: { $ne: false } });
});

var validatePresenceOf = function(value) {
  return value && value.length;
};

/**
 * Pre-save hook
 */
ModeloUsuario.pre("save", function(next) {
  if (!this.isNew) return next();

  if (!validatePresenceOf(this.contrasenia)) {
    next();
  } else {
    this.contraseniaNueva = this.contrasenia || PWDDEFECTO;
    this.contrasenia = bcrypt.hashSync(this.contraseniaNueva, 8);
    return next();
  }
});

module.exports = mongoose.model("Usuario", ModeloUsuario);
