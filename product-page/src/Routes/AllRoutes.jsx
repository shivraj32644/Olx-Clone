import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProducPage } from '../Components/ProducPage'
import { ProductDetails } from '../Pages/ProductDetails'


export const AllRoutes = () => {
  return (
      <div>
      <Routes>
        <Route path='/' element={<ProducPage/>} ></Route>
           <Route path='/productDetails/:product_id' element={<ProductDetails/>} ></Route> 
          </Routes>
    </div>
  )
}


