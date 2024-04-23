//all reducers
import { createStore, combineReducers } from "redux";
import { MyproductList } from "../reducer";
import { MyCurrencyNames } from "../reducer";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

export const store = createStore(
  combineReducers({
   MyproductList,
   MyCurrencyNames

  }),
  //  composeEnhancers()
);