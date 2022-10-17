import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./data_redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ParamContextProvider } from "./Context/CarParamContext";
import { MobileContextProvider } from "./Context/MobileParamContext";
// import { ParamsContextProvider } from "./Context/Params";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <ParamContextProvider>
          <MobileContextProvider>
            <App />
            </MobileContextProvider>
        </ParamContextProvider>
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
