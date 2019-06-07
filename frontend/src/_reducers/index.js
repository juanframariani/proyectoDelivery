import { combineReducers } from "redux";

import { authentication } from "./auth.reducer";
import { vendor } from "./vendor.reducer";
import { articulos } from "./articulos.reducer";

const rootReducer = combineReducers({
  authentication,
  vendor,
  articulos
});

export default rootReducer;
