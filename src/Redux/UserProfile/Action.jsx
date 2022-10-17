import { ON_ERROR,ON_LOADING,ON_SUCCESS} from "./ActionType";

const OnError =()=>{

    return {
        type:ON_ERROR,
        
    }
}

const OnLoading =()=>{
    return {
        type:ON_LOADING
    }
}

const OnSuccess =(data)=>{
    return {
        type:ON_SUCCESS,
        deploy:data
    }
}

export {OnError,OnLoading,OnSuccess}