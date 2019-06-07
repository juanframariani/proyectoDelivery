"use strict";

const Rubro = require("../rubro/modelo.rubro");

module.exports = {
  index: (req, res) => {
    Rubro.find({}).exec((err, detalleRubro) => {
      if (err) {
        console.err(err);
        res.status(500).json({ message: err });
      }
      res.status(200).json({
        message: "RUBROS CARGADOS",
        data: detalleRubro
      });
    });
  },
  retrieve: (req, res) => {
    const rubroId = req.params.id;
    Rubro.findOne({ _id: rubroId }).exec((err, detalleRubro) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: err });
      }
      res.status(200).json({
        message: "RUBRO CARGADO",
        data: detalleRubro
      });
    });
  },
  create: (req, res) => {
    Rubro.create(req.body, (err, detalleRubro) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: err });
      }
      res.status(200).json({
        message: "Rubro Creado Correctamente",
        data: detalleRubro
      });
    });
  },
  update: (req, res) => {
    const rubroId = req.params.id;
    Rubro.findByIdAndUpdate(rubroId, { $set: req.body }).exec(
      (err, detalleRubro) => {
        if (err) res.status(500).json({ message: err });
        res.status(200).json({ message: "Rubro Actualizado" });
      }
    );
  },
  delete: (req, res) => {
    const rubroId = req.params.id;
    Rubro.findByIdAndUpdate(rubroId, {
      $set: { estaActivo: false }
    }).exec((err, detalleRubro) => {
      if (err) res.status(500).json({ message: err });
      res.status(200).json({ message: "Rubro Eliminado" });
    });
  }
};
