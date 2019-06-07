import { userService } from "../_services";
import { history } from "../_helpers";

export const accionesArticulo = {
  getArticulos,
  getArticulosById,
  onChangeProps,
  editarArticulos,
  crearArticulos,
  eliminarArticulosById
};

function getArticulos() {
  return dispatch => {
    let apiEndPoint = "articulos";
    userService
      .get(apiEndPoint)
      .then(response => {
        console.log(response);
        dispatch(modificarListaArticulos(response.data.data));
      })
      .catch(err => {
        console.log("Error");
        console.log(err);
      });
  };
}

function crearArticulos(payload) {
  return dispatch => {
    let apiEndPoint = "articulos/";
    userService.post(apiEndPoint, payload).then(response => {
      dispatch(crearInformacionDeArticulo());
      history.push("/articulos");
    });
  };
}

function getArticulosById(id) {
  return dispatch => {
    let apiEndPoint = "articulos/" + id;
    userService.get(apiEndPoint).then(response => {
      dispatch(editarDetalleDeArticulo(response.data.data));
    });
  };
}

function onChangeProps(props, event) {
  return dispatch => {
    dispatch(handleOnChangeProps(props, event.target.value));
    console.log("props articulos action: " + event.target.value);
  };
}

function editarArticulos(id, payload) {
  return dispatch => {
    let apiEndPoint = "articulos/" + id;
    userService.put(apiEndPoint, payload).then(response => {
      dispatch(actualizarArticulos());
      history.push("/articulos");
    });
  };
}

function eliminarArticulosById(id) {
  return dispatch => {
    let apiEndPoint = "articulos/" + id;
    userService.deleteDetail(apiEndPoint).then(response => {
      dispatch(eliminarDetalleArticulo());
      dispatch(accionesArticulo.getArticulos());
    });
  };
}

export function modificarListaArticulos(articulos) {
  return {
    type: "ARTICULOS_CARGADOS",
    articulos: articulos
  };
}

export function handleOnChangeProps(props, value) {
  return {
    type: "HANDLE_ON_CHANGE",
    props: props,
    value: value
  };
}

export function editarDetalleDeArticulo(articulos) {
  return {
    type: "DETALLE_ARTICULO",
    id: articulos._id,
    codigoArticulo: articulos.codigoArticulo,
    denominacionArticulo: articulos.denominacionArticulo,
    preciosCompraArticulo: articulos.preciosCompraArticulo,
    precioVentaArticulo: articulos.precioVentaArticulo,
    stockActual: articulos.stockActual,
    esInsumo: articulos.esInsumo
  };
}

export function actualizarArticulos() {
  return {
    type: "ARTICULO_ACTUALIZADO"
  };
}

export function crearInformacionDeArticulo() {
  return {
    type: "ARTICULO_CREADO_CORRECTAMENTE"
  };
}

export function eliminarDetalleArticulo() {
  return {
    type: "DETALLE_ARTICULO_ELIMINADO"
  };
}
