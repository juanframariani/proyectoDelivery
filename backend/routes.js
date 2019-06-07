/**
 * Main application routes
 */

"use strict";

module.exports = function(app) {
  app.use("/api/v1/auths", require("./api/auths"));
  app.use("/api/v1/vendors", require("./api/modelo/empleado"));
  app.use("/api/v1/usuarios", require("./api/modelo/usuario"));
  app.use("/api/v1/articulos", require("./api/modelo/articulo"));
};
