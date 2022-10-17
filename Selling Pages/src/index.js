import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthContextProvider from "./Context/AuthContext/AuthContextProvider";
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import CategoryDataContextProvider from "./Context/AuthContext/SellingDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider>
    <CategoryDataContextProvider>
     <AuthContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
     </AuthContextProvider>
     </CategoryDataContextProvider>
    </ChakraProvider>

);