import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  next(action);
};

const thunk = applyMiddleware(thunkMiddleware);
export const store = createStore(reducer, thunk);

// store.subscribe(() => {
//     console.log(store.getState())
// })
