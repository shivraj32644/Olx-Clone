import { createContext, useState } from "react";
import DummyLogin from "../Pages/DummyLogin";
import LoginEmail from "../Pages/Login_Email";
import LoginPass from "../Pages/Login_Pass";



const Page1 = <DummyLogin/>
const Page2 = <LoginEmail />
const Page3 = <LoginPass />

const pages = {
    Page_1: Page1,
    Page_2: Page2,
    Page_3: Page3
}
// console.log(pages.Page_1)

export const ContextModal = createContext();

const ContextModalProvider = ({children}) => {
    const [currPage, setCurrPage] = useState(pages.Page_1);

    return (
        <ContextModal.Provider value={{pages,currPage,setCurrPage}}>
            {children}
        </ContextModal.Provider>

    )
}
export default ContextModalProvider