import { createContext, useState } from "react";
import DummyLogin from "../Pages/SigninPages/DummyLogin";
import LoginMobile from "../Pages/SigninPages/LoginMoblie";
import LoginEmail from "../Pages/SigninPages/Login_Email";
import LoginPass from "../Pages/SigninPages/Login_Pass";



const Page1 = <DummyLogin />
const Page2 = <LoginEmail />
const Page3 = <LoginPass />
const Page4 = <LoginMobile />

const pages = {
    Page_1: Page1,
    Page_2: Page2,
    Page_3: Page3,
    Page_4: Page4
}
// console.log(pages.Page_1)
export const AuthContext = createContext();
export const ContextModal = createContext();

const ContextModalProvider = ({ children }) => {
    const [currPage, setCurrPage] = useState(pages.Page_1);
    const [isAuth, setIsAuth] = useState(false);

    const handleLogin = () => {
        setIsAuth(true);
    };


    return (
        <ContextModal.Provider value={{ pages, currPage, setCurrPage, isAuth, handleLogin }}>
            {children}
        </ContextModal.Provider>

    )
}
export default ContextModalProvider