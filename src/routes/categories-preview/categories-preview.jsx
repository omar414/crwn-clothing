import React, { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user";
import { CategoriesContext } from "../../contexts/Categories";
// import ProductCard from "../../components/product-card/ProductCard";
import CategoryPreview from "../../components/categories-preview/category-preview";
import "./categories-preview.scss";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="categories-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        // <Fragment key={title}>
        //   <h2>{title}</h2>
        //   <div className="products-container">
        //     {categoriesMap[title].map((product) => (
        //       <ProductCard key={product.id} product={product} />
        //     ))}
        //   </div>
        // </Fragment>
        const products = categoriesMap[title];
        return (<CategoryPreview key={title} title={title} products={products}/>)
      })}
    </div>
  );
};

export default CategoriesPreview;