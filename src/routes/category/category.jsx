import "./category.scss"
import React, { Fragment } from 'react'
import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { CategoriesContext } from "../../contexts/Categories"
import ProductCard from "../../components/product-card/ProductCard"


const Category = () => {
    const {category} = useParams(); 
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[categoriesMap,category])
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
    <div className="category-container">
        {
       products &&  products.map((product)=> <ProductCard key={product.id} product={product}/>)
        }</div>
    </Fragment>
  )
}

export default Category