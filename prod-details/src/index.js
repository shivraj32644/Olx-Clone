import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom"
import ContextModalProvider from './Component/ContextModal';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import ProductDetails from './Component/ProdDetails';
import GenOtp from './Pages/SigninPages/GenOtp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   
        <ChakraProvider>
             <BrowserRouter>
            <ContextModalProvider>
                <App />
                <ProductDetails/>
                <GenOtp/>
            </ContextModalProvider>
            </BrowserRouter>
        </ChakraProvider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
