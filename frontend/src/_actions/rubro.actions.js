import { userService } from "../_services";
//import { history } from "../_helpers";

export const accionesRubro = {
  getRubros,
  onChangeProps
};

function getRubros() {
  return dispatchRubro => {
    let apiEndPoint = "rubros";
    userService
      .get(apiEndPoint)
      .then(response => {
        console.log(response);
        dispatchRubro(modificarListaRubros(response.data.data));
      })
      .catch(err => {
        console.log("Error");
        console.log(err);
      });
  };
}

function onChangeProps(props, event) {
  return dispatchRubro => {
    dispatchRubro(manejarOnChangeProps(props, event.target.value));
  };
}

export function modificarListaRubros(rubros) {
  return {
    type: "RUBROS_CARGADOS",
    rubros: rubros
  };
}

export function manejarOnChangeProps(props, value) {
  return {
    type: "HANDLE_ON_CHANGE",
    props: props,
    value: value
  };
}
