import {Fragment, React, useContext} from "react";
import { CategoriesContext } from "../contexts/categories-context";
import ProductCard from "../product-card/product-card-component"
import { Link } from "react-router-dom";
import { PreviewContainer, CategoryPreviewContainer, Title } from "./category-preview-component.styles";

const CategoryPreview = ({title, products})=>{
    
    return(
        <CategoryPreviewContainer>
            <h2>
            <Title to={`${title}`}>{title}</Title>
            </h2>
            <PreviewContainer>
                {products.slice(0,4).map((product)=>{
                    return (
                        <ProductCard product={product} key={product.id}/>
                    )
                })}
            </PreviewContainer>  
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview