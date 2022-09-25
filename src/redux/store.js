import { createStore } from "redux";
import { productReducer } from "./reducer";

const devtools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store=createStore(productReducer,devtools); 