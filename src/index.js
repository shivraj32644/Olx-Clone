import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import { ParamContextProvider } from "./Context/CarParamContext";
import { BooksParamContextProvider } from "./Context/BooksParamContext";
import { MobileContextProvider } from "./Context/MobileParamContext";
import ContextModalProvider from "./Context_V.jsx/ContextModal";
import CategoryDataContextProvider from "./Context/AuthContext/SellingDetail";
import AuthContextProvider from "./Context/AuthContext/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <ParamContextProvider>
          <BooksParamContextProvider>
            <MobileContextProvider>
              <ContextModalProvider>
                <CategoryDataContextProvider>
                  <AuthContextProvider>
                    <App />
                  </AuthContextProvider>
                </CategoryDataContextProvider>
              </ContextModalProvider>
            </MobileContextProvider>
          </BooksParamContextProvider>
        </ParamContextProvider>
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
