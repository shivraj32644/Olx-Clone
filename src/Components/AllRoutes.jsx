import React from "react";
import {Routes,Route} from "react-router-dom"
import PrivateRoute2 from "./PrivateRoute2"
import Login from "../Pages/Login Pages/Login"
import SellCategories from "../Pages/Selling Pages/SellCategories"

const AllRoutes = () => {
  return (
  <div>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/sellcategories" element={<PrivateRoute2><SellCategories/></PrivateRoute2>}></Route>
    </Routes>
  </div>
  )
};

export default AllRoutes;