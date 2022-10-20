import React from "react"

export const AuthContext =React.createContext()

const AuthContextProvider = ({children}) => {
  const isLogin = localStorage.getItem("isLogin");
  const [isAuth, setIsAuth] = React.useState(isLogin)


  function toggleAuth() {
    setIsAuth(!isAuth);
  }


  return (
  <AuthContext.Provider value={{isAuth,toggleAuth}}>
    {children}
  </AuthContext.Provider>
  )
};

export default AuthContextProvider;