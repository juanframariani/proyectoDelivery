/**
 * LLENA LA BD CON DATOS DE EJEMPLO AL INCIAR EL SERVIDOR
 * para desactivar, editar config/environment/index.js, y cambiar a `seedDB: false`
 */

"use strict";
// Insert seed models below
var User = require("../api/modelo/usuario/modelo.usuario");
var Articulo = require("../api/modelo/articulo/modelo.articulo");
var UnidadDeMedida = require("../api/modelo/unidadDeMedida/modelo.unidadDeMedida");
var Rubro = require("../api/modelo/rubro/modelo.rubro");

User.countDocuments({}).exec((err, count) => {
  if (err) {
    console.error(err);
    return;
  }
  if (count == 0) {
    User.create(
      {
        nombre: "admin",
        nombreUsuario: "admin",
        contrasenia: "admin"
      },
      (err, seedUser) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("SUPERUSUARIO CREADO");
      }
    );
  }
});

Rubro.countDocuments({}).exec((err, count) => {
  if (err) {
    console.error(err);
    return;
  }
  if (count == 0) {
    Rubro.create(
      {
        rubro: "Pizzas"
      },
      (err, seedRubro) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Rubro Pizza Creado");
      }
    );
    Rubro.create(
      {
        rubro: "Lomos"
      },
      (err, seedRubro) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Rubro Lomos Creado");
      }
    );
    Rubro.create(
      {
        rubro: "Empanadas"
      },
      (err, seedRubro) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Rubro Empanadas Creado");
      }
    );
    Rubro.create(
      {
        rubro: "Bebidas"
      },
      (err, seedRubro) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Rubro Bebidas Creado");
      }
    );
    Rubro.create(
      {
        rubro: "Insumo"
      },
      (err, seedRubro) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Rubro Insumo Creado");
      }
    );
  }
});

UnidadDeMedida.countDocuments({}).exec((err, count) => {
  if (err) {
    console.error(err);
    return;
  }
  if (count == 0) {
    UnidadDeMedida.create(
      {
        unidadDeMedida: "Cm3"
      },
      (err, seedUser) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Unidad de Medida 'cm3' creada");
      }
    );
    UnidadDeMedida.create(
      {
        unidadDeMedida: "Kg"
      },
      (err, seedUser) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Unidad de Medida 'Kg' creada");
      }
    );
    UnidadDeMedida.create(
      {
        unidadDeMedida: "Unidad"
      },
      (err, seedUser) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Unidad de Medida 'Unidad' creada");
      }
    );
  }
});

Articulo.countDocuments({}).exec((err, count) => {
  if (err) {
    console.error(err);
    return;
  }
  if (count == 0) {
    Articulo.create(
      {
        codigoArticulo: "coca",
        denominacionArticulo: "Coca-Cola 2 lts",
        preciosCompraArticulo: "50",
        precioVentaArticulo: "100",
        stockActual: "10",
        esInsumo: false,
        estaActivo: true,
        //unidadDeMedida: unidadDeMedida,
        rubro: "Bebidas"
      },
      (err, seedUser) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("ARTICULO COCA-COLA CREADO");
      }
    );
    Articulo.create(
      {
        codigoArticulo: "muzza",
        denominacionArticulo: "Queso Muzzarella",
        preciosCompraArticulo: "500",
        precioVentaArticulo: "700",
        stockActual: "5",
        esInsumo: true,
        estaActivo: true,
        //unidadDeMedida: unidadDeMedida,
        rubro: "Pizzas"
      },
      (err, seedUser) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("ARTICULO PIZZA CREADO");
      }
    );
  }
});
