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

import { OnError, OnLoading, OnSuccess } from "../Redux/UserProfile/Action";
import ProductDetails from "../Component/ProdDetails";
import SellCategories from "../Pages/Selling Pages/SellCategories";
import SellingForm from "../Pages/Selling Pages/SellingForm";
import { LoginPage } from "../Component/Login";

import DummyLogin from "../Pages/SigninPages/DummyLogin";
import LoginEmail from "../Pages/SigninPages/Login_Email";
import LoginMobile from "../Pages/SigninPages/LoginMoblie";
import UserName from "../Pages/SigninPages/Login_Pass";
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes = () => {
  let userState = useSelector((user) => user.MyAddReducer);
  let Dispatcher = useDispatch();

  let curId =Number(localStorage.getItem("currentUserId"));
  

  console.log(userState);
  // forGetingDataFun
  const getUser = () => {
    let id = curId;
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





/*




*/






















  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>

        <Route path="/" element={ <DummyLogin/>  }></Route>
          <Route path="/contwithphone" element={<LoginMobile />}></Route>
          <Route path="/contwithemail" element={<LoginEmail />}></Route>
          {/* <Route path="/contwithname" element={<UserName />}></Route> */}


        </Route>
        <Route path="/cars" element={<ProducPage />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/mobile" element={<Mobile />}></Route>

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
        <Route
          path="/productDetails/:product_id"
          element={<ProductDetails />}
        ></Route>
        <Route path="/post" element={ <PrivateRoute><SellCategories /></PrivateRoute> }></Route>
        <Route path="/post/attribute" element={<PrivateRoute><SellingForm /></PrivateRoute>}></Route>

        {/* <Route path="/new" element={<Home />}></Route> */}

        {/* <Route path="/" element={<LoginPage />}>
          
          <Route path="/" element={<DummyLogin />}></Route>
          <Route path="/contwithphone" element={<LoginMobile />}></Route>
          <Route path="/contwithemail" element={<LoginEmail />}></Route>


        </Route> */}
      </Routes>
    </div>
  );
};
