import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user'
import { ProductsContext } from '../../contexts/product'
import ProductCard from '../../components/product-card/ProductCard'
import './shop.scss'
const Shop = () => {
    const {products}= useContext(ProductsContext)
  return (
    <div className='products-container'>{products.map((product) => (
        <ProductCard key={product.id} product={product}/>
    ))}</div>
  )
}

export default Shop