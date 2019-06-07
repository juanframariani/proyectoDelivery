"use strict";

const Articulo = require("../articulo/modelo.articulo");

module.exports = {
  index: (req, res) => {
    Articulo.find({}).exec((err, detalleArticulo) => {
      if (err) {
        console.err(err);
        res.status(500).json({ message: err });
      }
      res.status(200).json({
        message: "Detalles de Artículos Cargados Correctamente",
        data: detalleArticulo
      });
    });
  },
  retrieve: (req, res) => {
    const articuloId = req.params.id;
    Articulo.findOne({ _id: articuloId }).exec((err, detalleArticulo) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: err });
      }
      res.status(200).json({
        message: "Detalle de Artículo Cargado Correctamente",
        data: detalleArticulo
      });
    });
  },
  create: (req, res) => {
    Articulo.create(req.body, (err, detalleArticulo) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: err });
      }
      res.status(200).json({
        message: "Articulo Creado Correctamente",
        data: detalleArticulo
      });
    });
  },
  update: (req, res) => {
    const articuloId = req.params.id;
    Articulo.findByIdAndUpdate(articuloId, { $set: req.body }).exec(
      (err, detalleArticulo) => {
        if (err) res.status(500).json({ message: err });
        res.status(200).json({ message: "Articulo Actualizado" });
      }
    );
  },
  delete: (req, res) => {
    const articuloId = req.params.id;
    Articulo.findByIdAndUpdate(articuloId, {
      $set: { estaActivo: false }
    }).exec((err, detalleArticulo) => {
      if (err) res.status(500).json({ message: err });
      res.status(200).json({ message: "Artículo Eliminado" });
    });
  }
};
