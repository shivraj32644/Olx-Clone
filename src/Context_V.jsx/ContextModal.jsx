import { createContext, useState } from "react";

export const ContextModal = createContext();
// export const ContextModal = createContext();

const ContextModalProvider = ({ children }) => {
    // const [currPage, setCurrPage] = useState(pages.Page_1);
    const [isAuth, setIsAuth] = useState(true);

    const handleLogin = () => {
        setIsAuth(true);
    };


    return (
        <ContextModal.Provider value={{ isAuth, handleLogin }}>
            {children}
        </ContextModal.Provider>

    )
}
export default ContextModalProvider