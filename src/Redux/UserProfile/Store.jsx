import { legacy_createStore as createStore, combineReducers } from "redux"; 
import Reducer from "./Reducer";

 const store = createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  export default store;