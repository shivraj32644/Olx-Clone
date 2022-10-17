import React,{useContext} from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute2 = ({children}) => {
  const {isAuth}=useContext(AuthContext)
  if(!isAuth){
    return <Navigate to="/login"/>
  }
  return children;
};

export default PrivateRoute2;