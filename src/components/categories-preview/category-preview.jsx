import React from 'react'
import './category-preview.style.scss'
import ProductCard from '../product-card/ProductCard'
import { redirect, Route, Routes } from 'react-router-dom'
import Category from '../../routes/category/category'
import { Link } from 'react-router-dom'
const CategoryPreview = ({title, products}) => {
  return (
    <div className='category-preview'>
        <h2>
            <Link className='title' to={title} >{title.toUpperCase()}</Link>  
        </h2>
        {/* to display only 4 cards there is a library for this but here its hard coded  */}
        <div className='preview'>
            {
                products.filter((_,idx)=>idx<4).map((product)=>(<ProductCard key={product.id} product={product}/>))
            }
        </div>
    </div>
  )
}

export default CategoryPreview