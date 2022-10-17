import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProducPage } from "../Pages/ProducPage";
// import { Books } from "../Pages/Books";
// import { Mobile } from "../Pages/Mobile";
// import { ProductDetails } from "../Pages/ProductDetails";
import Home from "../Components/LandingPage/Home";
import { Books } from "../Pages/Books";
import { Mobile } from "../Pages/Mobile";
import FavPage from "../Component/User/pages/FavPage";
import MyAds from "../Component/User/pages/MyAds";
import MyFav from "../Component/User/pages/MyFav";
import EditProfile from "../Component/User/EditProfile";
import NewProfilePicForm from "../Component/User/newPicFrom";
import Profile from "../Component/User/pages/Profile";
import { useSelector, useDispatch } from "react-redux";

import {
  OnError,
  OnLoading,
  OnSuccess,
} from "../Redux/UserProfile/Action";
import ProductDetails from "../Component/ProdDetails";
import SellCategories from "../Pages/Selling Pages/SellCategories";
import SellingForm from "../Pages/Selling Pages/SellingForm";


export const AllRoutes = () => {

  let userState = useSelector((user) => user.MyAddReducer);
  let Dispatcher = useDispatch();


  console.log(userState)
  // forGetingDataFun
  const getUser = () => {
    let id = "1";
    Dispatcher(OnLoading());
    fetch(`http://localhost:5000/data/${id}`)
      .then((res) => {
        res
          .json()
          .then((result) => {
            Dispatcher(OnSuccess(result));
            // console.log(result);
          })
          .catch((e) => {
            Dispatcher(OnError());
          });
      })
      .catch((e) => {
        Dispatcher(OnError());
      });
  };







  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path ='/cars' element={<ProducPage/>}></Route>
        <Route path ='/books' element={<Books/>}></Route>
        <Route path='/mobile' element={<Mobile />}></Route>
        
        <Route path="/yourads" element={<FavPage />}></Route>

      <Route element={<FavPage />}>
        <Route
          path="/myads"
          element={<MyAds userData={userState} getUser={getUser} />}
        ></Route>
        <Route
          path="/myfavorites"
          element={<MyFav userData={userState} getUser={getUser} />}
        ></Route>
      </Route>
      {/* editProfile this will be updated */}
      <Route
        path="/editProfile"
        element={<EditProfile userData={userState} getUser={getUser} />}
      ></Route>
      <Route
        path="/editProfile/picture"
        element={<NewProfilePicForm userData={userState} getUser={getUser} />}
      ></Route>
      <Route
        path="/profile"
        element={<Profile userData={userState} getUser={getUser} />}
      ></Route>
     <Route path='/productDetails/:product_id' element={<ProductDetails/>} ></Route>  
      <Route path="/post" element={<SellCategories/>}></Route>
        <Route path ='/post/attribute' element={<SellingForm/>}></Route>
        {/* <Route path='/books' element={<Books/>} ></Route>
        <Route path='/mobile' element={<Mobile/>} ></Route>
        <Route path='/' element={<ProducPage/>} ></Route>
  {/* <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/sellcategories" element={<PrivateRoute2><SellCategories/></PrivateRoute2>}></Route>
      <Route path="/sellingform" element={<SellingForm  />}></Route>
       */}
        

        {/* <Route path="/"
        element={<LoginPage />} >
      </Route>
      <Route path="/homepage" element={<ProductDetails/>}></Route>
      <Route path="/loginemail" element={<LoginEmail /> }>

      </Route> */}



      </Routes>
    </div>
  );
};
