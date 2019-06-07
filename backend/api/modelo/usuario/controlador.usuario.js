"use strict";

const Usuario = require("../usuario/modelo.usuario");

module.exports = {
//   index: (req, res) => {
//     Vendor.find({}).exec((err, vendorDetails) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ message: err });
//       }
//       res.status(200).json({
//         message: "Vendor Details fetched Successfully",
//         data: vendorDetails
//       });
//     });
//   },
//   retrieve: (req, res) => {
//     const vendorId = req.params.id;
//     Vendor.findOne({ _id: vendorId }).exec((err, vendorDetails) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ message: err });
//       }
//       res.status(200).json({
//         message: "Vendor Detail fetched Successfully",
//         data: vendorDetails
//       });
//     });
//   },
  create: (req, res) => {
    Usuario.create(req.body, (err, usuarioDetails) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: err });
      }
      res
        .status(201)
        .json({ message: "Usuario Created Successfully", data: usuarioDetails });
    });
  }
//   update: (req, res) => {
//     const vendorId = req.params.id;
//     Vendor.findByIdAndUpdate(vendorId, { $set: req.body }).exec(
//       (err, vendorDetails) => {
//         if (err) res.status(500).json({ message: err });
//         res.status(200).json({ message: "Vendor updated" });
//       }
//     );
//   },
//   delete: (req, res) => {
//     const vendorId = req.params.id;
//     Vendor.findByIdAndUpdate(vendorId, { $set: { is_active: false } }).exec(
//       (err, vendorDetails) => {
//         if (err) res.status(500).json({ message: err });
//         res.status(200).json({ message: "Vendor Deleted" });
//       }
//     );
//   }
};
