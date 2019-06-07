"use strict";

// SE SETEA POR DEFECTO MODO DE TRABAJO "DEVELOPMENT"
process.env.VENDOR_NODE_ENV = process.env.VENDOR_NODE_ENV || "development";

const express = require("express");
const config = require("./config/environment");
const mongoose = require("mongoose");

//CONEXION A LA BASE DE DATOS
mongoose.Promise = global.Promise;
mongoose.connect(config.db.URI, config.mongo.options);

mongoose.connection.on("error", function(err) {
  console.error("Error de conexion a MongoDB: " + err);
  process.exit(-1);
});

const app = express();

const server = require("http").createServer(app);
require("./config/express")(app);
require("./routes")(app);
require("./config/seed");

//INICIO DEL SERVIDOR
server.listen(config.port, config.ip, function() {
  console.log(
    "Express server escuchando en puerto: %d, en modo: %s",
    config.port,
    app.get("env")
  );
});

// Expose app
exports = module.exports = app;
