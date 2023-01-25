import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { Homereducer } from "../Redux/UserProfile/redux/reducer";
import { ParamReducer } from "../param_reducer/reducer";
import { reducer } from "../data_redux/reducer";
import MyAddReducer from "../Redux/UserProfile/Reducer";
import thunk from "redux-thunk";

// const thunkmiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   next(action);
// };

const think = applyMiddleware(thunk);

const rootReducer = combineReducers({
  reducer: reducer,
  ParamReducer: ParamReducer,
  HomeReducer: Homereducer,
  MyAddReducer: MyAddReducer,
});
export const store = createStore(rootReducer, think);

// store.subscribe(() => {
//     console.log(store.getState().reducer.data.published_ads)
// })
