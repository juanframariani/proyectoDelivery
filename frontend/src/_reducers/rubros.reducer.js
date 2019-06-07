const initialState = {
  anchor: "left",
  rubros: [],
  open: false,
  id: "",
  rubro: ""
};

export function rubros(state = initialState, action) {
  switch (action.type) {
    case "RUBROS_CARGADOS":
      return {
        ...state,
        rubros: action.rubros
      };
    case "HANDLE_ON_CHANGE":
      return {
        ...state,
        [action.props]: action.value
      };
    default:
      return state;
  }
}
