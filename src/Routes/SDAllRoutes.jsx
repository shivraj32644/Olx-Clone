import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProducPage } from '../Pages/ProducPage'
import { Books } from '../Pages/Books'
import { Mobile } from '../Pages/Mobile'
import { ProductDetails } from '../Pages/ProductDetails'


export const AllRoutes = () => {
  return (
      <div>
      <Routes>
        <Route path='/' element={<ProducPage/>} ></Route>
        <Route path='/books' element={<Books/>} ></Route>
        <Route path='/mobile' element={<Mobile/>} ></Route>
        <Route path='/' element={<ProducPage/>} ></Route>
           <Route path='/productDetails/:product_id' element={<ProductDetails/>} ></Route> 
          </Routes>
    </div>
  )
}


