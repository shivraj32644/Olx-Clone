import {legacy_createStore as createStore , combineReducers ,applyMiddleware} from 'redux'
import { ParamReducer } from '../param_reducer/reducer';
import { reducer } from './reducer';


const thunkmiddleware = (store)=>(next)=>(action) => {
    if (typeof action === "function") {
        return action(store.dispatch);
    }
    next(action);
    
}


const think = applyMiddleware(thunkmiddleware)


const rootReducer = combineReducers({
    reducer: reducer,
    ParamReducer: ParamReducer,
    
})
export const store = createStore(rootReducer, think)

// store.subscribe(() => {
//     console.log(store.getState().reducer.data.published_ads)
// })