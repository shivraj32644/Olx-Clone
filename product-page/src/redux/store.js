import {legacy_createStore as createStore,applyMiddleware} from 'redux'
import { reducer } from './reducer';


const thunkmiddleware = (store)=>(next)=>(action) => {
    if (typeof action === "function") {
        return action(store.dispatch);
    }
    next(action);
    
}


const think = applyMiddleware(thunkmiddleware)
export const store = createStore(reducer, think)

// store.subscribe(() => {
//     console.log(store.getState())
// })