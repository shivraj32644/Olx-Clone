import React from "react";
import {Routes,Route} from "react-router-dom"
import PrivateRoute2 from "./PrivateRoute2"
import Login from "../Pages/Login Pages/Login"
import SellCategories from "../Pages/Selling Pages/SellCategories"
import SellingForm from "../Pages/Selling Pages/SellingForm";
import Home from "../Pages/Home/Home";

const AllRoutes = () => {
  

  return (
  <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/sellcategories" element={<PrivateRoute2><SellCategories/></PrivateRoute2>}></Route>
      <Route path="/sellingform" element={<SellingForm  />}></Route>
      
    </Routes>
  </div>
  )
};

export default AllRoutes;