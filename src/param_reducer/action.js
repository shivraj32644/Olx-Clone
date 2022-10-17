
export const ADD_PARAM = 'ADD_PARAM';
export const REMOVE_PARAM = 'REMOVE_PARAM';
export const RESET = 'RESET';



export const addParams = (payload) => ({
    type: ADD_PARAM,
    payload
})


export const removeParams = (payload) => ({
    type: REMOVE_PARAM,
    payload
})


export const resetParams = () => ({
    type: RESET,
   
})