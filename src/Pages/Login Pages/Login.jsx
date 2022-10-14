import React,{useContext}from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContextProvider";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import Navbar from "../../Components/Navbar";
import {Box} from "@chakra-ui/react"

const Login = () => {
  const {isAuth}=useContext(AuthContext)
  if(isAuth){
    return <Navigate to="/sellcategories"/>
  }
  return (
    <div>
    <Navbar/>
  <div style={{width:"80%",margin:"auto"}}>
    <h1 style={{fontSize:"28px", fontWeight:"bold"}}>Login Form</h1>
    <LoginForm/>
  </div>
  </div>
  )
};

export default Login;