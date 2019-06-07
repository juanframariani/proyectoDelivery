import React, { Component } from "react";
import { userService } from "../_services/";

class UsuarioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      nombreUsuario: "",
      contrasenia: "",

      departamento: "",
      localidad: "",
      calle: "",
      numero: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
      tipoUsuario: {
        codigo: 1,
        tipo: "cliente"
      }
    });
  }

  handleSubmit(event) {
    const that = this.state;
    //Codigo que llama al post hecho en node js
    let apiEndpoint = "usuarios/";
    userService.post(apiEndpoint, that).then(response => {
      console.log("Usuario creado");
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Nombre:
              <input
                type="text"
                name="nombre"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Apellido:
              <input
                type="text"
                name="apellido"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              telefono:
              <input
                type="text"
                name="telefono"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Usuario:
              <input
                type="text"
                name="nombreUsuario"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Contraseña:
              <input
                type="text"
                name="contrasenia"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Departamento:
              {/* <input type="text" name ="departamento" value={this.state.value} onChange={this.handleChange} /> */}
              <select name="departamento">
                <option value="" selected disabled hidden>
                  Seleccione Departamento
                </option>
                <option value="Ciudad de Mendoza">Ciudad de Mendoza</option>
                <option value="Gral Alvear">Gral. Alvear</option>
                <option value="Godoy Cruz">Godoy Cruz</option>
                <option value="Guaymallen">Guaymallén</option>
                <option value="Junin">Junín</option>
                <option value="La Paz">La Paz</option>
                <option value="Las Heras">Las Heras</option>
                <option value="Lavalle">Lavalle</option>
                <option value="Lujan de Cuyo">Luján de Cuyo</option>
                <option value="Maipu">Maipú</option>
                <option value="Malargue">Malargüe</option>
                <option value="Rivadavia">Rivadavia</option>
                <option value="San Carlos">San Carlos</option>
                <option value="San Martin">San Martín</option>
                <option value="San Rafael">San Rafael</option>
                <option value="Santa Rosa">Santa Rosa</option>
                <option value="Tunuyan">Tunuyán</option>
                <option value="Tupungato">Tupungato</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Localidad:
              <input
                type="text"
                name="localidad"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <option value="" selected disabled hidden>
                Seleccione Departamento
              </option>
            </label>
          </div>
          <div>
            <label>
              Calle:
              <input
                type="text"
                name="calle"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Numero:
              <input
                type="text"
                name="numero"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <input type="submit" value="Guardar Usuario" />
        </form>
      </div>
    );
  }
}

// const connectedUsuarioFormPage = withRouter(
//   connect(
//     mapStateToProps,
//     null,
//     null,
//     {
//       pure: false
//     }
//   )(withStyles(styles)(UsuarioForm))
// );

export { UsuarioForm };
