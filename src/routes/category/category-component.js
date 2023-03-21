import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card-component"
import { fetchProductsByCategory } from "../../utils/back-end.utils";
import { CategoryContainer, CategoryTitle } from "./category-component.styles";
const Category = ()=>{

    const {category} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetchProductsByCategory(category).then(data=>setProducts(data))
    },[category])

    return (
        <div>
            <CategoryTitle>
                <span className="title">{category}</span>
            </CategoryTitle>
            <CategoryContainer>
            {products && products.map((product)=>{
                return (
                    <ProductCard product={product} key={product.id}/>
                )
            })}
            </CategoryContainer>
        </div>
    )
}

export default Category