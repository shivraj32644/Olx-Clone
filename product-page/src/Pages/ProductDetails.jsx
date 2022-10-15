import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {
    const {product_id} = useParams();
    const id = Number(product_id)
  return (
    <div>{id}</div>
  )
}
