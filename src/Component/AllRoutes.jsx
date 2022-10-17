import { Route, Routes } from "react-router-dom"
import LoginEmail from "../Pages/SigninPages/Login_Email"
// import LoginPass from "../Pages/SigninPages/Login_Pass"
import { LoginPage } from "./Login"
import ProductDetails from "./ProdDetails"




const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/"
        element={<LoginPage />} >
      </Route>
      <Route path="/homepage" element={<ProductDetails/>}></Route>
      <Route path="/loginemail" element={<LoginEmail /> }>

      </Route>
      {/* <Route path="/loginemailpassword" element={ <LoginPass/>}></Route> */}
    </Routes>
  )
}

export default AllRoutes