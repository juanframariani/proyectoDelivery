"use strict";

const jwt = require("jsonwebtoken");
const config = require("../../config/environment");
const Usuario = require("../modelo/usuario/modelo.usuario");
const bcrypt = require("bcryptjs");

module.exports = {
  login: (req, res) => {
    Usuario.findOne({ nombreUsuario: req.body.nombreUsuario }, function(
      err,
      usuario
    ) {
      if (err) {
        return res.status(401).json({ message: err });
      }

      var isPasswordValid = bcrypt.compareSync(
        req.body.contrasenia,
        usuario.contrasenia
      );

      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ auth: false, token: null, message: "USUARIO NO AUTORIZADO" });
      } else {
        let payload = {
          user_id: usuario._id,
          nombreUsuario: usuario.nombreUsuario
        };

        console.log(config.secrets.session);
        let token = jwt.sign(payload, config.secrets.session, {
          expiresIn: config.secrets.expiresIn
        });

        return res.status(200).json({
          auth: true,
          token: token,
          message: "USUARIO LOGUEADO CORRECTAMENTE"
        });
      }
    });
  }
};
