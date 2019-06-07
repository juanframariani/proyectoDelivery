import React, { Component } from "react";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { Vendor } from "./vendor/vendor.component";
import { AddVendor as AgregarUsuario } from "./vendor/agregarusuario.component";
import { AgregarArticulo } from "./articulos/agregararticulo.component";
import { Login } from "./login/";
import { Administrador } from "./administrador/";
import { Articulos } from "./articulos";
import { Reportes } from "./reportes";
import { history } from "./_helpers";
import { PrivateRoute } from "./_components";
import { UsuarioForm } from "./usuario/usuario.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/usuario" component={UsuarioForm} />
              <PrivateRoute
                exact
                path="/administrador"
                component={Administrador}
              />
              <PrivateRoute exact path="/vendor" component={Vendor} />
              <PrivateRoute
                exact
                path="/add-vendor"
                component={AgregarUsuario}
              />
              <PrivateRoute
                exact
                path="/edit-vendor/:id"
                component={AgregarUsuario}
              />
              <PrivateRoute exact path="/articulos" component={Articulos} />
              <PrivateRoute
                exact
                path="/agregar-articulo"
                component={AgregarArticulo}
              />
              <PrivateRoute
                exact
                path="/modificar-articulo/:id"
                component={AgregarArticulo}
              />
              <PrivateRoute exact path="/reportes" component={Reportes} />
              <Route exact path="/" component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
