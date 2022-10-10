import React,{useContext}from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContextProvider";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  const {isAuth}=useContext(AuthContext)
  if(isAuth){
    return <Navigate to="/sellcategories"/>
  }
  return (
  <div style={{width:"80%",margin:"auto"}}>
    <h1 style={{fontSize:"28px", fontWeight:"bold"}}>Login Form</h1>
    <LoginForm/>
  </div>
  )
};

export default Login;