// src/reducers/cart-reducer.js

import { CHANGE_STATE } from "../actions/mainPage-actions";

const initialState = {
  type: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATE: {
      return Object.assign({}, state, {
        type: action.setState,
      });
    }

    default:
      return state;
  }
}
