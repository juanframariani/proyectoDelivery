//COMPONENTES REACT
import React, { Component } from "react";
import AppBar from "../_components/appbar";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Nav from "../_components/nav";
import { connect } from "react-redux";
import { accionesArticulo } from "../_actions";
import { accionesRubro } from "../_actions";
import { withRouter } from "react-router-dom";
//COMPONENTES MATERIAL UI
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
//import NativeSelect from "@material-ui/core/NativeSelect";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap"
  },

  contentRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },

  appFrame: {
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`
  },
  "appBar-left": {
    marginLeft: drawerWidth
  },
  "appBar-right": {
    marginRight: drawerWidth
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class AgregarArticulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estadoInsumo: false,
      opcionesRubro: []
    };
  }

  handleChange = prop => event => {
    const { checked } = event.target;
    const { dispatch } = this.props;

    this.setState({
      estadoInsumo: checked
    });

    // console.log("VALOR handleChange: " + checked);
    // ACA ESTA EL PROBLEMA!!!!!!
    console.log("Valor Event: " + event.target.value);
    dispatch(accionesArticulo.onChangeProps(prop, event));
  };

  //componentDidMount se fija en la URL por parametros, si hay un ID
  //se carga el formulario para editar, llamado al método getArticulosByID
  //que trae los detalles para ser editados
  componentDidMount() {
    //const { dispatchRubro } = this.props; //se sobreescriben las props????
    //dispatchRubro(accionesRubro.getRubros());

    const {
      match: { params }
    } = this.props;

    if (params.id) {
      const { dispatch } = this.props;
      dispatch(
        accionesArticulo.getArticulosById(params.id),
        accionesRubro.getRubros()
      );
    }
  }

  //handleClick sirve para crear o actualizar los articulos
  handleClick(event) {
    const {
      match: { params }
    } = this.props;
    const { dispatch } = this.props;

    let payload = {
      codigoArticulo: this.props.articulos.codigoArticulo,
      denominacionArticulo: this.props.articulos.denominacionArticulo,
      preciosCompraArticulo: this.props.articulos.preciosCompraArticulo,
      precioVentaArticulo: this.props.articulos.precioVentaArticulo,
      stockActual: this.props.articulos.stockActual,
      esInsumo: this.props.articulos.esInsumo,
      rubro: this.props.articulos.rubro
      //VER CAMBIO DE CHECKBOX PARA INSUMOS
    };

    if (params.id) {
      dispatch(accionesArticulo.editarArticulos(params.id, payload));
    } else {
      dispatch(accionesArticulo.crearArticulos(payload));
    }
  }

  render() {
    const { classes } = this.props;
    //const { rubros } = this.props.rubros; //undefined?????

    const {
      match: { params }
    } = this.props;

    console.log(this.props.articulos.esInsumo);
    console.log(this.props.articulos);

    function InsertarTexto(props) {
      return <Typography> {"Agregar Nuevo Artículo"}</Typography>;
    }

    function EditarTexto(props) {
      return <Typography> {"Editar Artículo"}</Typography>;
    }

    function Cabecera() {
      if (params.id) {
        return <EditarTexto />;
      }
      return <InsertarTexto />;
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar />
          <Nav />
          <main className={classes.content}>
            <Grid container spacing={24}>
              <Grid item xs={3}>
                <Cabecera />
              </Grid>
              <Grid item xs={6} />
              <Grid item xs={3} container justify="flex-end" />
            </Grid>
            <br /> <br />
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <div>
                  <Paper className={classes.contentRoot} elevation={1}>
                    <form className={classes.container}>
                      <Grid container spacing={24}>
                        <Grid item xs={3}>
                          <TextField
                            id="codigoArticulo"
                            label="Código"
                            className={classes.TextField}
                            value={this.props.articulos.codigoArticulo}
                            onChange={this.handleChange("codigoArticulo")}
                            margin="normal"
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            id="denominacionArticulo"
                            label="Denominación"
                            className={classes.TextField}
                            value={this.props.articulos.denominacionArticulo}
                            onChange={this.handleChange("denominacionArticulo")}
                            margin="normal"
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            id="preciosCompraArticulo"
                            label="Precio Compra"
                            className={classes.TextField}
                            value={this.props.articulos.preciosCompraArticulo}
                            onChange={this.handleChange(
                              "preciosCompraArticulo"
                            )}
                            margin="normal"
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            id="precioVentaArticulo"
                            label="Precio Venta"
                            className={classes.TextField}
                            value={this.props.articulos.precioVentaArticulo}
                            onChange={this.handleChange("precioVentaArticulo")}
                            margin="normal"
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            id="stockActual"
                            label="Stock"
                            className={classes.TextField}
                            value={this.props.articulos.stockActual}
                            onChange={this.handleChange("stockActual")}
                            margin="normal"
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Checkbox
                            id="esInsumo"
                            label="Insumo"
                            defaultChecked={this.state.estadoInsumo}
                            value={this.state.estadoInsumo.toString()}
                            onChange={this.handleChange("esInsumo")}
                            margin="normal"
                          />
                          Insumo
                        </Grid>
                        <Grid item xs={3}>
                          <Select
                            native
                            value={this.state}
                            onChange={this.handleChange("rubro")}
                          >
                            <option value="Bebidas"> Bebidas</option>
                            <option value="Pizzas"> Pizzas</option>
                            <option value="Lomos"> Lomos</option>
                          </Select>
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container spacing={24}>
                        <Grid item xs={3} />
                        <Grid item xs={6} />
                        <Grid item xs={3} container justify="center">
                          <Grid container spacing={24}>
                            <Grid item xs={6} container justify="center">
                              <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                component="a"
                                href="/articulos"
                              >
                                Cancelar
                              </Button>
                            </Grid>
                            <Grid item xs={6} container justify="flex-start">
                              <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={event => this.handleClick(event)}
                              >
                                Guardar
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </form>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </main>
        </div>
      </div>
    );
  }
}

AgregarArticulo.propTypes = {
  classes: propTypes.object.isRequired
};

const mapStateToProps = state => {
  return state;
};

const conectarCrearArticulo = withRouter(
  connect(
    mapStateToProps,
    null,
    null,
    {
      pure: false
    }
  )(withStyles(styles)(AgregarArticulo))
);

export { conectarCrearArticulo as AgregarArticulo };
