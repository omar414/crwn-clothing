import React from 'react'
import CategoryItem from '../category-item/category-item.components'
import './directory.styles.scss'
const Directory = ({categories}) => {
  return (
    <div className="dirctory-container">
    {categories.map((category)=>(

      <CategoryItem key={category.id} category={category}/>
    ))}
  </div>
  )
}

export default Directory