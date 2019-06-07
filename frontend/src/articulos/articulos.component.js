import { connect } from "react-redux";
import { accionesArticulo } from "../_actions";
import React, { Component } from "react";
import AppBar from "../_components/appbar";
import propTypes from "prop-types";
import Nav from "../_components/nav";
//COMPONENTES DE MATERIAL UI
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
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
  }
});

class Articulos extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(accionesArticulo.getArticulos());
  }

  handleChange = event => {
    this.setState({
      anchor: event.target.value
    });
  };

  handleClick = (event, id) => {
    console.log(id);
    const { dispatch } = this.props;
    dispatch(accionesArticulo.eliminarArticulosById(id));
  };

  render() {
    const { classes } = this.props;
    const { articulos } = this.props.articulos;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar />
          <Nav />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container spacing={24}>
              <Grid item xs={3}>
                <Typography>{"LISTADO DE ARTICULOS"}</Typography>
              </Grid>
              <Grid item xs={6} />
              <Grid item xs={3} container justify="flex-end" />
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={3} />
              <Grid item xs={6} />
              <Grid item xs={3} container justify="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  component="a"
                  href="/agregar-articulo"
                >
                  Agregar Artículo
                </Button>
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid container spacing={24}>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Código</TableCell>
                      <TableCell>Descripción</TableCell>
                      <TableCell numeric>Precio Compra</TableCell>
                      <TableCell numeric>Precio Venta</TableCell>
                      <TableCell numeric>Stock</TableCell>
                      <TableCell>Insumo</TableCell>
                      <TableCell>Rubro</TableCell>
                      <TableCell>Modificar/Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {articulos.map(art => {
                      return (
                        <TableRow key={art._id}>
                          <TableCell component="th" scope="row">
                            {art.codigoArticulo}
                          </TableCell>
                          <TableCell> {art.denominacionArticulo}</TableCell>
                          <TableCell numeric>
                            {" "}
                            {art.preciosCompraArticulo}
                          </TableCell>
                          <TableCell numeric>
                            {" "}
                            {art.precioVentaArticulo}
                          </TableCell>
                          <TableCell numeric> {art.stockActual}</TableCell>
                          <TableCell>
                            {" "}
                            <Checkbox checked={art.esInsumo} disabled="true" />
                          </TableCell>
                          <TableCell> {art.rubro}</TableCell>
                          <TableCell>
                            <IconButton
                              className={classes.button}
                              aria-label="Modificar"
                              component="a"
                              href={`/modificar-articulo/${art._id}`}
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              className={classes.button}
                              aria-label="Eliminar"
                              onClick={event =>
                                this.handleClick(event, art._id)
                              }
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </main>
        </div>
      </div>
    );
  }
}

Articulos.propTypes = {
  classes: propTypes.object.isRequired
};

/* function mapStateToProps(state) {
  return state;
} */

const mapStateToProps = state => {
  return {
    articulos: state.articulos
  };
};

const connectedArticulosPage = withRouter(
  connect(
    mapStateToProps,
    null,
    null,
    {
      pure: false
    }
  )(withStyles(styles)(Articulos))
);

export { connectedArticulosPage as Articulos };
