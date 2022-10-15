import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../data_redux/action";

export const ParamContext = createContext();

export const ParamContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [ParamObj, setParamObj] = useState({});

  const addParams = (value) => {
    setParamObj({ ...value });

    // dispatch(fetchData(value))
  };
  return (
    <ParamContext.Provider value={{ ParamObj, addParams }}>
      {children}
    </ParamContext.Provider>
  );
};
