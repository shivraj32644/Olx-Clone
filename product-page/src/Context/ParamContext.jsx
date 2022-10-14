import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export const ParamContext = createContext();

export const ParamContextProvider = ({children}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [ParamObj, setParamObj] = useState({});

    const addParams = (value) => {
        setParamObj(value)
    }
    return <ParamContext.Provider value={ {ParamObj, addParams} } >{children}</ParamContext.Provider>;
};
