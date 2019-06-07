const initialState = {
  anchor: "left",
  articulos: [],
  open: false,
  id: "",
  codigoArticulo: "",
  denominacionArticulo: "",
  preciosCompraArticulo: "",
  precioVentaArticulo: "",
  stockActual: "",
  esInsumo: false,
  estaActivo: true
};

export function articulos(state = initialState, action) {
  switch (action.type) {
    case "ARTICULOS_CARGADOS":
      return {
        ...state,
        articulos: action.articulos
      };

    case "DETALLE_ARTICULO":
      return {
        ...state,
        id: action.id,
        codigoArticulo: action.codigoArticulo,
        denominacionArticulo: action.denominacionArticulo,
        preciosCompraArticulo: action.preciosCompraArticulo,
        precioVentaArticulo: action.precioVentaArticulo,
        stockActual: action.stockActual,
        esInsumo: action.esInsumo
        //estaActivo: action.estaActivo
      };

    case "ARTICULO_ACTUALIZADO":
      return state;

    case "HANDLE_ON_CHANGE":
      return {
        ...state,
        [action.props]: action.value
      };
    default:
      return state;
  }
}
