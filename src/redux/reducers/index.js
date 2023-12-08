// src/reducers/index.js

import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import cartReducer from "./cart-reducer";
import mianPageReducer from "./mainPage";

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
  mianPageReducer: mianPageReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
