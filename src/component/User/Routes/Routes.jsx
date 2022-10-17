import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile"
import EditProfile from "../EditProfile";
import { useSelector, useDispatch } from "react-redux";
import { OnError, OnLoading, OnSuccess } from "../../../Redux/UserProfile/Action"
import ProfilePicForm from "../ProfilePicForm";
import NewProfilePicForm from "../newPicFrom";

import MyAds from "../pages/MyAds";
import MyFav from "../pages/MyFav";
import FavPage from "../pages/FavPage";
function  AllRoutes(){
  let userState = useSelector((user) => user);
  let Dispatcher = useDispatch();




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





   return(
    
    <Routes>

   
   <Route path='/yourads'  element={<FavPage/>}></Route>

   <Route  element={<FavPage/>}>
    <Route path='/myads' element={<MyAds userData={userState}  getUser={getUser}/>}></Route>
    <Route path="/myfavorites" element={<MyFav  userData={userState}  getUser={getUser} />}></Route>
   </Route>
   {/* editProfile this will be updated */ }
<Route path="/editProfile" element={<EditProfile userData={userState}  getUser={getUser}/>}></Route>
<Route path="/editProfile/picture" element={<NewProfilePicForm userData={userState}  getUser={getUser}/>}></Route>
<Route path="/profile" element={<Profile userData={userState}  getUser={getUser}/>}></Route>
    {/* 
  path - on which path you want to show
  element - what do you want to show
*/}
    {/* <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/users" element={<Users />}></Route>
    <Route path="/users/:user_id" element={<UserDetails />}></Route>
    <Route path="*" element={<NotFound />}></Route> */}
    {/* 
        /users/something
    */}
     {/* <Route path="*" element={<h1>not foud</h1>}></Route> */}
  </Routes>



   )



}

export default AllRoutes;