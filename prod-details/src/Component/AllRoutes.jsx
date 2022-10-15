import { Route, Routes } from "react-router-dom"
import LoginEmail from "../Pages/Login_Email"
import LoginPass from "../Pages/Login_Pass"
import {LoginPage} from "./Login"

  
  
  const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/"
            element={<LoginPage/>} >

            </Route>
            <Route path="/loginemail"element={<LoginEmail/>
     }></Route>
            <Route path="/loginemailpassword" element={ <LoginPass/>}></Route>
        </Routes>
    )
  }

  export default AllRoutes